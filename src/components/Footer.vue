<template lang="html">
  <div id="footer">
    <p>Billeaud François - 2017</p>
  </div>
</template>

<script>
export default {
  name: 'FooterApp'
}
</script>

<style lang="scss">
@import "../assets/sass/colors";

#footer{
  background-color: $black;
  p{
    margin: 0px;
    color: white;
    font-size: .8rem;
    padding: 1.5rem 0;
  }
}
</style>
