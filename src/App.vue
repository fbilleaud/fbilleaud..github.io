<template>
  <div id="app">
    <header>
      <header-app></header-app>
    </header>
    <section>
      <home></home>
      <about-me></about-me>
      <career></career>
      <skills></skills>
      <contacts></contacts>
    </section>
    <footer>
      <footer-app></footer-app>
    </footer>
  </div>
</template>

<script>
import HeaderApp from '@/components/Header'
import Home from '@/components/Home'
import AboutMe from '@/components/AboutMe'
import Career from '@/components/Career'
import Skills from '@/components/Skills'
import Contacts from '@/components/Contacts'
import FooterApp from '@/components/Footer'

export default {
  name: 'app',
  components: {
    HeaderApp,
    Home,
    AboutMe,
    Career,
    Skills,
    Contacts,
    FooterApp
  },
  methods: {
    intersection (entries) {
      entries.forEach(entry => {
        if (entry.target.id !== 'home') {
          if (entry.intersectionRatio > 0.4) {
            entry.target.classList.add('visible')
          } else {
            entry.target.classList.remove('visible')
          }
        }
      })
    }
  },
  mounted () {
    let observerOptions = {
      threshold: [0.4]
    }
    let observer = new IntersectionObserver(this.intersection, observerOptions)

    let items = document.querySelectorAll('.category')
    items.forEach(item => {
      observer.observe(item)
    })
  }
}
</script>

<style src="@/components/scss/App.scss" lang="scss"></style>
