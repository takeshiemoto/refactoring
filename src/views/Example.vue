<template>
  <div>
    <h2>Example</h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { exampleGuard } from '@/guards/example.guard';
export default Vue.extend({
  name: 'Example',
  beforeRouteEnter: exampleGuard,
  beforeRouteUpdate: exampleGuard,
  beforeDestroy(): void {
    console.log('[Component] BeforeRouteDestroy');
  },

  /** Lifecycle hooks */
  beforeCreate() {
    console.log('BeforeCreate');
  },
  created() {
    console.log('Created');

    /** クエリパラメータ取得 */
    const { params } = this.$route;
    console.log(params);
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
