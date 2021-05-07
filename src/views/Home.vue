<template>
  <div class="home container-fluid">
  <h1><span>tv</span>Shows</h1>
    <Search />
    <Shows />
  </div>
</template>

<script>

import Search from '../components/Search';
import Shows from '../components/Shows';

export default {
  name: "Home",
  components: {
    Search,
    Shows
  },
}

</script>

<style lang="scss" scoped>

</style>
