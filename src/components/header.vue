<!--
 * @Description: 
 * @Author: 欧阳承珺
 * @LastEditors: 欧阳承珺
 * @Date: 2024-10-25 16:01:08
 * @LastEditTime: 2024-10-25 16:22:51
-->
<template>
  <header class="bg-white shadow-sm">
    <div class="container">
      <div class="logo">贵安新区全域数字化赋能门户</div>
      <nav>
        <ul class="nav-list">
          <li><a href="#" class="nav-link">生态加盟</a></li>
          <li><a href="#" class="nav-link">贵鸿开发社区</a></li>
          <li><a href="#" class="nav-link">关于贵安新区</a></li>
          <li class="last-item">
            <span class="avatar"></span>
            <span class="ml-4">Zekooo</span>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
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

const handleLogin = () => {
  // 处理登录逻辑
}

const handleRegister = () => {
  // 处理注册逻辑
}
</script>

<style scoped lang="scss">
header {
  .container {
    // max-width: 12rem;
    box-sizing: border-box;
    width: 100%;
    height: 80px;
    margin: 0 auto;
    padding: 0 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.60);
  }

  .logo {
    font-size: 24px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.90);
  }

  .nav-list {
    display: flex;
    align-items: center;
    gap: 16px;

    .nav-link {
      color: rgba(0, 0, 0, 0.90);
      text-decoration: none;
      transition: color 0.3s;
      font-size: 16px;
      font-weight: 400;
      margin-right: 64px;
    }
    .last-item {
      display: flex;
      align-items: center;
    }
    .avatar {
      display: inline-block;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: #d9d9d9;
    }
    .ml-4 {
      margin-left: 16px;
    }
  }
}
</style>
