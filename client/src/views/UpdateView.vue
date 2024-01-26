<template>
  <HeaderMain
  :showAdd='showAdd'
  :toggleForm='toggleForm'
  />
    <h1 class="uppercase text-lg text-center text-white font-semibold bg-[#5889c1] p-4 w-full rounded-md mb-5">
        Modifier un film
    </h1>
    <form class="max-w-md mx-auto">
        <div class="relative z-0 w-full mb-5 group">
            <input
                type="text"
                name="title"
                class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-[#5889c1] peer"
                placeholder="Titre"
                required
                v-model="movie.title"
            />
        </div>
        <div class="relative z-0 w-full mb-5 group">
            <input
                type="text"
                name="year"
                class="block py-2.5 px-0 w-full text-white text-sm bg-transparent border-0 border-b-2 border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-[#5889c1] peer"
                placeholder="Année"
                required
                v-model="movie.year"
            />
        </div>
        <div class="relative z-0 w-full mb-5 group">
            <input
                type="text"
                name="director"
                class="block py-2.5 px-0 w-full text-white text-sm bg-transparent border-0 border-b-2 border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-[#5889c1] peer"
                placeholder="Directeur"
                required
                v-model="movie.director"
            />
        </div>
        <div class="mb-5">
            <label
                For="genre"
                class="text-sm font-medium text-gray-300"
            >Genre:</label>
            <input
                id="genre"
                name="genre"
                class="block py-2.5 px-0 w-full text-white text-sm bg-transparent border-0 border-b-2 border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-[#5889c1] peer"
                placeholder="Genre"
                required
                v-model="movie.genre"
            />
        </div>
        <div class="mb-5">
            <label
                For="img"
                class="text-sm font-medium text-gray-300"
            >Img: <small>copier le lien de l'image</small></label>
            <input
                id="img"
                name="img"
                class="block py-2.5 px-0 w-full text-white text-sm bg-transparent border-0 border-b-2 border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-[#5889c1] peer"
                placeholder="img"
                required
                v-model="movie.img"
            />
        </div>
        <button type="submit" @click.prevent="updateMovie" class="btn-1">Enregistrer</button>
    </form>
    <router-link :to="{ name: 'films' }" class="btn-1 cursor-pointer text-xl">Annuler la modification</router-link>
</template>

<script>
import MovieDataService from '@/services/MovieDataService'
import HeaderMain from '@/components/HeaderMain.vue'

export default {
  props: ['updateInv', 'movies', 'showAdd', 'toggleForm', 'remove', 'addInv'],
  components: {
    HeaderMain
  },
  data () {
    return {
      id: this.$route.params.id,
      movie: {}
    }
  },
  methods: {
    updateMovie () {
      MovieDataService.update(this.id, this.movie)
        .then(response => {
          this.updateInv(this.movie)
        })
    }
  },
  mounted () {
    MovieDataService.get(this.id)
      .then(response => {
        this.movie = response.data
      })
      .catch(e => {
        console.log(e)
      })
  }
}
</script>
