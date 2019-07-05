<template>
  <div class="resumes-show" >
  
  <h1 class="text-info">{{ student.first_name }} {{ student.last_name }}</h1>
  <!-- <img v-bind:to src="student.photo"> -->
  <p>Email: {{ student.email }}</p>
  <p>Phone Number:{{ student.phone_number }}</p>
  <p>Short Bio: {{ student.bio }}</p>
  <p>Twitter Handle: {{ student.twitter }}</p>
  <p>Personal Blog/Website URL: {{ student.website }}</p>
  <p>Online Resume URL: {{ student.resume }}</p>
  <p>Github URL: {{ student.github }}</p>
  <p>Photo: {{ student.photo }}</p>

  <!-- Will need a loop for Skillz -->
  <h1 class="text-info">Skills</h1>
  <div v-for="skill in skills">
    <p>{{ skill.name }}</p>
  </div>
  
  <!--   Will need a loop for experience -->
  <h1 class="text-info">Experience</h1>
  <div v-for="experience in experiences">
    <p><i>{{ experience.start_date }} - {{ experience.end_date }}</i></p>
    <p>{{ experience.title }}</p>
    <p>{{ experience.company_name }}</p>
    <p>{{ experience.details }}</p>
  </div>

  <!-- Will need a loop for education -->

  <h1 class="text-info">Education</h1>
  <div v-for="education in educations">
    <p>{{ education.start_date }} - {{ education.end_date }}</p>
    <p>{{ education.degree }}</p>
    <p>{{ education.university_name }}</p>
    <p>{{ education.details }}</p>
  </div>

  <!-- Will need a loop for Capstone -->

  <h1 class="text-info">Capstone</h1>
  <div v-for="capstone in capstones">
    <p>Name: {{ capstone.name }}</p>
    <p>Description: {{ capstone.description }}</p>
    <p>URL:{{ capstone.url }}</p>
    <p>Screenshot:{{ capstone.screenshot }}</p>
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
