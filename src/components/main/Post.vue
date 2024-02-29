<template>
  <NotionRenderer :blockMap="blockMap" fullPage />
</template>

<script setup>
import { NotionRenderer, getPageBlocks } from 'vue-notion'
import { ref } from 'vue'

const props = defineProps({
  required: true,
  id: String
})

const blockMap = ref(null)

async function create() {
  blockMap.value = await getPageBlocks(props.id)
}

create()
</script>

<style>
@import 'vue-notion/src/styles.css';

.notion-page {
  border: 1px solid red;
}
</style>
