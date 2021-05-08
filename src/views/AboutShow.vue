<template>
  <div class="about-show container">
    <div>
      <h3>{{show.name}}</h3>
      <div class="card flex-md-row">
        <img class="card-image-left" :src="show.image.medium" :alt="show.name">
        <div class="card-body d-flex flex-column align-items-start">
          <p>Average Rating: {{show.rating.average}}</p>
          <div v-html="show.summary"></div>
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
import AppServices from '../services/AppServices'

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
