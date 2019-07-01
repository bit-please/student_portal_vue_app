<template>
  <div class="users-show">
    

  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
  
    };
  },
  created: function() {
    axios.get("/api/users/" + this.$route.params.id).then(response => {
      this.user = response.data;
  },
  methods: {
    
    },
  submit: function(){
      
};
</script>

