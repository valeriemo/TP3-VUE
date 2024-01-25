<template>
  <NavMain />
  <RouterView
    :movies="movies"
    :toggleForm="toggleMovieForm"
    :showAdd="showAdd"
  />
  <FooterMain />
</template>

<script>
import NavMain from '@/components/NavMain.vue'
import FooterMain from '@/components/FooterMain.vue'
import MovieDataService from '@/services/MovieDataService.js'

export default {
  name: 'App',
  components: {
    NavMain,
    FooterMain
  },
  mounted () {
    MovieDataService.getAll()
      .then(response => {
        this.movies = response.data
      })
      .catch(error => {
        console.log('Erreur de fetching des données:', error.response)
      })
  },
  data () {
    return {
      movies: [],
      showAdd: false
    }
  },
  methods: {
    toggleMovieForm () {
      this.showAdd = !this.showAdd
    },
  }
}

</script>
