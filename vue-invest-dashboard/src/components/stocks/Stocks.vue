<template lang="html">
  <div class="">
    <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
  </div>
</template>

<script>
import Stock from './Stock.vue'
export default {
  computed: {
    stocks(){
      return this.$store.getters.stocks;
    }
  },
  components: {
    appStock: Stock
  }
}
</script>

<style lang="css">
</style>
