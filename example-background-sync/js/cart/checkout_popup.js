import { utils_registry } from "/shopfloor_mobile_base/static/wms/src/services/utils_registry.js";

Vue.component("checkout-popup", {
    props: {
        show_popup: Object,
        checkout: Object,
    },
    template: `
        <v-card class="checkout-popup">
            <v-date-picker
                color="secondary"
                v-if="step===0"
                v-model="delivery_date"
                full-width
                no-title
                :min="date_to_yyyymmdd(new Date())"
                data-ref="date-picker"
            />
            <v-select
                v-if="step===0"
                color="secondary"
                v-model="selected_timeslot"
                :items="timeslots"
                label="Select timeslot"
                outlined
                style="width:90%"
                data-ref="timeslot-picker"
            />
            <v-card
                v-if="step===1"
                color="subtle"
                class="popup-remark"
            >
                <v-textarea
                    label="Add a remark for this order"
                    v-model="remark_input"
                    class="popup-remark-input"
                />
            </v-card>
            <v-card tile color="primary" class="checkout-popup-nav">
                <v-icon 
                    v-on:click="update_step(step-1)"
                    color="white"
                    large
                    class="to-checkout"
                >
                    mdi-arrow-left-circle-outline
                </v-icon>
                <v-icon 
                    v-if="step===0 && !delivery_date || !selected_timeslot"
                    color="btn_action_disabled"
                    large 
                    class="to-checkout"
                >
                    mdi-arrow-right-circle-outline
                </v-icon>
                <v-icon
                    v-if="step===0 && delivery_date && selected_timeslot"
                    v-on:click="update_step(1)"
                    color="white"
                    large
                    class="to-checkout"
                    data-ref="checkout-next"
                >
                    mdi-arrow-right-circle-outline
                </v-icon>
                <v-icon 
                    v-if="step===1" 
                    v-on:click="checkout(remark_input, delivery_date, selected_timeslot)"
                    color="white" 
                    large 
                    class="to-checkout"
                    data-ref="checkout-submit"
                >
                    mdi-check-outline
                </v-icon>
            </v-card>
        </v-card>
    `,
    mounted() {
    },
    data: function () {
        return {
            delivery_date: "",
            step: 0,
            remark_input: "",
            selected_timeslot: "",
            // TODO: The timeslots will need to come from the backend in the future
            timeslots: ["06:00-09:00", "09:00-12:00", "12:00-15:00", "15:00-18:00", "18:00-21:00"]
        };
    },
    methods: {
        update_step: function (step) {
            this.step = step;
            if(this.step < 0) {
                this.show_popup()
            }
        },
        date_to_yyyymmdd: function (date) {
            const offset = date.getTimezoneOffset()
            date = new Date(date.getTime() - (offset * 60 * 1000))
            return date.toISOString().split('T')[0]
        },
    },
    computed: {
    }
})