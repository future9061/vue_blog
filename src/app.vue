<template>
  <SiteHeader />
  <Loading v-if="showLoading" />
  <SiteMain />
  <SiteFooter />
</template>

<script setup>
import SiteHeader from './components/headers/SiteHeader.vue'
import SiteMain from './components/main/SiteMain.vue'
import SiteFooter from './components/SiteFooter.vue'
import Loading from '@/components/Loading.vue'

import { onMounted, ref, provide } from 'vue'

const showLoading = ref(true)

onMounted(() => {
  showLoading.value = false
})

const name = ref('List')
const category = ref('')
const tag = ref('')

provide('name', {
  name,
  updateName(newName) {
    name.value = newName
  }
})

provide('category', {
  category,
  updateCategory(newCate) {
    category.value = newCate
  }
})

provide('tag', {
  tag,
  updateTag(newTag) {
    title.value = newTag
  }
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
  padding: 0;
}

li {
  list-style: none;
}
a {
  text-decoration: none;
}
</style>
