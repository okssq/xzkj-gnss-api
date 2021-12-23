<template>
  <div class="ssq-header bg-blue row items-center justify-between no-wrap overflow-hidden" :class="{'shadow-1': shadow}">
    <div class="row items-center no-wrap">
      <div class="l-title text-white text-no-wrap" @click="goToHome">
        接口开发文档
      </div>
      <q-btn outline padding="2px 8px" color="white" icon="mdi-api" class="q-ml-sm" to="/"/>
    </div>
    <div class="row items-center ssq-nav">
      <q-tabs
        :model-value="routeName"
        dense
        inline-label
        shrink
        stretch
        class="text-white"
      >
        <q-route-tab icon="mdi-home-outline" name="home" label="首页" to="/"/>
        <q-route-tab icon="mdi-vector-rectangle" name="api" label="API" to="/api"/>
      </q-tabs>
    </div>
  </div>

</template>

<script>
import {useRoute, useRouter} from 'vue-router'
import {computed} from 'vue'

export default {
  props: {
    shadow: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const routeName = computed(() => route.name)
    const goToHome = () => {
      router.push('/')
    }
    return {
      routeName,
      goToHome
    }

  }
}
</script>

<style scoped>
.ssq-header {
  position: sticky;
  left: 0;
  right: 0;
  top: 0;
  height: 60px;
  /*background-color: rgb(26, 115, 232);*/
  z-index: 100;
  padding: 0 36px;
}

.l-title {
  font-size: 1.4rem;
}

.ssq-nav {
  margin-left: 60px;
}
</style>
