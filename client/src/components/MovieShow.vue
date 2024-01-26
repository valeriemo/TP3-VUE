<template>
  <tr class="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
    <th scope="row" class="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white">
      <router-link :to="{ name: 'film-show', params: { id: movie.id } }" class="cursor-pointer text-xl">{{ movie.title }}</router-link></th>
    <td class="px-6 py-4">{{ movie.year }}</td>
    <td class="px-6 py-4">{{ movie.director }}</td>
    <td class="px-6 py-4">{{ movie.genre }}</td>
    <td class="px-6 py-4 text-right">
        <span @click="deleteMovie" class="cursor-pointer text-xl">❌</span>
    </td>
    <td class="px-6 py-4 text-right">
      <router-link :to="{ name: 'film-edit', params: { id: movie.id } }" class="cursor-pointer text-xl">✏️</router-link>
    </td>
  </tr>
</template>

<script>
import movieDataService from '@/services/MovieDataService.js'
export default {
  props: ['movie', 'remove'],
  methods: {
    deleteMovie () {
      console.log(this.movie.id)
      movieDataService.delete(this.movie.id)
        .then(response => {
          this.remove(this.movie.id)
        })
        .catch(e => {
          console.log(e)
        })
    }
  }
}
</script>
