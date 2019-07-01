<template>
  <div class="resumes-show">
    
  <h1>This is a resumes Show Page</h1>
  <h3>First Name: {{ first_name }}</h3>
  <h3>Last Name: {{ last_name }}</h3>
  <h3>Email: {{ email }}</h3>
  <h3>Phone Number:{{ phone_number }}</h3>
  <h3>Short Bio: {{ short_bio }}</h3>
  <h3>Twitter Handle: {{ twitter_handle }}</h3>
  <h3>Personal Blog/Website URL: {{ personal_blog_url }}</h3>
  <h3>Online Resume URL: {{ online_resume_url }}</h3>
  <h3>Github URL: {{ github_url }}</h3>
  <h3>Photo: {{ photo }}</h3>

  <h1>Skills</h1>
  <div v-for="skill in skills">
    <h5>Start Date</h5>
    <h5>End Date</h5>
    <h5>Degree</h5>
    <h5>University Name</h5>
    <h5>Details</h5>
  </div>
  
  <!--   Will need a loop for experience -->
  <h1>Experience</h1>
  <div v-for="experience in experiences">
    <h5>Start Date</h5>
    <h5>End Date</h5>
    <h5>Job Title</h5>
    <h5>Company Name</h5>
    <h5>Details</h5>
  </div>

  <!-- Will need a loop for education -->

  <h1>Education</h1>
  <div v-for="education in educations">
    <h5>Start Date</h5>
    <h5>End Date</h5>
    <h5>Degree</h5>
    <h5>University Name</h5>
    <h5>Details</h5>
  </div>

  <h1>Capstone</h1>
  <div v-for="capstone in capstones">
    <h5>Start Date</h5>
    <h5>End Date</h5>
    <h5>Degree</h5>
    <h5>University Name</h5>
    <h5>Details</h5>
  </div>


  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      student: {
        first_name: "Brian", 
        last_name: "Chinn", 
        email: "brian@gmail.com", 
        phone_number: "1234567891", 
        short_bio: "winner of the year",  
        linkedIn_url: "Iamawesome.com", 
        twitter_handle: "@Rocktheboat", 
        personal_blog_url: "Winner.com", 
        online_resume_url: "StillWinning.com", 
        github_url: "Who's#1.github", 
        photo: ""}
    };
  },
  created: function() {
    axios.get("/api/resumes/" + this.$route.params.id).then(response => {
      this.user = response.data;
  },
  methods: {
    
    },
  submit: function(){
      
};
</script>

