<template>
  <List :list="getConversations">
    <template #default="{ item: conversation }">
      <Conversation
        :subject="conversation.subject"
        :from="conversation.from.toString()"
        :date="conversation.latestTime"
        :is-unread="conversation.isUnread"
        :emails="conversation.emails"
      />
    </template>
  </List>
</template>

<script>
export default {
  computed: {
    getConversations() {
      const conversations = {}
      const data = this.$store.state.emails || []
      if (data.length > 0) {
        data?.forEach((email) => {
          if (!conversations[email.conversationId]) {
            conversations[email.conversationId] = {
              from: [email.from],
              subject: email.subject
                .replaceAll("RE:", "")
                .replaceAll("Re:", "")
                .trim(),
              emails: [email],
              isUnread: email.isUnread,
              latestTime: email.sentAt,
              id: email.conversationId,
            }
          } else {
            conversations[email.conversationId].from.push(email.from)
            conversations[email.conversationId].emails.push(email)
            if (email.isUnread)
              conversations[email.conversationId].isUnread = true
            if (email.sentAt > conversations[email.conversationId].latestTime)
              conversations[email.conversationId].latestTime = email.sentAt
          }
        })
      }
      const result = Object.values(conversations)
      if (this.$store.state.sortEmails) {
        const sorted = result.map((conversation) => ({
          ...conversation,
          emails: this.sortBy(conversation.emails, "sentAt"),
        }))
        return this.sortBy(sorted, "latestTime")
      }
      return this.unsort(result, "latestTime")
    },
  },
  methods: {
    unsort(array, attr) {
      return array.sort((a, b) => a[attr] - b[attr])
    },
    sortBy(array, attr) {
      return array.sort((a, b) => b[attr] - a[attr])
    },
  },
}
</script>
