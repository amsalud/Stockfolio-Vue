<template>
  <v-container fluid align-center mt-5 class="stocks-dashboard">
    <v-layout wrap>
      <app-stock v-for="stock in stocks" v-bind:key="stock.id" :stock="stock"></app-stock>
    </v-layout>
  </v-container>
</template>

<script>
import Stock from './Stock'

export default {
  data: () => ({
    stocks: [
      { id: 1, name: 'BMW', price: 110 },
      { id: 2, name: 'Google', price: 200 },
      { id: 3, name: 'Apple', price: 250 },
      { id: 4, name: 'Twitter', price: 210 },
      { id: 5, name: 'Amazon', price: 300 }
    ]
  }),
  components: {
    appStock: Stock
  }
}
</script>

<style lang="less">
.stocks-dashboard {
  .card {
    width: 250px;
    margin: 10px;
    .header {
      background-color: green;
      color: white;
      padding: 10px;
      text-align: left;
    }
  }
}
</style>

