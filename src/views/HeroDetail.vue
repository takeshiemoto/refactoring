<template>
  <div>
    <h1>HeroDetail</h1>
    <div v-if="hero">
      <h2>{{ hero.name }} Details</h2>
      <div><span>id: </span>{{ hero.id }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Hero } from '@/entities/hero.entity';
import HeroService from '@/services/hero.service';
export default Vue.extend({
  name: 'HeroDetail',
  data(): { hero: Hero | undefined } {
    return {
      hero: undefined
    };
  },
  created(): void {
    const { id } = this.$route.params;
    this.getHero(id);
  },
  methods: {
    async getHero(id: string) {
      const heroService = HeroService.getInstance();
      this.hero = await heroService.getHeroById(Number(id));
    }
  }
});
</script>

<style scoped></style>
