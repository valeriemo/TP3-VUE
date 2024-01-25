<template>
  <tr className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
    <th scope="row" className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white">
    {{ movie.title }}</th>
    <td class="px-6 py-4">{{ movie.year }}</td>
    <td class="px-6 py-4">{{ movie.director }}</td>
    <td class="px-6 py-4">{{ movie.genre }}</td>
    <td class="px-6 py-4" @dblclick="toggleFavorite">
        <span v-if="isFavorite" class="text-[#e9295c] text-xl cursor-pointer">❤️</span>
        <span v-else class="cursor-pointer">🤍</span>
    </td>
    <td class="px-6 py-4 text-right">
        <span @click="deleteMovie" class="cursor-pointer text-xl hover:text-[#ff7900]">❌</span>
    </td>
    <td class="px-6 py-4 text-right">
        <span @click="editMovie" class="cursor-pointer text-xl hover:text-[#BAFF29]">✏️</span>
    </td>
  </tr>
</template>

<script>
export default {
  props: ['movie', 'onDelete', 'onToggle', 'onEdit'],
  methods: {
    deleteMovie () {
      this.onDelete(this.movie.id)
    },
    toggleFavorite () {
      this.onToggle(this.movie.id)
    },
    editMovie () {
      this.onEdit(this.movie.id)
    }
  },
  computed: {
    isFavorite () {
      return this.movie.favorite === true
    }
  }
}
</script>
