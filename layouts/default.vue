<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-dark">

        <span class="md-title text-center">کلمه بازی</span>
      </md-app-toolbar>

      <md-app-content>
        <Nuxt />
      </md-app-content>
    </md-app>

  </div>
</template>
<script>
export default {
  head: {
    htmlAttrs: {
      lang: ["en", "fa"], // it sets the language English
    },
    title: "کلمه بازی",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "کلمه بازی",
      },
    ],
  },
  data: () => ({
    menuVisible: false,
  }),
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
  },
};
</script>
<style lang="sass">
.md-app-container
  min-height: 100vh
span
  font-family: 'IRANSans'
.md-title
  font-family: 'IRANSans'
.links
  padding-top: 15px
  border: solid 1px green
  border-radius: 5px
  p
    color: green
  .md-app
    min-height: 350px
    border: 1px solid rgba(#000, .12)
  // Demo purposes only
  .md-drawer
    width: 230px
    max-width: calc(100vw - 125px)
</style>
