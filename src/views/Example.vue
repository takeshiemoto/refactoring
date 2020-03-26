<template>
  <div>
    <h2>Example</h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Example',
  /** Lifecycle hooks */
  beforeCreate() {
    console.log('BeforeCreate');
  },
  created() {
    console.log('Created');
  },
  beforeMount(): void {
    console.log('Before Mount');
  },
  beforeUpdate(): void {
    console.log('Before Update');
  },
  updated(): void {
    console.log('Updated');
  },
  destroyed(): void {
    console.log('Destroy');
  }
});
</script>

<style scoped></style>
