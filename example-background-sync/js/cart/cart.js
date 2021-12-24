/**
 * Copyright 2021 Camptocamp SA (http://www.camptocamp.com)
 * @author Simone Orsi <simone.orsi@camptocamp.com>
 * License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl.html).
 */

import store from "/shopfloor_mobile_base/static/wms/src/store/index.js";

import CartModule from "../store/modules/cart_store.js";
import {translation_registry} from "/shopfloor_mobile_base/static/wms/src/services/translation_registry.js";

const cart_module = new CartModule();
store.registerModule("cart_module", cart_module);

import {process_registry} from "/shopfloor_mobile_base/static/wms/src/services/process_registry.js";

const Cart = {
    template: `
        <Screen :screen_info="screen_info">
            <div v-if="checkout_success && has_cart" class="on-checkout">
                <h3>Checkout successful!</h3>
                <p>The items below remained in the cart as they are currently unavailable:</p>
            </div>
            <div v-if="checkout_success && !has_cart" class="on-checkout">
                <h3>Checkout successful!</h3>
                <div>
                    <btn-action color="primary" v-on:click="to_orders">ORDERS</btn-action>
                </div>
            </div>
            <v-card v-if="has_cart && !showing_popup" class="mx-auto">
                <cart-list
                    :records="cart.lines.items"
                    :toProducts="to_products"
                    :key="make_component_key(['cart-list'])"
                />
                <v-card color="secondary">
                    <v-card-title class="total-cart">{{$t("screen.cart.total_in_cart")}}: CHF {{ cart.amount.total.toFixed(2) }}</v-card-title>
                </v-card>
                <v-card color="primary">
                    <v-card-title v-on:click="show_popup" v-if="!showing_popup" class="to-checkout" data-ref="checkout-button">{{$t("screen.cart.checkout")}}</v-card-title>
                </v-card>
            </v-card>
            <checkout-popup
                v-if="showing_popup"
                :show_popup="show_popup"
                :checkout="checkout"
            />
            <div class="empty-cart" v-if="!has_cart && !checkout_success && !checkout_failure">
                <h3>The cart is empty</h3>
                <div>
                    <btn-action color="primary" v-on:click="to_products">NEW PURCHASE</btn-action>
                </div>
            </div>
            <h3 v-if="checkout_failure">Something went wrong with checkout...</h3>
        </Screen>
    `,
    data: function () {
        return {
            has_cart: false,
            checkout_success: false,
            checkout_failure: false,
            showing_popup: false
        };
    },
    mounted() {
        this.initialize_cart();
    },
    updated() {
        const cart_lines = this.$store.state.cart_module.cart.lines;
        if (_.isEmpty(cart_lines.items)) {
            this.has_cart = false;
        }
    },
    methods: {
        initialize_cart: function () {
            // TODO: if we want the cart to persist between sessions, should it go to localStorage?
            const cart = this.utils.cart.get_cart();

            if (cart) {
                this.$store.commit("cart_loadCart", cart);
                this.has_cart = true;
            }
        },
        to_products: function () {
            this.$router.push({name: "products"});
        },
        to_orders: function () {
            this.$router.push({name: "orders"});
        },
        checkout: function (remark_input, delivery_date, selected_timeslot) {
            const odoo_params = {
                base_url: this.$root.app_info.shop_api_route,
                usage: "checkout",
            };
            this.odoo = this.$root.getOdoo(odoo_params);
            
            const cart_items = this.cart.lines.items
            const lines = cart_items.map(item => {
                return {
                    product_id: item.product.id,
                    packaging_qty: item.packaging_qty,
                    packaging_id: item.packaging.id,
                }
            })
            this.odoo.call("submit", {
                lines,
                shipping_timeslot: selected_timeslot,
                order_note: remark_input,
                shipping_date: delivery_date
            }).then(result => {
                if (result.new_cart) {
                    const new_items = result.new_cart.lines.map(line => {
                        const new_item = cart_items.find(item => item.product.id === line.product_id)
                        new_item.comment = ""
                        new_item.packaging_qty = line.packaging_qty
                        new_item.amount = new_item.packaging_qty * new_item.packaging.qty * new_item.product.price.default.value
                        return new_item
                    })
                    this.$store.commit("cart_initCart", new_items)
                } else {
                    this.$store.commit("cart_initCart")
                    this.has_cart = false;
                }
                this.checkout_success = true;
            })

            this.show_popup()
        },
        show_popup() {
            this.showing_popup = !this.showing_popup
        }
    },
    computed: {
        cart: function () {
            return this.$store.state.cart_module.cart;
        },
        screen_info: function () {
            return {
                title: this.screen_title,
                klass: "shop cart",
            };
        },
        screen_title: function () {
            return this.$t("screen.cart.title");
        },
    },
};

process_registry.add(
    "cart",
    Cart,
    {
        path: "/cart",
    },
    {
        menu: {
            _type: "all",
            name: "Cart",
            id: "cart",
            to: {
                name: "cart",
            },
        },
    }
);

translation_registry.add("en-US.screen.cart.title", "Cart");
translation_registry.add("fr-FR.screen.cart.title", "Panier");
translation_registry.add("de-DE.screen.cart.title", "Warenkorb");

translation_registry.add("en-US.screen.cart.total_in_cart", "Total in cart");
translation_registry.add("fr-FR.screen.cart.total_in_cart", "Total dans le panier");
translation_registry.add("de-DE.screen.cart.total_in_cart", "Gesamt im Warenkorb");

translation_registry.add("en-US.screen.cart.checkout", "CHECKOUT");
translation_registry.add("fr-FR.screen.cart.checkout", "COMMANDER");
translation_registry.add("de-DE.screen.cart.checkout", "BESTELLEN");

export default Cart;
