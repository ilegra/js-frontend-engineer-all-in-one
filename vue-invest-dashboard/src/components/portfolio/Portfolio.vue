<template lang="html">
  <div class="">
    <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import Stock from './Stock.vue';
export default {

  computed: {
    ...mapGetters({
      stocks: 'stocksPortfolio'
    })
  },
  components: {
    appStock: Stock
  }
}
</script>

<style lang="css">
</style>
