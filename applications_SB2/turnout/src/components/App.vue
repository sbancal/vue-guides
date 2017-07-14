<template lang="html">
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted() {
    // Default route when launching App
    this.$router.push('/dashboard')
  }
}
</script>

<style lang="css">
#app {
  text-align: center;
  margin-top: 50px;
}
</style>
