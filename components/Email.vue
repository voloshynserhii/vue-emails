<template>
  <!--
    @click is an example of how to fire a click handler. Note that @ is shorthand for `v-on:`
    .prevent automatically does an event.preventDefault
    Docs for events: https://vuejs.org/v2/guide/events.html
    Docs for .prevent/.stop: https://vuejs.org/v2/guide/events.html#Event-Modifiers
    custom-class is an example class, defined at the bottom as an example of defining custom CSS
    Here, `custom-class` is only assigned when the object has been clicked.
    Docs for the :class format: https://vuejs.org/v2/guide/class-and-style.html#Object-Syntax
    -->
  <div
    class="flex flex-row w-full cursor-pointer"
    :class="{ 'custom-class': haveIBeenClicked }"
    @click.prevent="exampleClick"
  >
    <span class="flex flex-col w-6 p-2">
      <!-- only show this span if email is unread -->
      <span v-if="isUnread" class="w-2 h-2 rounded-full bg-mustard" />
    </span>
    <div class="flex flex-col items-start w-full">
      <div class="flex flex-row w-full">
        <!-- text is bold when isUnread
        -->
        <span class="text-xl text-left" :class="{ 'font-bold': isUnread }">
          {{ from }}
        </span>
        <span class="pl-2 ml-auto text-right whitespace-nowrap w-min-content">
          {{ date.toDateString() }}
        </span>
      </div>
      <div class="flex flex-col items-start w-full">
        <!-- text is bold when isUnread -->
        <span :class="{ 'font-bold': isUnread }">
          {{ subject }}
        </span>
        <div class="flex flex-row w-full">
          <span
            class="text-sm text-gray-500 truncate"
            :class="{ 'font-bold': isUnread }"
          >
            {{ snippet }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    subject: {
      type: String,
      required: true,
    },
    from: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    isUnread: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      haveIBeenClicked: false,
    }
  },
  methods: {
    exampleClick(event) {
      // Including a console log to show you how to retrieve the event, if desired
      // eslint-disable-next-line no-console
      console.log(event)
      this.haveIBeenClicked = true
    },
  },
}
</script>

<style scoped>
/* This is an example of using CSS directly in this element. The scoped argument on the style means
that this CSS applies only within this component - it won't affect anything else.
Docs on "scoped": https://vue-loader.vuejs.org/guide/scoped-css.html
*/
.custom-class {
  background: yellow;
}
</style>
