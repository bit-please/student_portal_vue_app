<template>
  <div class="resumes-edit">

    {{student}}

    <h1 class="text-center">Edit Your Personal Info:</h1>
    
    <div v-for: student>
      <form v-on:submit.prevent="submit()">
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="first_name">First Name:</label>
            <input type="string" class="form-control" id="first_name" placeholder="enter your first name" v-model="student.first_name">
          </div> 
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="last_name">Last Name:</label>
            <input type="string" class="form-control" id="last_name" placeholder="enter your last name" v-model="student.last_name">
          </div> 
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="email">Email:</label>
            <input type="string" class="form-control" id="email" placeholder="enter your email" v-model="student.email">
          </div> 
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="phone_number">Company Name:</label>
            <input type="string" class="form-control" id="phone_number" placeholder="enter your phone number" v-model="student.phone_number">
          </div> 
        </div>
         <div class="form-row">
          <div class="form-group col-md-6">
            <label for="bio">Short Bio:</label>
            <input type="text" class="form-control" id="bio" placeholder="enter a short bio about yourself" v-model="student.bio">
          </div> 
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="linked_in">linked_in:</label>
            <input type="string" class="form-control" id="linked_in" placeholder="enter your linked_in handle" v-model="student.linked_in">
          </div> 
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="twitter">Twitter:</label>
            <input type="string" class="form-control" id="twitter" placeholder="enter your twitter handle" v-model="student.twitter">
          </div> 
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="website">Website:</label>
            <input type="string" class="form-control" id="website" placeholder="enter your website url" v-model="student.website">
          </div> 
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="resume">Online Resume:</label>
            <input type="string" class="form-control" id="resume" placeholder="enter your resume url" v-model="student.resume">
          </div> 
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="github">Github URL:</label>
            <input type="string" class="form-control" id="github" placeholder="enter your github url" v-model="student.github">
          </div> 
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="photo">Photo:</label>
            <input type="string" class="form-control" id="photo" placeholder="upload your photo url" v-model="student.photo">
          </div> 
        </div>
      </form><br>
    </div>

    
    <h1 class="text-center">Edit Experiences</h1>
    
    <div v-for="experience in experiences">
      <form v-on:submit.prevent="submit()">
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="start_date">Start Date:</label>
            <input type="string" class="form-control" id="start_date" placeholder="enter job start-date" v-model="experience.start_date">
          </div> 
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="end_date">End Date:</label>
            <input type="string" class="form-control" id="end_date" placeholder="enter job end-date" v-model="experience.end_date">
          </div> 
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="job_title">Job Title:</label>
            <input type="string" class="form-control" id="job_title" placeholder="enter job title" v-model="experience.job_title">
          </div> 
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="company_name">Company Name:</label>
            <input type="string" class="form-control" id="company_name" placeholder="enter company names" v-model="experience.company_name">
          </div> 
        </div>
         <div class="form-row">
          <div class="form-group col-md-6">
            <label for="details">Job Details:</label>
            <input type="text" class="form-control" id="details" placeholder="enter job details" v-model="experience.details">
          </div> 
        </div>
      </form><br>
    </div>


    <h2 class="text-center">Edit Skills</h2>

    <div v-for="skill in skills">
      <form v-on:submit.prevent="submit()">
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="name">Name of Skill:</label>
            <input type="text" class="form-control" id="name" placeholder="Describe your skill" v-model="skill.name">
          </div> 
        </div>
      </form>
    </div>

    

    <h2 class="text-center">Edit Education</h2>

    <div v-for="education in educations">
      <form v-on:submit.prevent="submit()">
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="start_date">Start Date:</label>
            <input type="string" class="form-control" id="start_date" placeholder="7/14/2015" v-model="education.start_date">
          </div> 
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="end_date">End Date:</label>
            <input type="string" class="form-control" id="end_date" placeholder="05/22/2019" v-model="education.end_date">
          </div> 
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="degree">Degree:</label>
            <input type="string" class="form-control" id="degree" placeholder="bachelor" v-model="education.degree">
          </div> 
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="university_name">University Name:</label>
            <input type="string" class="form-control" id="university_name" placeholder="Your school name" v-model="education.university_name">
          </div> 
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="details">Details:</label>
            <input type="text" class="form-control" id="details" placeholder="Please input educational details" v-model="education.details">
          </div> 
        </div>
      </form>
    </div>

     <h2 class="text-center">Edit Capstone Info</h2>

    <div v-for="capstone in capstones">
      <form v-on:submit.prevent="submit()">
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="start_date">Name:</label>
            <input type="string" class="form-control" id="name" placeholder="enter capstone name" v-model="capstone.name">
          </div> 
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="end_date">Description:</label>
            <input type="string" class="form-control" id="description" placeholder="enter capstone description" v-model="capstone.description">
          </div> 
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="job_title">URL:</label>
            <input type="string" class="form-control" id="url" placeholder="enter capstone url" v-model="capstone.url">
          </div> 
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="company_name">Screenshot:</label>
            <input type="string" class="form-control" id="screenshot" placeholder="enter screenshot url" v-model="capstone.screenshot">
          </div> 
        </div>
      </form><br>
    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      student:{},
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
      skills: [ 
        {
          name: "javascript"
        }, 
        {
          name: "sql"
        },
        {
          name: "ruby"
        },
        {
          name: "postico"
        }
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
    };
  },
  created: function() {
    axios.get("/api/students/1").then(response => {
      console.log(response.data);
      this.student = response.data;
    });
  },
  methods: {
  }
};
</script>