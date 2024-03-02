<template>
  <main>
    <List
      v-if="name === 'List'"
      :category="category"
      @change-id="
        (newId) => {
          id = newId
          $emit('change-id')
        }
      "
    />
    <Post v-if="name === 'Post'" :id="id" />
  </main>
</template>

<script setup>
import { defineAsyncComponent, ref } from 'vue'

const List = defineAsyncComponent(() => import('@/components/main/List.vue'))
const Post = defineAsyncComponent(() => import('@/components/main/Post.vue'))

const id = ref('c333c89395ef48b190af92d71da8a3b0')

defineProps({
  name: {
    type: String,
    required: true,
    validator(value) {
      return ['List', 'Post'].includes(value)
    }
  },
  category: {
    type: String
  }
})

const comp = { List, Post }
</script>

<style>
main {
  width: 62vw;
  margin: auto;
}
</style>
