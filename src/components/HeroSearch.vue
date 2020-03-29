<template>
  <div id="search-component">
    <h4><label for="search-box">Hero Search</label></h4>

    <input id="search-box" />

    <ul class="search-result">
      <li>
        <router-link to="/">
          MyHero
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HeroSearch'
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
