const state = {
  startJob: 1193871600000,
  jobs: [
    {
      logo: 'strass',
      company: 'Strass Production',
      location: 'Paris',
      contract: 'stage + CDI',
      descriptions: ['Développeur actionscript 3.0'],
      end: 1241128800000
    },
    {
      logo: '1000Mercis',
      company: '1000 Mercis',
      location: 'Paris',
      contract: 'CDI',
      descriptions: [
        'Développeur actionscript 3.0',
        'Developpeur front-end'
      ],
      end: 1380578400000
    },
    {
      logo: 'numberly',
      company: 'Numberly 1000 Mercis group',
      location: 'Londres / Berlin',
      contract: 'CDI + télétravail (CDI)',
      descriptions: [
        'Developpeur front-end'
      ],
      end: 1435701600000
    },
    {
      logo: 'ocito',
      company: 'Ocito 1000 Mercis group',
      location: 'Berlin',
      contract: 'Télétravail (CDD)',
      descriptions: [
        'Developpeur front-end',
        'Développeur application hybride (iOS/Android)'
      ],
      end: 1498860000000
    },
    {
      logo: 'webportage',
      company: 'Webportage',
      location: 'Berlin',
      contract: 'Télétravail (portage salarial)',
      descriptions: [
        'Developpeur front-end'
      ]
    }
  ]
}

const mutations = {

}

const getters = {
  jobs: states => states.jobs,
  startJob: states => states.startJob,
  nowJob: states => new Date().getTime(),
  rangeJob: (states, getters) => {
    return getters.nowJob - states.startJob
  }
}

const actions = {

}

export default {
  state,
  mutations,
  getters,
  actions
}
