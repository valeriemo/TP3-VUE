<template>
  <div class="max-w-md mx-auto">
    <h1 class="uppercase text-lg text-center text-white font-semibold bg-[#5889c1] p-4 w-full rounded-md mb-5">{{ movie.title }}</h1>
    <img
      :src="movie.img ? movie.img : ''"
      alt="Affiche du film"
      class="w-full h-full object-cover object-center"
    />
    <div class="p-6" v-if="movie">
      <p class="text-gray-300 mb-2">Année: {{ movie.year }}</p>
      <p class="text-gray-300 mb-4">Directeur: {{ movie.director }}</p>
    </div>
    <router-link :to="{ name: 'films' }" class="block btn-3 cursor-pointer text-xl text-center">Retour à la liste des films</router-link>
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
