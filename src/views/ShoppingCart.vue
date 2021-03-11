<template>
    <v-container>

        <!-- Checkout -->
        <Checkout :confirmed="confirmed" :cart="cart" :snackbar="snackbar" :success="success" v-on:cartCleared="confirmed=false" />

        <!-- Items in Cart -->
        <Cart v-on:confirmCheckout="confirmCheckout" :confirmed="confirmed" :cart="cart"/>

        <!-- No Items In Cart -->
        <v-row v-show="$store.getters.cartCount <= 0">
            <v-container>
                <v-alert
                        outlined
                        color="purple"
                >
                    <v-row align="center">
                        <v-col class="pt-2 grow">
                            No Item In Cart
                        </v-col>
                        <v-col class="shrink">
                            <v-btn v-on:click="$router.go(-1)">Back To Shop</v-btn>
                        </v-col>
                    </v-row>
                </v-alert>
            </v-container>
        </v-row>

    </v-container>
</template>

<script>
    import Cart from "../components/Cart"
    import Checkout from '../components/Checkout.vue'
    import {mapState} from 'vuex'
    
    export default {
        components: {
            Cart, Checkout
        },
        data() {
            return {
                confirmed: false,
                snackbar: false,
                success: null
            }
        },
        name: "ShoppingCart",
        methods: {
            confirmCheckout() {
                this.confirmed = true
                this.snackbar = true
                this.success = 'Checked out successfully.'
            }
        },
        computed: {
            ...mapState([
                'cart'
            ])
        }
    }
</script>

<style scoped>

</style>