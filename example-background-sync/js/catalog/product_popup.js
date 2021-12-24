
Vue.component("product_popup", {
    props: {
        record: Object,
        show_popup: Object,
    },
    template: `
        <div style="display:flex; flex-direction:column">
            <div style="display:flex">
                <v-list 
                    color="subtle" 
                    rounded 
                    dense
                    two-line
                    class="product-packaging-list"
                    v-if="step===0"
                >   
                    <div style="width:40%">
                        <v-list-item 
                            class="product-packaging-text"
                            v-for="packaging in record.packaging"
                            v-if="!packaging.is_unit"
                        >
                            <p style="font-size:12px; margin:0px">{{packaging.name}} </p>
                            <p style="font-size:12px; margin:0px">({{packaging.qty }} kg)</p>
                        </v-list-item>
                    </div>
                    <div style="width:45%">
                        <v-list-item                
                            v-for="packaging in record.packaging"
                            v-if="!packaging.is_unit"
                        >
                            <v-list-item-action
                                v-if="packaging.id === current_packaging_id && current_quantity > 0"
                                class="product-popup-action"                        
                                v-on:click="removeOne(packaging.id)"
                            >
                                <v-icon class="product-popup-button" color="primary">
                                    mdi-minus
                                </v-icon>
                            </v-list-item-action>
                            <v-list-item-action
                                v-else
                                class="product-popup-action"
                            >
                                <v-icon class="product-popup-button" color="secondary">
                                    mdi-minus
                                </v-icon>
                            </v-list-item-action>
                            <v-list-item-action
                                class="product-popup-action"                        
                                v-on:click="addOne(packaging.id)"
                                data-ref="add-one-packaging-qty"
                                :data-id="record.id"
                            >
                                <v-icon class="product-popup-button" color="primary">
                                    mdi-plus
                                </v-icon>
                            </v-list-item-action>
                        </v-list-item>
                    </div>
                    <div style="width:15%">
                        <v-list-item
                            v-for="packaging in record.packaging"
                            v-if="!packaging.is_unit"
                        >
                            <p  
                                v-if="packaging.id === current_packaging_id && current_quantity > 0"
                                style="font-size:12px; margin:0px"
                            >
                                {{current_quantity}}x 
                            </p>
                        </v-list-item>
                    </div>
                </v-list>
                <v-card
                    v-if="step===1"
                    color="subtle"
                    class="popup-remark"
                >
                    <v-textarea
                        label="Add a remark for this product"
                        v-model="remark_input"
                        class="popup-remark-input"
                    />
                </v-card>
            </div>
            <div style="display:flex">
                <div v-if="step===0" class="product-popup-total">
                    <v-item>TOTAL: {{(current_quantity * current_packaging_size).toFixed(0)}} kg</v-item>
                </div>
                <div 
                    v-if="step===1"
                    class="product-popup-next-step"                     
                >
                    <v-icon 
                        v-on:click="update_step(0)"
                        color="white" 
                        large
                    >
                        mdi-arrow-left-circle-outline
                    </v-icon>
                </div>
                <div 
                    class="product-popup-next-step"
                >
                    <v-icon 
                        v-on:click="update_step(1)" 
                        v-if="step===0 && current_quantity > 0" 
                        color="white" 
                        data-ref="popup-next"
                        large
                    >
                        mdi-arrow-right-circle-outline
                    </v-icon>
                    <v-icon
                        v-if="step===0 && current_quantity === 0 && !removing_item"
                        color="btn_action_disabled"
                        large
                    >
                        mdi-arrow-right-circle-outline
                    </v-icon>
                    <v-icon
                        v-on:click="add_to_cart"
                        v-if="step===0 && current_quantity === 0 && removing_item"
                        color="white"
                        large
                    >
                        mdi-trash-can-outline
                    </v-icon>
                    <v-icon 
                        v-if="step===1" 
                        v-on:click="add_to_cart"
                        data-ref="add-item-to-cart"
                        color="white" 
                        large
                    >
                        mdi-cart-check
                    </v-icon>
                </div>
            </div>
        </div>
    `,
    mounted() {
        const has_cart = this.utils.cart.get_cart()
        if (has_cart) {                
            const item_from_cart = this.$store.state.cart_module.cart.lines.items.find(item => item.product.id === this.record.id)
            if (item_from_cart) {
                this.current_quantity = item_from_cart.packaging_qty
                this.current_packaging_id = item_from_cart.packaging.id
                this.remark_input = item_from_cart.comment
            }
        }
    },
    data: function () {
        return {
            step: 0,
            current_packaging_id: 0,
            current_quantity: 0,
            remark_input: "",
            removing_item: false
        };
    },
    methods: {
        add_to_cart: function () {
            
            const packaging = this.record.packaging.find(packaging => packaging.id === this.current_packaging_id)
            const total = this.record.price.default.value * this.current_quantity * this.current_packaging_size
            
            this.$store.commit("cart_addItemToCart", {
                product: this.record,
                packaging: packaging,
                packaging_qty: this.current_quantity,
                amount: total,
                comment: this.remark_input
            });       
                 
            this.show_popup()

            this.current_packaging_id = ""
            this.removing_item = false
        },
        addOne: function (packaging_code) {
            this.current_quantity += 1

            if (this.current_packaging_id !== packaging_code) {
                this.current_packaging_id = packaging_code
                this.current_quantity = 1
            }  
        },
        removeOne: function (packaging_code) { 
            if (this.current_quantity > 0 && this.current_packaging_id === packaging_code) {
                this.current_quantity -= 1                 
            }
            if(this.current_quantity === 0) {                
                const lines = this.$store.state.cart_module.cart.lines
                const is_item_in_cart = lines.items.find(item => item.product.id === this.record.id)
                if (is_item_in_cart) {
                    this.removing_item = true
                }
            }
        },
        update_step: function (step) {
            this.step = step;
        }
    },
    computed: {
        current_packaging_size: function () {            
            if (this.current_packaging_id) {
                return this.record.packaging.find(packaging => packaging.id === this.current_packaging_id).qty
            }
            return 0
        },
    }
})