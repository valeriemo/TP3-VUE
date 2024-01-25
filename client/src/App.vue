<template>
  <NavBar />
  <RouterView
    :movies="movies"
    @addMovie="addMovie"
    @onDelete="deleteMovie"
    @onToggle="toggleFavorite"
    @onEdit="editMovie"
  />
  <FooterMain />
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import FooterMain from '@/components/FooterMain.vue'
import movies from '@/assets/movies.json'

export default {
  name: 'App',
  components: {
    NavBar,
    FooterMain
  },
  data () {
    return {
      movies: movies
    }
  },
  methods: {
    addMovie(newMovie) {
      // Logique pour ajouter un nouveau film dans la liste
      this.movies.push(newMovie)
    },
    deleteMovie (movieId) {
      // Logique de suppression du film avec l'ID movieId
      console.log(`Supprimer le film avec l'ID ${movieId}`)
      this.movies = this.movies.filter(movie => movie.id !== movieId)
    },
    toggleFavorite (movieId) {
      // Logique pour basculer l'état "favori" d'un film
      const index = this.movies.findIndex(movie => movie.id === movieId)
      if (index !== -1) {
        this.movies[index].favorite = !this.movies[index].favorite
      }
    },
    editMovie (movie) {
      const index = this.movies.findIndex(movie => movie.id === updatedMovie.id)
      if (index !== -1) {
        this.movies.splice(index, 1, updatedMovie)
      }
    }
  }
}
</script>
