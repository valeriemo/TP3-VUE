<template>
    <h1 class="uppercase text-lg text-center text-white font-semibold bg-[#5889c1] p-4 w-full rounded-md mb-5">
        Saisir un nouveau film
    </h1>
    <form class="max-w-md mx-auto" @submit.prevent="submitForm">
        <div class="relative z-0 w-full mb-5 group">
            <input
                type="text"
                name="title"
                class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-[#5889c1] peer"
                placeholder="Titre"
                v-model="movie.title"
                required
            />
        </div>
        <div class="relative z-0 w-full mb-5 group">
            <input
                type="text"
                name="year"
                v-model="movie.year"
                class="block py-2.5 px-0 w-full text-white text-sm bg-transparent border-0 border-b-2 border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-[#5889c1] peer"
                placeholder="Année"
                :max='thisYear'

            />
        </div>
        <div class="relative z-0 w-full mb-5 group">
            <input
                type="text"
                name="director"
                v-model="movie.director"
                class="block py-2.5 px-0 w-full text-white text-sm bg-transparent border-0 border-b-2 border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-[#5889c1] peer"
                placeholder="Directeur"
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
                v-model="movie.genre"
                placeholder="Genre"
            />
        </div>
        <Button type="submit" @click="submitForm" class="btn-1">Enregistrer</Button>
    </form>
</template>

<script>
import FavoriteCheckbox from './FavoriteCheckbox.vue'
import MovieDataService from '@/services/MovieDataService'

export default {
  name: 'AddMovie',
  components: {
    FavoriteCheckbox
  },
  props: ['addInv'],
  data () {
    return {
      movie: {
        title: '',
        year: '',
        director: '',
        genre: []
      }
    }
  },
  methods: {
    submitForm () {
      console.log(this.movie)
      MovieDataService.create(this.movie)
        .then((response) => {
          this.movie.id = response.data.id
          this.addInv(this.movie)
        })
        .catch((e) => {
          console.log(e)
          this.message = e.response.data.message
        })
    }
  }
}
</script>
