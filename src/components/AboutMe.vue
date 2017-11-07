<template lang="html">
  <div id="aboutME" class="category">
    <title-cat title="A propos"></title-cat>
    <div class="content">
      <div id="profil">
        <img src="../assets/images/pp.jpg" alt="">
      </div>
      <div id="about">
        <p>Curieux et fasciné par l’informatique et les nouvelles technologies depuis mon plus jeune âge, je décide de m’orienter dans le jeu vidéo. Après l’obtention de mon diplôme “Animation et jeux vidéos” de l’école Créapole, j’intègre une société de production multimédia en CDI. Dans cette entreprise je découvre flash et le language actionscript 3.0. J’apprend ce language en auto didacte grâce nottament au livre de Thibault Imber.<p>
        <p>J’intègre ensuite en 2009, le groupe 1000 mercis où je vais me perfectionner en actionscript et en animation flash. Très vite, je me tourne vers l’html et le javascript pour répondre à des éxigences de performance et pour m’adapter à tous les displays. Après avoir maitriser jQuery, j’apprend toujours en auto-ditacte le framework angularJS puis VueJS 2.</p>
        <p>J’aime apprendre de nouvelles techniques qui me permettent d’être plus performant dans mon travail.</p>
        <p>Si vous être interresé par mon profil, n’hésitez pas à <a href="#" class="link">me contacter</a>.</p>
        <p id="punchline"><span>“</span>Si je ne connais pas, j’apprends<span>”</span></p>
      </div>
    </div>
  </div>
</template>

<script>
import TitleCat from '@/components/_shared/TitleCat'

export default {
  name: 'AboutMe',
  components: {
    TitleCat
  }
}
</script>

<style src="@/components/scss/AboutMe.scss" lang="scss"></style>
