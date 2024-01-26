<template>
  <div class="max-w-md mx-auto">
    <h1 class="uppercase text-xl text-center text-white font-semibold bg-[#5889c14b] p-4 w-full mb-5">{{ movie.title }}</h1>
    <img
      :src="movie.img ? movie.img : ''"
      alt="Affiche du film"
      class="w-full h-full object-cover object-center"
    />
    <div class="mt-5 p-6 bg-[#5889c14b]" v-if="movie">
      <p class="text-gray-300 mb-2">Année: <span class="font-bold">{{ movie.year }}</span></p>
      <p class="text-gray-300 mb-2">Directeur: <span class="font-bold">{{ movie.director }}</span></p>
      <p class="text-gray-300">Directeur: <span class="font-bold">{{ movie.genre }}</span></p>
    </div>
    <router-link :to="{ name: 'films' }" class="block btn-3 cursor-pointer text-xl text-center max-content">Retour à la liste des films</router-link>
  </div>
</template>

<script>
export default {
  name: 'ShowView',
  props: ['movies'],
  computed: {
    movie () {
      const movie = this.movies.find((movie) => {
        return movie.id === Number(this.$route.params.id)
      })
      return movie
    }
  }
}
</script>
