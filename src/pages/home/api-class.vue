<template>
<div>
  <div class="w1200 component-main">
    <div class="row wrap justify-between q-pb-md">
      <q-card v-for="btn in classArr" :key="btn.value" class="my-card" @click="navigatorTo">
        <q-card-section >
          <div class="text-h6">{{ btn.label }}</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>
      </q-card>
    </div>
  </div>


</div>
</template>

<script>

import { useRouter } from 'vue-router'
export default {
  setup() {
    const router = useRouter()
    const classArr = [
      {label: '全部', value: 0},
      {label: '车辆数据', value: 1},
      {label: '车辆基础信息', value: 2},
      {label: '设备数据', value: 3},
      {label: '机构信息', value: 4},
      {label: '物流地图', value: 5},
      {label: '时效产品', value: 6},
      {label: '设备操作', value: 7},
      {label: '司机基础信息', value: 8},
      {label: '调度规划', value: 9},
      {label: 'AI安全服务', value: 10},
      {label: '油卡托管', value: 11},
      {label: '其他', value: 12},
    ]
    const navigatorTo = () => {
      router.push('api')
    }
    return {
      classArr,
      navigatorTo
    }
  }
}
</script>

<style scoped>
.component-main{
  /*transform: translateY(-120px);*/
}
.my-card{
  width: 24%;
  margin-top: 16px;
}
</style>
