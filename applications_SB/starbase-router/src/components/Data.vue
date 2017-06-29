<template lang="html">
  <div>
    <p>Type: {{type}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: this.$route.params.type
    }
  }
}
</script>

<style lang="css">
</style>
