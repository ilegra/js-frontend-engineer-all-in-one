<template>
  <div class="container">
    <app-header></app-header>
    <div class="row">
      <div class="col-md-12">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import appHeader from "./components/Header.vue";
export default {
  components: {
    appHeader
  },
  created() {
    this.$store.dispatch("init");
  }
};
</script>

<style lang="css">
body {
  padding: 30px;
}
</style>
