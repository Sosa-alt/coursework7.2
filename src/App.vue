<template>
  <div>
    <v-toolbar dense class="primary">
      <v-toolbar-title><router-link id="title" :to="{name: 'lessons'}">Vue Lessons</router-link></v-toolbar-title>

      <v-spacer></v-spacer>

      <router-link id="shoppingCart" :to="{name: 'cart'}">
        <v-btn v-if="$store.getters.cartCount > 0"  icon id="cartButton">
          <v-icon small color="black darken-2">fa fa-shopping-cart</v-icon>
          <span id="cartCount">{{$store.getters.cartCount}}</span>
        </v-btn>
      </router-link>
    </v-toolbar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </div>
</template>

<script>

export default {
  name: 'App',
  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>

<style scoped>
  * {
    font-family: Roboto, sans-serif;
  }
  #title {
    font-family: "Curlz MT";
    color: black;
    text-decoration: none;
  }
  #shoppingCart {
    text-decoration: none;
  }
  #cartButton {
    position: relative;
  }
  #cartCount {
    position: absolute;
    top: -5px;
    right: 7px;
    background-color: black;
    color: white;
    padding: 3px;
    font-size: 10px;
    border-radius: 50%;
  }
</style>
