#language: pt
#enconding: UTF-8
@Extrato
Funcionalidade: Validando extrato

  Contexto: 
    Dado que um usuário esteja logado

  @ValidandoExtrato
  Cenario: Validando lançamentos da conta no extrato bancário
    Quando o usuário clicar no ícone "TRANSFERÊNCIA"
    E informe o valor da transferência de "650"
    E informe a descrição como "Veremos no extrato"
    E clicar em transferir agora
    E fechar o aviso de transferência realizada com sucesso
    E voltar para tela inicial
    Quando o usuário clicar no ícone "EXTRATO"
    Entao deve-se exibir as transações da conta e o saldo atual
