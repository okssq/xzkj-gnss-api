<template>
  <tr :class="[`tr_level_${level}`, $attrs.class]">
    <td colspan="1" rowspan="1" class="is-leaf">
      <div class="cell">
        {{ rowItem.a }}
        <q-btn
          flat
          dense
          round
          :icon="expand ? 'mdi-chevron-down' : 'mdi-chevron-right'"
          @click="expand = !expand"
          v-if="rowItem.children && rowItem.children.length"
        />
      </div>
    </td>
    <td colspan="1" rowspan="1" class="is-center">
      <div class="cell">{{ rowItem.b }}</div>
    </td>
    <td colspan="1" rowspan="1" class="is-center">
      <div class="cell">{{ rowItem.c }}</div>
    </td>
    <td colspan="1" rowspan="1" class="is-leaf">
      <div class="cell">{{ rowItem.d }}</div>
    </td>
    <td colspan="1" rowspan="1" class="is-leaf">
      <div class="cell">{{ rowItem.e }}</div>
    </td>
  </tr>
  <template v-if="rowItem.children && rowItem.children.length">
    <format-table-tr
      :class="[{hidden: !expand}, $attrs.class]"
      v-for="(item,index) in (rowItem.children || [])"
      :key="index"
      :level="level+1"
      :row-item="item"
    />
  </template>
</template>

<script>
import {ref} from "vue";

export default {
  name: "format-table-tr.vue",
  props: {
    level: {
      type: Number,
      default: 0
    },
    rowItem: {
      type: Object,
      default: () => {
      }
    }
  },
  setup() {
    const expand = ref(true)
    return {
      expand
    }
  }
}
</script>

<style scoped>

</style>
