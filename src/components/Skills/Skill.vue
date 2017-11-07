<template lang="html">
  <div class="Skill">
    <img :src="logoSrc" alt="">
    <div class="details">
      <p>{{ data.name }}</p>
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
  }
}
</script>

<style src="@/components/Skills/scss/Skill.scss" lang="scss"></style>
