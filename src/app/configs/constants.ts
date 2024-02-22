export default {
  appConfig: {
    routes: {
      dashboard: 'Dashboard',
      drivers: 'Motoristas',
      cars: 'Veículos',
    },
  },
  carsPage: {
    title: 'Veículos',
    noDataYet: 'Não há nenhum carro no momento.\nQue tal adicionar algums?',
    table: {
      headers: ['Id', 'Marca', 'Placa', 'Ações'],
    },
    modal: {
      add: {
        title: 'Adiciona um novo carro',
        description: 'Formulário que adiciona um novo carro do sistema',
      },
      edit: {
        title: 'Edita o carro selecionado',
        description: 'Formulário que edita um carro do sistema',
      },
      buttons: {
        confirm: 'confirmar',
        cancel: 'cancelar',
      },
      input: {
        name: 'marca',
        plate: 'placa (ABC-1234)',
      },
    },
  },
  driversPage: {
    title: 'Motoristas',
    noDataYet: 'Não há nenhum motorista no momento.\nQue tal adicionar algums?',
    table: {
      headers: ['', 'Id', 'Nome', 'Documento', 'Vinculado', 'Ações'],
      vinculed: {
        yes: 'sim',
        no: 'não',
      },
    },
    modal: {
      title: 'Adiciona um novo motorista',
      description: 'Formulário que adiciona um novo motorista ao sistema',
      buttons: {
        confirm: 'confirmar',
        cancel: 'cancelar',
      },
      input: {
        name: 'nome',
        document: 'documento (999.999.999-00)',
        car: 'Veículo',
      },
    },
  },
  components: {
    buttons: {
      add: 'Adicionar',
      cancel: 'Cancelar',
      confirm: 'Confirmar',
    },
    loading: 'Carregando...',
    select: {
      noOptions: 'Nenhum veículo disponível',
    },
  },
};
