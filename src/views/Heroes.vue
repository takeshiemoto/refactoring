<template>
  <div>
    <h2>My Heroes</h2>
    <div>
      <label
        >Hero name:
        <input v-model="addHeroName" />
      </label>
      <button @click="addHero()">
        add
      </button>
    </div>
    <HeroList>
      <HeroListItem
        v-for="hero in heroes"
        :hero="hero"
        v-bind:key="hero.id"
        @delete="deleteHero($event)"
      ></HeroListItem>
    </HeroList>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Hero } from '@/entities/hero.entity';
import HeroService from '@/services/hero.service';
import HeroList from '@/components/HeroList.vue';
import HeroListItem from '@/components/HeroListItem.vue';

export default Vue.extend({
  name: 'heroes',
  components: {
    HeroList,
    HeroListItem
  },
  data(): { heroService: HeroService; heroes: Hero[]; addHeroName: string } {
    return {
      heroService: HeroService.getInstance(),
      heroes: [],
      addHeroName: ''
    };
  },
  created(): void {
    this.getHeroes();
  },
  methods: {
    async getHeroes() {
      this.heroes = await this.heroService.getAll();
    },
    async addHero() {
      await this.heroService.addHero(this.addHeroName);
      await this.getHeroes();
      this.addHeroName = '';
    },
    async deleteHero({ id }: Hero) {
      await this.heroService.deleteHero(id);
      await this.getHeroes();
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
  cursor: pointer;
  cursor: hand;
  font-family: Arial;
}
</style>
