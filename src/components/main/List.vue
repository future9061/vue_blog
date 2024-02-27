<template>
  <ul>
    <li v-for="(list, index) in lists" :key="index">
      <span>{{ list.title }}</span>
      <span>{{ list.category }}</span>
    </li>
  </ul>
</template>

<script setup>
import { getPageTable } from 'vue-notion'
import { ref } from 'vue'

const lists = ref([])

getPageTable('f8ad3be41d7a437fba08a06f4e83f296').then((value) => {
  lists.value = value
})
</script>
