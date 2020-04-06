<template>
  <div id="app">
    <Navbar />
    <Home/>
  </div>
</template>
<script>
 import Home from './components/Home.vue'
  import Navbar from './components/Navbar.vue';  
  export default {
    name: 'navbar',
    components: {
      Navbar,
      Home
    }
  }
</script>