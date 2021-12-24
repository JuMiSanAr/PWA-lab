/**
 * Copyright 2021 Camptocamp SA (http://www.camptocamp.com)
 * License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl.html).
 */
import {utils_registry} from "/shopfloor_mobile_base/static/wms/src/services/utils_registry.js";

export class ShopUtils {
    display_kg (qty) {
        return `${this.convert_to_kg(qty)} kg`
    }

    convert_to_kg (qty) {
        return qty / 1000
    }
}

utils_registry.add("shop", new ShopUtils());
