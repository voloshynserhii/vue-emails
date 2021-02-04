<template>
  <ul class="flex flex-col items-stretch max-h-full overflow-y-auto">
    <!--
    If you need it, the docs for a loop (v-for) are here (can be any element, doesn't need to
    be ui/li):
    https://vuejs.org/v2/guide/list.html#Mapping-an-Array-to-Elements-with-v-for
    so e.g. `<div v-for="item in list"  :key="item.id">` would work
    -->
    <li v-for="(item, index) in list" :key="item.id">
      <hr v-if="index !== 0" class="border-gray-200" />
      <slot :item="item" />
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
}
</script>
