<template>
  <div class="home">
    <h1>Home Page</h1>
    <div class="links">
      <router-link to="/todos" class="link">Go to Todo List</router-link>
      <router-link to="/about" class="link">About</router-link>
    </div>
  </div>
</template>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
}

.links {
  margin-top: 20px;
}

.link {
  display: inline-block;
  margin: 0 10px;
  padding: 10px 20px;
  background-color: #1976D2;
  color: white;
  border-radius: 5px;
  text-decoration: none;
}

.link:hover {
  background-color: #155a8a;
}
</style>
