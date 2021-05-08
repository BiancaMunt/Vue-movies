<template>
  <div>
    <div class="shows-container mt-4" v-for="genre in getGenres" :key="genre">
      <h3 class="bg-info text-white" v-if="$store.state.isMain">{{ genre }}</h3>
      <ul class="shows-list overflow-auto mt-2 pl-0">
        <li class="show-item" v-for="show in getSearchedShows" :key="show.id">
          <article v-if="show.genres.includes(genre)">
            <div class="text-info mb-2">{{ show.name }}</div>
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
    name:"Shows",
    async created() {
      await this.getAllData();  
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
    list-style: none;

    li {
      display: table-cell;
    }

    article {
      width: 250px;
    }
  }

</style>