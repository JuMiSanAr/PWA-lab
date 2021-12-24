/**
 * Copyright 2020 Camptocamp SA (http://www.camptocamp.com)
 * @author Simone Orsi <simahawk@gmail.com>
 * License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl.html).
 */

import {translation_registry} from "/shopfloor_mobile_base/static/wms/src/services/translation_registry.js";

Vue.component("cart-list", {
    props: {
        records: Object,
        toProducts: Object
    },
    template: `
        <v-card
            class="mx-auto"
        >
        <v-btn
            tile
            color="secondary"
            v-on:click="toProducts"
            width="100%"
            class="shop-button-redirect"
        >
            <v-icon>mdi-arrow-left</v-icon>
            <div class="add-another-product">{{$t("screen.cart.add_another_product")}}</div>
        </v-btn>
        <v-card v-for="(record, index) in records" tile data-ref="item-in-cart" :data-id="record.product.id">
                    <v-card-title >
                        {{record.product.name}}
                    </v-card-title>
                    <v-card-text class="order-card-item">
                        Unit Price: {{record.product.price.default.value.toFixed(2)}}
                    </v-card-text>
                    <v-card-text class="order-card-item">
                        {{record.packaging_qty}} x {{record.packaging.name}} ({{record.packaging.qty}} kg)
                    </v-card-text>
                    <v-card-text v-if="record.comment" class="order-card-item" data-ref="item-remark">
                        Remark: {{record.comment}}
                    </v-card-text>
                    <v-cart-actions class="cart-edit-line">
                        <v-card-text style="font-weight: bold;">
                            CHF {{record.amount.toFixed(2)}}
                        </v-card-text>
                        <v-btn color="primary" class="add-to-cart-button" min-width="120px" v-on:click="show_popup(record.product.id)">
                            <v-icon>
                                mdi-circle-edit-outline
                            </v-icon>
                        </v-btn>
                    </v-cart-actions>
                    <product_popup 
                        v-if="updating_cart_item_id === record.product.id"
                        :record="record.product"
                        :show_popup="show_popup"
                    />
        </v-card>
    </v-card>
    `,
    data: function () {
        return {
            updating_cart_item_id: 0,
        };
    },
    methods: {
        //TODO: refactor show_popup (it's repeated in products.js)
        show_popup: function (product_id) {
            if (this.updating_cart_item_id === product_id) {
                this.updating_cart_item_id = 0
            } else {
                this.updating_cart_item_id = product_id
            }           
        },
    },
});

translation_registry.add(
    "en-US.screen.cart.add_another_product",
    "Add another product"
);
translation_registry.add(
    "fr-FR.screen.cart.add_another_product",
    "Ajouter un nouveau produit"
);
translation_registry.add(
    "de-DE.screen.cart.add_another_product",
    "Neues Produkt hinzufügen"
);
