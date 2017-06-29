<template lang="html">
  <div class="col-md-4" @click="switchItem">
    <div class="item-card">
      <div class="card-block">
        <h4 class="card-title">{{item.name}}</h4>
        <div v-for="(value, key) in infos">
          <strong>{{key}}</strong>: {{value}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['initialId', 'type'],
  data() {
    return {
      item: {}
    }
  },
  computed: {
    infos() {
      if (this.type == 'people'){
        let mass = this.item.mass + 'kg'
        if (isNaN(Number(this.item.mass))) {
          mass = this.item.mass
        }
        let height = this.item.height + 'cm'
        if (isNaN(Number(this.item.height))) {
          height = this.item.height
        }
        return {
          mass: mass,
          height: height,
          eye_color: this.item.eye_color,
          hair_color: this.item.hair_color,
        }
      } else {
        return {
          diameter: this.item.diameter,
          climate: this.item.climate,
          terrain: this.item.terrain,
          population: this.item.population,
        }
      }
    }
  },
  watch: {
    'type': 'initialFetch'
  },
  methods: {
    initialFetch() {
      this.fetchId(this.initialId)
    },
    fetchId(id) {
      fetch(`http://swapi.co/api/${this.type}/${id}`, {method: 'GET'})
      .then(response => response.json())
      .then(json => this.item = json)
    },
    switchItem() {
      let randomId = Math.floor(Math.random() * 63) + 1
      this.fetchId(randomId)
    }
  },
  created(){
    this.initialFetch()
  }
}
</script>

<style lang="css">
</style>
