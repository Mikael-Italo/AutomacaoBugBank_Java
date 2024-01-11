#language: pt
#enconding: UTF-8
@Login
Funcionalidade: Validando Login

  @LoginSemInserirDados
  Cenario: Tentativa de login sem inserir email e senha
    Quando o usuário inserir o email como ""
    E inserir a senha como ""
    E clicar no botão Acessar
    Entao deve-se exibir uma mensagem informando que o campo é obrigatório

  @ValidacaoFormatoEmailInvalido
  Cenario: Validação do formato inválido do email de login
    Quando o usuário inserir o email como "mik@sda-*"
    E inserir a senha como "12345"
    E clicar no botão Acessar
    Entao deve-se exibir uma mensagem informando que o formato do email para login e inválido

  @LoginSemInserirSenha
  Cenario: Tentativa de login sem inserir uma senha
    Quando o usuário inserir o email como "mikael@tester.com"
    E inserir a senha como ""
    E clicar no botão Acessar
    Entao deve-se exibir uma mensagem informando que o campo senha é obrigatório

  @ValidacaoDoBotaoExibirSenha
  Cenario: Validando a responsividade do botão exibir senha
    Quando o usuário inserir o email como "mikael@teste.com"
    E inserir a senha como "123987"
    E clicar no botão exibir senha
    Entao deve-se exibir a senha em formato de texto para o usuário

  @LoginSemInserirEmail
  Cenario: Tentativa de login sem inserir um email
    Quando o usuário inserir o email como ""
    E inserir a senha como "123@Teste"
    E clicar no botão Acessar
    Entao deve-se exibir uma mensagem informando que o campo email é obrigatório

  @LoginComUsuarioInválido
  Cenario: Tentativa de login com dados de um usuário inválidos
    Dado que o usuário "Mikael" esteja cadastrado
    Quando o usuário inserir o email como "mikael@tester.com"
    E inserir a senha como "error404"
    E clicar no botão Acessar
    Entao deve-se exibir uma mensagem informando que os dados estão inválidos

  @LoginComSucesso
  Cenario: Realizar login com sucesso de um usuário
    Dado que o usuário "Mikael" esteja cadastrado
    Quando o usuário inserir o email como "mikael@tester.com"
    E inserir a senha como "Passed@200"
    E clicar no botão Acessar
    Entao deve-se exibir a tela principal do sistema com o usuário informado logado

  @LogoutComSucesso
  Cenario: Realizar logout com sucesso de um usuário
    Dado que o usuário "Mikael" esteja cadastrado
    Quando o usuário inserir o email como "mikael@tester.com"
    E inserir a senha como "Passed@200"
    E clicar no botão Acessar
    E na tela principal do sistema clicar no botão Sair
    Entao deve-se exibir a tela de login do sistema
