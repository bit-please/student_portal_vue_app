<template>
  <div class="resumes-edit">

    
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

  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
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
  },
  methods: {
  }
};
</script>