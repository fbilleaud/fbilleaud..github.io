<template lang="html">
  <a :href="data.href" :target="data.target" :title="data.title">
    <img :src="iconPath" alt="">
    <p v-if="text">{{ data.text }}</p>
  </a>
</template>

<script>
export default {
  name: 'contact',
  props: ['data', 'text'],
  computed: {
    iconPath () {
      return `../../static/images/icons/icon_${this.data.icon}.svg`
    }
  }
}
</script>

<style lang="scss">
</style>
