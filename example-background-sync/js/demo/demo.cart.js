import {demotools} from "/shopfloor_mobile_base/static/wms/src/demo/demo.core.js";

const makeCartLine = function (product, qty, defaults) {    
    const line = _.defaults(defaults, {
        "id": demotools.getRandomInt(),
        "amount": {
            "price": product.price.default.value,
            //FIXME: Get real values
            "untaxed": demotools.getRandomInt(),
            "tax": demotools.getRandomInt(),
            "total": demotools.getRandomInt(),
            "total_without_discount": demotools.getRandomInt(),
        },
        "qty": qty,
        "discount": {"rate": demotools.getRandomInt(), "value": demotools.getRandomInt()},
    });
    return line
}

const DEMO_CART = {
    add_order: function (data) {
        //TODO: This is wrong, needs to be updated by the logic to submit a cart
        const line = cart_init.lines.items.filter(item => item.product.id === data.product_id)
        if (!line) {
            const product = demotools.get_indexed(data.product_id)
            line = makeCartLine(product, data.item_qty)      
            cart_init.lines.items.push(line)                                                                   
        } else {
            line.qty = data.item_qty
            line.amount.total = line.qty * line.amount.price
        }
        return cart_init
    }
};

demotools.add_case("cart", DEMO_CART);