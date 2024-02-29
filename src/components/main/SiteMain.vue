<template>
  <main>
    <component
      :is="comp[target]"
      :id="target === 'Post' ? id : null"
      @change-id="
        (newId) => {
          id = newId
          target = 'Post'
        }
      "
    />{{ console.log(target) }}
  </main>
</template>

<script setup>
import { defineAsyncComponent, ref } from 'vue'

const List = defineAsyncComponent(() => import('@/components/main/List.vue'))
const Post = defineAsyncComponent(() => import('@/components/main/Post.vue'))

const id = ref('c333c89395ef48b190af92d71da8a3b0')

const props = defineProps({
  required: true,
  name: Object
})

const comp = { List, Post }
const target = ref(props.name)
</script>

<style>
main {
  width: 62vw;
  margin: auto;
}
</style>
