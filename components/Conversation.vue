<template>
  <div class="flex flex-row w-full cursor-pointer" @click="showEmails">
    <span class="flex flex-col p-2 custom">
      <span v-if="isUnread" class="w-2 h-2 rounded-full bg-mustard" />
    </span>
    <div class="flex flex-col items-start w-full">
      <div class="flex flex-row w-full">
        <span class="text-xl text-left" :class="{ 'font-bold': isUnread }">
          {{ from }}
        </span>
        <span class="pl-2 ml-auto text-right whitespace-nowrap w-min-content">
          {{ date.toDateString() }}
        </span>
      </div>
      <div class="flex flex-col items-start w-full">
        <span :class="{ 'font-bold': isUnread }">
          {{ subject }}
        </span>
        <div class="flex flex-row w-full" :class="{ visible: !showEmail }">
          <List :list="emails">
            <template #default="{ item: email }">
              <Email
                :subject="email.subject"
                :snippet="email.snippet"
                :from="email.from"
                :date="email.sentAt"
                :is-unread="email.isUnread"
              />
            </template>
          </List>
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
    date: {
      type: Date,
      required: true,
    },
    isUnread: {
      type: Boolean,
      required: true,
    },
    emails: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      showEmail: false,
    }
  },
  methods: {
    showEmails() {
      console.log(this)
      this.showEmail = !this.showEmail
    },
  },
}
</script>

<style scoped>
.custom-class {
  background: yellow;
}

.visible {
  display: none;
}
.custom {
  min-width: 1.5rem;
  max-width: 1.5rem;
}
</style>
