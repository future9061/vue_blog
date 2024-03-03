<template>
  <footer>
    <MyList :list="list">
      <template #default="item">
        <a :href="item.href">
          <img :src="item.src" />
        </a>
      </template>
    </MyList>
  </footer>
</template>

<script setup>
import MyList from './MyList.vue'

const list = [
  { src: new URL('@/assets/sns_github.png', import.meta.url).href, href: '' },
  { src: new URL('@/assets/sns_instagram.png', import.meta.url).href, href: '' },
  { src: new URL('@/assets/sns_youtube.png', import.meta.url).href, href: '' }
]
</script>

<style>
footer {
}

footer a img {
  height: 25px;
}
</style>
