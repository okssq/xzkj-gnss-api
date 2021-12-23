<template>
<div v-scroll="onScroll">
  <ssq-header :shadow="shadow"/>
  <banner />
  <api-class />
</div>
</template>

<script>
import SsqHeader from 'components/ssq-header.vue'
import Banner from './banner.vue'
import ApiClass from './api-class.vue'
import {ref} from "vue";
export default {
  components: {
    SsqHeader,
    Banner,
    ApiClass
  },
  setup () {
    const shadow = ref(false)
    const onScroll = (h) => {
      shadow.value = h>20
    }
    return {
      shadow,
      onScroll
    }
  },
}
</script>
