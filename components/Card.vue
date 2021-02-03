<template>
  <div
    class="flex flex-col items-stretch h-full mb-1 overflow-hidden overflow-y-hidden bg-white border border-gray-200 rounded-lg shadow"
  >
    <div
      v-if="!!$slots.header"
      class="px-4 py-5 border-b border-gray-200 sm:px-6"
    >
      <slot name="header" />
    </div>

    <div class="flex flex-col items-stretch px-8 py-5 overflow-y-hidden">
      <slot />
    </div>
  </div>
</template>
