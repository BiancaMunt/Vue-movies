<template>
  <div class="search">
    <form class="search-form">
      <input
        type="text"
        class="mr-2 "
        v-model="query"
        @keypress.enter="searchShows(query)"
        placeholder="Search your favorite show"
      />
      <b-button class="sm" variant="info" @click="searchShows(query)">Search</b-button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

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
  computed: {
    ...mapGetters([
      'getSearchedShows',
    ]),
  }
}
  
</script>

<style lang="scss" scoped>

  .search-form {
    display: flex;
    justify-content: center;
  }

</style>