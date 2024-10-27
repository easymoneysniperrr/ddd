<template>
  <div class="device-center">
    <section class="banner-area">
      <div class="title">贵鸿设备中心</div>
      <div class="des">繁荣鸿蒙生态发展，赋能智盖城市管理、服务提质增效</div>
    </section>

    <section class="device-area">
      <div class="title">基于贵鸿，打造生态硬件设备</div>
      <div class="des">繁荣鸿蒙生态发展，赋能智盖城市管理、服务提质增效</div>
      <div class="device">
        <div v-for="i of 5">
          <img src="../assets/images/device-center/water.png">
        </div>
      </div>
    </section>

    <section class="access-mode-area">
      <div class="title">贵鸿生态设备支持的接入方式</div>
      <div class="modes">
        <div v-for="item of modes" class="item">
          <p class="name">{{ item.title }}</p>
          <p class="desc">{{ item.desc }}</p>
          <img :src="item.imgUrl" >
        </div>
      </div>
    </section>
  
    <section class="system-info">
      <div class="title">鸿蒙设备接入，统操作系统，凝聚智慧互联力量</div>
      <div class="des">不是一个单一的操作系统，而是可以被灵活组装的操作系统能力集合，基于一个高度弹性的架构，将这些操作系统能力按需组合，满足千行百业场景需要的场景化操作系</div>
      <div class="button">加入贵鸿生态</div>
      <div class="system">
        <div v-for="item of systems" class="item">
          <img :src="item.imgUrl" >
          <p class="name">{{ item.title }}</p>
          <p class="desc">{{ item.desc }}</p>
        </div>
      </div>
    </section>

    <section class="device-search">
      <div class="title">贵鸿生态设备鸿蒙兼容性评测查询</div>
      <div class="filter-buttons">
        <div class="filter-group">
          <label>评测设备类型：</label>
          <div
            v-for="type in deviceTypes"
            :key="type.value"
            class="button"
            :class="{ active: selectedDeviceType === type.value }"
            @click="selectedDeviceType = type.value"
          >
            {{ type.label }}
          </div>
        </div>
        <div class="filter-group">
          <label>评测OS类型：</label>
          <div
            v-for="os in osTypes"
            class="button"
            :key="os.value"
            :class="{ active: selectedOSType === os.value }"
            @click="selectedOSType = os.value"
          >
            {{ os.label }}
          </div>
        </div>
      </div>
      <!-- 设备展示 -->
      <div class="device-list">
        <div v-for="device in filteredDevices" :key="device.id" class="device-card">
          <img :src="device.image"/>
          <p class="title">{{ device.name }}</p>
          <p class="desc">{{ device.desc }}</p>
          <p class="company">{{ device.company }}</p>
        </div>
      </div>

      <el-pagination background layout="prev, pager, next" :total="1" />

    </section>

    <section class="all-rights">
      <p>Copyright @ wwwguifa.com, All Rights Reserved</p>
      <p>贵阳贵安鸿蒙城市生态中心</p>
    </section>
  </div>
</template>

<script setup>
const modePng1 = new URL('../assets/images/device-center/Frame(3).png', import.meta.url).href
const modePng2 = new URL('../assets/images/device-center/Frame(4).png', import.meta.url).href
const modePng3 = new URL('../assets/images/device-center/Frame(5).png', import.meta.url).href
const modePng4 = new URL('../assets/images/device-center/Frame(6).png', import.meta.url).href

const systemPng1 = new URL('../assets/images/device-center/Frame.png', import.meta.url).href
const systemPng2 = new URL('../assets/images/device-center/Frame(1).png', import.meta.url).href
const systemPng3 = new URL('../assets/images/device-center/Frame(2).png', import.meta.url).href

const devicePng1 = new URL('../assets/images/device-center/water.png', import.meta.url).href

// 接入方式
const modes = [
  { title: '贵鸿操作系统接入', desc: '具体说明具体说明具体说明具体说明具体说明具体说明具体说明具体说明', imgUrl: modePng1},
  { title: '贵鸿SDK接入', desc: '具体说明具体说明具体说明具体说明具体说明具体说明具体说明具体说明', imgUrl: modePng2},
  { title: '互联互通SDK接入', desc: '具体说明具体说明具体说明具体说明具体说明具体说明具体说明具体说明', imgUrl: modePng3},
  { title: '模组接入', desc: '具体说明具体说明具体说明具体说明具体说明具体说明具体说明具体说明', imgUrl: modePng4},
]
const systems = [
  { title: '鸿蒙设备接入', desc: '文案说明，文案说明，文案说明，文案说明，文案说明', imgUrl: systemPng3 },
  { title: '鸿蒙设备开发', desc: '文案说明，文案说明，文案说明，文案说明，文案说明', imgUrl: systemPng1 },
  { title: '鸿蒙设备运维', desc: '文案说明，文案说明，文案说明，文案说明，文案说明', imgUrl: systemPng2 }
]
// 设备数据
const devices = ref([
  { id: 1, name: '星闪开发板', type: '开发板', os: '轻量系统', image: devicePng1, desc: '2024.10.23 通过评测', company: '湖南开鸿智谷' },
  { id: 2, name: '星闪模块', type: '模块', os: '小型系统', image: devicePng1, desc: '2024.10.23 通过评测', company: '湖南开鸿智谷' },
  // 更多设备数据...
]);

// 筛选条件
const deviceTypes = [
  { label: '全部', value: '' },
  { label: '模块/开发板', value: '开发板' },
  { label: '商业设备', value: '商业设备' },
  { label: '发行版', value: '发行版' }
];
const osTypes = [
  { label: '全部', value: '' },
  { label: '轻量系统', value: '轻量系统' },
  { label: '小型系统', value: '小型系统' },
  { label: '标准系统', value: '标准系统' }
];

// 筛选状态
const selectedDeviceType = ref('');
const selectedOSType = ref('');

// 计算属性：根据选择的类型过滤设备
const filteredDevices = computed(() => {
  return devices.value.filter(device => {
    const matchesDeviceType = selectedDeviceType.value === '' || device.type === selectedDeviceType.value;
    const matchesOSType = selectedOSType.value === '' || device.os === selectedOSType.value;
    return matchesDeviceType && matchesOSType;
  });
});
</script>

<style lang="scss">
.device-center {
  section {
    flex-direction: column;
  }
  .banner-area {
    height: 616px;
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
    }
  }
  .device-area {
    height: 782px;
    align-items: center;
    color: #000000;
    background-color: #fff;
    .title {
      margin-top: 100px;
      font-weight: bold;
      font-size: 40px;
      line-height: 47px;
      margin-bottom: 40px;
    }
    .des {
      font-weight: 400;
      font-size: 14px;
      line-height: 27px;
      color: rgba(0,0,0,0.6);
    }
    .device {
      display: flex;
      justify-content: space-between;
      margin: 190px 240px 100px;
    }
  }
  .access-mode-area {
    height: 565px;
    align-items: center;
    background-color: #EDF4FF;
    .title {
      font-weight: bold;
      font-size: 40px;
      color: #000000;
      line-height: 47px;
      margin: 100px 0 68px;
    }
    .modes {
      margin: 0 240px;
      display: flex;
      justify-content: space-between;
      gap: 24px;
      .item {
        padding: 24px;
        background: #FFFFFF;
        border-radius: 24px 24px 24px 24px;
        display: flex;
        flex-direction: column;
        .name {
          font-weight: bold;
          font-size: 20px;
          color: #000000;
          line-height: 23px;
          margin-top: 24px;
          margin-bottom: 23px;
        }
        .desc {
          font-weight: 400;
          font-size: 14px;
          color: rgba(0,0,0,0.6);
          line-height: 27px;
          margin-bottom: 6px;
        }
        img {
          width: 66px;
          height: 66px;
          margin-left: auto;
        }
      }
    }
  }
  .system-info {
    align-items: center;
    .title {
      font-weight: bold;
      font-size: 40px;
      color: #000000;
      line-height: 47px;
      margin: 100px 0 40px;
    }
    .des {
      margin-bottom: 60px;
      font-weight: 400;
      font-size: 14px;
      color: rgba(0,0,0,0.6);
      line-height: 27px;
    }
    .button {
      width: 204px;
      height: 56px;
      text-align: center;
      line-height: 56px;
      color: white;
      background: #007CF7;
      border-radius: 37px 37px 37px 37px;
      margin-bottom: 120px;
      cursor: pointer;
    }
    .system {
      margin: 0 240px;
      display: flex;
      justify-content: space-between;
      gap: 24px;
      margin-bottom: 100px;
      .item {
        padding: 51px 64px 54px;
        background: #EDF4FF;
        border-radius: 24px 24px 24px 24px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .name {
          font-weight: bold;
          font-size: 20px;
          color: #000000;
          line-height: 23px;
          margin-top: 35px;
          margin-bottom: 10px;
        }
        .desc {
          font-weight: 400;
          font-size: 14px;
          color: rgba(0,0,0,0.6);
          line-height: 16px;
          margin-bottom: 6px;
        }
        img {
          width: 66px;
          height: 66px;
        }
      }
    }
  }
  .device-search {
    background-color: #F2F4F5;
    padding: 0 240px;
    align-items: center;
    .title {
      font-weight: bold;
      font-size: 40px;
      color: #000000;
      line-height: 48px;
      margin: 100px 0 48px;
    }
    .filter-buttons {
      width: 100%;
      height: 184px;
      background: #FFFFFF;
      border-radius: 24px 24px 24px 24px;
      padding: 40px 24px;
      box-sizing: border-box;
      margin-bottom: 56px;
      .filter-group {
        font-weight: 400;
        font-size: 16px;
        color: #000000;
        display: flex;
        margin-bottom: 24px;
        gap: 16px;
        label {
          line-height: 40px;
          width: 112px;
        }
        .button {
          cursor: pointer;
          padding: 8px 24px;
          height: 40px;
          line-height: 24px;
          box-sizing: border-box;
          background: #FFFFFF;
          border-radius: 4px 4px 4px 4px;
          border: 1px solid rgba(0,0,0,0.1);
          &.active {
            border: 1px solid rgba(0,124,247,0.9);
            color: rgba(0,124,247,0.9);
          }
        }
      }
    }
    .device-list {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      row-gap: 24px;
      column-gap: 24px;
      margin-bottom: 24px;
      .device-card {
        height: 443px;
        background: #FFFFFF;
        border-radius: 24px 24px 24px 24px;
        padding: 32px 40px;
        box-sizing: border-box;
        p {
          text-align: center;
        }
        .title {
          margin: 24px 0;
          font-weight: 500;
          font-size: 18px;
          color: #000000;
          line-height: 21px;
        }
        .desc {
          height: 32px;
          background: #F2F4F5;
          line-height: 32px;
          border-radius: 4px 4px 4px 4px;
          margin-bottom: 16px;
        }
        .company {
          font-weight: 400;
          font-size: 14px;
          color: rgba(0,0,0,0.6);
          line-height: 16px;
        }
      }
    }
    .el-pagination {
      margin-bottom: 100px;
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