<template>
  <div class="search">
    <input
      type="text"
      v-model="query"
      @keypress.enter="searchShows(query)"
      placeholder="Search your favorite show"
    />
    <button @click="searchShows(query)">Search</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "Search",
  data(){
    return {
      query: ''
    }
  },
  methods: {
  ...mapActions([
    'searchShows'
    ])
  }, 
}
  
</script>

<style lang="scss" scoped>

</style>