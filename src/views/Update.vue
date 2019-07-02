<template>
  <div class="update">

    
    <h1 class="text-center">Update Experiences</h1>
    
    <div v-for="experience in experiences">
      <form v-on:submit.prevent="submit()">
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="start_date">Start Date:</label>
            <input type="string" class="form-control" id="start_date" placeholder="6/14/2018" v-model="experience.start_date">
          </div> 
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="end_date">End Date:</label>
            <input type="string" class="form-control" id="end_date" placeholder="10/22/2018" v-model="experience.end_date">
          </div> 
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="job_title">Job Title:</label>
            <input type="string" class="form-control" id="job_title" placeholder="cashier" v-model="experience.job_title">
          </div> 
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="company_name">Company Name:</label>
            <input type="string" class="form-control" id="company_name" placeholder="Joshua's Bagels" v-model="experience.company_name">
          </div> 
        </div>
         <div class="form-row">
          <div class="form-group col-md-6">
            <label for="details">Company Name:</label>
            <input type="text" class="form-control" id="details" placeholder="Blah blah blah blah blah. BAGELS!!! Blah blah blah." v-model="experience.details">
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
      experiences: [],
      educations: [],
      skills: [],
      capstones: []
    };
  },
  created: function() {
  },
  methods: {
  }
};
</script>