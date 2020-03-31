<template>
  <v-container fluid mt-5 class="portfolio-dashboard">
    <v-layout v-if="stocks.length">
      <app-stock v-for="stock in stocks" :stock="stock" v-bind:key="stock.id"></app-stock>
    </v-layout>
    <div class="dashboard-placeholder" v-if="!stocks.length">
      <h1 >You have no stocks in your portfolio</h1>
    </div>
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

<style lang="less" scoped>
.portfolio-dashboard {
  .card {
    width: 250px;
    margin: 10px;
    .header {
      background-color: #1976d2;
      color: white;
      padding: 10px;
      text-align: left;
    }
  }
}

.dashboard-placeholder{
  margin:23% auto 0;
}
</style>
