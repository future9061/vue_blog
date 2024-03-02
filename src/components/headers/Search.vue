<template>
  <p>search</p>
  <input ref="search" v-bind="attrs" />
</template>

<script setup>
import { ref, onMounted, useAttrs } from 'vue'

const search = ref(null)

onMounted(() => {
  search.value.focus()
})

const attrs = useAttrs()

defineOptions({
  //최상위 태그에 속성을 넣고 싶지 않다면
  inheritAttrs: false
})
</script>

<style scoped></style>
