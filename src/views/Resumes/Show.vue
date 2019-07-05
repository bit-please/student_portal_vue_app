<template>
  <div class="resumes-show">
  
  <button>
    <router-link v-bind:to="/resumes/">Edit</router-link>
  </button><br>
  
  <h1>{{ student.first_name }} {{ student.last_name }}</h1>
  <h3>Email: {{ student.email }}</h3>
  <h3>Phone Number:{{ student.phone_number }}</h3>
  <h3>Short Bio: {{ student.bio }}</h3>
  <h3>Twitter Handle: {{ student.twitter }}</h3>
  <h3>Personal Blog/Website URL: {{ student.website }}</h3>
  <h3>Online Resume URL: {{ student.resume }}</h3>
  <h3>Github URL: {{ student.github }}</h3>
  <h3>Photo: {{ student.photo }}</h3>

  <!-- Will need a loop for Skillz -->
  <h1>Skills</h1>
  <div v-for="skill in skills">
    <h5>{{ skill.name }}</h5>
  </div>
  
  <!--   Will need a loop for experience -->
  <h1>Experience</h1>
  <div v-for="experience in experiences">
    <h5>{{ experience.start_date }} - {{ experience.end_date }}</h5>
    <h5>{{ experience.job_title }}</h5>
    <h5>{{ experience.company_name }}</h5>
    <h5>{{ experience.details }}</h5>
  </div>

  <!-- Will need a loop for education -->

  <h1>Education</h1>
  <div v-for="education in educations">
    <h5>{{ education.start_date }} - {{ education.end_date }}</h5>
    <h5>{{ education.degree }}</h5>
    <h5>{{ education.university_name }}</h5>
    <h5>{{ education.details }}</h5>
  </div>

  <!-- Will need a loop for Capstone -->

  <h1>Capstone</h1>
  <div v-for="capstone in capstones">
    <h5>Name: {{ capstone.name }}</h5>
    <h5>Description: {{ capstone.description }}</h5>
    <h5>URL:{{ capstone.url }}</h5>
    <h5>Screenshot:{{ capstone.screenshot }}</h5>
  </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      student: {},
      capstones: [],
      skills: [],
      experiences: [],
      educations: [],
      student_id: localStorage.getItem('student_id')
    };
  },
  created: function() {
    axios.get("/api/students/" + this.student_id).then(response => {
      console.log(response.data);
      this.student = response.data;
      this.skills = response.data.skills;
      this.capstones = response.data.capstones;
      this.experiences = response.data.experiences;
      this.educations = response.data.educations;
    });
  }
};
</script>
