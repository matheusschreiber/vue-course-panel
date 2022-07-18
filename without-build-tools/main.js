const app = Vue.createApp({
    data() {
      return {
        aluno: true,
        atual: 1,
        title: ['PÁGINA INICIAL', 'CURSOS DA GRADUAÇÃO', 'DOSCENTES', 'DISCENTES'],
        page: ['main', 'courses','teachers','students']
      }
    },
    methods: {

    }
  })