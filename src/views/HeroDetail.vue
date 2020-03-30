<template>
  <div v-if="hero">
    <h1>HeroDetail</h1>
    <div>
      <h2>{{ hero.name }} Details</h2>
      <div><span>id: </span>{{ hero.id }}</div>
    </div>
    <div>
      <label
        >name:
        <input v-model="hero.name" placeholder="name" />
      </label>
      <button @click="updateHero(hero)">
        Update
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Hero } from '@/entities/hero.entity';
import HeroService from '@/services/hero.service';
export default Vue.extend({
  name: 'HeroDetail',
  data(): { hero: Hero | undefined; heroService: HeroService } {
    return {
      hero: undefined,
      heroService: HeroService.getInstance()
    };
  },
  created(): void {
    const { id } = this.$route.params;
    this.getHero(id);
  },
  methods: {
    async getHero(id: string) {
      this.hero = await this.heroService.getHeroById(Number(id));
    },
    async updateHero(hero: Hero) {
      const { id } = hero;
      await this.heroService.updateHero(id, hero);
      await this.$router.push('/heroes');
    }
  }
});
</script>

<style scoped>
button {
  background-color: #eee;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: hand;
  font-family: Arial;
}

button:hover {
  background-color: #cfd8dc;
}
</style>
