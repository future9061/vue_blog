<template>
  <header class="wrap">
    <div class="logo">
      <img ref="logo" src="@/assets/logo.png" alt="logo" />
    </div>

    <Search v-model:tag.lazy="tag" />
    <h1>태그:{{ tag }}</h1>

    <nav>
      <a
        v-for="(menu, index) in menus"
        :key="index"
        @click="updateName('List'), updateCategory(menu)"
        >{{ menu }}</a
      >
    </nav>
  </header>
</template>

<script setup>
import { inject, onMounted, ref } from 'vue'
import Search from './Search.vue'

const menus = ['Vue', 'Nuxt', 'AWS']

const { updateName } = inject('name')
const { updateCategory } = inject('category')
const { tag } = inject('tag')

const logo = ref(null)

onMounted(() => {
  logo.value.onmouseover = function () {
    document.querySelector('header > div ').classList.add('hover')
  }
  logo.value.onmouseleave = function () {
    document.querySelector('header > div ').classList.remove('hover')
  }
})
</script>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

header > .logo {
  width: 20vh;
  height: 20vh;
  border-radius: 50%;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 20px;
  cursor: pointer;
}

header > .logo:hover {
  transform: scale(1.2);
}

header > .logo > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
header > nav {
  background-color: black;
  width: 60vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  padding: 5px 10px;
  border-radius: 5px;
}

header > nav > a {
  color: #fff;
  font-size: 22px;
  cursor: pointer;
}

header > nav > a:hover {
  color: #eee;
}
</style>
