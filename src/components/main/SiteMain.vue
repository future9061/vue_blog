<template>
  <main>
    <List
      v-if="name === 'List'"
      @change-id="
        (newId) => {
          id = newId
        }
      "
    />
    <Post v-if="name === 'Post'" :id="id" />
  </main>
</template>

<script setup>
import { defineAsyncComponent, inject, ref } from 'vue'

const List = defineAsyncComponent(() => import('@/components/main/List.vue'))
const Post = defineAsyncComponent(() => import('@/components/main/Post.vue'))

const id = ref('c333c89395ef48b190af92d71da8a3b0')
const { name } = inject('name')
</script>

<style>
main {
  width: 62vw;
  margin: auto;
}
</style>
