<template>
  <div id="search-component">
    <h4><label for="search-box">Hero Search</label></h4>

    <input id="search-box" v-model="terms" />
    <ul class="search-result">
      <!-- TODO: heroesがanyになる -->
      <li v-for="hero in heroes" v-bind:key="hero.id">
        <router-link :to="{ name: 'heroDetail', params: { id: hero.id } }">
          {{ hero.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HeroService from '@/services/hero.service';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  pluck,
  switchMap
} from 'rxjs/operators';

export default Vue.extend({
  name: 'HeroSearch',
  data(): { heroService: HeroService; terms: string } {
    return {
      heroService: HeroService.getInstance(),
      terms: ''
    };
  },
  subscriptions() {
    return {
      heroes: this.$watchAsObservable('terms').pipe(
        pluck('newValue'),
        debounceTime(300),
        distinctUntilChanged(),
        map(term => term.toLowerCase()),
        switchMap(term => HeroService.getInstance().searchHero(term))
      )
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
