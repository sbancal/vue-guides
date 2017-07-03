<template lang="html">
  <div id="app">
    <h3>Got jokes?</h3>
    <button class="btn btn-primary" @click="initJokes">Add Ten Random Jokes</button>
    <br>
    <br>
    <div class="col-md-12">
      <Joke
        v-for="(joke, index) in $store.state.jokes"
        :joke="joke"
        key="index"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Joke from './Joke.vue'

export default {
  methods: mapActions([
    'initJokes'
  ]),
  components: {
    Joke
  }
}
</script>

<style lang="css">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2C3350;
  margin-top: 60px;
}
</style>
