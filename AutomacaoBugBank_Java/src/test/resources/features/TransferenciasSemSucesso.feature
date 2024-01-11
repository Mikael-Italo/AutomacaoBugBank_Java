#language: pt
#enconding: UTF-8
@Transferencia
Funcionalidade: Validando transferências sem sucesso

  Contexto: 
    Dado que um usuário esteja logado

  @TransferenciaContaInvalida
  Cenario: Realizando uma transferência com conta inválida
    Quando o usuário clicar no ícone "TRANSFERÊNCIA"
    E informar a conta como "54164894"
    E informar o digito como "0"
    E informe o valor da transferência de "200"
    E informe a descrição como "Testando conta invalida"
    E clicar em transferir agora
    Entao deve-se exibir uma mensagem informando que a conta é inválida ou inexistente

  @TransferenciaSaldoInsuficiente
  Cenario: Tentativa de realizar transferência sem saldo sufuciente
    Quando o usuário clicar no ícone "TRANSFERÊNCIA"
    E informe o valor da transferência de "2000"
    E informe a descrição como "Testando saldo insuficiente"
    E clicar em transferir agora
    Entao deve-se exibir uma mensagem informando que não possue saldo suficiente para transferência

  @TransferenciaSemInserirValor
  Cenario: Tentativa de realizar transferência sem inserir o valor
    Quando o usuário clicar no ícone "TRANSFERÊNCIA"
    E informe o valor da transferência de ""
    E informe a descrição como "Teste sem valor"
    E clicar em transferir agora
    Entao deve-se exibir uma mensagem bugada exigindo o valor da transferência

  @TransferenciaParaMesmaConta
  Cenario: Tentativa de realizar transferência para mesma conta
    Quando o usuário clicar no ícone "TRANSFERÊNCIA"
    E informe a mesma conta e digito da sua titularidade
    E informe o valor da transferência de "200"
    E informe a descrição como "Teste sem valor"
    E clicar em transferir agora
    Entao deve-se exibir uma mensagem que não pode transferir para a mesma conta

