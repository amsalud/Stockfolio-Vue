<template>
    <v-flex>
        <v-card class="card">
            <div class="header">
                {{ stock.name}} (Price: {{stock.price}})
            </div>
            <v-flex ma-3>
                <v-text-field label="Quantity" type="number" v-model="quantity"></v-text-field>
            </v-flex>
            <v-btn color="success" @click="buyStock" :disabled="quantity <=0">Buy</v-btn>
        </v-card>
    </v-flex>
</template>


<script>
export default {
  props: ['stock'],
  data: () => ({ quantity: 0 }),
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      }
      this.quantity = 0

      console.log(order)
    }
  }
}
</script>
