<template>
  <NavMain />
  <RouterView
    :movies="movies"
    :toggleForm="toggleMovieForm"
    :showAdd="showAdd"
    :addInv="addMovie"
    :remove="removeMovie"
    :toggleUpdateForm="toggleUpdate"
    :showUpdate="showUpdate"
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
  props: ['addInv', 'toggleForm', 'toggleUpdateForm', 'remove'],
  data () {
    return {
      movies: [],
      showAdd: false,
      showUpdate: false
    }
  },
  methods: {
    toggleMovieForm () {
      if (this.showUpdate === true) {
        this.showUpdate = false
      } else {
        this.showAdd = !this.showAdd
      }
    },
    addMovie (movie) {
      this.movies.push(movie)
      console.log('Méthode addMovie appelée dans App.vue')
      this.toggleMovieForm()
    },
    removeMovie (movieId) {
      this.movies = this.movies.filter(movie => movie.id !== movieId)
    },
    toggleUpdate () {
      console.log('toggleUpdate appelée dans App.vue')
      this.showUpdate = !this.showUpdate
    }
  }
}

</script>
