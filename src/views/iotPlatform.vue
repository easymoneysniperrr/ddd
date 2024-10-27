<template>
  <div class="platform">
    <!-- 头部 -->
    <el-header class="header">
      <div class="header-content">
        <h1 style="font-size:32px; font-weight: 400;">贵安新区全域鸿蒙物联感知平台</h1>
        
        <div class="user-info">
            <img src="@/assets/images/iotPlatform/ic_notification.png" style="width: 20px; height: 24px;" />
            <span class="user-dropdown">
              <el-avatar :size="32" src="/placeholder.svg" />
              <span>Tencent</span>
              <img src="@/assets/images/iotPlatform/ic_more.png" alt="展开" width="10" height="6" />
            </span>
        </div>
      </div>

      <!-- 统计卡片 -->
      <div class="stats-container">
        <el-row :gutter="6">
          <el-col :span="6" v-for="(stat, index) in stats" :key="index">
            <el-card class="stat-card" shadow="never">
                <div class="stat-label">{{ stat.label }}</div>
              <div class="stat-value">{{ stat.value }}<span class="stat-unit">{{ stat.unit }}</span></div>


            </el-card>
          </el-col>
        </el-row>
      </div>
    </el-header>

    <!-- 导航栏 -->
    <div class="nav-menu">
        <div 
          v-for="tab in tabs" 
          :key="tab.id" 
          :class="['nav-item', { active: activeTab === tab.id }]"
          @click="handleSelect(tab.id)"
        >
          <img :src="tab.icon" alt="" class="icon-sm" />
          <span>{{ tab.label }}</span>
        </div>
      </div>

    <!-- 主要内容区 -->
    <div class="main-content">
      <!-- 前三个普通section -->
      <section v-for="tab in tabs.filter(t => ['full-area', 'device-map', 'device-access'].includes(t.id))" 
               :key="tab.id" 
               :id="tab.id" 
               class="section">
        <div class="section-left">
          <h2 class="section-title">{{ tab.label }}</h2>
          <p class="section-desc">{{ getDescription(tab.id) }}</p>
        </div>
        <div class="section-right">
          <div class="cards-grid">
            <div v-for="(item, index) in sections[tab.id]" 
                 :key="index" 
                 class="feature-card"
                 @click="handleCardClick(tab.id, item.label)"
                 style="cursor: pointer;">
              <img :src="item.icon" alt="" class="feature-icon" />
              <span class="feature-label">{{ item.label }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- 智能场景和运维监控的特殊行 -->
      <div class="special-row">
        <div class="special-section" v-for="tab in tabs.filter(t => ['smart-scenarios', 'monitoring'].includes(t.id))" :key="tab.id" :id="tab.id">
          <div class="section-header">
            <h2 class="section-title">{{ tab.label }}</h2>
            <p class="section-desc">{{ getDescription(tab.id) }}</p>
          </div>
          <div class="section-cards">
            <div class="cards-row">
              <div v-for="(item, index) in sections[tab.id].slice(0, 2)" 
                   :key="index" 
                   class="feature-card-special"
                   @click="handleCardClick(tab.id, item.label)"
                   style="cursor: pointer;">
                <img :src="item.icon" alt="" class="feature-icon" />
                <span class="feature-label">{{ item.label }}</span>
              </div>
            </div>
            <div class="cards-row">
              <div v-for="(item, index) in sections[tab.id].slice(2, 4)" :key="index" class="feature-card-special"
              @click="handleCardClick(tab.id, item.label)"
              style="cursor: pointer;">
                <img :src="item.icon" alt="" class="feature-icon" />
                <span class="feature-label">{{ item.label }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 标准规范section -->
    <section v-if="tabs.find(t => t.id === 'standards')" 
             class="standards-section">
      <div class="standards-content">
        <div class="section-header">
          <h2 class="section-title">标准规范</h2>
        </div>
        <el-row :gutter="20">
          <el-col :span="12" v-for="(standard, index) in standards" :key="index">
            <el-card class="standard-card" shadow="hover"
            @click="handleStandardClick(index)">
              <template #default>
                <div class="standard-item">
                  
                  <span>{{ standard }}</span>
                  <img src="@/assets/images/iotPlatform/ic_download.svg" alt="" class="icon" />
                </div>
              </template>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </section>
    <footer class="footer">
        <p class="footer-text">Copyright © www.guifa.com, All Rights Reserved</p>
        <p class="footer-text">贵安新区城市码服务平台</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import tab1 from '@/assets/images/iotPlatform/tab_1.svg'
import tab2 from '@/assets/images/iotPlatform/tab_2.svg'
import tab3 from '@/assets/images/iotPlatform/tab_3.svg'
import tab4 from '@/assets/images/iotPlatform/tab_4.svg'
import tab5 from '@/assets/images/iotPlatform/tab_5.svg'
import tab6 from '@/assets/images/iotPlatform/tab_6.svg'
import fullArea1 from '@/assets/images/iotPlatform/full_area_1.svg'
import fullArea2 from '@/assets/images/iotPlatform/full_area_2.svg'
import fullArea3 from '@/assets/images/iotPlatform/full_area_3.svg'
import fullArea4 from '@/assets/images/iotPlatform/full_area_4.svg'
import deviceMap1 from '@/assets/images/iotPlatform/device_map_1.svg'
import deviceMap2 from '@/assets/images/iotPlatform/device_map_2.svg'
import deviceMap3 from '@/assets/images/iotPlatform/device_map_3.svg'
import deviceMap4 from '@/assets/images/iotPlatform/device_map_4.svg'
import deviceAccess1 from '@/assets/images/iotPlatform/device_access_1.svg'
import deviceAccess2 from '@/assets/images/iotPlatform/device_access_2.svg'
import deviceAccess3 from '@/assets/images/iotPlatform/device_access_3.svg'
import deviceAccess4 from '@/assets/images/iotPlatform/device_access_4.svg'
import smartScenarios1 from '@/assets/images/iotPlatform/smart_scenarios_1.svg'
import smartScenarios2 from '@/assets/images/iotPlatform/smart_scenarios_2.svg'
import smartScenarios3 from '@/assets/images/iotPlatform/smart_scenarios_3.svg'
import smartScenarios4 from '@/assets/images/iotPlatform/smart_scenarios_4.svg'
import monitoring1 from '@/assets/images/iotPlatform/monitoring_1.svg'
import monitoring2 from '@/assets/images/iotPlatform/monitoring_2.svg'
import monitoring3 from '@/assets/images/iotPlatform/monitoring_3.svg'
import monitoring4 from '@/assets/images/iotPlatform/monitoring_4.svg'

const activeTab = ref('full-area')

const stats = [
  { label: '设备接入总数', value: '2,000', unit: '个' },
  { label: '设备类型总量', value: '100', unit: '种' },
  { label: '接入局/委办数量', value: '100', unit: '个' },
  { label: '采集数据', value: '9,393,300', unit: '条' },
]

const tabs = [
  { id: 'full-area', label: '全域感知', icon: tab1 },
  { id: 'device-map', label: '设备地图', icon: tab2 },
  { id: 'device-access', label: '设备接入', icon: tab3 },
  { id: 'smart-scenarios', label: '智能场景', icon: tab4 },
  { id: 'monitoring', label: '运维监控', icon: tab5 },
  { id: 'standards', label: '标准规范', icon: tab6 },
]

const sections = {
  'full-area': [
    { icon: fullArea1, label: '数据总览' },
    { icon: fullArea2, label: '安全城市' },
    { icon: fullArea3, label: '绿色城市' },
    { icon: fullArea4, label: '生态环境' },
  ],
  'device-map': [
    { icon: deviceMap1, label: '按行业' },
    { icon: deviceMap2, label: '按分类' },
    { icon: deviceMap3, label: '按类型' },
    { icon: deviceMap4, label: '按用途' },
  ],
  'device-access': [
    { icon: deviceAccess1, label: 'SDK接入' },
    { icon: deviceAccess2, label: '网关接入' },
    { icon: deviceAccess3, label: '平台接入' },
    { icon: deviceAccess4, label: '云云对接' },
  ],
  'smart-scenarios': [
    { icon: smartScenarios1, label: '预案管理' },
    { icon: smartScenarios2, label: '场景管理' },
    { icon: smartScenarios3, label: '采集编排' },
    { icon: smartScenarios4, label: '消息分发' },
  ],
  'monitoring': [
    { icon: monitoring1, label: '设备监控' },
    { icon: monitoring2, label: '在线调试' },
    { icon: monitoring3, label: 'OTA升级' },
    { icon: monitoring4, label: '数据看板' },
  ],
}

const standards = [
  '贵安新区感知终端统一接入规范',
  '贵安智慧城市设备接入标准与协议',
  '贵安新区鸿蒙感知体系建设导则',
  '城市感知体系总体技术规范',
]

const descriptions = {
  'full-area': '全面接入传感器、摄像头、设备，覆社会的各个层面，实现实时监测和控制，提供更加智能化、个性化的服务，从而提高效率、降低成本、增强安全性和便利性。',
  'device-map': '设备感知一张图通过实时监控与数据分析，优化资源配置，提升决策效率，增强安全预警，降低成本，推动智能化升级。',
  'device-access': '提供核心终端接入能力，支持100+接入协议，提供直接接入、网关接入、系统接入等多种接入方式，为客户实现全域物联感知终端统一接入。',
  'smart-scenarios': '通过拖拉拽快速创建编排智能场景，实现设备的自动化联动控制、预警和事件上报等，完成智能场景的业务闭环。',
  'monitoring': '通过多维度业务监控，深度挖掘数据价值，满足设备数据统计分析需求，配置灵活的告警规则，快速定位故障，避免业务损失。',
}

const getDescription = (tabId) => {
  return descriptions[tabId] || ''
}

const handleSelect = (key) => {
  activeTab.value = key
  
  // 延迟执行滚动，确保 DOM 已更新
  setTimeout(() => {
    let element
    if (key === 'standards') {
      element = document.querySelector('.standards-section')
    } else {
      element = document.getElementById(key)
    }
    
    if (element) {
      // 获取导航栏高度，避免被导航栏遮挡
      const navHeight = document.querySelector('.nav-menu')?.offsetHeight || 0
      const headerOffset = 66 // 导航栏高度
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }, 100)
}

const linkMap = {
  'full-area': {
    '数据总览': 'http://117.187.242.207:8082/iotyx/?id=2i5t4p&p=%E6%80%BB%E8%A7%88&c=1',
    '安全城市': 'http://117.187.242.207:8082/iotyx/?id=2i5t4p&p=%E5%AE%89%E5%85%A8%E5%9F%8E%E5%B8%82&c=1',
    '绿色城市': 'http://117.187.242.207:8082/iotyx/?id=2i5t4p&p=%E7%BB%BF%E8%89%B2%E5%9F%8E%E5%B8%82&c=1',
    '生态环境': 'http://117.187.242.207:8082/iotyx/?id=2i5t4p&p=%E7%94%9F%E6%80%81%E7%8E%AF%E5%A2%83&c=1'
  },
  'device-map': {
    '按行业': 'http://117.187.242.207:8082/iotyx/?id=slfg72&p=%E6%A6%82%E8%A7%88&c=1',
    '按分类': 'http://117.187.242.207:8082/iotyx/?id=slfg72&p=%E6%A6%82%E8%A7%88&c=1',
    '按类型': 'http://117.187.242.207:8082/iotyx/?id=slfg72&p=%E6%A6%82%E8%A7%88&c=1',
    '按用途': 'http://117.187.242.207:8082/iotyx/?id=slfg72&p=%E6%A6%82%E8%A7%88&c=1'
  },
  'device-access': {
    'SDK接入': 'https://iot.talkweb.com.cn/docs/pages/020101/',
    '网关接入': 'http://117.187.242.207:8082/iotyx/?id=x8sb02&p=%E7%BD%91%E5%85%B3%E8%AE%BE%E5%A4%87&c=1',
    '平台接入': 'http://117.187.242.207:8082/iotcity/#/device_m/device_sub_m',
    '云云对接': 'http://117.187.242.207:8082/iotcity/#/product_m/protocolConversion_m'
  },
  'smart-scenarios': {
    '预案管理': 'http://117.187.242.207:8082/iotcity/#/scenes_manage_m/scene_manage_list',
    '场景管理': 'http://117.187.242.207:8082/iotcity/#/scenes_manage_m/scene_manage_instances',
    '采集编排': 'http://117.187.242.207:8082/iotcity/#/rule_engine_m/rule_arrangement',
    '消息分发': 'http://117.187.242.207:8082/iotcity/#/rule_engine_m/data_forwarding_m'
  },
  'monitoring': {
    '设备监控': 'http://117.187.242.207:8082/iotyx/?id=dhgmv2&p=%E8%AE%BE%E5%A4%87%E7%9B%91%E6%8E%A7&c=1',
    '在线调试': 'http://117.187.242.207:8082/iotcity/#/developer_m/onlineDebuggeing_m',
    'OTA升级': 'http://117.187.242.207:8082/iotcity/#/monitor_m/ota_m',
    '数据看板': 'http://117.187.242.207:8082/iotcity/#/statistical_analysis_m/data-overview'
  }
}

const standardLinks = [
  'http://117.187.242.207:8082/iotyx/%E8%B4%B5%E5%AE%89%E6%96%B0%E5%8C%BA%E6%84%9F%E7%9F%A5%E7%BB%88%E7%AB%AF%E7%BB%9F%E4%B8%80%E6%8E%A5%E5%85%A5%E8%A7%84%E8%8C%83.pdf',
  'http://117.187.242.207:8082/iotyx/%E8%B4%B5%E5%AE%89%E6%99%BA%E6%85%A7%E5%9F%8E%E5%B8%82%E8%AE%BE%E5%A4%87%E6%8E%A5%E5%85%A5%E6%A0%87%E5%87%86%E4%B8%8E%E5%8D%8F%E8%AE%AE.pdf',
  'http://117.187.242.207:8082/iotyx/%E8%B4%B5%E5%AE%89%E6%96%B0%E5%8C%BA%E9%B8%BF%E8%92%99%E6%84%9F%E7%9F%A5%E4%BD%93%E7%B3%BB%E5%BB%BA%E8%AE%BE%E5%AF%BC%E5%88%99.pdf',
  'http://117.187.242.207:8082/iotyx/%E6%99%BA%E6%85%A7%E5%9F%8E%E5%B8%82%E5%9F%8E%E5%B8%82%E6%84%9F%E7%9F%A5%E4%BD%93%E7%B3%BB%E6%80%BB%E4%BD%93%E6%8A%80%E6%9C%AF%E8%A7%84%E8%8C%83.pdf'
]

const handleStandardClick = (index) => {
  const url = standardLinks[index]
  if (url) {
    window.open(url, '_blank')
  }
}

const handleCardClick = (sectionId, label) => {
  const url = linkMap[sectionId]?.[label]
  if (url) {
    window.open(url, '_blank')
  }
}

onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: 'auto' // 或者使用 'auto' 立即滚动
  })
})
</script>

<style scoped lang="scss">
.platform {
  background-color: rgba(235, 240, 247, 1);

  margin: 0 auto;
}

.header {
  background-image: url('@/assets/images/iotPlatform/banner.png');
  color: white;
  height: 600px !important;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;

}

.header-content {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  width: 100%;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 20px;
}

.notification {
  cursor: pointer;
}

.user-dropdown {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.stats-container {
    width: 820px;
    margin: 106px auto;
}

.stat-card {
  background-color: transparent;
  border: 0;
  color: white;
  text-align: center;
}

.stat-value {
  font-size: 32px;
  font-weight: 700;
}

.stat-label {
  font-size: 16px;
  margin-bottom: 16px;
}

.stat-unit {
  font-size: 16px;
  font-weight: 400;
}

.navigation {
  border-bottom: 1px solid var(--el-border-color-light);
}

.main-content {
  max-width: 1440px;
  margin: 0 auto;
}

.section {
    box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: rgba(250, 252, 252, 1);
  max-width: 1440px;
  width: 100%;
  height: 231px;
  border-radius: 8px;
  padding: 40px;
  margin-bottom: 24px;
}

.section-left {
  flex: 0 0 440px;
}

.section-title {
  font-size: 40px;
  font-weight: 400;
  margin-bottom: 52px;
  line-height: 28px;
  color: #000;
}

.section-desc {
  font-size: 14px;
  color: rgba(51, 51, 51, 1);
  line-height: 22px;
}

.section-right {
    box-sizing: border-box;
    max-width: 962px;
    width: 100%;
    height: 146px;
    flex: 1;
    margin-left: 35px;
    background-color: #fff;
    border-radius: 4px;
    background: rgba(255, 255, 255, 1);

    border: 1px solid rgba(238, 238, 238, 1);
    padding: 20px;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
//   gap: 20px;

}

.feature-card {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-right: 1px solid rgba(238, 238, 238, 1);
    min-height: 106px; /* 添加最小高度以确保卡片撑开 */
}

.feature-card:last-child {
    border-right: none;
}

.feature-icon {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.feature-label {
  font-size: 16px;
  color: rgba(51, 51, 51, 1);
  line-height: 22px;
  font-weight: 400;
  margin-top: 16px;
}

.icon-wrapper {
  background-color: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
  width: 60px;
  height: 60px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 12px;
}

.standard-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.standard-item .el-icon {
  color: var(--el-color-primary);
}

.icon {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.icon-sm {
  width: 20px;
  height: 20px;
  object-fit: contain;
}

.icon-wrapper .icon {
  width: 32px;
  height: 32px;
}

.standard-item .icon {
  width: 20px;
  height: 20px;
}

.nav-menu {
    box-sizing: border-box;
  display: flex;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 0 40px;
  max-width: 1440px;
  height: 66px;
  margin: -211px auto 26px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 400;
  &.active {
    color: var(--el-color-primary);
  }
}

.special-layout {
  display: flex;
  gap: 20px;
  width: 100%;
}

.group {
  flex: 1;
  
  .group-title {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 16px;
    color: #333;
  }

  .group-items {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
}

.cards-grid-special {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  height: 100%;
}


.section-content {
  width: 100%;
  height: 559px;
}

.section-header {
  margin-bottom: 24px;
}

.section-cards {
  background: #fff;
  border: 1px solid rgba(238, 238, 238, 1);
  border-radius: 8px;
  padding: 24px;
  height: 318px;
  box-sizing: border-box;
}

.cards-row {
  display: flex;
  height: 50%;
  box-sizing: border-box;
}
.cards-row:first-child {
  padding-bottom: 20px;
}
.cards-row:last-child {
  padding-top: 20px;
}

.special-row {
  display: flex;
  gap: 24px;
  margin-bottom: 48px;
}

.special-section {
    box-sizing: border-box;
  flex: 1;
  background-color: rgba(250, 252, 252, 1);
  border-radius: 8px;
  padding: 40px;
  height: 559px;

  .section-header {
    margin-bottom: 34px;
  }

  .section-title {
    font-size: 40px;
    font-weight: 400;
    margin-bottom: 52px;
    color: #000;
  }

  .section-desc {
    font-size: 14px;
    color: rgba(51, 51, 51, 1);
    line-height: 22px;
  }

  .section-cards {
    background: #fff;
    border: 1px solid rgba(238, 238, 238, 1);
    border-radius: 8px;
    padding: 24px;
    height: 318px;
    box-sizing: border-box;

    .cards-row {
      display: flex;
      height: 50%;

      &:first-child {
        border-bottom: 1px solid rgba(238, 238, 238, 1);
      }
    }

    .feature-card-special {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-right: 1px solid rgba(238, 238, 238, 1);

      &:nth-child(2n) {
        border-right: none;
      }

      .feature-icon {
        width: 40px;
        height: 40px;
        margin-bottom: 16px;
      }

      .feature-label {
        font-size: 16px;
        color: rgba(51, 51, 51, 1);
      }
    }
  }
}
.standards-section {
  width: 100%;
  background: url('@/assets/images/iotPlatform/rule_bg.png') no-repeat center center;
  background-size: cover;
  height: 352px;
  display: flex;
  justify-content: center;
  align-items: start;
  
  .standards-content {
    max-width: 1370px;
    width: 100%;
    padding-top: 55px;
    box-sizing: border-box;
    
    .section-header {
      margin-bottom: 0;
    }
    
    .section-title {
      font-size: 40px;
      font-weight: 400;
      margin-bottom: 16px;
      color: #000;
    }
  }

  .standard-card {
    background: rgba(255, 255, 255, 0.6);
    border: 1px solid rgba(26, 117, 255, 1);
    width: 621px;
    height: 56px;
    cursor: pointer;
    margin-top: 24px;
    .standard-item {
      display: flex;
      align-items: center;
      gap: 48px;
      
      span {
        font-size: 16px;
        color: rgba(51, 51, 51, 1);
      }
    }
  }
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














