<template>
  <div class="home container-fluid">
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
