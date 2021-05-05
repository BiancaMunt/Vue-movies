<template>
  <div class="home">
  <h1><span>tv</span>Shows</h1>
    <Search />
  <div>
    <ul class="shows-list">
      <li class="show-item" v-for="show in getSearchedShows" :key="show.id">
        <h4>{{ show.name }}</h4>
        <router-link :to="`/${show.id}`">
          <img :src="show.image.medium" :alt="show.name">
        </router-link> 
      </li>
    </ul>
  </div>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import Search from '../components/Search';

export default {
  name: "Home",
  components: {
    Search
  },
  created() {
     this.getAllData();
  },
  methods: {
  ...mapActions([
      'getAllData',
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
  .shows-list {
    margin-top: 2rem;
    list-style: none;
    display: table;
    width: 100%;
    li {
      display: table-cell;
    }
    img {
    display: block;
    text-align: center;
    margin: 0 5px;
    background: #999;
    }
  }

</style>
