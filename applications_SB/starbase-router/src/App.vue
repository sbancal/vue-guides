<template lang="html">
  <div id="app">
    <h3>Starbase router</h3>
    <h4>
      <router-link class="link" to="/data/people">Meet the Characters</router-link> |
      <router-link class="link" to="/data/planets">Explore the Planets</router-link>
    </h4>
    <router-view/>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
