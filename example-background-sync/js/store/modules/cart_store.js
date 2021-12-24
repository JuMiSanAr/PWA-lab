import { utils_registry } from "/shopfloor_mobile_base/static/wms/src/services/utils_registry.js";

export default class {
    constructor(cart = {}) {
        this.state = {
            cart: cart,
        };
        this.getters = {
            _get_cart_state_key: () => {
                return Object.keys(this.state)[0];
            },
        };
        this.mutations = {
            // NOTE: The cart mutations start with cart_
            // so that the store subscription can identify
            // which key in sessionStorage needs to be updated
            // after each store change.
            cart_loadCart: (state, cart) => {
                state.cart = cart;
            },
            cart_addItemToCart: (state, new_item) => {
                if(_.isEmpty(state.cart)) {
                    this.initCart(state)
                }
                const item_in_cart = this.findItemInCart(state, new_item);
                if (!item_in_cart) {
                    state.cart.lines.items.push(new_item);
                    state.cart.amount.total += new_item.packaging_qty * new_item.packaging.qty * new_item.product.price.default.value
                } else {
                    // TODO: recalculations for tax, discount, total_without_discount, untaxed
                    this.updateItem(state, item_in_cart, new_item)
                }
            },
            cart_initCart: (state, items) => {
                this.initCart(state, items)
            }
        };
    }
    initCart(state, items = []) {
        let cart_amount = 0
        if (!_.isEmpty(items)) {
            items.forEach(item => cart_amount += item.amount)
        }
        const lines = {
            "items": items,
            "count": 0,
            "amount": {
                "tax": 0,
                "untaxed": 0,
                "total": 0
            }
        }
        state.cart = {
            "date": new Date(),
            "client_order_ref": false,
            lines,
            "amount": {
                "tax": 0,
                "untaxed": 0,
                "total": cart_amount,
                "discount_total": 0,
                "total_without_discount": 0
            },
        }
    }
    findItemInCart(state, new_item) {
        const cart_items = state.cart.lines.items;
        const same_item_in_cart = cart_items.find(
            (item) => item.product.id === new_item.product.id
        );
        return same_item_in_cart;
    }
    updateItem(state, item_in_cart, new_item) {
        const price_difference = new_item.packaging_qty * new_item.packaging.qty * new_item.product.price.default.value - item_in_cart.amount
        state.cart.amount.total += price_difference

        if (new_item.packaging_qty < 1) {
            const cart_items = state.cart.lines.items;
            const item = cart_items.find(item => item.product.id === new_item.product.id)
            const index = cart_items.indexOf(item);
            cart_items.splice(index, 1);
        } else {            
            item_in_cart.total = new_item.product.price.default.value;
            item_in_cart.packaging_qty = new_item.packaging_qty;
            item_in_cart.packaging = new_item.packaging;
            item_in_cart.amount = new_item.amount
            item_in_cart.comment = new_item.comment
        }
    }
}
