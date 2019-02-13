<template lang="html">
  <div class="">
    <h1>Control your stocks</h1>
    <hr />
    <p>Your Funds: {{ funds }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds
    }
  }
}
</script>

<style lang="css">
</style>
