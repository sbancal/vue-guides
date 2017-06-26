<template lang="html">
  <div>
    {{character}}
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
    }
  },
  created() {
    this.fetchCharacter(this.id)
  }
}
</script>

<style lang="css">
</style>
