<template>
  <v-layout mt-5 class="stocks-dashboard">
    <v-flex offset-sm3>
      <v-card class="card">
        <div class="header">
          Stock Name (Price: Price)
        </div>
        <v-flex ma-3>
          <v-text-field
            label="Quantity"
            type="number"
          ></v-text-field>
        </v-flex>
        <v-btn color="success">Buy</v-btn>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      stocks: [
        { id: 1, name: 'BMW', price: 110 },
        { id: 2, name: 'Google', price: 200 },
        { id: 3, name: 'Apple', price: 250 },
        { id: 4, name: 'Twitter', price: 210 },
        { id: 5, name: 'Amazon', price: 300 }
      ]
    }
  }
}
</script>

<style lang="less">
.stocks-dashboard {
  .card {
    width: 250px;
    .header {
      background-color: green;
      color: white;
      padding: 10px;
      text-align: left;
    }
  }
}
</style>

