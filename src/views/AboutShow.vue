<template>
  <div class="about-show container">
    <div>
      <div class="card flex-md-row">
        <img class="card-image-left" :src="show.image.medium" :alt="show.name">
        <div class="card-body d-flex flex-column align-items-start">
          <h3>{{show.name}}</h3>
          <p class="text-justify">Average Rating: {{show.rating.average}}★</p>
          <p>Summary:</p>
          <div v-html="show.summary"></div>
          <a :href="show.officialSite" class="official-site" target="_blank">
            See official website
          </a>
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
import AppServices from '../services/AppServices';

export default {
  data () {
    return {
      show:{rating:{average:''}, image:{medium:''}}
    }
  },
  mounted () {
    AppServices.getOneShow(this.$route.params.id)
      .then((data) => (this.show = data))
  }
}
</script>

<style lang="scss" scoped>

  .official-site {
  text-decoration: none;
  }

</style>
