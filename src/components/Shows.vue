<template>
  <div>
    <div class="" v-for="genre in getGenres" :key="genre">
    <h3 v-if="$store.state.isMain">{{ genre }}</h3>
    <ul class="shows-list">
      <li class="show-item" v-for="show in getSearchedShows" :key="show.id">
        <article class="" v-if="show.genres.includes(genre)">
        <div class="text-wrap mb-2">{{ show.name }}</div>
        <router-link :to="`/${show.id}`">
          <img :src="show.image.medium" :alt="show.name">
        </router-link> 
        </article>
      </li>
    </ul>
  </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

  export default {
    name:'Shows',
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
        'getGenres',
      ]),
    }  
  }
</script>

<style lang="scss" scoped>
  .shows-list {
    margin-top: 2rem;
    list-style: none;
    width: 100%;

    li {
      display: table-cell;
    }

    img {
    background: #999;
    }
    
    article {
      width: 250px;
    }
  }

</style>