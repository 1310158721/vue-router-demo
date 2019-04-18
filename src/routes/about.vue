<template>
  <div>
    <router-link to="/about/one">one</router-link>
    <router-link to="/about/two">two</router-link>
    <button @click="replace">replace</button>
    <router-view />
  </div>
</template>
<script>
export default {
  mounted () {
    console.log()
  },
  methods: {
    replace () {
      this.$router.history.replace('/about/one', function () {
        console.log('151')
      }, function () {
        return false
      })
    }
  }
}
</script>
