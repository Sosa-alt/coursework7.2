<template>
    <v-container>
        <v-form
                ref="form"
                v-model="valid"
                lazy-validation
        >
            <v-row>
                <v-col cols="12" sm="6">
                    <v-text-field
                            v-model="name"
                            :counter="10"
                            :rules="nameRules"
                            label="Name"
                            required
                    ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                    <v-text-field
                            v-model="phone"
                            :rules="phoneRules"
                            label="Phone"
                            required
                    ></v-text-field>
                </v-col>
            </v-row>

            <v-container class="d-flex justify-center">
                <v-btn
                        v-show="valid"
                        class="mr-4"
                        @click="$emit('confirmed')"
                >
                    Checkout
                </v-btn>
            </v-container>
        </v-form>
    </v-container>
</template>

<script>
    export default {
        name: "Form",
        data: () => ({
            valid: true,
            name: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters',
            ],
            phone: '',
            phoneRules: [
                v => !!v || 'Phone is required',
                v => /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]*$/.test(v) || 'Phone must be valid',
            ],
        }),
        mounted() {
            this.$refs.form.validate()
        },
    }
</script>

<style scoped>

</style>