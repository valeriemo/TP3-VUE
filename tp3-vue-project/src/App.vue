<template>
  <NavBar />
  <RouterView />
  <FooterMain />
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import FooterMain from '@/components/FooterMain.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    FooterMain
  }
}
</script>
