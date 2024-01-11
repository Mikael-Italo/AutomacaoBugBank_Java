#language: pt
#enconding: UTF-8
@Transferencia2
Funcionalidade: Validando transferências com sucesso

  @TransferenciaEntreDuasContas
  Cenario: Realizando transferência entre duas contas registradas
    Dado que dois usuários sejam cadastrados
    Quando o primeiro usuário entrar em sua conta
    Quando o usuário clicar no ícone "TRANSFERÊNCIA"
    E informar os dados da segunda conta
    E informe o valor da transferência de "350"
    E informe a descrição como "Entre contas"
    E clicar em transferir agora
    E fechar o aviso de transferência realizada com sucesso
    E entrar na segunda conta
    Quando o usuário clicar no ícone "EXTRATO"
    Entao deve-se exibir o saldo da conta e a transferência recebida no extrato

  @ValidandoTransferenciaTelaInicial
  Cenario: Validação do saldo na tela principal após uma transferência realizada
    Dado que dois usuários sejam cadastrados
    Quando o primeiro usuário entrar em sua conta
    Quando o usuário clicar no ícone "TRANSFERÊNCIA"
    E informar os dados da segunda conta
    E informe o valor da transferência de "200"
    E informe a descrição como "Testando transferência"
    E clicar em transferir agora
    E fechar o aviso de transferência realizada com sucesso
    E voltar para tela inicial
    Entao deve-se exibir na tela principal o saldo em conta de oitocentos reais
