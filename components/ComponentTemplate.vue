<template>
  <div @click.stop="sampleEvent">
    {{ sampleData }}
  </div>
</template>

<script>
export default {
  props: {
    propName: {
      type: Object,
      required: true,
      // if not required, then must include instead `default: "value"`
    },
  },
  data() {
    return {
      someData: "sample data",
    }
  },
  methods: {
    toggleExpand(event) {
      // Including a console log to show you how to retrieve the event, if desired
      // eslint-disable-next-line no-console
      console.log(event)
      // eslint-disable-next-line no-console
      console.log(this.someData)
    },
  },
}
</script>
