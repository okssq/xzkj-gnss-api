<template>
  <div>
    <table class="my-table full-width">
      <thead>
      <tr>
        <th colspan="1" rowspan="1" class="is-leaf">
          <div class="cell">名称</div>
        </th>
        <th colspan="1" rowspan="1" class="is-center">
          <div class="cell">类型</div>
        </th>
        <th colspan="1" rowspan="1" class="is-center">
          <div class="cell">是否必须</div>
        </th>
        <th colspan="1" rowspan="1" class="is-leaf">
          <div class="cell">示例</div>
        </th>
        <th colspan="1" rowspan="1" class="is-leaf">
          <div class="cell">备注</div>
        </th>
      </tr>
      </thead>
      <tbody>
      <format-table-tr v-for="(item,index) in arr" :key="index" :row-item="item"/>
      </tbody>
    </table>
  </div>
</template>

<script>
import FormatTableTr from './format-table-tr.vue'

export default {
  components: {
    FormatTableTr
  },
  setup() {
    const arr = [

      {
        a: '1-1', b: '1-1', c: '1-1', d: '1-1', e: '1-1',
        children: [
          {a: '1-1-1', b: '1-1-1', c: '1-1-1', d: '1-1-1', e: '1-1-1',},
          {a: '1-1-2', b: '1-1-2', c: '1-1-2', d: '1-1-2', e: '1-1-2',},
          {
            a: '1-1-3', b: '1-1-3', c: '1-1-3', d: '1-1-3', e: '1-1-3',
            children: [
              {a: '1-1-3-1', b: 2, c: 3, d: 4, e: 5,},
              {a: '1-1-3-2', b: 2, c: 3, d: 4, e: 5,},
            ]
          }
        ]
      },

      {
        a: 1, b: 2, c: 3, d: 4, e: 5,
        children: [
          {
            a: 1, b: 2, c: 3, d: 4, e: 5,
            children: [
              {a: 1, b: 2, c: 3, d: 4, e: 5,},
              {a: 1, b: 2, c: 3, d: 4, e: 5,},
            ]
          },
          {a: 1, b: 2, c: 3, d: 4, e: 5,},
          {a: 1, b: 2, c: 3, d: 4, e: 5,},
        ]
      },
      {a: 1, b: 2, c: 3, d: 4, e: 5},
    ]
    return {
      arr
    }
  }
}
</script>

