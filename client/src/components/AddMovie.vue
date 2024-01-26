<template>
  <section class="bg-gray-800 max-w-md px-10 py-8 mx-auto rounded-md">
    <h1 class="max-w-md mx-auto uppercase text-lg text-center text-white font-semibold bg-[#5889c1] p-4 w-full rounded-md mb-5">
        Saisir un nouveau film
    </h1>
    <form class="max-w-md mx-auto" @submit.prevent="submitForm">
        <div class="relative z-0 w-full mb-5 group">
          <label
                For="title"
                class="text-md font-bold text-gray-100"
            >Titre :</label>
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
          <label
                For="year"
                class="text-md font-bold text-gray-100"
            >Année :</label>
            <input
                type="text"
                name="year"
                v-model="movie.year"
                class="block py-2.5 px-0 w-full text-white text-sm bg-transparent border-0 border-b-2 border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-[#5889c1] peer"
                placeholder="Année"
                required
            />
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <label
                For="director"
                class="text-md font-bold text-gray-100"
            >Directeur :</label>
            <input
                type="text"
                name="director"
                v-model="movie.director"
                class="block py-2.5 px-0 w-full text-white text-sm bg-transparent border-0 border-b-2 border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-[#5889c1] peer"
                placeholder="Directeur"
                required
            />
        </div>
        <div class="mb-5">
            <label
                For="genre"
                class="text-md font-bold text-gray-100"
            >Genre :</label>
            <input
                id="genre"
                name="genre"
                class="block py-2.5 px-0 w-full text-white text-sm bg-transparent border-0 border-b-2 border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-[#5889c1] peer"
                v-model="movie.genre"
                placeholder="Genre"
                required
            />
        </div>
        <div class="mb-5">
            <label
                For="img"
                class="text-md font-bold text-gray-100"
            >Img: <span class="text-xs text-gray-400">Copier le lien de l'image</span></label>
            <input
                id="img"
                name="img"
                class="block py-2.5 px-0 w-full text-white text-sm bg-transparent border-0 border-b-2 border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-[#5889c1] peer"
                v-model="movie.img"
                placeholder="Image lien"
                required
            />
        </div>
        <button type="submit" class="btn-1">Enregistrer</button>
    </form>
  </section>
</template>

<script>
import MovieDataService from '@/services/MovieDataService'

export default {
  name: 'AddMovie',
  props: ['addInv'],
  data () {
    return {
      movie: {
        title: '',
        year: '',
        director: '',
        genre: [],
        img: ''
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
          this.message = e.response.data.message
        })
    }
  }
}
</script>
