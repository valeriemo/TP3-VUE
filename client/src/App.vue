<template>
  <NavMain />
  <RouterView
    :movies="movies"
    :toggleForm="toggleMovieForm"
    :showAdd="showAdd"
    :addInv="addMovie"
    :remove="removeMovie"
    :updateInv="updateMovie"
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
  props: ['addInv', 'toggleForm', 'remove'],
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
      console.log('Méthode addMovie appelée dans App.vue')
      this.toggleMovieForm()
    },
    removeMovie (movieId) {
      this.movies = this.movies.filter(movie => movie.id !== movieId)
    },
    updateMovie (index, movie) {
      this.movies[index].title = movie.title
      this.movies[index].year = movie.year
      this.movies[index].director = movie.director
      this.movies[index].genre = movie.genre
      console.log('updateMovie appelée dans App.vue')
      this.$router.push({ name: 'films' })
    }
  }
}

</script>
