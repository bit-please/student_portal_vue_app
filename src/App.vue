<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">Student Portal</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/resumes/1" class="nav-item nav-link">View Resume</router-link> 
          <router-link to="/resumes/1/edit" class="nav-item nav-link">Edit Resume</router-link> 
          <router-link to="/login" class="nav-item nav-link">Login</router-link> 
          <router-link to="/logout" class="nav-item nav-link">Logout</router-link> 
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style>

/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}*/
</style>
