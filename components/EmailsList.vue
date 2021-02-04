<template>
  <!-- `emailsMostRecentFirst` is defined below in the script tag. If you wanted to access the
  emails directly here, it would be like :list="$store.state.emails" -->
  <List :list="emailsMostRecentFirst">
    <!--
    If you need a way to create a loop in a template, check out the List component.

    You can ignore the funky assignment (`#default=...`) below. Just know that it makes the right
    hand side (`email`) available within the template tag
    -->
    <template #default="{ item: email }">
      <!--
      If you want to make a custom component, check out `ComponentTemplate.vue`
      -->
      <Email
        :subject="email.subject"
        :snippet="email.snippet"
        :from="email.from"
        :date="email.sentAt"
        :is-unread="email.isUnread"
      />
    </template>
  </List>
</template>

<script>
export default {
  // https://vuejs.org/v2/guide/computed.html
  computed: {
    emailsMostRecentFirst() {
      if (!this.$store.state.sortEmails) {
        return this.$store.state.emails
      }

      // Most recent emails first
      // Data comes from store/emails.js
      // FYI: $store is available directly in the template, without using `this.`
      return this.sortBy(this.$store.state.emails, "sentAt")
    },
  },
  methods: {
    sortBy(array, attr) {
      return array.sort((a, b) => b[attr] - a[attr])
    },
  },
}
</script>
