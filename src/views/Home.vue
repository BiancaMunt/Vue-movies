<template>
  <div class="home">
  <span>tv</span>Shows
  </div>
</template>

<script>

export default {
  name: "Home",
  created() {
    this.$store.dispatch('getAllData')
  }
}

</script>
