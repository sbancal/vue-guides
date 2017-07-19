<template lang="html">
  <div class="">
    <h1>Dashboard</h1>
    <div class="">
      email : {{$store.state.user.email}}
      <button class="btn btn-danger btn-sm" @click="signOut">Sign Out</button>
    </div>
    <hr>
    <AddEvent />
    <hr>
    <div class="col-md-12">
      <EventItem
        v-for="(event, index) in this.$store.state.events"
        :event="event"
        key="index"
      />
    </div>
  </div>
</template>

<script>
import { firebaseApp, eventsRef } from '../firebaseApp'
import AddEvent from './AddEvent.vue'
import EventItem from './EventItem.vue'

export default {
  components: {
    AddEvent,
    EventItem
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
        let oneEvent = event.val()
        oneEvent.key = event.key
        events.push(oneEvent)
      })
      console.log('set events', events)
      this.$store.dispatch('setEvents', events)
    })
  }
}
</script>

<style lang="css">
</style>
