<template lang="html">
  <div class="col-md-4" @click="switchCharacter">
    <div class="character-card">
      <div class="character-block">
        <h4 class="card-title">{{character.name}}</h4>
        <p class="card-text">Height: {{getHeight}}</p>
        <p class="card-text">Mass: {{getMass}}</p>
        <p class="card-text">Hair_color: {{character.hair_color}}</p>
        <p class="card-text">Eye_color: {{character.eye_color}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      character: {}
    }
  },
  methods: {
    fetchCharacter(id) {
      fetch(`http://swapi.co/api/people/${id}`, {
        method: 'GET'
      })
      .then(response => response.json())
      .then(json => this.character = json)
    },
    switchCharacter() {
      let random_id = Math.floor(Math.random() * 83) + 1
      this.fetchCharacter(random_id)
    }
  },
  computed: {
    getHeight() {
      if (isNaN(Number(this.character.height))) {
        return this.character.height
      } else {
        return this.character.height + 'cm'
      }
    },
    getMass() {
      if (isNaN(Number(this.character.mass))) {
        return this.character.mass
      } else {
        return this.character.mass + 'kg'
      }
    }
  },
  created() {
    this.fetchCharacter(this.id)
  }
}
</script>

<style lang="css">
</style>
