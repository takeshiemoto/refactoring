<template>
  <ul class="heroes">
    <slot></slot>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HeroList'
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.heroes {
  margin: 0 0 2em 0;
  list-style-type: none;
  padding: 0;
  width: 15em;
}
</style>
