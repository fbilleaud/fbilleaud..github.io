const state = {
  contacts: [
    {
      id: '1',
      title: 'Envoyer un email',
      icon: 'email',
      text: 'fbilleaud@gmail.com',
      href: 'mailto:fbilleaud@gmail.com',
      target: '_self'
    },
    {
      id: '2',
      title: 'Appeler moi',
      icon: 'tel',
      text: '+49 157 727 38 756',
      href: 'tel:+4915772738756',
      target: '_self'
    },
    {
      id: '3',
      title: 'Afficher twitter',
      icon: 'twitter',
      text: '@elBiyo',
      href: 'https://twitter.com/El_Biyo',
      target: '_blank'
    },
    {
      id: '4',
      title: 'Afficher github',
      icon: 'github',
      text: 'fbilleaud',
      href: 'https://github.com/fbilleaud',
      target: '_blank'
    }
  ]
}

const mutations = {

}

const getters = {
  contacts: states => states.contacts
}

const actions = {

}

export default {
  state,
  mutations,
  getters,
  actions
}
