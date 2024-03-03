<template>
  <ul>
    <li v-for="item of list" :key="item">
      <slot v-bind="item"></slot>
    </li>
  </ul>
</template>

<script setup>
defineProps(['list'])
</script>

<style scoped>
ul {
  list-style: none;
  display: flex;
}

li {
  margin-left: 10px;
}
</style>
