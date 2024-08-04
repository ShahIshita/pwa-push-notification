<template>
  <div id="app">
    <header>
      <h1>Welcome to My PWA App</h1>
    </header>
    <main>
      <p>{{ message }}</p>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const message = ref('Hello, PWA with Vue 3 and Vite!');
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
