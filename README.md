# Recital Project

Hello, and thanks for your interest in joining Recital. We're excited to have others join our team,
and aim to build a truly excellent group. We've put significant thought into this assessment because
we want to ensure we hire the best team while also being respectful to you and your time.

You should have received this code in advance, and you will receive the problem to solve by email
at the time of your choosing. You'll have 4 hours to complete it. We send the code in advance so
you can familiarize yourself with it, should you choose. The assignment will not require you to do
so, but working at Recital will not require you to immediately work on code you've never looked at
before, so our assessment doesn't require that either.

If you have any questions before, during, or after the assessment, please do not hesitate to reach
out to Brendan: brendan@recital.software. Brendan commits to responding immediately within his
normal working hours: M-F 13.00-21.00 CET
([convert to local time here](https://www.thetimezoneconverter.com/)).

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# Check if it this meets the lint and test requirements:
$ yarn reqs
```

## Product Description

What we have here is a miniature project that displays a list of emails. You can simulate
receiving an email by pressing a button (this would normally be a WebSocket push), mark all emails
as read to remove the unread marker from each email, and toggle whether to sort emails by date.

Note that only the top-right buttons are actually functional. The sidenav and top search/bell are
just there to make it look realistic.

## About The Tech Stack

This tech stack is a miniature version of the Recital Frontend project: Vue (w/ Nuxt) and
TailwindCSS.

Some links that may be helpful, should you want them:

- [Vue 2.x docs](https://vuejs.org/v2/guide/) (at press time, Vue 3 is not yet supported by Nuxt)
- [TailwindCSS docs](https://tailwindcss.com/docs)
- [Nuxt.js docs](https://nuxtjs.org)

Vue uses templates with handlebars for variable output (e.g. `{{ variable }}`), and special HTML
tags such as `v-if` and `v-for` that are self explanatory. If a tag starts with a colon (e.g.
`:class`), then the value of the contents are evaluated as JS.

Event handling is done with an HTML attribute like `@click`. See `components/Email.vue` for an
example.

## About the Code

Most of the code is pulled from Recital itself. There's only one page, with only one layout, only
one state storage, and a handful of components.The structure of files itself comes from Nuxt, so
the files are:

- `layouts/default.vue` - The page layout (just a sample pulled from TailwindUI).
  - You can probably ignore this entirely, unless you want some Tailwind tips or something.
- `pages/index.vue` - The specific page data, inserted into the `<Nuxt />` tag of the layout.
- `components/` - Vue components - specifically, single file components.
  ([component docs](https://vuejs.org/v2/guide/components.html))
  ([single file component docs](https://vuejs.org/v2/guide/single-file-components.html))
  - Components added here are automatically available elsewhere. No need for manual imports.
- `store/emails.js` - Vuex data store and definitions for mutations to that store.
  ([docs](https://nuxtjs.org/docs/2.x/directory-structure/store))
  - This is seeded with some default data; you can check it to see the
    data structucture.

You can ignore the `coverage/`, `static/`, and `test/` folders.

## Tasks

You will fix a bug, and then add a feature. These will be emailed to you at the start of your
scheduled time. The bugs and features are based on real tasks, though obviously are intentionally
simple to fit in a small time budget.

## Your Solution

Please compress (zip, tar) and email your solution back within 4 hours of your start time.
(Please don't spend 4 hours on this! It should only take you 1-2. At Recital, we value mental
health. Take care of yourself :) Take a break! Go for a walk! )

> If you have any problems with the compression/email approach, just upload to github/gitlab and
> send me the URL.

### Non-Requirements

We have tried our best so that you do not need to learn anything specifically for this. As much as
possible, everything you need to accomplish your tasks should already be in here. We hope that you
can simply modify existing code or copy/paste an existing block of code to accomplish anything you
need. However, that's probably impossible to do fully, so the following flexibility might be
helpful:

- You do _not_ need to use anything special from Vue. If what you want to do can be accomplished
  using something else (e.g. vanilla JS or CSS) please go ahead.
- You do _not_ need to use TailwindCSS.
  - The code must work, but we don't want you to have to learn a new technology for this. Raw CSS,
    JS, or anything like that will be judged the same as code using TailwindCSS.
  - You are welcome to use !important to override tailwind so that you don't have to worry about it.
  - See `components/Email.vue` for an example of how to write CSS within a Vue component.
- You do _not_ need to use any other specific technology in this repo.
- You do _not_ need to worry about tests. We are considering using them for a later version of this
  assessment, but for now they would be too much work.

### Requirements

1. Meets task goals outlined in the assignment text
1. Passes tests (`yarn test`) - should be trivial (this is more of a placeholder for later)
1. Passes eslint and stylelint (`yarn lint`)
1. ESLint/Stylelint not manually disabled unless good justification is provided
1. Commited to git: one commit per bugfix, one commit for the feature
