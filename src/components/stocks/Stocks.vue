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
  components: {
    appStock: Stock
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks
    }
  }
}
</script>

<style lang="less">
.stocks-dashboard {
  .card {
    width: 250px;
    margin: 10px;
    .header {
      background-color: #4caf50;
      color: white;
      padding: 10px;
      text-align: left;
    }
  }
}
</style>

