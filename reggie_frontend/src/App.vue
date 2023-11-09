<script setup>
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { showNotify } from 'vant'

window.$message = ElMessage
window.$notify = showNotify
window.$router = useRouter()
</script>

<template>
  <router-view />
</template>

<style scoped></style>
