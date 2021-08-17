new Vue ({
  el: '#app',
  data: {
    titulo: 'Estudando Vue.js'
  },
  methods: {
    alterarTitulo (event) {
      this.titulo = event.target.value
    }
  }
})