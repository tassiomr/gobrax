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
    noDataYet: 'Não há nenhum carro no momento.\nQue tal adicionar alguns?',
    table: {
      headers: ['Id', 'Marca', 'Placa', 'Ações'],
    },
    dialog: {
      title: 'Deletar carro',
      description:
        'Você está prestes a deletar o $, essa operação é irreversível',
    },
    modal: {
      add: {
        title: 'Adicionar um novo carro',
        description: 'Formulário para adicionar um novo carro no sistema',
      },
      edit: {
        title: 'Editar o carro selecionado',
        description: 'Formulário para editar um carro do sistema',
      },
      buttons: {
        confirm: 'Confirmar',
        cancel: 'Cancelar',
      },
      input: {
        name: 'Marca',
        plate: 'Placa (ABC-1234)',
      },
    },
  },
  driversPage: {
    title: 'Motoristas',
    noDataYet: 'Não há nenhum motorista no momento.\nQue tal adicionar alguns?',
    table: {
      headers: ['', 'Id', 'Nome', 'Documento', 'Vinculado', 'Ações'],
      vinculed: {
        yes: 'Sim',
        no: 'Não',
      },
    },
    dialog: {
      title: 'Deletar motorista',
      description:
        'Você está prestes a deletar o $, essa operação é irreversível',
    },
    modal: {
      add: {
        title: 'Adicionar um novo motorista',
        description: 'Formulário para adicionar um novo motorista no sistema',
      },
      edit: {
        title: 'Editar o motorista selecionado',
        description: 'Formulário para editar um motorista do sistema',
      },
      buttons: {
        confirm: 'Confirmar',
        cancel: 'Cancelar',
      },
      input: {
        name: 'Nome',
        document: 'Documento (999.999.999-00)',
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
