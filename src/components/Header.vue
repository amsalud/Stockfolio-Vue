<template>
  <v-toolbar dark color="primary">
    <v-toolbar-title class="white--text">StockFolio</v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat>Portfolio</v-btn>
      <v-btn flat>Stocks</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat>End Day</v-btn>
      <v-btn flat>Save & Load</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data: () => ({
    items: ['Action', 'Another Action']
  })
}
</script>
