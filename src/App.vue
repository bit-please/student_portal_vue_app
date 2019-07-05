<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">Student Portal</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link v-if="isLoggedIn()" :to="'/resumes/' + student_id " class="nav-item nav-link">View Resume</router-link> 
          <router-link v-if="isLoggedIn()" :to="'/resumes/' + student_id +'/edit'" class="nav-item nav-link">Edit Resume</router-link> 
          <router-link to="/login" class="nav-item nav-link" v-if="!isLoggedIn()">Login</router-link> 
          <router-link to="/logout" class="nav-item nav-link" v-if="isLoggedIn()">Logout</router-link> 
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return { 
      student: {}, 
      student_id: localStorage.getItem('student_id')
    };
  },

  created: function() {
  }, 


  methods: {
    isLoggedIn: function() {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>