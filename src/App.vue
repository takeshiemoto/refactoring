<template>
  <div>
    <h1>{{ title }}</h1>
    <nav>
      <router-link to="/">Dashboard</router-link>
      <router-link to="/heroes">Heroes</router-link>
      <router-link to="/hero/new">New Hero</router-link>
      <router-link to="/example/1">Example</router-link>
    </nav>
    <router-view />
  </div>
</template>
<script lang="ts">
export default {
  name: 'app',
  data() {
    return {
      title: 'Tour of heroes'
    };
  }
};
</script>
<style scoped>
/* AppComponent's private CSS styles */
h1 {
  font-size: 1.2em;
  margin-bottom: 0;
}
h2 {
  font-size: 2em;
  margin-top: 0;
  padding-top: 0;
}
nav a {
  padding: 5px 10px;
  text-decoration: none;
  margin-top: 10px;
  margin-left: 10px;
  display: inline-block;
  background-color: #eee;
  border-radius: 4px;
}
nav a:visited,
a:link {
  color: #334953;
}
nav a:hover {
  color: #039be5;
  background-color: #cfd8dc;
}
nav a.active {
  color: #039be5;
}
</style>
