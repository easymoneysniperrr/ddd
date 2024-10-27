<!--
 * @Description: 
 * @Author: 欧阳承珺
 * @LastEditors: 欧阳承珺
 * @Date: 2024-10-27 17:26:39
 * @LastEditTime: 2024-10-27 22:16:51
-->
<template>
  <div class="coder-community">
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
            class="px-24px cursor-pointer text-color-#007CF7"
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
    </header>
    <section class="banner-area">
      <div class="title" style="color: white;">贵鸿开发者社区</div>
      <div class="des">建立资源共享、技术支持、开放交流的平台，帮助厂商的开发人员提高技能和解决问题，推动贵鸿生态系统建设，促进创新和合作</div>
    </section>

    <section class="introduction">
      <div class="title">丰富的开发工具和开发资料，满足一站式开发需求</div>
      <div class="introducts">
        <div v-for="item of introducts" class="item">
          <img :src="item.imgUrl" >
          <p class="mini-title" style="margin: 24px 0;">{{ item.title }}</p>
          <p class="desc" style="margin-bottom: 50px;">{{ item.desc }}</p>
          <span style="cursor: pointer">了解更多 <img style="vertical-align: bottom;" :src="morePng"></span>
        </div>
      </div>
    </section>

    <section class="support" style="height: 771px;">
      <div class="title">获得多维度的全程技术支持</div>
      <div class="container">
        <div class="image-box"></div>
        <div 
          v-for="(item, index) in cards" 
          :key="index" 
          class="card"
        >
          <div class="card-content">
            <p class="mini-title" style="margin-bottom: 56px;">{{ item.title }}</p>
            <p class="desc" style="cursor: pointer">
              {{ item.description }}
              <img style="vertical-align: sub;" :src="morePng">
            </p>
          </div>
          <img class="imgage" :src="item.imgUrl" >
        </div>
      </div>
    </section>

    
    <section class="introduction">
      <div class="title">接入规范</div>
      <div class="introducts">
        <div v-for="item of norms" style="flex: 1;" class="item">
          <img :src="item.imgUrl" >
          <p class="mini-title" style="margin: 24px 0;">{{ item.title }}</p>
          <p class="desc" style="margin-bottom: 50px;">{{ item.desc }}</p>
        </div>
      </div>
    </section>

    <section class="experience" style="height: 579px;">
      <div class="title">立即体验贵鸿OS</div>
      <div class="experience-ways">
        <div v-for="item of experiences" class="item">
          <p class="mini-title">{{ item.title }}</p>
          <p class="desc" style="margin: 20px 0;">{{ item.desc }}</p>
          <img :src="item.imgUrl" >
        </div>
      </div>
    </section>

    <section class="introduction">
      <div class="title">提供完善的生态厂商服务，帮助厂商简易、低成本完成设备与应用的开发，提高产品竞争力，并提供全套运营支撑服务</div>
      <div class="introducts">
        <div v-for="item of services" class="item">
          <img :src="item.imgUrl" >
          <p class="mini-title" style="margin: 24px 0;">{{ item.title }}</p>
          <p class="desc" style="margin-bottom: 50px;">{{ item.desc }}</p>
        </div>
      </div>
    </section>

    <section class="import-guide">
      <div class="title" style="margin:78px 0 72px;color: white;">厂商接入指引</div>
      <div class="steps">
        <img src="../assets/images/coder-community/Group 1000002598.png">
        <img src="../assets/images/coder-community/Group 1000002597.png">
        <img src="../assets/images/coder-community/Group 1000002596.png">
        <img src="../assets/images/coder-community/Group 1000002595.png">
        <img src="../assets/images/coder-community/Group 1000002594.png">
      </div>

      <div class="button">查看文档</div>
    </section>

    <section class="all-rights">
      <p>Copyright @ wwwguifa.com, All Rights Reserved</p>
      <p>贵阳贵安鸿蒙城市生态中心</p>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const morePng = new URL('../assets/images/coder-community/Frame(1).png', import.meta.url).href

const introductPng1 = new URL('../assets/images/coder-community/Frame.png', import.meta.url).href
const introductPng2 = new URL('../assets/images/coder-community/Frame(2).png', import.meta.url).href
const introductPng3 = new URL('../assets/images/coder-community/Frame(3).png', import.meta.url).href

const norms1 = new URL('../assets/images/coder-community/Frame(4).png', import.meta.url).href
const norms2 = new URL('../assets/images/coder-community/Frame(5).png', import.meta.url).href
const norms3 = new URL('../assets/images/coder-community/Frame(6).png', import.meta.url).href

const service1 = new URL('../assets/images/coder-community/Group 1000002263.png', import.meta.url).href
const service2 = new URL('../assets/images/coder-community/Group 1000002263(1).png', import.meta.url).href
const service3 = new URL('../assets/images/coder-community/Group 1000002263(2).png', import.meta.url).href

const support1 = new URL('../assets/images/coder-community/Group 1000002645.png', import.meta.url).href
const support2 = new URL('../assets/images/coder-community/Group 1000002646.png', import.meta.url).href
const support3 = new URL('../assets/images/coder-community/Group 1000002647.png', import.meta.url).href
const support4 = new URL('../assets/images/coder-community/Group 1000002648.png', import.meta.url).href

const way1 = new URL('../assets/images/coder-community/Frame(7).png', import.meta.url).href
const way2 = new URL('../assets/images/coder-community/Frame(8).png', import.meta.url).href
const way3 = new URL('../assets/images/coder-community/Frame(9).png', import.meta.url).href
const way4 = new URL('../assets/images/coder-community/Frame(10).png', import.meta.url).href

const introducts = [
  { title: '开发工具', imgUrl: introductPng1, desc: '提供了一套全面的开发工具，旨在帮助开发者更高效地构建和优化应用，例如：DevEco Studio、DevEco Device Tool、DevEco Debug等等，这些工具为开发者提供了从设计、开发、测试到部署的全流程支持，让开发者更高效地为用户提供更好的体验。' },
  { title: '开发资料', imgUrl: introductPng2, desc: '提供了丰富的开发资料，以帮助开发者快速上手和开发，包括源代码、开发文档、示例代码、教程等等，这些开发资料为开发者提供了全面的技术支持，帮助他们更好地理解和使用贵鸿OS，开发出高质量的产品。随着贵鸿OS项目的不断发展，这些资料也会不断更新和完善。' },
  { title: '开发板', imgUrl: introductPng3, desc: '贵鸿OS支持多种设备，包括各种开发板，对于开发者来说，开发板可用于硬件的开发、测试和原型设计；对于贵鸿OS来说，开发板可以用于验证操作系统的功能、开发应用程序或进行硬件兼容性测试。随着贵鸿OS的不断壮大，会有更多的开发板支持。' },
]

const norms = [
  { title: '鸿蒙设备接入规范', imgUrl: norms1, desc: '提供虚拟设备调试、真实设备调试、应用开发调试等功能，方便厂商顺利完成设备、应用开发。' },
  { title: '开发工具', imgUrl: norms2, desc: '专家团队全程指导，帮助生态厂商快速完成接入，给与最中肯的建议。' },
  { title: '开发工具', imgUrl: norms3, desc: '提供完善的开发文档，提供典型的案例与代码实例，零门槛入驻平台，分享鸿蒙生态发展红利。' },
]

const services = [
  { title: '开发调试', imgUrl: service1, desc: '为了让设备能够接入贵鸿生态系统，制定了一系列的设备接入规范，包括：硬件兼容性规范、系统兼容性规范、安全规范、接口与协议等，这些规范旨在确保设备能够无缝地融入贵鸿生态系统，为用户提供一致和高质量的体验，这些规范也在更新和完善中。' },
  { title: '专家指导', imgUrl: service2, desc: '贵鸿OS应用接入规范涉及多个方面，为确保应用能够顺利运行在贵鸿OS系统上，制定了相应的接入规范，包括：应用开发环境、应用配置、签名、启动流程、API使用、安全性规范等，这些规范确保了应用能够在贵鸿OS上提供一致和高质量的用户体验。' },
  { title: '文档与案例', imgUrl: service3, desc: '解决方案接入规范是为了确保各种硬件设备、应用程序和服务能够在贵鸿生态中无缝协作和运行，包括：兼容性要求、硬件规范、系统安全性、分布式能力、应用开发标准、API与SDK使用等，这些规范有助于确保贵鸿生态系统的健康发展。' },
]

const cards = [
  { title: "文档中心", description: "查看文档", imgUrl: support1 },
  { title: "开发者教程", description: "查看教程", imgUrl: support2 },
  { title: "帮助中心", description: "前往", imgUrl: support3 },
  { title: "工单支持", description: "提交工单", imgUrl: support4 },
]

const experiences = [
  { title: '贵鸿OS下载', desc: '贵鸿OS已发布，点击下载', imgUrl: way1},
  { title: 'IDE下载', desc: 'DevEco Studio 3.0 已发布，点击下载', imgUrl: way2},
  { title: '视频教程', desc: '系统学习贵鸿OS设备、应用的开发', imgUrl: way3},
  { title: '开发者示例', desc: '快速体验服务教程和开发示例', imgUrl: way4},
]
const router = useRouter()
const goToPage = (type) => {
  const routes = {
    innovation: '/innovationCenter',    // 创新中心路由
    application: '/appCenter',   // 应用中心路由
    device: '/deviceCenter'             // 设备中心路由
  }
  router.push(routes[type])
}
</script>

<style lang="scss">
.coder-community {
  section {
    flex-direction: column;
  }
  .title {
    text-align: center;
    font-weight: bold;
    font-size: 40px;
    color: #000000;
    line-height: 47px;
    margin: 100px 0;
  }
  .mini-title {
    font-weight: bold;
    font-size: 24px;
    color: #000000;
    line-height: 28px;
  }
  .desc {
    font-weight: 400;
    font-size: 14px;
    color: rgba(0,0,0,0.6);
    line-height: 27px;
  }
  .banner-area {
    background-image: url('../assets/images/coder-community/banner.png');
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
      font-size: 32px;
      margin: 0 240px;
      text-align: center;
      line-height: 48px;
    }
  }

  .introduction {
    background: rgba(237,244,255,0.5);
    padding-bottom: 100px;
    .title {
      margin: 100px 240px;
      line-height: 60px;
    }
    .introducts {
      display: flex;
      justify-content: space-between;
      margin: 0 240px;
      gap: 24px;
      .item {
        background: #FFFFFF;
        border-radius: 24px 24px 24px 24px;
        padding: 24px;
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
        background: url('../assets/images/coder-community/Frame 29.png') center center / cover no-repeat;
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
        .imgage {
          width: 80px;
          height: 80px;
        }
      }
    }
  }
  
  .experience {
    align-items: center;
    .experience-ways {
      margin: 0 240px;
      display: flex;
      justify-content: space-between;
      gap: 24px;
      .item {
        flex: 1;
        padding: 24px;
        background: #EDF4FF;
        border-radius: 24px 24px 24px 24px;
        display: flex;
        flex-direction: column;
        img {
          width: 66px;
          height: 66px;
          margin-left: auto;
          margin-top: auto;
        }
      }
    }  
  }

  .import-guide {
    height: 790px;
    background-image: url('../assets/images/coder-community/Mask group.png');
    align-items: center;
    .steps {
      margin: 0 240px;
      display: flex;
      gap: 39px;
      img {
        width: calc((100% - (39px * 4)) / 5);
      }
    }
    .button {
      width: 204px;
      height: 56px;
      text-align: center;
      line-height: 56px;
      color: white;
      background: #007CF7;
      border-radius: 37px 37px 37px 37px;
      margin-top: 56px;
      cursor: pointer;
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