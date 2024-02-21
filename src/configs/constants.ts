export default {
  appConfig: {
    routes: {
      dashboard: 'Dashboard',
      drivers: 'Motoristas',
      cars: 'Veículos',
    }
  },
  carsPage: {
    title: 'Veículos',
    noDataYet: "Não há nenhum carro no momento.\nQue tal adicionar algums?",
    table: {
      headers: ['Id', 'Marca', 'Placa', 'Ações']
    },
    modal: {
      title: 'Adiciona um novo carro',
      description: 'Formulário que adiciona um novo carro ao sistema',
      buttons: {
        add: 'adicionar',
        cancel: 'cancelar'
      },
      input: {
        name: 'marca',
        plate: 'placa (ABC-1234)'
      }
    }
  },
  components: {
    buttons: {
      add: 'Adicionar',
    },
    loading: 'Carregando...'
  }
}
