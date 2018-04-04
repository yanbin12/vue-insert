<template>
  <div id="app">
         <Insert/>
  </div>
</template>

<script>
import Insert from './components/Insert.vue'
export default {
  name: 'app',
  components: {
Insert
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
