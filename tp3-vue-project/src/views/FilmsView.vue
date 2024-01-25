<template>
  <main className="flex-1">
    <HeaderHome
    :showAdd='showAdd'
    @toggleForm='toggleForm'
    />
  <AddMovie
  v-if="showAddMovie && !showUpdateMovie"
  @onAdd="addMovie"
  @setShowAddMovie="toggleAddMovie"
  />

  <UpdateMovie
  v-if="showUpdateMovie && !showAddMovie" :movieData="editMovieData"
  @setShowUpdateMovie="toggleUpdateMovie"
  @onUpdate="onUpdate"
  />

  <section className="my-6">
    <h2 className="text-2xl font-bold text-white mt-5 mb-5 text-center">
      Vos films
    </h2>
  <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-20">
    <table className="w-full text-sm text-left rtl:text-right text-gray-300">
      <thead className="text-xs text-gray-800 uppercase bg-[#6290C3]">
        <tr>
          <th scope="col" className="px-6 py-3">
              Titre
          </th>
          <th scope="col" className="px-6 py-3">
              Année
          </th>
          <th scope="col" className="px-6 py-3">
              Directeur
          </th>
          <th scope="col" className="px-6 py-3">
              Genre
          </th>
          <th scope="col" className="px-6 py-3">
              Rating
          </th>
          <th scope="col" className="px-6 py-3">
              Coup de coeur
          </th>
          <th scope="col" className="px-6 py-3">
              Suppression
          </th>
          <th scope="col" className="relative px-6 py-3">
              Modifier
          </th>
        </tr>
      </thead>
      <tbody>
        <MovieShow v-for="movie in movies"
          :key="movie.id"
          :movie="movie"
          @onDelete="deleteMovie"
          @onToggle="toggleFavorite"
          @onEdit="editMovie"
          />
      </tbody>
  </table>
</div>
</section>
</main>
</template>

<script>
import HeaderHome from '@/components/HeaderHome.vue'
import AddMovie from '@/components/AddMovie.vue'
import UpdateMovie from '@/components/UpdateMovie.vue'
import MovieShow from '@/components/MovieShow.vue'

export default {
  name: 'FilmsView',
  components: {
    HeaderHome,
    AddMovie,
    UpdateMovie,
    MovieShow
  },
  props: ['movies'],
  data () {
    return {
      showAdd: false,
      showAddMovie: false,
      showUpdateMovie: false,
      editMovieData: null
    }
  },
  methods: {
    toggleForm () {
      this.showAdd = !this.showAdd
    }
  }
}
</script>
