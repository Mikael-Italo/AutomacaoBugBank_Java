#language: pt
#enconding: UTF-8
@TelaInicial
Funcionalidade: Validando responsividade dos ícones da tela principal do sistema

Contexto: 
	Dado que um usuário esteja na tela principal do sistema
	
@IconeTransferencia
Cenario: Validando a responsividade do ícone transferência
Quando o usuário clicar no ícone "TRANSFERÊNCIA"
Entao deve-se exibir a tela de tranferências

@IconePagamentos
Cenario: Validando a responsividade do ícone pagamentos
Quando o usuário clicar no ícone "PAGAMENTOS"
Entao deve-se exibir uma mensagem que a funcionalidade está em desenvolvimento

@IconeExtrato
Cenario: Validando a responsividade do ícone extrato
Quando o usuário clicar no ícone "EXTRATO"
Entao deve-se exibir a tela de extrato

@IconeSaque
Cenario: Validando a responsividade do ícone saque
Quando o usuário clicar no ícone "SAQUE"
Entao deve-se exibir uma mensagem que a funcionalidade está em desenvolvimento