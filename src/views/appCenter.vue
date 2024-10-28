<!--
 * @Description: 
 * @Author: 欧阳承珺
 * @LastEditors: 欧阳承珺
 * @Date: 2024-10-25 16:12:44
 * @LastEditTime: 2024-10-28 10:28:41
-->
<template>
  <div class="app-center">
    <header class="w-100% h-68px bg-cover bg-center relative">
      <!-- 导航栏提高层级 -->
      <div class="box-border px-40px absolute left-0 top-0 w-full h-64px bg-white bg-op-70 flex flex-row items-center justify-between z-10">
        <h1 class="text-20px font-500 mb-4px">贵阳贵安鸿蒙城市生态中心</h1>
        <ul class="flex flex-row items-center justify-between text-16px">
          <li 
            class="px-24px cursor-pointer"
            @click="goToPage('innovation')"
          >创新中心</li>
          <li 
            class="px-24px cursor-pointer "
            @click="goToPage('developer')"
          >贵鸿开发者社区</li>
          <li 
            class="px-24px cursor-pointer text-color-#007CF7"
            @click="goToPage('application')"
          >贵鸿应用中心</li>
          <li 
            class="pl-24px cursor-pointer"
            @click="goToPage('device')"
          >贵鸿设备中心</li>
        </ul>
      </div>
    </header>
    
    <section class="banner-area">
      <div class="title" style="color: white;">贵鸿应用中心</div>
      <div class="des">贵鸿应用中心是汇聚创新应用、提供全场景智慧体验的开发者平台，提供贵鸿应用和卡片的开发接入服务，帮助应用广商低成本完成应用和卡片的开发，为客户打造极致的场景体验，构建活跃的贵鸿应用生态。</div>
    </section>

    <section class="scene">
      <div class="title">鸿蒙卡片典型场景</div>
      <div class="cards">
        <div class="item" v-for="item of classicCards">
          <div style="width: 100%; background-size: 100% 100%;" :style="{ backgroundImage: `url(${item.img})` }"></div>
          <div style="display: flex; flex-direction: column; justify-content: center; margin-left: 32px">
            <p class="mini-title" style="margin-bottom: 10px;">{{ item.title }}</p>
            <p class="desc">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="steps">
      <div class="mini-title">各厂商可基于贵鸿应用中心，开发自己的鸿蒙应用与卡片</div>
      <div class="desc" style="margin: 12px 0 32px;">鸿蒙卡片具有“免安装、场景化、快触达”，多种体验交互方式，快捷方便。</div>
      <div style="display: flex">
        <div class="step" v-for="item of steps">
          <img :src="item.icon">
          <div class="mini-title">{{ item.title }}</div>
          <div class="desc">{{ item.desc }}</div>
        </div>
      </div>
    </section>

    <section class="yunyinzengzhi">
      <div class="title">运营增值</div>
      <div class="desc" style="margin-bottom: 30px;">为城市运营商提供高效盈利平台，帮助运营者进行端到端开放式生态平台运营，助力伙伴提效。</div>
      <div class="cards">
        <div class="item" :style="{ backgroundImage: `url(${item.image})` }" v-for="item of yunyinzengzhi">
          <p class="mini-title" style="margin-bottom: 10px;">{{ item.title }}</p>
          <p class="desc" style="margin-bottom: 10px;">{{ item.desc }}</p>
          <a style="color: #007CF7;text-decoration: none;" target="_blank" :href="item.link">前往 >></a>
        </div>
      </div>
    </section>

    <section class="support">
      <div class="title">鸿蒙卡片</div>
      <div class="desc" style="margin-bottom: 30px;">卡片服务具有免安装、轻量快捷、随处可及、即用即走、一步直达等特点，平台为厂商提供一站式卡片开发服务。</div>
      <div class="container">
        <div class="image-box"></div>
        <div 
          v-for="(item, index) in cards" 
          :key="index" 
          class="card"
        >
          <div class="card-content">
            <p class="mini-title" style="margin-bottom: 12px;">{{ item.title }}</p>
            <p class="desc" style="cursor: pointer;margin-bottom: 10px;">
              {{ item.description }}
              <img style="vertical-align: sub;" :src="morePng">
            </p>
            <a style="color: #007CF7;text-decoration: none;" target="_blank" :href="item.link">前往 >></a>
          </div>
          <img class="imgage" :src="item.imgUrl" >
        </div>
      </div>
    </section>

    <section class="apps">
      <div class="title">原生应用</div>
      <div class="desc" style="margin-bottom: 30px;">卡片服务具有免安装、轻量快捷、随处可及、即用即走、一步直达等特点，平台为厂商提供一站式卡片开发服务。
      </div>
      <div class="container">
        <div class="image-box"></div>
        <div 
          v-for="(item, index) in apps" 
          :key="index" 
          class="card"
        >
          <img class="imgage" :src="item.imgUrl" >
          <p class="app-title">{{ item.title }}</p>
          <p class="app-desc">
            {{ item.description }}
            <img style="vertical-align: sub;" :src="morePng">
          </p>
          <a style="color: #007CF7;text-decoration: none;" target="_blank" :href="item.link">前往 >></a>
        </div>
      </div>
    </section>

    <section class="all-rights">
      <p>Copyright @ wwwguifa.com, All Rights Reserved</p>
      <p>贵阳贵安鸿蒙城市生态中心</p>
    </section>
  </div>
</template>

<script setup>
const yun1 = new URL('../assets/images/app-center/Group 1000002572.png', import.meta.url).href
const yun2 = new URL('../assets/images/app-center/Group 1000002642.png', import.meta.url).href
const yun3 = new URL('../assets/images/app-center/xx1.png', import.meta.url).href
const yun4 = new URL('../assets/images/app-center/xx2.png', import.meta.url).href

const card1 = new URL('../assets/images/app-center/card1.png', import.meta.url).href
const card2 = new URL('../assets/images/app-center/card2.png', import.meta.url).href
const card3 = new URL('../assets/images/app-center/card3.png', import.meta.url).href
const card4 = new URL('../assets/images/app-center/card4.png', import.meta.url).href

const app1 = new URL('../assets/images/app-center/app1.png', import.meta.url).href
const app2 = new URL('../assets/images/app-center/app2.png', import.meta.url).href
const app3 = new URL('../assets/images/app-center/app3.png', import.meta.url).href
const app4 = new URL('../assets/images/app-center/app4.png', import.meta.url).href

const icon1 = new URL('../assets/images/app-center/01.png', import.meta.url).href
const icon2 = new URL('../assets/images/app-center/02.png', import.meta.url).href
const icon3 = new URL('../assets/images/app-center/03.png', import.meta.url).href
const icon4 = new URL('../assets/images/app-center/04.png', import.meta.url).href
const icon5 = new URL('../assets/images/app-center/05.png', import.meta.url).href

const classic1 = new URL('../assets/images/app-center/classic1.png', import.meta.url).href
const classic2 = new URL('../assets/images/app-center/classic2.png', import.meta.url).href
const classic4 = new URL('../assets/images/app-center/classic4.png', import.meta.url).href
const classic5 = new URL('../assets/images/app-center/classic5.png', import.meta.url).href

import { useRouter } from 'vue-router'

const router = useRouter()
const goToPage = (type) => {
  const routes = {
    innovation: '/innovationCenter',    // 创新中心路由
    developer: '/coderCommunity',   // 应用中心路由
    device: '/deviceCenter'             // 设备中心路由
  }
  router.push(routes[type])
}

const classicCards = [
  { title: '领导类卡片', img: classic2, desc: '如城市经济运行指数、城市安全事态...' },
  { title: '时间预警类', img: classic1, desc: '森林火灾告警、水源污染告警、重大安全生产事故告警、城市应急处置…' },
  { title: '设备控制类', img: classic4, desc: '近场巡检、远程控制设备、设备状态实时查看…' },
  { title: '生活类', img: classic5, desc: '衣食住行、生活缴费、娱乐休闲' }
]

const yunyinzengzhi = [
  { title: '卡片中心', desc: '对生态厂商上架的卡片进行统一运营', image: yun1 },
  { title: '卡片订阅', desc: '统一管理用户订阅的卡片', image: yun2 },
  { title: '应用统一管理', desc: '统一管理贵鸿市场上架', image: yun3 },
  { title: '数据分析', desc: '提供全面的分发、使用服务数据，把握运营情况', image: yun4 },
]

const cards = [
  { title: "添加卡片", link: 'https://cloud-test.openvalley.net/app-applications#/card-management', description: "一个应用可以添加多个卡片，适用于不同的场景", imgUrl: card1 },
  { title: "我的卡片管理", description: "统一管理我开发的卡片，维护卡片展示信息", imgUrl: card2 },
  { title: "添加卡片触发方式", description: "定义卡片的触发方式，支持通过位置、突发事件、时间等方式触发", imgUrl: card3 },
  { title: "卡片触发管理", description: "统一管理各卡片支持的触发方式，一个卡片可以有多种触发方式", imgUrl: card4 },
]

const apps = [
  { title: "创建应用", imgUrl: app1, link: 'https://cloud-test.openvalley.net/app-applications#/card-management', description: "创建应用若选择是“原子化”应用，则应用支持免安装。" },
  { title: "开发应用", imgUrl: app2, link: 'https://cloud-test.openvalley.net/app-applications#/card-management', description: "您可以根据您的实际需求选择合适的开发服务能力。" },
  { title: "上传应用版本", imgUrl: app3, link: 'https://cloud-test.openvalley.net/app-applications#/card-management', description: "平台提供应用版本管理能力，历史版本、开发中的版本均可在平台进行维护。" },
  { title: "申请上架贵鸿市场", imgUrl: app4, link: 'https://cloud-test.openvalley.net/app-applications#/card-management', description: "提交上架申请，通过后即可在贵鸿应用市场看得并下载应用。" },
]

const steps = [
  { title: '应用开发',  desc: '创建应用时，需选择“是”原子化服务。', icon: icon1},
  { title: '应用上架',  desc: '完成开发的应用，提交应用市场上架审核。', icon: icon2},
  { title: '添加卡片',  desc: '为应用添加对应的卡片，并完成卡片内容配置。', icon: icon3},
  { title: '卡片出发配置',  desc: '为卡片配置对应的触发方式。', icon: icon4},
  { title: '卡片分发',  desc: '将卡片指定分发给相应的客户或设备使用。', icon: icon5},
]
</script>

<style lang="scss">
.app-center {
  section {
    flex-direction: column;
    align-items: center;
  }
  .title {
    text-align: center;
    font-weight: bold;
    font-size: 40px;
    color: #000000;
    line-height: 47px;
    margin: 100px 0 50px;
  }
  .mini-title {
    font-weight: bold;
    font-size: 20px;
    color: #000000;
    line-height: 27px;
  }
  .desc {
    font-weight: 400;
    font-size: 14px;
    color: rgba(0,0,0,0.6);
    line-height: 21px;
  }
  .banner-area {
    background-image: url('../assets/images/app-center/banner.png');
    height: 615px;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    background-color: #ccc;
    .title {
      font-weight: bold;
      font-size: 72px;
      line-height: 107px;
      margin-bottom: 37px;
    }
    .des {
      font-weight: 400;
      font-size: 28px;
      margin: 0 240px;
      text-align: center;
      line-height: 48px;
    }
  }
  .scene {
    margin: 0 240px;
    .cards {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      row-gap: 24px;
      column-gap: 24px;
      margin-bottom: 100px;
      .item {
        padding: 33px 24px;
        background: url('../assets/images/app-center/classic3.png') center center / cover no-repeat;;
        display: grid;
        height: 234px;
        grid-template-columns: 1fr 1fr;
        box-sizing: border-box;
        border-radius: 24px;
        cursor: pointer;
      }
    }
  }
  .yunyinzengzhi {
    margin: 0 240px;
    .cards {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      row-gap: 24px;
      column-gap: 24px;
      margin-bottom: 100px;
      .item {
        display: flex;
        flex-direction: column;
        height: 280px;
        justify-content: center;
        padding-left: 44px;
        border-radius: 24px;
        cursor: pointer;
      }
    }
  }
  .steps {
    margin: 0 240px;
    align-items: flex-start;
    .step {
      padding: 27px 20px 20px;
      flex: 1;
      background: url('../assets/images/app-center/Rectangle 3468306.png') center center / cover no-repeat;
      .mini-title {
        margin: 10px 0 8px;
      }
    }
  }
  .support {
    margin: 0 240px;
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 20px;
      .image-box {
        background: url('../assets//images/coder-community/Frame 29.png') center center / cover no-repeat;
        grid-row: 1 / span 2;
        border-radius: 20px;
      }
      .card {
        height: 200px;
        background: #EDF4FF;
        border-radius: 24px 24px 24px 24px;
        padding: 48px 32px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        .imgage {
          width: 80px;
          height: 80px;
        }
      }
    }
  }
  .apps {
    margin: 0 240px;
    padding-bottom: 100px;
    .container {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
      gap: 20px;
      .image-box {
        background: url('../assets/images/app-center/Frame 29(1).png') center center / cover no-repeat;
        border-radius: 20px;
      }
      .card {
        height: 368px;
        background: #EDF4FF;
        border-radius: 24px 24px 24px 24px;
        padding: 48px 32px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        .imgage {
          width: 80px;
          height: 80px;
          margin-bottom: auto
        }
        .app-title {
          font-weight: bold;
          font-size: 20px;
          color: #000000;
          line-height: 23px;
          margin: 44px 0 12px;
        }
        .app-desc {
          font-weight: 400;
          font-size: 14px;
          color: rgba(0,0,0,0.6);
          line-height: 21px;
          text-align: center;
        }
        a {
          margin-top: auto;
        }
      }
    }
  }

  .all-rights {
    height: 80px;
    background: #000000;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      line-height: 22px;
    }
  }
}
</style>