<!-- src/App.vue -->
<template>
  <div id="Main">
    <Main />
    
  </div>
</template>

<script>
import Main from './components/Main.vue'

export default {
  name: 'App',
  components: {
    Main
  }
}
</script>

<style>
/* Corrected font import with proper syntax */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap');

body, html {
  font-family: 'Inter', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #0C0C0C;
  color: white;
}

#Main {
  width: 100%;
  max-width: 100%;
  margin: 0;
  box-sizing: border-box;
}
</style>
