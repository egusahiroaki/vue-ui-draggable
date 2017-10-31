<template>
  <div id="app" style="position: relative;">
    <div v-draggable style="background: cadetblue; width: 200px; height: 200px;">div1</div>
    <div v-draggable style="background: pink; left: 220px; width: 200px; height: 200px;">div2</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
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
