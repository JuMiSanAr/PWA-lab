Vue.component("app-bar-actions").extendOptions.template = `
    <div :class="$options._componentTag">
        <v-btn icon @click="$router.push({'name': 'cart'})" :disabled="this.$route.name=='cart'">
            <v-icon >mdi-cart</v-icon>
        </v-btn>
    </div>
`;
