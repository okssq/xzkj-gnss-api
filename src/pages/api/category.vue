<template>
  <q-btn
    push
    dense
    round
    color="blue"
    class="category-btn"
    icon="mdi-shape-outline"
    @click="alertVisible = true"
  />

  <q-dialog v-model="alertVisible">
    <div class="column no-wrap bg-white q-px-lg q-py-sm" >
      <div class="row items-center justify-between">
        <div class="text-subtitle1">API类别选择</div>
        <q-btn round flat v-close-popup icon="mdi-close"/>
      </div>
      <q-separator spaced/>
      <q-option-group
        class="q-py-md"
        v-model="group"
        :options="options"
        color="primary"
        inline
      />
      <q-separator spaced/>
      <div class="text-right">
        <q-btn flat v-close-popup label="取消"></q-btn>
        <q-btn flat label="确定"></q-btn>
      </div>
    </div>

  </q-dialog>

</template>

<script setup>
import {ref} from "vue";

const alertVisible = ref(false)
const group = ref('op1')
const options = [
  {
    label: 'Option 1',
    value: 'op1'
  },
  {
    label: 'Option 2',
    value: 'op2'
  },
  {
    label: 'Option 3',
    value: 'op3'
  }
]
</script>

<style scoped>
.category-btn {
  position: absolute;
  width: 44px;
  height: 44px;
  left: 238px;
  top: 80px;
}
</style>
