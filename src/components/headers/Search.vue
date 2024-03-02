<template>
  <div class="search">
    <img src="@/assets/search.svg" />
    <input
      placeholder="tag"
      :value="tag"
      @change="
        tagModifiers?.lazy && $emit('update:tag', $event.target.value),
          updateCategory($event.target.value)
      "
    />
  </div>
</template>

<script setup>
import { inject } from 'vue'

defineProps(['tag', 'tagModifiers']) //바인딩한 v-model값 사용하기 위해 props로 가져옴
defineEmits(['update:tag']) //v-model update값을 상위 컴포넌트에 전달하기 위해 emit
const { updateCategory } = inject('category')
</script>

<style scoped>
.search {
  background-color: #333;
  position: relative;
  margin-top: 10px;
  padding: 1px 3px;
}

.search img {
  position: absolute;
  height: 50%;
  top: 50%;
  transform: translate(7px, -50%);
}

input {
  border: 0;
  padding-left: 25px;
}
</style>
