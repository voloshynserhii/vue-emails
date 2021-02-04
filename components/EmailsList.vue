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
      <Email
        :subject="email.subject"
        :snippet="email.snippet"
        :from="email.from"
        :date="email.sentAt"
        :is-unread="email.isUnread"
      >
        <template #leftIcon>
          <i class="pr-4 text-xl leading-none la la-email" />
        </template>
      </Email>
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
      return this.$store.state.emails.sort((a, b) => b.sentAt - a.sentAt)
    },
  },
}
</script>
