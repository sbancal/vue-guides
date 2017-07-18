<template lang="html">
  <div class="">
    <h1>Dashboard</h1>
    <div class="">
      email : {{$store.state.user.email}}
      <button class="btn btn-danger btn-sm" @click="signOut">Sign Out</button>
    </div>
    <hr>
    <AddEvent />
  </div>
</template>

<script>
import { firebaseApp, eventsRef } from '../firebaseApp'
import AddEvent from './AddEvent.vue'

export default {
  components: {
    AddEvent
  },
  methods: {
    signOut() {
      firebaseApp.auth().signOut()
    }
  },
  mounted() {
    eventsRef.on('value', snap => {
      let events = []
      snap.forEach(event => {
        events.push(event.val())
      })
      console.log('set events', events)
      this.$store.dispatch('setEvents', events)
    })
  }
}
</script>

<style lang="css">
</style>
