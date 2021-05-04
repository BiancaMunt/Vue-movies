<template>
  <div class="home">
  <h1><span>tv</span>Shows</h1>
  <ul class="shows-list" v-for="show in this.$store.state.shows" :key="show.id">
    <li>
      {{ show.rating.average }}
      {{ show.name }}
    </li>
  </ul>
  </div>
</template>

<script>

export default {
  name: "Home",
}

</script>
