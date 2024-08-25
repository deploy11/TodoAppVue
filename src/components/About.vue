<template>
  <div class="about">
    <h1>About Page</h1>
    <p>This is the About page</p>
    <router-link to="/" class="back-link">Back to Home</router-link>
  </div>
</template>

<style scoped>
.about {
  text-align: center;
  padding: 20px;
}

.back-link {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #1976D2;
  color: white;
  border-radius: 5px;
  text-decoration: none;
}

.back-link:hover {
  background-color: #155a8a;
}
</style>
