import {process_registry} from "/shopfloor_mobile_base/static/wms/src/services/process_registry.js";
import {translation_registry} from "/shopfloor_mobile_base/static/wms/src/services/translation_registry.js";
import { utils_registry } from "/shopfloor_mobile_base/static/wms/src/services/utils_registry.js";

import store from "/shopfloor_mobile_base/static/wms/src/store/index.js";

import OrderModule from "../store/modules/order_store.js";

const orders_module = new OrderModule();
store.registerModule("orders_module", orders_module);

const Orders = {
    template: `
    <Screen :screen_info="screen_info">
        <v-row v-if="_.isEmpty(current_order)" dense>
            <p v-if="_.isEmpty(orders)">
                No confirmed order yet.
            </p>
            <v-col  
                :data-id="order.id"
                v-for="order in orders"
                :key="order.id"
                class="order-list"
                :cols="12"
                :sm="6"
            >
                <v-card                    
                    color="subtle"
                    @click="view_order(order)"                
                >
                    <v-card-title class="order-card-title">Order {{ order.name}} </v-card-title>
                    <v-card-text class="order-card-item">{{ format_date(order.date) }}</v-card-text>
                    <v-card-text class="order-card-item">Amount: CHF {{ order.amount.total }}</v-card-text>
                    <v-card-text v-if="order.order_note" class="order-card-item">Remark: {{ order.order_note }}</v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <div v-if="!_.isEmpty(current_order)">
            <v-btn
            color="secondary"
            v-on:click="to_orders"
            width="100%"
            class="shop-button-redirect"
            >
                <v-icon>mdi-arrow-left</v-icon>
                <div class="add-another-product">{{$t("screen.orders.back_to_orders")}}</div>
            </v-btn>
            <v-card
                color="subtle"
            >
                <v-card-title class="order-card-title">Order {{ current_order.name}} </v-card-title>
                <v-card-text class="order-card-item">Submitted on: {{ format_date(current_order.date) }}</v-card-text>
                <v-card-text class="order-card-item">Delivery date: {{ current_order.shipping_date }}</v-card-text>
                <v-card-text class="order-card-item">Delivery time: {{ current_order.shipping_timeslot }}</v-card-text>
                <v-card-text v-if="current_order.order_note" class="order-card-item">Remark: {{ current_order.order_note }}</v-card-text>
                <v-card-title>Products purchased:</v-card-title>
                <v-card 
                    tile
                    color="subtle" 
                    v-for="item in current_order.lines.items" 
                >   
                    <v-card-subtitle class="order-card-item-title">{{ item.product.name }}</v-card-subtitle>
                    <v-card-text class="order-card-item">Unit price: CHF {{ item.product.price.default.value.toFixed(2) }}</v-card-text>
                    <v-card-text class="order-card-item"> {{item.packaging_qty}} x {{item.packaging.name}} ({{item.packaging.qty}} kg)</v-card-text>
                    <v-card-subtitle style="font-weight:bold"> Amount: CHF {{ item.amount.total.toFixed(2) }}</v-card-subtitle>
                </v-card>
            </v-card>
        </div>
    </Screen>
    `,
    data: function () {
        return {
            current_order: {},
        };
    },
    mounted() {
        const odoo_params = {
            base_url: this.$root.app_info.shop_api_route,
            usage: "sales",
        };
        this.odoo = this.$root.getOdoo(odoo_params);
        const orders = this.$store.state.orders_module.orders;
        if(_.isEmpty(orders)) {
            this._fetch(this.$route.params.identifier);
        }
    },
    beforeRouteUpdate(to, from, next) {
        if (to.params.identifier) {
            this._load_order(to.params.identifier);
        }
        next();
    },
    methods: {
        _fetch: function (identifier) {
            const params = {};
            const self = this;
            this.odoo.get("search", params).then((result) => {
                this.$store.commit("orders_loadOrders", result.data);
                if (identifier) {
                    this._load_order(identifier);
                }
            });
        },
        format_date: function (date) {
            return utils_registry.get("display").format_date_display(date)
        },
        calculate_items: function (order) {
            return order.lines.items.reduce((acc, next) => {
                return acc + next.qty;
            }, 0);
        },
        _load_order: function (identifier) {
            const order = _.find(this.orders, ["name", identifier]);
            this.$set(this, "current_order", order);
        },
        view_order: function (order) {
            this.$router.push({name: "orders", params: {identifier: order.name}});
        },
        to_orders: function (e) {
            this.current_order = {};
            this.$router.push({name: "orders", params: {identifier: undefined}});
        },
    },
    computed: {
        orders: function () {
            return this.$store.state.orders_module.orders;
        },
        screen_info: function () {
            return {
                title: this.screen_title,
                klass: "shop orders",
            };
        },
        screen_title: function () {
            return this.$t("screen.orders.title");
        },
    },
};

translation_registry.add("en-US.screen.orders.title", "Orders");
translation_registry.add("fr-FR.screen.orders.title", "Commandes");
translation_registry.add("de-DE.screen.orders.title", "Bestellungen");

translation_registry.add("en-US.screen.orders.back_to_orders", "Back to orders");
translation_registry.add("fr-FR.screen.orders.back_to_orders", "Vers vos ordres");
translation_registry.add(
    "de-DE.screen.orders.back_to_orders",
    "Zurück zu Bestellungen"
);

process_registry.add(
    "orders",
    Orders,
    {
        path: "/orders/:identifier?",
    },
    {
        menu: {
            _type: "all",
            name: "Orders",
            id: "order",
            to: {
                name: "orders",
            },
        },
    }
);
