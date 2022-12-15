module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    "jest/globals": true,
  },
  extends: [
    "eslint:recommended",
    "@nuxtjs",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:nuxt/recommended",
  ],
  plugins: ["prettier", "jest"],
  // add your custom rules here
  rules: {
    "vue/no-side-effects-in-computed-properties": 0,
    // Temp disabled for legacy code
    "vue/multi-word-component-names": 0,
  },
}
