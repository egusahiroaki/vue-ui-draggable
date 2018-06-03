<template>
  <div id="app" style="position: relative;">
<!-- 
    <div v-draggable @change="onChange" style="background: cadetblue; width: 200px; height: 200px;">div1</div>
    <div v-draggable style="background: pink; left: 220px; width: 200px; height: 200px;">div2</div>
 -->
    <ul>
      <li v-draggable="{ onUpdate: onUpdate }"
          v-for = "item in list"
          :key="item"
          style="background: pink; left: 220px; width: 200px; height: 200px;"
          @move="onChange"
      >{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
  data () {
    return {
      list: ['Foo', 'Bar', 'Baz']
    }
  },
  methods: {
    onChange (event) {
      console.log(event)
    }
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
