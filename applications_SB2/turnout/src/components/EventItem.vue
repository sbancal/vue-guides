<template lang="html">
  <div class="col-md-4">
    <div class="event-card">
      <button class="btn btn-sm btn-danger pull-right" @click="deleteEvent">x</button>
      <h4 class="card-title clear-both">{{event.title}}</h4>
      <p class="card-text">{{event.description}}</p>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Date: {{event.date}}</li>
        <li class="list-group-item">Location: {{event.location}}</li>
        <li class="list-group-item">Host: {{event.email}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { eventsRef } from '../firebaseApp'

export default {
  props: ['event'],
  methods: {
    deleteEvent() {
      eventsRef.child(this.event.key).remove()
    }
  }
}
</script>

<style lang="css">
.pull-right {
  margin-bottom: -20px;
}
.clear-both {
  clear: both;
}
.event-card {
  border: 2px solid rgb(12, 171, 68);
  margin-top: 10px;
  border-radius: 5px;
}
</style>
