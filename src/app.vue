<template>
  <SiteHeader />
  <Loading v-if="showLoading" />
  <SiteMain />
  <SiteFooter />
</template>

<script setup>
import SiteHeader from './components/headers/SiteHeader.vue'
import SiteMain from './components/SiteMain.vue'
import SiteFooter from './components/SiteFooter.vue'
import Loading from '@/components/Loading.vue'
import { onMounted, ref } from 'vue'

const showLoading = ref(true)

onMounted(() => {
  showLoading.value = false
})
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
* {
  margin: 0;
  padding: o;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}
</style>
