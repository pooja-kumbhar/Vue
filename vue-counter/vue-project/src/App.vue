<template>
  <vue-marquee :direction="'left'" :speed="50">
    <div class="list-item" v-for="(item, index) in items" :key="index">
      {{ item }}
    </div>
  </vue-marquee>
</template>

<script>
import VueMarquee from 'vue-marquee';

export default {
  components: {
    VueMarquee,
  },
  data() {
    return {
      items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
    };
  },
};
</script>

<style scoped>
.list-item {
  display: inline-block;
  min-width: 200px;
  height: 100px;
  background-color: #4caf50;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  border-radius: 8px;
}
</style>
