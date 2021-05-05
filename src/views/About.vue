<template>
  <div class="about">
    <div>
      <h3>{{show.name}}</h3>
      <p>Average Rating: {{show.rating.average}}</p>
      <div v-html="show.summary"></div>
    </div>
    <img :src="show.image.medium" :alt="show.name">
  </div>
</template>

<script>
import AppServices from '../services/AppServices'

export default {
  data () {
    return {
      show: null
    }
  },
  mounted () {
    AppServices.getOneShow(this.$route.params.id)
      .then(data => (this.show = data))
  }
}
</script>
