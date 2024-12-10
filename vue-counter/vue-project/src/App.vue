<script setup>
import { ref } from 'vue';
const count=ref(0);
</script>

<template>
<main>
  <div>
    <h1>The Count is:</h1>
    <h3>{{ count }}</h3>
    <button @click="count--">-</button>
    <button @click="count++">+</button>
  </div>
</main>
</template>

<style scoped>
main{
background-color: rgb(127, 167, 154);
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
width: 100vw;
}
div{
  text-align: center;
}
</style>

