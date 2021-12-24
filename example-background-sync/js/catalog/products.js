/**
 * Copyright 2021 Camptocamp SA (http://www.camptocamp.com)
 * @author Simone Orsi <simone.orsi@camptocamp.com>
 * License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl.html).
 */

import {process_registry} from "/shopfloor_mobile_base/static/wms/src/services/process_registry.js";
import {translation_registry} from "/shopfloor_mobile_base/static/wms/src/services/translation_registry.js";
import ProductModule from "../store/modules/product_store.js";
import store from "/shopfloor_mobile_base/static/wms/src/store/index.js";

const products_module = new ProductModule();
store.registerModule("products_module", products_module);

// TODO: add pagination for products (currently showing only 1 page of 10 items by default)
// TODO: add images to detail and list

const Products = {
    template: `
        <Screen :screen_info="screen_info">
            <searchbar
                v-on:found="on_search"
                :input_placeholder="$t('screen.products.search')"
            />
            <span v-if="filter_text">Searching for "{{filter_text}}"</span>
            <v-btn
                color="secondary"
                class="remove-filter"
                v-if="filter_text"
                v-on:click="remove_filter"
            >
                {{$t('screen.products.remove_filter')}}
            </v-btn>
            <v-container fluid v-if="products && _.isEmpty(current_product)">
                <v-row dense>
                    <v-col
                        v-for="record in show_products()"
                        :key="record.id"
                        :cols="12"
                        :sm="6"
                    >
                        <v-card style="margin-bottom:10px" :data-id="record.id" >
                            <v-img
                                class="white--text align-end"
                                height="200px"
                                :src="get_product_image(record)"
                                @click="view_product(record)"
                            />
                                <v-card-title>{{ record.name }}</v-card-title>
                            </v-img>
                            <div class="product-card-bottom">
                                <v-card-subtitle class="product-price">CHF <span> {{record.price.default.value.toFixed(2)}}</span> </v-card-subtitle>
                                <v-card-actions>                                
                                  <v-btn color="primary" v-if="get_product_qty(record) === 0" min-width="120px" style="margin:0px 0px 8px 8px" v-on:click="show_popup(record.id)" data-ref="add-to-cart">
                                      {{$t("screen.products.add_to_cart")}}
                                  </v-btn>
                                  <v-btn color="primary" v-if="get_product_qty(record) > 0" class="add-to-cart-button" min-width="120px" v-on:click="show_popup(record.id)">
                                    {{get_product_qty(record)}} kg
                                    <v-icon>
                                      mdi-circle-edit-outline
                                    </v-icon>
                                  </v-btn>
                                </v-card-actions>
                            </div>
                            <product_popup 
                                v-if="adding_to_cart_id === record.id"
                                :record="record"
                                :show_popup="show_popup"
                            />
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>

            <v-btn
                color="secondary"
                v-on:click="to_catalog"
                class="shop-button-redirect"
                width="100%"
                v-if="!_.isEmpty(current_product)"
            >
                <v-icon>mdi-arrow-left</v-icon>
                <div class="add-another-product">{{$t("screen.products.back_to_catalog")}}</div>
            </v-btn>
            <v-card
                class="mx-auto"
                v-if="!_.isEmpty(current_product)"
            >
              <v-img
                  height="400px"
                  class="white--text align-end"
                  :src="get_product_image(current_product)"
              />
              </v-img>
              <v-card-title>{{current_product.name}}</v-card-title>
              <v-card-text class="text--primary">
                  <div>{{current_product.meta_description || description_lipsum}}</div>
              </v-card-text>
              <v-card-subtitle class="product-price">CHF <span> {{current_product.price.default.value.toFixed(2)}}</span> </v-card-subtitle>
              <v-card-actions>                                
                <v-btn color="primary" v-if="get_product_qty(current_product) === 0" min-width="120px" style="margin:0px 0px 8px 8px" v-on:click="show_popup(current_product.id)">
                    {{$t("screen.products.add_to_cart")}}
                </v-btn>
                <v-btn color="primary" v-if="get_product_qty(current_product) > 0" class="add-to-cart-button" min-width="120px" v-on:click="show_popup(current_product.id)">
                  {{get_product_qty(current_product)}} kg
                  <v-icon>
                    mdi-circle-edit-outline
                  </v-icon>
                </v-btn>
              </v-card-actions>
              <product_popup 
                v-if="adding_to_cart_id === current_product.id"
                :record="current_product"
                :show_popup="show_popup"
              />
            </v-card>
        </Screen>
    `,
    data: function () {
        return {
            current_product: {},
            has_filter: false,
            filter_text: "",
            filtered_products: [],
            adding_to_cart_id: 0,
            // TODO: Delete once the backend provides a product description.
            description_lipsum:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        };
    },
    mounted() {
        const cart = this.utils.cart.get_cart();
        if (cart) {
            this.$store.commit("cart_loadCart", cart);
        }
        if (_.isEmpty(this.products)) {
            const odoo_params = {
                base_url: this.$root.app_info.shop_api_route,
                usage: "products",
            };
            this.odoo = this.$root.getOdoo(odoo_params);
            this._fetch(this.$route.params.identifier);
        }
    },
    beforeRouteUpdate(to, from, next) {
        if (to.params.identifier) {
            this._load_product(to.params.identifier);
        }
        next();
    },
    methods: {
        to_catalog: function () {
            this.current_product = {};
            this.$router.push({name: "products", params: {identifier: undefined}});
        },
        // TODO: fetch should be done from the sync service.
        // We should pick product from the local storage instead.
        _fetch: function (identifier) {
            // FIXME: this limit should be removed when we'll use a pre-sync on login
            const params = {per_page: 50};
            const self = this;
            this.odoo.get("search", params).then((result) => {
                self.$store.commit("products_loadProducts", result.data);
                if (identifier) {
                    self._load_product(identifier);
                }
            });
        },
        _load_product: function (identifier) {
            const product = _.find(this.products, ["sku", identifier]);
            this.$set(this, "current_product", product);
        },
        view_product: function (product) {
            this.$router.push({name: "products", params: {identifier: product.sku}});
        },
        show_products: function () {
            if (this.has_filter) {
                return this.filtered_products;
            } else {
                return this.products;
            }
        },
        on_search: function (input) {
            if (_.isEmpty(input.text)) {
                this.remove_filter();
            } else {
                this.has_filter = true;
                this.filter_text = input.text;
                this.filtered_products = this.products.filter((product) => {
                    return product.name
                        .toLowerCase()
                        .includes(input.text.toLowerCase());
                });
            }
        },
        remove_filter: function () {
            this.has_filter = false;
            this.filter_text = "";
            this.filtered_products = [];
        },
        show_popup: function (product_id) {
            if (this.adding_to_cart_id === product_id) {
                this.adding_to_cart_id = 0
            } else {
                this.adding_to_cart_id = product_id
            }           
        },
        get_product_qty: function (record) {
          const cart = this.$store.state.cart_module.cart;
          if (_.isEmpty(cart)) {
            return 0
          }
          const item_in_cart = cart.lines.items.find(item => item.product.id === record.id)
          if (item_in_cart) {
            return item_in_cart.packaging.qty * item_in_cart.packaging_qty
          }
          return 0
        },
        get_image_placeholder: function (){
            return "https://via.placeholder.com/400"
        },
        get_product_image: function (record){
            return _.result(record, "images", []).length ? record.images[0].large.src : this.get_image_placeholder()
        }
    },
    computed: {
        products: function () {
            return this.$store.state.products_module.products;
        },
        screen_info: function () {
            return {
                title: this.screen_title,
                klass: "shop products",
                user_message: this.user_message,
            };
        },
        screen_title: function () {
            return this.$t("screen.products.title", {
                what: this.$route.params.identifier,
            });
        }
    },
};

process_registry.add(
    "products",
    Products,
    {
        path: "/products/:identifier?",
    },
    {
        menu: {
            _type: "all",
            name: "Catalog",
            id: "catalog",
            to: {
                name: "products",
                params: {},
            },
        },
    }
);

translation_registry.add("en-US.screen.products.title", "Products");
translation_registry.add("fr-FR.screen.products.title", "Produits");
translation_registry.add("de-DE.screen.products.title", "Produkte");

translation_registry.add("en-US.screen.products.add_to_cart", "ADD TO CART");
translation_registry.add("fr-FR.screen.products.add_to_cart", "AJOUTER AU PANIER");
translation_registry.add(
    "de-DE.screen.products.add_to_cart",
    "PRODUKT IN DEN WARENKORB LEGEN"
);

translation_registry.add("en-US.screen.products.back_to_catalog", "Back to catalog");
translation_registry.add("fr-FR.screen.products.back_to_catalog", "Vers le catalogue");
translation_registry.add("de-DE.screen.products.back_to_catalog", "Zurück zum Katalog");

translation_registry.add("en-US.screen.products.search", "Search");
translation_registry.add("fr-FR.screen.products.search", "Rechercher");
translation_registry.add("de-DE.screen.products.search", "Suchen");

translation_registry.add("en-US.screen.products.remove_filter", "Remove filter");
translation_registry.add("fr-FR.screen.products.remove_filter", "Supprimer le filtre");
translation_registry.add("de-DE.screen.products.remove_filter", "Filter entfernen");

export default Products;
  