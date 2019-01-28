<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import robot from 'robotjs'

export default {
  name: 'robotjs-with-electron-vue',
  mounted () {
    console.log(robot)
  }
}
</script>

<style>
  /* CSS */
</style>
