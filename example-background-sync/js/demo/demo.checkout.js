import { demotools } from "/shopfloor_mobile_base/static/wms/src/demo/demo.core.js";
import { utils_registry } from "/shopfloor_mobile_base/static/wms/src/services/utils_registry.js";

const DEMO_CHECKOUT = {
    submit: function (data) {
        // TODO: loop through the different items that are not available.
        // At this point we pick one with id 45 for testing.
        const split_cart = data.lines.find(line => line.product_id === 45)
        const order_id = demotools.getRandomInt()
        if (split_cart) {
            const split_item = JSON.parse(window.sessionStorage.getItem("shopfloor_cart")).value.lines.items.find(item => item.product.id === split_cart.product_id)
            const lines = [
                {
                    product_id: split_item.product.id,
                    // NOTE: packaging_qty simulates that only 1 packaging unit is unavailable
                    packaging_qty: 1,
                    packaging_id: split_item.packaging.id
                }
            ]
            return {
                "status": "ok",
                "new_cart": {
                    lines
                },
                "order": {
                    "id": order_id
                }
            }
        } else {
            return {
                "status": "ok",
                "order":{
                    "id": order_id
                }
            }
        } 
    }
};

demotools.add_case("checkout", DEMO_CHECKOUT);

