const errors = {
    userExists: 'Já existe um usuário cadastrado com o e-mail informado.',
    couldNotSignin: 'Não foi possivel cadastrar o usuário.',
    loginIncorrect: 'Email ou senha incorretos.',
    userNotFound: 'Usuário não encontrado.',
    nameX: 'O Campo nome é obrigatorio.',
    emailX: 'O Campo email é obrigatório.',
    cpfX: 'O Campo CPF é obrigatório',
    passwordX: 'O Campo senha é obrigatorio.',
    addressX: 'O Campo endereço é obrigatório.',
    transNonexistent: 'Não foi possível encontrar troca',
    catNonexistent: 'A categoria indicada não existe',
    transNotPossible: 'Não foi possível adicionar essa troca',
    transSuccess: 'Transação deletada com sucesso',
    descriptionX: 'É necessário descrever a troca.',
    priceX: 'É necessário definir o valor da troca.',
    dateX: 'É necessário indicar a data troca.',
    categoryIDX: 'É necessário indicar em qual categoria se encaixa a troca.',
    typeX: 'É necessário informar qual o tipo da troca.',
    wrongType: 'O tipo indicado não existe.',
    accountX: 'É preciso ter uma conta para ver as trocas',
    tokenX: 'Para acessar este recurso um token de autenticação válido deve ser enviado.',
    categoryX: 'É necessário indicar em qual categoria se encaixa a troca.',
    amountX: 'É necessário indicar a quantidade para completar a troca.',
    collectPointX: 'É necessário indicar em qual ponto de coleta se encaixa a troca.',
    couldNotExchange: 'Não foi possível realizar a troca',
    couldNotUpdateExchange: 'Não foi possível atualizar a troca',
    couldNotUpdateScore: 'Não foi possível atualizar a pontuação',
    exchangeNotFound: 'Não foi possível encontrar a troca',
    collectPointNotFound: 'Não foi possivel encontrar o ponto de coleta.',
    voucherNotFound: 'Não foi possível encontrar o cupom.',
    userUpdate: 'Não foi possível atualizar o usuário',
    userDelete: 'Não foi possível deletar o usuário.',
    exchangeDelete: 'Não foi possível deletar a troca',
    userHasExchangeAndShopping: 'Exclua suas trocas e compras para poder deletar sua conta.'
}

module.exports = { errors }