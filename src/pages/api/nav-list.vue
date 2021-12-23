<template>
  <div class="my-tab">
    <q-list style="width: 260px">
      <q-item-label header class="list-header">介绍</q-item-label>
      <q-item v-ripple class="list-item">
<!--        <q-item-section side>-->
<!--          <q-icon name="mdi-information-outline" size="20px"></q-icon>-->
<!--        </q-item-section>-->
        <q-item-section>接口说明及错误码</q-item-section>
      </q-item>
      <q-item-label header class="list-header">接口列表</q-item-label>
      <q-item v-ripple class="list-item">
        <q-item-section side>
          <q-icon name="mdi-vector-link" size="18px"></q-icon>
        </q-item-section>
        <q-item-section>
          <q-item-label>增加车辆</q-item-label>
          <q-item-label caption lines="2">在机构中以车牌号添加车辆。</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator />
      <q-item v-ripple class="list-item">
        <q-item-section side>
          <q-icon name="mdi-vector-link" size="18px"></q-icon>
        </q-item-section>
        <q-item-section>
          <q-item-label>删除车辆</q-item-label>
          <q-item-label caption lines="2">车牌号和绑定关系删除车辆</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import {ref} from 'vue'
  export default {
    setup() {
      const tab = ref('Mails')
      return {
        tab
      }
    }
  }
</script>
<style scoped>
.list-header{
  font-size: 16px;
}
.list-item{
  cursor: pointer;
  padding-left: 32px;
}
</style>

