<template lang="html">
  <div class="">
    <h3>Dashboard</h3>
    <button class="btn, btn-danger btn-sm signout-btn" @click="signOut">Sign Out</button>
    <hr>
    <AddEvent />
    <hr>
    {{$store.state}}
  </div>
</template>

<script>
import { firebaseApp } from '../firebaseApp'
import AddEvent from './addEvent.vue'

export default {
  methods: {
    signOut() {
      this.$store.dispatch('signOut')
      firebaseApp.auth().signOut()
    }
  },
  components: {
    AddEvent
  }
}
</script>

<style lang="css">
.signout-btn {
  position: absolute;
  text-align: right;
  top: 60px;
  right: 40px;
}
</style>
