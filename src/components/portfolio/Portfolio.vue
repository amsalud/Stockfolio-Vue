<template>
  <v-container fluid mt-5 class="portfolio-dashboard">
    <v-layout>
      <app-stock v-for="stock in stocks" :stock="stock" v-bind:key="stock.id"></app-stock>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import Stock from './Stock.vue'

export default {
  computed: {
    ...mapGetters({
      stocks: 'stockPortfolio'
    })
  },
  components: {
    appStock: Stock
  }
}
</script>

<style lang="less">
.portfolio-dashboard {
  .card {
    width: 250px;
    margin: 10px;
    .header {
      background-color: red;
      color: white;
      padding: 10px;
      text-align: left;
    }
  }
}
</style>
