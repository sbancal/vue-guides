<template lang="html">
  <div id="app">
    <h3>Got jokes?</h3>
    <button class="btn btn-primary" @click="addJoke">Add One Random Joke</button>
    <button class="btn btn-primary" @click="initJokes">Add Ten Random Jokes</button>
    <br>
    <span v-for="(type, index) in types">
      <input
        :id="'checkbox_' + index"
        type="checkbox"
        :value="type"
        v-model="checkTypes"
        checked
      >
      <label :for="'checkbox_' + index">{{type}}</label>&nbsp;
    </span>
    <br>
    <div class="col-md-12">
      <Joke
        v-for="(joke, index) in $store.state.jokes"
        v-show="checkTypes.includes(joke.type)"
        :joke="joke"
        :index="index"
        key="index"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Joke from './Joke.vue'

export default {
  data() {
    return {
      types: ['general', 'knock-knock', 'programming'],
      checkTypes: ['general', 'knock-knock', 'programming']
    }
  },
  methods: mapActions([
    'addJoke',
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
