<template lang="html">
  <div id="contacts" class="category">
    <title-cat title="Contact"></title-cat>
    <div class="content">
      <div class="contactsContent">
        <p>Je serais ravie de travailler avec vous, n’hésites pas à me contacter :</p>
        <div class="contacts">
          <a href="#" title="Envoyer un email">
            <img src="../assets/images/icons/icon_email.svg" alt="">
            <p>fbilleaud@gmail.com</p>
          </a>
          <a href="#" title="Appeler">
            <img src="../assets/images/icons/icon_tel.svg" alt="">
            <p>+49 157 727 38 756</p>
          </a>
          <a href="#" title="Afficher twitter">
            <img src="../assets/images/icons/icon_twitter.svg" alt="">
            <p>@elBiyo</p>
          </a>
          <a href="#" title="Afficher github">
            <img src="../assets/images/icons/icon_github.svg" alt="">
            <p>ElBiyo</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitleCat from '@/components/_shared/TitleCat'

export default {
  name: 'Contacts',
  components: {
    TitleCat
  }
}
</script>

<style src="@/components/scss/Contacts.scss" lang="scss"></style>
