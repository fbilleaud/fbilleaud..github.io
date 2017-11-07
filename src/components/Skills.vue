<template lang="html">
  <div  class="category" id="skills">
    <title-cat title="Compétences"></title-cat>
    <div class="content">
      <div class="skillsContent">
        <skills-category v-for="skill in skills" :data="skill" :key="skill.id"></skills-category>
      </div>
    </div>
  </div>
</template>

<script>
import TitleCat from '@/components/_shared/TitleCat'
import SkillsCategory from '@/components/Skills/SkillsCategory'

import store from '@/store'
import {mapGetters} from 'vuex'

export default {
  name: 'Skills',
  store,
  components: {
    TitleCat,
    SkillsCategory
  },
  computed: {
    ...mapGetters(['skills'])
  }
}
</script>

<style src="@/components/scss/Skills.scss" lang="scss"></style>
