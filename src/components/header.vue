<!--
 * @Description: 
 * @Author: 欧阳承珺
 * @LastEditors: 欧阳承珺
 * @Date: 2024-10-25 16:01:08
 * @LastEditTime: 2024-10-25 16:22:51
-->
<template>
  <div id="header">
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="websiteHome">首页</el-menu-item>
      <el-menu-item index="appCenter">鸿蒙原生应用中心</el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const activeIndex = ref(route.name)

watch(
  () => route.name,
  (newRouteName) => {
    activeIndex.value = newRouteName
  }
)

const handleSelect = (index) => {
  router.push({ name: index })
}

</script>