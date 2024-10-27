<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Header -->
    <header class="w-100% h-680px bg-cover bg-center relative">
      <!-- 背景图片放在最底层 -->
      <img src="@/assets/images/innovationCenter/banner.png" alt="创新中心横幅" class="w-full h-full object-cover absolute top-0 left-0">
      
      <!-- 导航栏提高层级 -->
      <div class="box-border px-40px absolute left-0 top-0 w-full h-64px bg-white bg-op-70 flex flex-row items-center justify-between z-10">
        <h1 class="text-20px font-500 mb-4px">贵阳贵安鸿蒙城市生态中心</h1>
        <ul class="flex flex-row items-center justify-between text-16px">
          <li 
            class="px-24px cursor-pointer text-color-#007CF7"
            @click="goToPage('innovation')"
          >创新中心</li>
          <li 
            class="px-24px cursor-pointer"
            @click="goToPage('developer')"
          >贵鸿开发者社区</li>
          <li 
            class="px-24px cursor-pointer"
            @click="goToPage('application')"
          >贵鸿应用中心</li>
          <li 
            class="pl-24px cursor-pointer"
            @click="goToPage('device')"
          >贵鸿设备中心</li>
        </ul>
      </div>

      <!-- 中间的文字内容 -->
      <div class="absolute left-0 top-0 w-full h-full flex flex-col items-center justify-center mt--140px z-1">
        <p class="text-72px font-500 color-white">贵鸿生态创新中心</p>
        <p class="text-32px color-white fw-400 mt-37px">基于 OpenHarmony 打造贵鸿OS城市发行版，赋能千行百业</p>
      </div>
    </header>
    <!-- 贵鸿OS Features -->
    <section class="flex flex-col items-center justify-center bg-#EDF4FF">
      <h2 class="text-40px font-bold text-center mb-86px mt-100px">贵鸿OS，能力特性</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24px max-w-1440px mx-auto h-476px mb-145px">
        <div v-for="(feature, index) in features" 
             :key="index" 
             class="box-border text-center pt-22px transition-all duration-300 w-342px bg-white shadow-md rounded-24px"
             :style="{
               backgroundImage: `url(${feature.icon})`,
               backgroundSize: 'cover',
               backgroundPosition: 'center'
             }">
          <h3 class="text-36px font-bold text-color-#000 mb-12px text-op-90">{{ feature.title }}</h3>
          <p class="text-20px line-height-30px color-#000 text-op-60" v-html="feature.description"></p>
        </div>
      </div>
    </section>

    <!-- Industries -->
    <section class="bg-#fff flex flex-col items-center justify-center w-full  overflow-hidden">
      <h2 class="text-40px font-bold text-center mb-86px mt-100px">贵鸿OS，赋能千百业</h2>
      <div class="industries-container relative mx-auto mb-119px">
        <!-- 左侧渐变阴影 -->
        <div class="absolute left-0 top-0 w-200px h-full bg-gradient-to-r from-white to-transparent z-10"></div>
        
        <!-- 图片列表 -->
        <div class="flex justify-center items-center gap-30px">
          <div v-for="(industry, index) in displayIndustries" 
               :key="index"
               class="relative rounded-lg overflow-hidden transition-all duration-300 cursor-pointer"
               :class="[
                 index === 2 ? 'w-400px h-534px' : 'w-360px h-481px'
               ]"
               @click="handleClick(index)">
            <el-image 
              :src="industriesImages[(currentIndex + index - 2 + industriesImages.length) % industriesImages.length]"
              :alt="industries[(currentIndex + index - 2 + industries.length) % industries.length]"
              fit="cover"
              class="w-full h-full" />
              <div class="absolute bottom-0 left-0 right-0 p-26px bg-gradient-to-t from-black/60 to-transparent text-center">
                <span class="text-white text-28px font-bold">
                {{ industries[(currentIndex + index - 2 + industries.length) % industries.length] }}
                </span>
            </div>
          </div>
        </div>

        <!-- 右侧渐变阴影 -->
        <div class="absolute right-0 top-0 w-200px h-full bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>
    </section>

    <!-- Industrial Empowerment -->
    <section class="flex flex-col items-center justify-center bg-#EDF4FF">
      <h2 class="text-40px font-bold text-center mb-86px mt-100px">产业赋能</h2>
      <div class="box-border grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24px max-w-1440px mx-auto h-516px mb-145px">
        <el-card v-for="(item, index) in empowerment" 
                :key="index" 
                class="box-border p-16px transition-all duration-300 w-464px rounded-24px pos-relative" style="border-radius: 24px;">
                <img :src="empowermentImages[index]" class="w-80px h-80px mb-48px" />
          <h3 class="text-30px font-bold text-color-#000 mb-24px text-op-90">{{ item.title }}</h3>
          <p class="text-14px line-height-30px color-#000 text-op-60" v-html="item.description"></p>
          <img src="@/assets/images/innovationCenter/empowerment_btn.png" alt="" class="w-64px h-64px absolute bottom-36px right-36px">
        </el-card>
      </div>
    </section>

    <!-- Ecological Alliance -->
    <section class="bg-white flex flex-col items-center justify-center">
      <h2 class="text-40px font-bold text-center mb-39px mt-100px">生态联盟</h2>
      <p class="text-14px text-color-#000 text-op-60 text-center mb-86px">构建贵鸿生态联盟，繁荣贵鸿产业发展</p>
      <div class="grid grid-cols-2 gap-24px max-w-1440px mx-auto mb-145px">
        <div v-for="(eco, index) in ecoAlliance" 
             :key="index" 
             class="px-36px py-42px bg-#EDF4FF rounded-24px w-708px box-border h-160px flex items-center">
          <img :src="ecoImages[index]" alt="" class="w-80px h-80px mr-24px">
          <div>
            <h3 class="text-30px font-semibold mb-12px text-color-#000 text-op-90">{{ eco.title }}</h3>
            <p class="text-16px text-color-#000 text-op-60 lh-24px">{{ eco.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Talent Cultivation -->
    <section class="bg-#EDF4FF flex flex-col items-center justify-center">
      <h2 class="text-40px font-bold text-center mb-39px mt-100px">人才培养</h2>
      <p class="text-14px text-color-#000 text-op-60 text-center mb-86px">构建一个强大的技术人才库，为贵鸿OS操作系统的持续创新和发展提供支持，助力贵鸿生态建设，也为整个软件行业培养高素质的专业人才</p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-24px max-w-1440px mx-auto">
        <div v-for="(talent, index) in talents" 
             :key="index" 
             class="p-24px bg-#fff rounded-24px w-464px h-325px mb-245px box-border pos-relative">
            <img :src="talentImages[index]" alt="" class="w-80px h-80px mb-32px">
          <h3 class="text-24px font-semibold mb-24px text-color-#000 text-op-90">{{ talent.title }}</h3>
          <p class="text-14px text-color-#000 text-op-60">{{ talent.description }}</p>
          <div class="absolute bottom-24px left-24px inline-flex items-center text-16px text-#000 text-op-90 cursor-pointer">
            了解更多
            <img src="@/assets/images/innovationCenter/talent_arrow.png" alt="" class="w-16px h-16px ml-4px">
          </div>
        </div>
      </div>
    </section>

    <!-- Certification and Testing -->
    <section class="bg-white flex flex-col items-center justify-center">
      <h2 class="text-40px font-bold text-center mb-39px mt-100px">认证与测试</h2>
      <p class="text-14px text-color-#000 text-op-60 text-center mb-86px lh-24px">贵鸿OS兼容性测评主要是验证合作伙伴的设备和业务应用满足贵鸿OS兼容性定义的技术要求，确保运行在贵鸿OS上的设备和业务应用能稳<br>定、正常运行，同时使用贵鸿OS的设备和业务应用有一致性的接口和业务体验</p>
      <div class="grid grid-cols-4 md:grid-cols-4 gap-24px max-w-1440px mx-auto pos-relative">
        <div v-for="(certification, index) in certifications" 
             :key="index" 
             class="px-24px pt-48px pb-24px bg-#EDF4FF rounded-24px w-342px h-250px mb-180px box-border pos-relative">

          <h3 class="text-24px font-semibold mb-24px text-color-#000 text-op-90">{{ certification.title }}</h3>
          <p class="text-14px text-color-#000 text-op-60 lh-24px">{{ certification.description }}</p>
          <img :src="certificationImages[index]" alt="" class="w-80px h-80px absolute bottom-24px right-24px">
        </div>
      </div>
    </section>
    <footer class="footer">
        <p class="footer-text">Copyright © www.guifa.com, All Rights Reserved</p>
        <p class="footer-text">贵阳贵安鸿蒙城市生态中心</p>
    </footer>
  </div>
</template>

<script setup>
import feature1 from '@/assets/images/innovationCenter/features_1.png'
import feature2 from '@/assets/images/innovationCenter/features_2.png'
import feature3 from '@/assets/images/innovationCenter/features_3.png'
import feature4 from '@/assets/images/innovationCenter/features_4.png'

import industries1 from '@/assets/images/innovationCenter/industries_1.png'
import industries2 from '@/assets/images/innovationCenter/industries_2.png'
import industries3 from '@/assets/images/innovationCenter/industries_3.png'
import industries4 from '@/assets/images/innovationCenter/industries_4.png'
import industries5 from '@/assets/images/innovationCenter/industries_5.png'
import industries6 from '@/assets/images/innovationCenter/industries_6.png'

import talent1 from '@/assets/images/innovationCenter/talent_1.png'
import talent2 from '@/assets/images/innovationCenter/talent_2.png'
import talent3 from '@/assets/images/innovationCenter/talent_3.png'

import certification1 from '@/assets/images/innovationCenter/certification_1.png'
import certification2 from '@/assets/images/innovationCenter/certification_2.png'
import certification3 from '@/assets/images/innovationCenter/certification_3.png'
import certification4 from '@/assets/images/innovationCenter/certification_4.png'
import { useRouter } from 'vue-router'

const router = useRouter()

const goToPage = (type) => {
  const routes = {
    developer: '/coderCommunity',    // 开发者社区路由
    application: '/appCenter',   // 应用中心路由
    device: '/deviceCenter'             // 设备中心路由
  }
  router.push(routes[type])
}

onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: 'auto' // 或者使用 'auto' 立即滚动
  })
})
const featureImages = [feature1, feature2, feature3, feature4]

const features = [
  {  title: '场景安全', description: '高安生物认证<br>设备协同认证<br>统一设备证明<br>贵鸿安全管家', icon: feature1 },
  {  title: 'AI原生', description: '端云混合推理<br>端侧意图识别<br>行业智能体<br>无智变有智', icon: feature2 },
  {  title: '统一互联', description: 'OneConnect 2.0<br>K级设备组网<br>设备无感组网<br>厘米级精准定位', icon: feature3 },
  {  title: '随心体验', description: '服务一步通<br>百变卡片库<br>5D深度感知<br>近场运维', icon: feature4 }
]


const industriesImages = [
  industries1,
  industries2,
  industries3,
  industries4,
  industries5
]

const industries = ['水务', '矿业', '园区', '电力', '交通', '教育']

const empowerment = [
  { 
    title: '政府支持政策', 
    description: '政府的支持政策旨在促进国产软件的发展，提高国家信息安全水平，推动数字经济的增长，提供包括：研发支持、产业扶持、人才培养、市场推动、标准制定、知识产权保护等各种政策。'
  },
  { 
    title: '资金支持及融资服务', 
    description: '资金支持与融资服务方面，政府和金融机构采取以下措施来促进鸿蒙操作系统及其相关产业的发展，包括：财政补贴与税收优惠、专项基金支持、银行贷款支持、政府采购、产业引导基金等。'
  },
  { 
    title: '行业标准制定', 
    description: '鸿蒙操作系统其行业标准的制定是一个系统性工程，涉及到技术规范、安全性、兼容性、互操作性等多个方面，鸿蒙行业标准制定涉及的关键点主要有：技术规范、安全性标准、兼容性标准、互操作性标准、用户体验标准、硬件支持标准、业应用标准等。'
  }
]

const ecoAlliance = [
  { 
    title: '设备生态',
    description: '共同打造一个全场景、全连接、全智能的设备生态系统'
  },
  {
    title: '应用生态',
    description: '加速鸿蒙应用生态建设，共推动鸿蒙应用生态繁荣发展'
  },
  {
    title: '方案生态',
    description: '整合不同行业、不同领域的技术和资源，为用户和企业提供全面、创新、高效 的解决方案'
  },
  {
    title: '渠道生态',
    description: '构建一个开放、创新、安全、高效的操作系统环境，为开发者和企业提供广阔 的市场和成长空间'
  }
]
const talents = [{
    title: '高校合作',
    description: '高校开设相关鸿蒙课程，培养专业人才'
}, {
    title: '人才赋能',
    description: '鸿蒙应用开发、测试、部署'
}, {
    title: '人才认证',
    description: '考级、认证、颁证、奖励'
}]
const talentImages = [talent1, talent2, talent3]
const certifications = [{
    title: '鸿蒙补贴政策',
    description: '通过鸿蒙认证测试的设备、应用，均可申请政策补贴'
}, {
    title: '测试服务',
    description: '可靠性测试、兼容性测试、安全测试',
}, {
    title: '标准和工具',
    description: '系统、应用、硬件',
}, {
    title: '认证实验室',
    description: '组建制度、合作中心',
}]
const certificationImages = [certification1, certification2, certification3, certification4]

// 使用 computed 来处理循环索引计算
import { computed, ref, onMounted, onUnmounted } from 'vue'

const getImageIndex = computed(() => (currentIndex, offset) => {
  const length = industriesImages.length
  return ((currentIndex + offset + length) % length)
})

const getTitleIndex = computed(() => (currentIndex, offset) => {
  const length = industries.length
  return ((currentIndex + offset + length) % length)
})

const getFeatureImage = (index) => {
  return featureImages[index]
}

const currentIndex = ref(0)
const displayIndustries = ref([0, 1, 2, 3, 4]) // 显示5张图片
const autoPlayInterval = ref(null)

// 处理点击事件
const handleClick = (index) => {
  if (index === 2) return // 点击中间图片不做处理
  const direction = index < 2 ? -1 : 1 // 根据点击位置决定切换方向
  changeSlide(direction)
}

// 切换图片
const changeSlide = (direction) => {
  currentIndex.value = (currentIndex.value + direction + industries.length) % industries.length
}

// 自动播放
const startAutoPlay = () => {
  autoPlayInterval.value = setInterval(() => {
    changeSlide(1)
  }, 5000)
}

const stopAutoPlay = () => {
  if (autoPlayInterval.value) {
    clearInterval(autoPlayInterval.value)
    autoPlayInterval.value = null
  }
}

// 鼠标悬停时停止自动播放
const handleMouseEnter = () => {
  stopAutoPlay()
}

const handleMouseLeave = () => {
  startAutoPlay()
}

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})

// 添加背景图片导入
import empowerment1 from '@/assets/images/innovationCenter/empowerment_1.png'
import empowerment2 from '@/assets/images/innovationCenter/empowerment_2.png'
import empowerment3 from '@/assets/images/innovationCenter/empowerment_3.png'

const empowermentImages = [empowerment1, empowerment2, empowerment3]

// 在 script setup 中添加
import eco1 from '@/assets/images/innovationCenter/eco_1.png'
import eco2 from '@/assets/images/innovationCenter/eco_2.png'
import eco3 from '@/assets/images/innovationCenter/eco_3.png'
import eco4 from '@/assets/images/innovationCenter/eco_4.png'

const ecoImages = [eco1, eco2, eco3, eco4]
</script>

<style scoped>


/* 添加过渡动画 */
.flex > div {
  transition: all 1s ease-in-out;
}
/* 动画过渡时间统一 */
* {
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}


/* 确保描述文字换行显示 */
.el-card p {
  white-space: pre-line;
}
.footer {
    box-sizing: border-box;
    width: 100%;
  height: 74px;
  background-color: rgba(26, 27, 28, 1);
  padding: 0 19px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .footer-text {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.5);
    &:first-child {
      margin-bottom: 8px;
    }
  }
}
</style>












