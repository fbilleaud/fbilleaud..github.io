<template lang="html">
  <div id="header" class="bgBlack">
    <a href="#" id="logo">
      <img src="../assets/images/logo.svg" alt="Logo Billeaud Francois">
    </a>

    <button class="nav-burger" :class="{'active': showMenu}" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <div id="menu" :class="{'is-active': showMenu}">
      <a href="#">A propos</a>
      <a href="#">Parcours</a>
      <div id="spaceLogo"></div>
      <a href="#">Compétences</a>
      <a href="#">Contacts</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderApp',
  data () {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleMenu () {
      this.showMenu = !this.showMenu
    }
  }
}
</script>

<style src="@/components/scss/Header.scss" lang="scss"></style>
