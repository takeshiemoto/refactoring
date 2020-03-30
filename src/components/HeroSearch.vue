<template>
  <div id="search-component">
    <h4><label for="search-box">Hero Search</label></h4>

    <input id="search-box" v-model="terms" />
    <ul class="search-result">
      <li v-for="hero in heroes" v-bind:key="hero.id">
        <router-link to="/">
          {{ hero }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Hero } from '@/entities/hero.entity';
import HeroService from '@/services/hero.service';

export default Vue.extend({
  name: 'HeroSearch',
  data(): { terms: string; heroes: Hero[]; heroService: HeroService } {
    return {
      heroService: HeroService.getInstance(),
      terms: '',
      heroes: []
    };
  },
  watch: {
    terms(next): void {
      this.search(next);
    }
  },
  methods: {
    search(terms: string): void {
      this.heroService.searchHero(terms);
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
