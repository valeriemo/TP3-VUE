<template>
  <header class='bg-gray-900 mt-6'>
    <div class='py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-10 lg:px-12'>
      <h1 class='mb-4 text-6xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl'>Bienvenue cinéphiles</h1>
      <p class='text-2xl font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400'>Votre Sanctuaire Cinématographique Personnel !</p>
      <button v-if="isFilmsPage" :class="{'btn-red': showAdd || showUpdate, 'btn-2': !(showAdd || showUpdate)}" @click="toggleForm">
        {{ buttonText }}
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderMain',
  props: ['showAdd', 'toggleForm', 'showUpdate'],
  data () {
    return {
      isFilmsPage: window.location.pathname === '/films'
    }
  },
  computed: {
    buttonText () {
      console.log('showAdd:', this.showAdd)
      console.log('showUpdate:', this.showUpdate)
      if (this.showAdd || this.showUpdate === true) {
        return 'Fermer'
      } else {
        return 'Ajouter un film'
      }
    }
  }
}
</script>
