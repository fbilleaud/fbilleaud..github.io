<template lang="html">
  <div id="contacts" class="category">
    <title-cat title="Contact"></title-cat>
    <div class="content">
      <div class="contactsContent">
        <p>Je serais ravie de travailler avec vous, n’hésites pas à me contacter :</p>
        <div class="contacts">
          <!-- <a href="contact" v-for="contact in contacts" :target="contact.target" :title="contact.title">
            <img src="../assets/images/icons/icon_email.svg" alt="">
            <p>fbilleaud@gmail.com</p>
          </a> -->
          <contact v-for="contact in contacts" :data="contact" :text="true" :key="contact.id"></contact>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitleCat from '@/components/_shared/TitleCat'
import Contact from '@/components/_shared/Contact'
import store from '@/store'
import {mapGetters} from 'vuex'

export default {
  name: 'Contacts',
  store,
  components: {
    TitleCat,
    Contact
  },
  computed: {
    ...mapGetters(['contacts'])
  }
}
</script>

<style src="@/components/scss/Contacts.scss" lang="scss"></style>
