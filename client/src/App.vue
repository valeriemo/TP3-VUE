<template>
  <NavMain />
  <RouterView
    :movies="movies"
    :toggleForm="toggleMovieForm"
    :showAdd="showAdd"
    :addInv="addMovie"
    :remove="removeMovie"
    :updateInv="movieUpdate"
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
  props: ['addInv', 'toggleForm', 'remove', 'updateInv'],
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
    addMovie (movie) {
      this.movies.push(movie)
      this.toggleMovieForm()
    },
    removeMovie (movieId) {
      this.movies = this.movies.filter(movie => movie.id !== movieId)
    },
    movieUpdate (updatedMovie) {
      this.movies = this.movies.map(movie => {
        if (movie.id === updatedMovie.id) {
          return { ...movie, ...updatedMovie }
        } else {
          return movie
        }
      })
      this.$router.push({ name: 'films' })
    }
  }
}

</script>
