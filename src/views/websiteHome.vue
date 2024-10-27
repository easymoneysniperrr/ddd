<!--
 * @Description: 
 * @Author: 欧阳承珺
 * @LastEditors: 欧阳承珺
 * @Date: 2024-10-25 14:02:54
 * @LastEditTime: 2024-10-25 16:13:20
-->
<template>
  <div class="website-home">
    <header class="bg-white shadow-sm">
    <div class="header-container">
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
    <main>
      <!-- 轮播图部分 -->
      <div class="carousel-container">
        <div class="carousel-img" />
      </div>

      <!-- 四个功能模块 -->
      <section class="platform-section">
        <div class="container">
          <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="6" v-for="(item, index) in platforms" :key="index">
              <el-card class="platform-card" style="cursor: pointer;" shadow="hover" @click="scrollToSection(item.title)">
                <div class="card-content">
                  <img :src="item.image" width="72" height="72">
                  <div class="card-text">
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.desc }}</p>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </section>

      <!-- 平台板块 -->
      <section v-for="(item, index) in platforms" 
        :key="index" 
        class="platform-detail" 
        :id="generateId(item.title)"
        :style="'background-color:' + (index % 2 == 0 ? 'rgba(244, 249, 255, 1)' : 'rgba(224, 236, 249, 1)')"
      >
        <div class="container">
          <div class="section-header">
            <h2>{{ item.title }}</h2>
            <el-button class="enter-button" type="primary" @click="handleEnterPlatform(item.route)">进入平台</el-button>
          </div>
          <p class="section-desc">
                {{ item.desc }}
          </p>
          <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="8" v-for="item in 3" :key="item">
              <div class="platform-item">
                <div class="platform-image">
                  <img src="@/assets/images/alt.png" alt="平台图片">
                </div>
                <h3>河湾物联感知平台</h3>
              </div>
            </el-col>
          </el-row>
        </div>
      </section>

      <!-- 典型案例部分 -->
      <!-- <section class="case-section">
        <div class="container">
          <h2>典型赋能案</h2>
          <div class="case-tabs">
            <el-tabs v-model="activeTab" @tab-click="handleTabClick">
              <el-tab-pane label="智慧园区" name="park"></el-tab-pane>
              <el-tab-pane label="智慧城市" name="city"></el-tab-pane>
              <el-tab-pane label="智慧交通" name="transport"></el-tab-pane>
            </el-tabs>
          </div>
          <div class="case-content">
            <el-carousel 
              ref="carousel" 
              :autoplay="false" 
              trigger="click"
              indicator-position="none"
              @change="handleCarouselChange"
            >
              <el-carousel-item v-for="(item, index) in caseList" :key="index">
                <el-card class="case-card">
                  <el-row :gutter="20">
                    <el-col :span="12">
                      <h3>{{ item.title }}</h3>
                      <p class="case-desc">{{ item.description }}</p>
                      <ul class="case-list">
                        <li v-for="(feature, idx) in item.features" :key="idx">
                          {{ feature }}
                        </li>
                      </ul>
                    </el-col>
                    <el-col :span="12">
                      <div class="case-image">
                        <img :src="item.image" :alt="item.title">
                      </div>
                    </el-col>
                  </el-row>
                </el-card>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </section> -->

      <!-- 统计数据部分 -->
      <section class="statistics-section">
        <div class="container">
          <h2>已服务于</h2>
          <el-row :gutter="60">
            <el-col :xs="12" :sm="6" v-for="(stat, index) in statistics" :key="index">
              <div class="stat-item">
                <div class="stat-number">{{ stat.number }}</div>
                <div class="stat-label">{{ stat.label }}</div>
              </div>
            </el-col>
          </el-row>
        </div>
      </section>

      <!-- 页脚部分 -->
      <footer class="site-footer">
        <div class="container">
          <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="6">
              <h3>贵安新区全域数字化赋能门户</h3>
              <p>提供全面的数字化服务和解决方案</p>
            </el-col>
            <el-col :xs="24" :sm="12" :md="6">
              <h4>联系我们</h4>
              <p>邮箱: contact@example.com</p>
              <p>电话: 123-456-7890</p>
            </el-col>
            <el-col :xs="24" :sm="12" :md="6">
              <h4>快速链接</h4>
              <ul>
                <li><a href="#">首页</a></li>
                <li><a href="#">服务</a></li>
                <li><a href="#">案例</a></li>
                <li><a href="#">关于我们</a></li>
              </ul>
            </el-col>
            <el-col :xs="24" :sm="12" :md="6">
              <h4>关注我们</h4>
              <div class="social-links">
                <!-- 社交媒体图标 -->
              </div>
            </el-col>
          </el-row>
        </div>
      </footer>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import platform_1 from '@/assets/images/platform_1.png'
import platform_2 from '@/assets/images/platform_2.png'
import platform_3 from '@/assets/images/platform_3.png'
import platform_4 from '@/assets/images/platform_4.png'
const images = [
  "/placeholder.svg?height=600&width=1200",
  "/placeholder.svg?height=600&width=1200",
  "/placeholder.svg?height=600&width=1200",
]

const router = useRouter()

const platforms = [
  {
    title:  "全域数字化赋码中心",
    desc: '基于xxxxx的系统，有什么基于xxxxx的系统，有什么基于xxxxx的系统，有什么基于xxxxx的系统，有什么基于xxxxx的系统，有什么基于xxxxx的系统，有什么基于xxxxx的系统，有什么基于xxxxx的系统，有什么基于xxxxx的系统，有什么基于xxxxx的系统，有什么基于xxxxx的系统，有什么',
    image: platform_1,
    route: '/digitalCode'
  },
  {
    title:  "融合服务中心",
    desc: '基于xxxxx的系统，有什么基于xxxxx的系统，有什么基于xxxxx的系统，有什么基于xxxxx的系统，有什么基于xxxxx的系统，有什么基于xxxxx的系统，有什么基于xxxxx的系统，有什么基于xxxxx的系统，有什么基于xxxxx的系统，有什么基于xxxxx的系统，有什么基于xxxxx的系统，有什么',
    image: platform_2,
    route: '/fusionService'
  },
  {
    title:  "城市物联网平台",
    desc: '基于xxxxx的系统，有什么基于xxxxx的系统，有什么基于xxxxx的系统，有什么基于xxxxx的系统，有什么基于xxxxx的系统，有什么基于xxxxx的系统，有什么基于xxxxx的系统，有什么基于xxxxx的系统，有什么基于xxxxx的系统，有什么',
    image: platform_3,
    route: '/iotPlatform'
  },
  {
    title:  "城市鸿蒙生态中心",
    desc: '基于xxxxx的系统，有什么基于xxxxx的系统，有什么基于xxxxx的系统，有什么基于xxxxx的系统，有什么基于xxxxx的系统，有什么基于xxxxx的系统，有什么基于xxxxx的系统，有什么基于xxxxx的系统，有什么基于xxxxx的系统，有什么',
    image: platform_4,
    route: '/harmonyOS'
  }
]

const statistics = [
  { number: "100", label: "城市" },
  { number: "2000", label: "园区" },
  { number: "1.5亿", label: "人口" },
  { number: "5种", label: "场景" }
]

const activeTab = ref('park')
const carousel = ref(null)

const caseList = [
  {
    title: '智慧园区场景解决方案',
    description: '通过数字化技术提升园区管理效率，优化资源配置，为企业提供更好的服务环境。',
    features: ['智能安防系统', '能源管理平台', '园区服务一体化'],
    image: '/images/case-park.jpg'
  },
  {
    title: '智慧城市场景解决方案',
    description: '打造智慧城市生态系统，提升城治理能力和服务水平。',
    features: ['城市大脑', '市民服务平台', '城市管理系统'],
    image: '/images/case-city.jpg'
  },
  {
    title: '智慧交通场景解决方案',
    description: '构建智能交通网络，优化交通流量，提高出行效率。',
    features: ['交通信号控制', '智能停车系统', '公交优先系统'],
    image: '/images/case-transport.jpg'
  }
]

const handleTabClick = (tab) => {
  carousel.value.setActiveItem(tabMap[tab.props.name])
}

const handleCarouselChange = (index) => {
  const tabNames = ['park', 'city', 'transport']
  activeTab.value = tabNames[index]
}

const tabMap = {
  'park': 0,
  'city': 1,
  'transport': 2
}

const handleEnterPlatform = (route) => {
  router.push(route)
}

const scrollToSection = (title) => {
  const section = document.getElementById(title.replace(/\s+/g, '').toLowerCase())
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}

const generateId = (title) => {
  return title.replace(/\s+/g, '').toLowerCase()
}
</script>

<style scoped lang="scss">
.website-home {
  header {
  .header-container {
    width: 100%;
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
  .carousel-container {
    width: 100%;
    height: 960px;
    background-image: url('@/assets/images/banner_bg.png');
    margin-top: -80px;
  }
  .carousel-img {
    width: 100%;
    height: 100%;
  }

  .container {
    max-width: 1440px;  // 修改容器宽度
    margin: 0 auto;
    padding: 0 20px;
    width: 100%;
  }

  section {
    padding: 80px 0 113px;
    
    h2 {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 30px;
    }
  }

  .platform-section {
    background: rgba(244, 249, 255, 1);
    padding: 64px 0 31px;
    .platform-card {
      background: rgba(255, 255, 255, 1);
      height: 100%;
      transition: all 0.3s;
      border-radius: 16px;
      &:hover {
        transform: translateY(-5px);
      }

      .card-content {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .number-avatar {
        background: var(--el-color-primary-light-9);
        color: var(--el-color-primary);
        flex-shrink: 0;
      }

      .card-text {
        overflow: hidden;
        h3 {
          font-size: 20px;
          margin-bottom: 8px;
          color: rgba(0, 0, 0, 0.90);
          font-weight: 400;
        }

        p {
          color: rgba(0, 0, 0, 0.60);
          line-height: 21px;
          font-size: 14px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }

  .platform-detail {
    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 48px;
      margin-bottom: 36px;
      h2 {
        font-size: 40px;
        color: #000;
        font-weight: 500;
        margin-bottom: 0;
      }
      .enter-button {
        width: 112px;
        height: 48px;
        background: #007CF7;
        color: #fff;
        font-size: 16px;
      }
    }

    .section-desc {
      color: rgba(0, 0, 0, 0.60);
      font-size: 14px;
      margin-bottom: 36px;
      line-height: 21px;
    }

    .platform-item {
      text-align: center;

      .platform-image {
        width: 100%;
        height: 464px;
        margin-bottom: 24px;
        border-radius: 24px;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      h3 {
        font-size: 18px;
        font-weight: 400;
      }

      p {
        color: var(--el-text-color-secondary);
      }
    }
  }

  .case-section {
    background: #fff;

    .case-tabs {
      margin-bottom: 30px;
    }

    .case-card {
      padding: 30px;

      h3 {
        font-size: 20px;
        margin-bottom: 16px;
      }

      .case-desc {
        color: var(--el-text-color-secondary);
        margin-bottom: 20px;
        line-height: 1.6;
      }

      .case-list {
        li {
          margin-bottom: 8px;
          color: var(--el-text-color-regular);
          
          &:before {
            content: "•";
            margin-right: 8px;
            color: var(--el-color-primary);
          }
        }
      }

      .case-image {
        height: 300px;
        background: #f5f7fa;
        border-radius: 4px;
      }
    }

    .carousel-controls {
      position: absolute;
      top: 50%;
      width: 100%;
      transform: translateY(-50%);
      display: flex;
      justify-content: space-between;
      padding: 0 -20px;
      pointer-events: none;

      .el-button {
        pointer-events: auto;
      }
    }
  }

  .statistics-section {
    background-image: url('@/assets/images/total_bg.png');
    background-size: cover;
    text-align: center;
    padding: 109px 0;

    h2 {
      font-size: 40px;
      margin-bottom: 60px;
      color: #000;
      font-weight: 500;
      text-align: left;
      margin-left: 100px;
    }

    .stat-item {
      .stat-number {
        font-size: 60px;
        background: linear-gradient(90.60342987813738deg, #007CF7 25%, #97A1EF 54%, #0042FF 76%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: bold;
        margin-bottom: 45px;
        white-space: nowrap;  // 防止数字换行
      }

      .stat-label {
        font-size: 24px;
        color: #000;
        font-weight: 500;
      }
    }
  }

  .site-footer {
    background: #324057;
    color: #fff;
    padding: 60px 0;

    h3, h4 {
      margin-bottom: 20px;
      font-size: 18px;
    }

    p, a {
      color: rgba(255, 255, 255, 0.7);
      line-height: 1.6;
    }

    ul li {
      margin-bottom: 10px;
    }

    a {
      text-decoration: none;
      transition: color 0.3s;

      &:hover {
        color: #fff;
      }
    }
  }
}

@media (max-width: 768px) {
  .website-home {
    .platform-card, .platform-sub-card {
      margin-bottom: 20px;
    }

    .case-section {
      .carousel-controls {
        display: none;
      }
    }
  }
}
</style>







