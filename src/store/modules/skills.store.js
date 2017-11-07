const state = {
  skills: [
    {
      id: 1,
      title: 'Front-End',
      icon: 'front',
      skills: [
        {
          id: 1,
          logo: 'html5',
          name: 'HTML 5 / CSS 3',
          value: 100
        },
        {
          id: 2,
          logo: 'es6',
          name: 'Javascript ES6',
          value: 90
        },
        {
          id: 3,
          logo: 'sass',
          name: 'Sass',
          value: 100
        }
      ]
    },
    {
      id: 2,
      title: 'Frameworks',
      icon: 'framework',
      skills: [
        {
          id: 1,
          logo: 'vue',
          name: 'VueJS 2',
          value: 80
        },
        {
          id: 2,
          logo: 'angular',
          name: 'Angular JS',
          value: 100
        },
        {
          id: 3,
          logo: 'jQuery',
          name: 'jQuery',
          value: 100
        }
      ]
    },
    {
      id: 3,
      title: 'Outils / Autres',
      icon: 'tools',
      skills: [
        {
          id: 1,
          logo: 'webpack',
          name: 'Webpack 2',
          value: 80
        },
        {
          id: 2,
          logo: 'node',
          name: 'Node JS',
          value: 70
        },
        {
          id: 3,
          logo: 'gulp',
          name: 'Gulp',
          value: 90
        }
      ]
    },
    {
      id: 4,
      title: 'Langues',
      icon: 'language',
      skills: [
        {
          id: 1,
          logo: 'fr',
          name: 'Français',
          value: 100
        },
        {
          id: 2,
          logo: 'en',
          name: 'Anglais',
          value: 70
        }
      ]
    }
  ]
}

const mutations = {

}

const getters = {
  skills: states => states.skills
}

const actions = {

}

export default {
  state,
  mutations,
  getters,
  actions
}
