<template>
  <li>
    <router-link :to="{ name: 'heroDetail', params: { id: hero.id } }">
      <span class="badge">{{ hero.id }}</span> {{ hero.name }}
    </router-link>
    <button @click="deleteHero(hero)" class="delete" title="delete hero">
      x
    </button>
  </li>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { Hero } from '@/entities/hero.entity';

export default Vue.extend({
  name: 'HeroListItem',
  props: {
    hero: {
      type: Object as PropType<Hero>
    }
  },
  methods: {
    deleteHero(hero: Hero): void {
      this.$emit('delete', hero);
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  position: relative;
  cursor: pointer;
  background-color: #eee;
  margin: 0.5em;
  padding: 0.3em 0;
  height: 1.6em;
  border-radius: 4px;
}

li:hover {
  color: #607d8b;
  background-color: #ddd;
  left: 0.1em;
}

a {
  color: #333;
  text-decoration: none;
  position: relative;
  display: block;
  width: 250px;
}

a:hover {
  color: #607d8b;
}

.badge {
  display: inline-block;
  font-size: small;
  color: white;
  padding: 0.8em 0.7em 0 0.7em;
  background-color: #405061;
  line-height: 1em;
  position: relative;
  left: -1px;
  top: -4px;
  height: 1.8em;
  min-width: 16px;
  text-align: right;
  margin-right: 0.8em;
  border-radius: 4px 0 0 4px;
}

button {
  background-color: #eee;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  cursor: hand;
  font-family: Arial;
}

button:hover {
  background-color: #cfd8dc;
}

button.delete {
  position: relative;
  left: 194px;
  top: -32px;
  background-color: gray !important;
  color: white;
}
</style>
