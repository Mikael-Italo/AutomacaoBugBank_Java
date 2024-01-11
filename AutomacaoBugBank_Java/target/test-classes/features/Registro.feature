#language: pt
#enconding: UTF-8
@Registro
Funcionalidade: Registros de usuários

  @ValidandoVisibilidadeDaSenha
  Cenario: Validando o botão de visibilidade de senha
    Quando o usuário clicar no botão Registrar
    E inserir um email como "mikael@teste.com"
    E inserir um nome como "Mikael"
    E inserir uma senha como "123@Teste"
    E inserir a confirmação da senha
    E ativar a visibilidade das senhas
    Entao deve-se exibir as senhas visiveis ao usuário

  @RegistroComSenhasDiferentes
  Cenario: Tentando criar usuario com senha diferente da confirmação
    Quando o usuário clicar no botão Registrar
    E inserir um email como "mikael@teste.com"
    E inserir um nome como "Mikael"
    E inserir uma senha como "985@Teste"
    E inserir uma confirmação da senha como "654477"
    E clicar em cadastrar
    Entao deve-se exibir uma mensagem informando que as senhas não são iguais

  @RegistroComConfirmacaoDeSenhaVazia
  Cenario: Tentando criar usuario sem inserir a confirmação de senha
    Quando o usuário clicar no botão Registrar
    E inserir um email como "mikael@teste.com"
    E inserir um nome como "Mikael"
    E inserir uma senha como "567@Teste"
    E clicar em cadastrar
    Entao deve-se exibir uma mensagem informando que o campo confirmação senha e obrigatório

  @RegistroComSenhaVazia
  Cenario: Tentando criar usuario sem inserir senha
    Quando o usuário clicar no botão Registrar
    E inserir um email como "mikael@teste.com"
    E inserir um nome como "Mikael"
    E não inserir uma senha
    E clicar em cadastrar
    Entao deve-se exibir uma mensagem informando que o campo senha e obrigatório

  @RegistroComNomeVazio
  Cenario: Tentando criar usuario inserindo um email inválido
    Quando o usuário clicar no botão Registrar
    E inserir um email como "mikael@teste.com"
    E inserir um nome como ""
    E inserir uma senha como "321@Teste"
    E inserir a confirmação da senha
    E clicar em cadastrar
    Entao deve-se exibir mensagem informando que nome não pode ser vazio

  @RegistroComEmailInvalido
  Cenario: Tentando criar usuario inserindo um email inválido
    Quando o usuário clicar no botão Registrar
    E inserir um email como "sadas"
    E inserir um nome como "Mikael"
    E inserir uma senha como "321@Teste"
    E inserir a confirmação da senha
    E clicar em cadastrar
    Entao deve-se exibir mensagem informando que o formato é inválido

  @RegistroSemInserirEmail
  Cenario: Tentando criar usuario sem inserir um email
    Quando o usuário clicar no botão Registrar
    E inserir um email como ""
    E inserir um nome como "Mikael"
    E inserir uma senha como "234@Teste"
    E inserir a confirmação da senha
    E clicar em cadastrar
    Entao deve-se exibir mensagem informando que os campos são obrigatórios

  @RegistroSemInserirDados
  Cenario: Tentando criar usuario sem inserir dados
    Quando o usuário clicar no botão Registrar
    E inserir um email como ""
    E inserir um nome como ""
    E inserir uma senha como ""
    E inserir a confirmação da senha
    E clicar em cadastrar
    Entao deve-se exibir mensagem informando que os campos são obrigatórios

  @RegistroDeUsuarioComSucesso
  Cenario: Criando um usuário com sucesso
    Quando o usuário clicar no botão Registrar
    E inserir um email como "mikael@teste.com"
    E inserir um nome como "Mikael"
    E inserir uma senha como "123@Teste"
    E inserir a confirmação da senha
    E clicar em cadastrar
    Entao deve-se exibir uma mensagem informando sucesso ao criar conta

  @RegistroDeUsuarioSemSaldo
  Cenario: Criando um usuário sem saldo na conta
    Quando o usuário clicar no botão Registrar
    E inserir um email como "mikael@teste.com"
    E inserir um nome como "Mikael"
    E inserir uma senha como "123@Teste"
    E inserir a confirmação da senha
    E clicar em cadastrar
    E fechar a mensagem de confirmação da criação de conta
    E fazer login com a conta criada
    Entao deve-se exibir o saldo em conta zerado na tela principal

  @RegistroDeUsuarioComSaldo
  Cenario: Criando um usuário com saldo na conta
    Quando o usuário clicar no botão Registrar
    E inserir um email como "mikael.teste@teste.com"
    E inserir um nome como "Italo"
    E inserir uma senha como "12345@Teste"
    E inserir a confirmação da senha
    E escolher a opção de criar com com saldo
    E clicar em cadastrar
    E fechar a mensagem de confirmação da criação de conta
    E fazer login com a conta criada
    Entao deve-se exibir o saldo em conta na tela principal
