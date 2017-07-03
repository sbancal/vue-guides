<template lang="html">
  <div class="col-md-6">
    <div class="joke-card">
      <div class="joke-block">
        <button class="close" @click="removeJoke(index)"><span>&times;</span></button>
        <p><u>{{joke.setup}}</u></p>
        <p><em>{{joke.punchline}}</em></p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  props: ['joke', 'index'],
  methods: mapActions([
    'removeJoke'
  ])
}
</script>

<style lang="css">
.joke-card {
  border: 2px solid #2C3350;
  border-radius: 8px;
  padding: 5px;
  margin: 5px;
}
</style>
