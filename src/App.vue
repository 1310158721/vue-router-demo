<template>
  <div class="wrapper">
    <header></header>
    <main>
      <div class="left">
        <Nav />
      </div>
      <div class="right">
        <router-view style="background: lightgreen; height: 100%;"></router-view>
      </div>
    </main>
  </div>
</template>
<script>
import Nav from './components/nav'
export default {
  components: {
    Nav
  }
}
</script>
<style>
  .wrapper {
    width: 100vw; height: 100vh; background-color: aquamarine; display: flex; flex-direction: column; overflow: hidden;
  }
  header {
    width: 100%; height: 68px; background-color: aqua;
  }
  main {
    width: 100%; flex: 1; background-color: aliceblue; display: flex; flex-direction: row;
  }
  .left {
    width: 200px; height: 100%; background-color: bisque;
  }
  .right {
    flex: 1; height: 100%;
  }
</style>
