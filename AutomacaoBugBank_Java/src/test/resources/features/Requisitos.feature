#language: pt
#enconding: UTF-8
@Requisitos
Funcionalidade: Validando responsividade dos requisitos

  Contexto: 
    Dado que o usuário esteja na página de requisitos

  @ResponsividadeLinkRepositorio
  Cenario: Validar a responsividade do link do repositório no GitHub
    Quando o usuário clicar na opção acessar o link do respositório
    Entao deve-se exibir o repositório do prijeto no GitHub

  @ResponsividadeLogin
  Cenario: Validar a responsividade da opção login
    Quando o usuário clicar na opção requisitos de "Login"
    Entao deve-se exibir os requisitos do "Login"

  @ResponsividadeCadastro
  Cenario: Validar a responsividade da opção cadastro
    Quando o usuário clicar na opção requisitos de "Cadastro"
    Entao deve-se exibir os requisitos do "Cadastro"

  @ResponsividadeTranferencia
  Cenario: Validar a responsividade da opção tranferência
    Quando o usuário clicar na opção requisitos de "Transferência"
    Entao deve-se exibir os requisitos do "Transferência"

  @ResponsividadePagamento
  Cenario: Validar a responsividade da opção pagamento
    Quando o usuário clicar na opção requisitos de "Pagamento"
    Entao deve-se exibir os requisitos do "Pagamento"

  @ResponsividadeExtrato
  Cenario: Validar a responsividade da opção extrato
    Quando o usuário clicar na opção requisitos de "Extrato"
    Entao deve-se exibir os requisitos do "Extrato"

  @ResponsividadeSaque
  Cenario: Validar a responsividade da opção saque
    Quando o usuário clicar na opção requisitos de "Saque"
    Entao deve-se exibir os requisitos do "Saque"
