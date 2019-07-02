<template>
  <div class="resumes-show">
    
  <h1>{{ student.first_name }} {{ student.last_name }}</h1>
  <h3>Email: {{ student.email }}</h3>
  <h3>Phone Number:{{ student.phone_number }}</h3>
  <h3>Short Bio: {{ student.short_bio }}</h3>
  <h3>Twitter Handle: {{ student.twitter_handle }}</h3>
  <h3>Personal Blog/Website URL: {{ student.personal_blog_url }}</h3>
  <h3>Online Resume URL: {{ student.online_resume_url }}</h3>
  <h3>Github URL: {{ student.github_url }}</h3>
  <h3>Photo: {{ student.photo }}</h3>

  <!-- Will need a loop for Skillz -->
  <h1>Skills</h1>
  <div v-for="skill in skills">
    <h5>{{ skill }}</h5>
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
        photo: ""
      },
      capstones: [
        {name: "capstone 1",
        description: "capstonecapstonecapstone1",
        url: "https://www.capstone1.com",
        screenshot: "image.jpg"},
        {name: "capstone 2",
        description: "capstonecapstonecapstone2",
        url: "https://www.capstone2.com",
        screenshot: "image2.jpg"}
      ],
      skills: [ 
        "javascript", 
        "sql", 
        "ruby", 
        "postico"
      ],
      experiences: [
        {
        start_date: "01-01-2019",
        end_date: "06-01-2019",
        job_title: "job title 1",
        company_name: "company name 1",
        details: "details 1 details 1 details 1 details 1 details 1 details 1 details 1 "},
        {
        start_date: "02-01-2016",
        end_date: "06-01-2018",
        job_title: "job title 2",
        company_name: "company name 2",
        details: "details 2 details 2 details 2 details 2 details 2 details 2 details 2 "},
        ],
      educations: [
        {
        start_date: "01-01-2019",
        end_date: "06-01-2019",
        degree: "bachelors 1",
        university_name: "university name 1",
        details: "details 1 details 1 details 1 details 1 details 1 details 1 details 1 "},
        {
        start_date: "02-01-2016",
        end_date: "06-01-2018",
        degree: "bachelors 2",
        university_name: "university name 2",
        details: "details 2 details 2 details 2 details 2 details 2 details 2 details 2 "},
        ],
      };
    },
  created: function() {
    axios.get("/api/resumes/" + this.$route.params.id).then(response => {
      this.user = response.data;
    })
  }
};
</script>

