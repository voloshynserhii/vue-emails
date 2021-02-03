<template>
  <ul class="flex flex-col items-stretch max-h-full overflow-y-auto">
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
