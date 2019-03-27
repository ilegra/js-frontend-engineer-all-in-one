<template>
  <section class="columns">
    <h1 class="title">{{ title }}</h1>
    <hr>
    <p>Your Funds: {{ funds }}</p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: "Control your stocks"
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
};
</script>