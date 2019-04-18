<template>
  <ul>
    <li>
      <router-link to='/index' tag="div">Index</router-link>
    </li>
    <li>
      <router-link to="/about" tag="div">About</router-link>
    </li>
    <li>
      <router-link to="/other" tag="div">Other</router-link>
    </li>
  </ul>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
  .router-link-active {
    color: red; font-weight: bold;
  }
  ul {
    list-style: none;
    li {
      width: 100%; height: 40px; border-bottom: 1px black solid;
      div {
        width: 100%; height: 100%; line-height: 40px; background-color: azure; text-align: center;
      }
    }
  }
</style>



