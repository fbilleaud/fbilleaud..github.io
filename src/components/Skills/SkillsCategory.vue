<template lang="html">
  <div class="SkillsCategory">
    <div class="headerSkillsCat">
      <img :src="iconSrc" alt="">
      <h3>{{ data.title }}</h3>
    </div>
    <div>
      <skill v-for="skill in data.skills" :data="skill" :key="skill.id"></skill>
    </div>
  </div>
</template>

<script>
import Skill from '@/components/Skills/Skill'

export default {
  name: 'SkillsCategory',
  props: ['data'],
  components: {
    Skill
  },
  computed: {
    iconSrc () {
      return `../static/images/icons/icon_${this.data.icon}.svg`
    }
  }
}
</script>

<style src="@/components/Skills/scss/SkillsCategory.scss" lang="scss"></style>
