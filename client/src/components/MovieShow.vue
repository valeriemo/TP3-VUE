<template>
  <tr class="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
    <th scope="row" class="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white">
    {{ movie.title }}</th>
    <td class="px-6 py-4">{{ movie.year }}</td>
    <td class="px-6 py-4">{{ movie.director }}</td>
    <td class="px-6 py-4">{{ movie.genre }}</td>
    <td class="px-6 py-4 text-right">
        <span @click="deleteMovie" class="cursor-pointer text-xl">❌</span>
    </td>
    <td class="px-6 py-4 text-right">
        <span @click="toggleForm(movie)" class="cursor-pointer text-xl">✏️</span>
    </td>
  </tr>
</template>

<script>
export default {
  props: ['movie', 'deleteMovie', 'toggleForm']
}
</script>
