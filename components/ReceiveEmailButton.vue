<template>
  <!--  the store mutation (receiveEmail) is in store/emails.js -->
  <button
    type="button"
    class="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white border border-transparent rounded-md shadow-sm bg-navy-600 hover:bg-navy-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-500"
    @click="$store.commit('emails/receiveEmail', 'Eos autem soluta est.')"
  >
    Receive Email
  </button>
</template>
