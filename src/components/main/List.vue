<template>
  <ul>
    <li
      v-for="list of filteredList"
      :key="list.id"
      @click="$emit('change-id', list.id), updateName('Post')"
    >
      <span>{{ list.title }}</span>
      <span :class="list.category">{{ list.category }}</span>
    </li>
  </ul>
</template>

<script setup>
import { getPageTable } from 'vue-notion'
import { ref, computed, inject } from 'vue'

const lists = ref([])

getPageTable('f8ad3be41d7a437fba08a06f4e83f296').then((value) => {
  lists.value = value
})

const { updateName } = inject('name')
const { category } = inject('category')

const filteredList = computed(() => {
  return lists.value.filter((list) => {
    return list.category === category.value.toLowerCase() || category.value === ''
  })
})
</script>

<style scoped>
ul {
  padding: 0;
}

ul > li {
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  border: 0.5px solid rgb(214, 214, 214);
  border-radius: 3px;
}

ul > li:hover {
  background-color: rgb(211, 211, 211);
}

ul > li > span:last-child {
  padding: 1px 3px;
  border-radius: 5px;
}

ul > li > span.vue {
  background-color: aquamarine;
}

ul > li > span.nuxt {
  background-color: rgb(202, 200, 200);
}
ul > li > span.aws {
  background-color: rgb(218, 246, 255);
}
</style>
