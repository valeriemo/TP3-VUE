<template>
  <NavBar />
  <RouterView
    :movies="movies"
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
  }
}
</script>
