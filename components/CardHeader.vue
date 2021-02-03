<template>
  <div class="flex flex-wrap -mt-2 -ml-4 sm:flex-nowrap">
    <div class="mt-2 ml-4">
      <h3 class="flex items-center text-xl font-semibold">
        <i class="mr-2 text-3xl la" :class="'la-' + icon" />
        <slot />
      </h3>
    </div>
    <div v-if="$slots.rightOfTitle" class="flex-shrink-0 mt-2 ml-4">
      <span class="inline-flex rounded-md shadow-sm">
        <slot name="rightOfTitle" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: "",
    },
  },
}
</script>
