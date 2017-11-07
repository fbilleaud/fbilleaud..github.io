<template lang="html">
  <div class="titleCat">
    <svg version="1.1" class="bgTitle" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 232 64" style="enable-background:new 0 0 232 64;" xml:space="preserve">
      <polygon class="st0" points="232,64 112.3,50.8 0,64 0,0 232,0 "/>
      <text x="50%" y ="50%" text-anchor="middle" class="text">{{title}}</text>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'TitleCat',
  props: ['title']
}
</script>

<style src="@/components/_shared/scss/TitleCat.scss" lang="scss"></style>
