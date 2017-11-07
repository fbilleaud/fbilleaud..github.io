<template lang="html">
  <div id="header" class="bgBlack">
    <a href="#" @click="scrollTo($event, 'home')" id="logo">
      <img src="../assets/images/logo.svg" alt="Logo Billeaud Francois">
    </a>

    <button class="nav-burger" :class="{'active': showMenu}" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <div id="menu" :class="{'is-active': showMenu}">
      <a href="#" @click="scrollTo($event, 'aboutME')">A propos</a>
      <a href="#" @click="scrollTo($event, 'career')">Parcours</a>
      <div id="spaceLogo"></div>
      <a href="#" @click="scrollTo($event, 'skills')">Compétences</a>
      <a href="#" @click="scrollTo($event, 'contacts')">Contacts</a>
    </div>
  </div>
</template>

<script>
import {TweenLite} from 'gsap'
require('gsap/ScrollToPlugin')

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
    },
    onScroll () {
      let logo = document.getElementById('logo')
      if (document.documentElement.scrollTop > 40) {
        if (!logo.classList.contains('scroll')) {
          logo.classList.add('scroll')
        }
      } else {
        if (logo.classList.contains('scroll')) {
          logo.classList.remove('scroll')
        }
      }
    },
    scrollTo (evt, id) {
      this.showMenu = false
      evt.preventDefault()
      evt.stopPropagation()

      let offset = (document.body.clientWidth > 768) ? 42 : 52

      TweenLite.to(window, 1.3, {scrollTo: {y: `#${id}`, offsetY: offset}, ease: 'Back.easeInOut'})
    }
  },
  mounted () {
    document.addEventListener('scroll', this.onScroll)
  },
  unmounted () {
    document.removeEventListener('scroll', this.onScroll)
  }
}
</script>

<style src="@/components/scss/Header.scss" lang="scss"></style>
