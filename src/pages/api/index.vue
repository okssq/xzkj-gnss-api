<template>
  <div class="overflow-hidden">
    <ssq-header />
    <div class="my-api row no-wrap overflow-hidden relative-position">
      <nav-list />
      <q-separator vertical/>
      <div class="content-wrap" ref="mainRef" @scroll="onScroll">
        <api-content />
      </div>
      <category />
    </div>
    <q-btn push round icon="mdi-arrow-up" color="blue" class="top-btn" v-show="topBtnVisible" @click="goTop"/>
  </div>
</template>

<script setup>
import SsqHeader from 'components/ssq-header.vue'
import NavList from './nav-list.vue'
import Category from './category.vue'
import ApiContent from './api-content.vue'
import {ref} from "vue";

const topBtnVisible = ref(false)
const mainRef = ref(null)
const onScroll = (event) => {
  try {
    const {scrollTop} = event.target

    topBtnVisible.value = scrollTop > 400
  }catch (e){
    console.error('获取滚动条高度失败！')
  }
}
const goTop = () => {
  if(!mainRef.value) return
  mainRef.value.scrollTop = 0
}
</script>

<style scoped>
.my-api {
  height: calc(100vh - 60px);
}

.content-wrap {
  flex: 1;
  padding: 16px 32px !important;
  word-break: break-all;
  overflow: auto;
  background-color: rgb(248,249,251);
}


.top-btn {
  position: fixed;
  right: 30px;
  bottom: 100px;
}

</style>
