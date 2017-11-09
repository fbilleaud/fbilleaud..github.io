<template lang="html">
  <div class="Skill">
    <img :src="logoSrc" alt="">
    <div class="details">
      <p class="name">{{ data.name }}</p>
      <div class="value">
        <div class="progress" :style="{'width': progressWidth}"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skill',
  props: ['data'],
  computed: {
    logoSrc () {
      return `../static/images/skills/${this.data.logo}.svg`
    },
    progressWidth () {
      return `${this.data.value}%`
    }
  },
  mounted () {
    // add animation delay
    let delay = `${(this.data.id - 1) * 0.2}s`
    this.$el.getElementsByClassName('name')[0].style.transitionDelay = delay
    this.$el.getElementsByClassName('progress')[0].style.transitionDelay = delay
  }
}
</script>

<style src="@/components/Skills/scss/Skill.scss" lang="scss"></style>
