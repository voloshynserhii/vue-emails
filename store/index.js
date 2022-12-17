export const mutations = {
  // accessed as:
  // $store.commit("toggleSortEmails")
  toggleSortEmails(state) {
    state.sortEmails = !state.sortEmails
  },
}

export const state = () => ({
  sortEmails: false,
})

export const strict = false
