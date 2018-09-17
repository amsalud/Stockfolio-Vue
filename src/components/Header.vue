<template>
  <v-toolbar dark color="black">
    <v-toolbar-title class="white--text mr-3" @click="goHome">StockFolio</v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat to="/portfolio">Portfolio</v-btn>
      <v-btn flat to="stocks">Stocks</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat>End Day</v-btn>
      <v-btn flat>Save & Load</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import router from '../router.js'
export default {
  data: () => ({
    items: ['Action', 'Another Action']
  }),
  methods: {
    goHome: () => {
      router.push('/')
    }
  }
}
</script>

<style>
.v-toolbar__title {
  cursor: pointer;
}
</style>
