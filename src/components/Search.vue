<template>
  <div class="search">
    <form class="search-form">
      <input
        id="input"
        type="text"
        class="mr-2 "
        v-model="query"
        @keypress.enter="searchShows(query)"
        placeholder="Search your favorite show"
      />
      <b-button class="sm" variant="info" @click="searchShows(query)">Search</b-button>
      <b-button class="sm ml-1" variant="info" @click="clearSearch()">Clear</b-button>
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
    ]),
    clearSearch(){
      this.query = '';
      this.searchShows('');
    }
  },
  computed: {
    ...mapGetters([
      'getSearchedShows',
    ])
  }
}
  
</script>

<style lang="scss" scoped>

  .search-form {
    display: flex;
    justify-content: center;
  }

</style>