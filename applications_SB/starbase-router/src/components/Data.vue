<template lang="html">
  <div class="col-md-12">
    <Item
      v-for="(id, index) in items"
      key="index"
      :initial-id="id"
      :type="type"
    />
  </div>
</template>

<script>
import Item from './Item.vue'

export default {
  data() {
    return {
      type: this.$route.params.type,
      items: []
    }
  },
  watch: {
    '$route': 'fetchItems'
  },
  methods: {
    fetchItems() {
      this.type = this.$route.params.type
      if (this.type == 'people'){
        this.items = [1, 13, 14]
      } else if (this.type == 'planets'){
        this.items = [2, 3, 4]
      }
      // What to do when route is not expected ?
    }
  },
  created() {
    this.fetchItems()
  },
  components: {
    Item
  }
}
</script>

<style lang="css">
</style>
