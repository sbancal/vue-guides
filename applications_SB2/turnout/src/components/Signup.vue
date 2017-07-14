<template lang="html">
  <div class="">
    <h1>Sign Up</h1>
    <div class="form-group">
      <input
        type="text"
        placeholder="email"
        class="form-control"
        v-model="email"
      >
      <input
        type="password"
        placeholder="desired password"
        class="form-control"
        v-model="password1"
      >
      <input
        type="password"
        placeholder="re-type the password"
        class="form-control"
        v-model="password2"
      >
      <button class="btn btn-primary" @click="signUp">Sign Up</button>
    </div>
    <br>
    {{error.message}}
    <br>
    <router-link to="/signin">Got already an account? Go to Sign In</router-link>
  </div>
</template>

<script>
import { firebaseApp } from '../firebaseApp'

export default {
  data() {
    return {
      email: '',
      password1: '',
      password2: '',
      error: {
        message: ''
      }
    }
  },
  methods: {
    signUp() {
      if (this.password1 !== this.password2){
        this.error.message = 'Error: both password don\'t match'
        return
      }
      this.error.message = ''
      firebaseApp.auth().createUserWithEmailAndPassword(this.email, this.password1)
      .catch(error => {
        this.error = error
      })

    }
  }
}
</script>

<style lang="css">
</style>
