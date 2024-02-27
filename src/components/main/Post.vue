<template>
  <NotionRenderer :blockMap="blockMap" fullPage />
</template>

<script setup>
import { NotionRenderer, getPageBlocks } from 'vue-notion'
import { ref } from 'vue'

const blockMap = ref(null)

async function create() {
  blockMap.value = await getPageBlocks('c333c89395ef48b190af92d71da8a3b0')
}

create()
</script>

<style>
@import 'vue-notion/src/styles.css';
</style>
