/* mutations are similar enough to Redux reducers that you can consider it to be the same here
Docs: https://vuex.vuejs.org/guide/mutations.html
*/
export const mutations = {
  // accessed as:
  // $store.commit("emails/receiveEmail", "subject")
  receiveEmail(state, subject) {
    state.push({
      subject,
      snippet:
        "Officiis dolorem consequatur. Alias dolores non. Unde eius quibusdam.",
      from: "Junko Hyatt",
      sentAt: new Date(),
      isUnread: true,
      conversationId: 6,
    })
  },
  markAllRead(state) {
    state.forEach((email) => {
      email.isUnread = false
    })
  },
}

export const state = () =>
  [
    {
      id: 1,
      subject: "Non vel vero sint.",
      snippet: "Ut enim aut. Sint et aliquam. Culpa earum non.",
      from: "Clint Lesch",
      sentAt: "2020-10-23T11:20:25.000Z",
      isUnread: true,
      conversationId: 4,
    },
    {
      id: 2,
      subject: "Re: RE: Quisquam suscipit natus minima.",
      snippet: "Qui ducimus et. Nobis cumque autem. Impedit voluptatem veniam.",
      from: "Dylan Cole",
      sentAt: "2020-12-16T12:16:21.000Z",
      isUnread: true,
      conversationId: 1,
    },
    {
      id: 3,
      subject: "Re: Qui ut harum rem.",
      snippet: "Provident doloremque nesciunt. Dolor sit fuga. Qui qui itaque.",
      from: "Heath Ullrich",
      sentAt: "2020-11-24T14:27:57.000Z",
      isUnread: true,
      conversationId: 5,
    },
    {
      id: 4,
      subject: "Re: Non vel vero sint.",
      snippet:
        "Eligendi recusandae alias. Dignissimos consequatur itaque. Ratione quod aut.",
      from: "Gail Harber",
      sentAt: "2020-11-23T13:47:37.000Z",
      isUnread: false,
      conversationId: 4,
    },
    {
      id: 5,
      subject: "Quisquam suscipit natus minima.",
      snippet: "Magni culpa est. Amet accusantium sit. Facilis a delectus.",
      from: "Stephenie Schuppe",
      sentAt: "2020-10-31T14:13:32.000Z",
      isUnread: false,
      conversationId: 1,
    },
    {
      id: 6,
      subject: "Re: Non vel vero sint.",
      snippet: "In et vel. Perferendis et quidem. Rerum quia commodi.",
      from: "Diedre Hyatt",
      sentAt: "2020-11-18T09:35:54.000Z",
      isUnread: false,
      conversationId: 4,
    },
    {
      id: 7,
      subject: "RE: Fugit iste quas quasi.",
      snippet:
        "Quibusdam sit eum. Excepturi voluptatem eum. Ex harum assumenda.",
      from: "Shanika Mayer",
      sentAt: "2020-11-20T08:06:12.000Z",
      isUnread: false,
      conversationId: 3,
    },
    {
      id: 8,
      subject: "Repudiandae culpa quae earum.",
      snippet:
        "Et necessitatibus minus. Culpa qui quo. Dicta voluptatem eligendi.",
      from: "Carl DuBuque",
      sentAt: "2020-11-02T09:11:53.000Z",
      isUnread: false,
      conversationId: 4,
    },
    {
      id: 9,
      subject: "Re: Sint odit ut nisi.",
      snippet:
        "Aut fugit voluptatem. Voluptatem blanditiis explicabo. Quibusdam quos ut.",
      from: "Marin Brakus",
      sentAt: "2020-12-06T09:29:43.000Z",
      isUnread: false,
      conversationId: 2,
    },
    {
      id: 10,
      subject: "Re: Non vel vero sint.",
      snippet: "Sint id fuga. Ea vel molestiae. Aliquam ipsa aut.",
      from: "Warren Feest",
      sentAt: "2020-11-19T09:43:26.000Z",
      isUnread: false,
      conversationId: 4,
    },
    {
      id: 11,
      subject: "RE: RE: Sint odit ut nisi.",
      snippet:
        "Itaque accusamus aut. Consequatur minus labore. Officia rem et.",
      from: "Dick Walter",
      sentAt: "2020-12-20T16:55:56.000Z",
      isUnread: false,
      conversationId: 2,
    },
    {
      id: 12,
      subject: "Re: Qui ut harum rem.",
      snippet: "Ut sit voluptates. Voluptas suscipit ipsam. Maxime impedit et.",
      from: "Luigi Medhurst",
      sentAt: "2020-11-30T10:24:37.000Z",
      isUnread: false,
      conversationId: 5,
    },
    {
      id: 13,
      subject: "Re: Non vel vero sint.",
      snippet:
        "Vero dolor consequatur. Quia perspiciatis adipisci. Eaque est fugiat.",
      from: "Aretha Gleichner",
      sentAt: "2020-12-05T11:13:31.000Z",
      isUnread: false,
      conversationId: 4,
    },
    {
      id: 14,
      subject: "Sint odit ut nisi.",
      snippet: "Sint quod ut. Sed praesentium sint. Sequi itaque similique.",
      from: "Jarred Erdman",
      sentAt: "2020-11-09T10:43:43.000Z",
      isUnread: false,
      conversationId: 2,
    },
    {
      id: 15,
      subject: "Re: Quisquam suscipit natus minima.",
      snippet:
        "Sit at corporis. Doloremque aut praesentium. Accusantium natus ipsa.",
      from: "Kayce O'Connell",
      sentAt: "2020-11-16T16:38:43.000Z",
      isUnread: false,
      conversationId: 1,
    },
    {
      id: 16,
      subject: "Qui ut harum rem.",
      snippet: "A ab excepturi. Ipsa nobis rerum. Sint blanditiis autem.",
      from: "Stanford Ankunding",
      sentAt: "2020-11-04T15:47:28.000Z",
      isUnread: false,
      conversationId: 5,
    },
    {
      id: 17,
      subject: "Fugit iste quas quasi.",
      snippet:
        "Tempore nemo neque. Corporis dolor ut. Dolor similique praesentium.",
      from: "Song Stokes",
      sentAt: "2020-11-09T08:01:50.000Z",
      isUnread: false,
      conversationId: 3,
    },
    {
      id: 18,
      subject: "Re: Fugit iste quas quasi.",
      snippet: "Pariatur nihil est. Quam optio non. Commodi sint placeat.",
      from: "Audra Denesik",
      sentAt: "2020-11-12T11:00:38.000Z",
      isUnread: false,
      conversationId: 3,
    },
    {
      id: 19,
      subject: "Re: Sint odit ut nisi.",
      snippet:
        "Dolorum qui adipisci. Voluptates quo possimus. Ipsam animi sunt.",
      from: "Jacinto Medhurst",
      sentAt: "2020-12-06T09:30:01.000Z",
      isUnread: true,
      conversationId: 2,
    },
    {
      id: 20,
      subject: "Re: Non vel vero sint.",
      snippet: "Earum voluptate qui. Saepe autem deserunt. Non eum quod.",
      from: "Brendon Senger",
      sentAt: "2020-11-26T14:37:14.000Z",
      isUnread: true,
      conversationId: 4,
    },
    {
      id: 21,
      subject: "Re: Qui ut harum rem.",
      snippet: "Ratione alias nam. Corporis similique nostrum. Sit ut quis.",
      from: "Katharina Toy",
      sentAt: "2020-11-06T10:21:09.000Z",
      isUnread: true,
      conversationId: 5,
    },
    {
      id: 22,
      subject: "RE: Fugit iste quas quasi.",
      snippet:
        "Dicta officiis labore. Ullam voluptatem voluptas. Cum eos dolorum.",
      from: "Jerold Herman",
      sentAt: "2020-11-18T08:48:49.000Z",
      isUnread: false,
      conversationId: 3,
    },
    {
      id: 23,
      subject: "Re: Qui ut harum rem.",
      snippet: "Laborum est qui. Dolores sit ut. Sunt autem sequi.",
      from: "Lottie Wehner",
      sentAt: "2020-11-28T10:50:35.000Z",
      isUnread: false,
      conversationId: 5,
    },
    {
      id: 24,
      subject: "Re: Qui ut harum rem.",
      snippet:
        "Corrupti voluptas atque. Ut earum illum. Repellendus illo voluptatem.",
      from: "Raymond Bayer",
      sentAt: "2020-11-22T09:32:26.000Z",
      isUnread: false,
      conversationId: 5,
    },
  ].map((email) => {
    return { ...email, sentAt: new Date(email.sentAt) }
  })
