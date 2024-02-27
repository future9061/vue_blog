<template>
  <main>
    <component :is="comp[name]" />
    <button @click="name = 'List'">게시글 목록</button>
    <button @click="name = 'Post'">게시글</button>
  </main>
</template>

<script setup>
import { defineAsyncComponent, ref } from 'vue'

const List = defineAsyncComponent(() => import('@/components/main/List.vue'))
const Post = defineAsyncComponent(() => import('@/components/main/Post.vue'))

const comp = { List, Post }
const name = ref('')
</script>

<style>
main {
  border: 1px solid red;
  width: 62vw;
  margin: auto;
}
</style>
