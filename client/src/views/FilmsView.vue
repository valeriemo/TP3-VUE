<template>
  <main class="flex-1">
    <HeaderMain
    :showAdd='showAdd'
    :toggleForm='toggleForm'
    />
    <AddMovie
    v-if="showAdd"
    :addInv="addInv"
    />
  <section class="my-6">
    <h2 class="text-2xl font-bold text-white mt-5 mb-5 text-center">
      Vos films
    </h2>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg mx-20">
    <table class="w-full text-sm text-left rtl:text-right text-gray-300">
      <thead class="text-xs text-gray-800 uppercase bg-[#6290C3]">
        <tr>
          <th scope="col" class="px-6 py-3">
              Titre
          </th>
          <th scope="col" class="px-6 py-3">
              Année
          </th>
          <th scope="col" class="px-6 py-3">
              Directeur
          </th>
          <th scope="col" class="px-6 py-3">
              Genre
          </th>
          <th scope="col" class="px-6 py-3">
              Suppression
          </th>
          <th scope="col" class="relative px-6 py-3">
              Modifier
          </th>
        </tr>
      </thead>
      <tbody>
        <MovieShow
          v-for="movie in movies"
          :key="movie.id"
          :movie="movie"
          :deleteMovie="movieDelete"
          :toggleForm="toggleForm"
          />
      </tbody>
  </table>
</div>
</section>
</main>
</template>

<script>
import HeaderMain from '@/components/HeaderMain.vue'
import AddMovie from '@/components/AddMovie.vue'
import MovieShow from '@/components/MovieShow.vue'

export default {
  name: 'FilmsView',
  components: {
    HeaderMain,
    AddMovie,
    MovieShow
  },
  props: ['movies', 'toggleForm', 'showAdd', 'addInv'],
  methods: {
    movieDelete (movieId) {
    }
  }
}
</script>
