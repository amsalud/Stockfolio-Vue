<template>
    <v-flex>
        <v-card class="card">
            <div class="header">
                {{ stock.name}} (Price: {{stock.price}})
            </div>
            <v-flex ma-3>
                <v-text-field label="Quantity" type="number" v-model="quantity"></v-text-field>
            </v-flex>
            <v-btn color="success">Buy</v-btn>
        </v-card>
    </v-flex>
</template>


<script>
export default {
  props: ['stock'],
  data: () => ({ quantity: 0 })
}
</script>
