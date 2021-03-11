<template>
    <v-col md="6" lg="4" >
        <v-card
                class="mx-auto"
                max-width="344"
                outlined
        >
            <v-list-item three-line>
                <v-list-item-content>
                    <v-list-item-title class="mb-1 headline">
                        <slot name="subject"></slot>
                    </v-list-item-title>
                    <v-list-item-title class="mb-1 headline">
                        <slot name="location"></slot>
                    </v-list-item-title>
                    <v-list-item-title class="mb-1 headline">
                        <slot name="price"></slot>
                    </v-list-item-title>
                    <v-list-item-title class="mb-1 headline">
                        <slot name="spaces"></slot>
                    </v-list-item-title>
                </v-list-item-content>

                <v-list-item-avatar
                        tile
                        size="80"
                        color="grey"
                >
                    <v-icon class="large">
                        <slot name="image"></slot>
                    </v-icon>
                </v-list-item-avatar>
            </v-list-item>

            <v-card-actions>
                <slot name="button"></slot>
            </v-card-actions>
        </v-card>
    </v-col>
</template>

<script>
    export default {
        name: "Lesson.vue"
    }
</script>

<style scoped>

</style>