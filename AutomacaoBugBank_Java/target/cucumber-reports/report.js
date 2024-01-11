$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Extrato.feature");
formatter.feature({
  "name": "Validando extrato",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@Extrato"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que um usuário esteja logado",
  "keyword": "Dado "
});
formatter.match({
  "location": "TransferenciasSemSucessoSteps.queUmUsuárioEstejaLogado()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validando lançamentos da conta no extrato bancário",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Extrato"
    },
    {
      "name": "@ValidandoExtrato"
    }
  ]
});
formatter.step({
  "name": "o usuário clicar no ícone \"TRANSFERÊNCIA\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "TelaInicialSteps.oUsuárioClicarNoÍcone(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informe o valor da transferência de \"650\"",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciasSemSucessoSteps.informeOValorDaTransferênciaDe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informe a descrição como \"Veremos no extrato\"",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciasSemSucessoSteps.informeADescriçãoComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em transferir agora",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciasSemSucessoSteps.clicarEmTransferirAgora()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "fechar o aviso de transferência realizada com sucesso",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciasSemSucessoSteps.fecharOAvisoDeTransferênciaRealizadaComSucesso()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "voltar para tela inicial",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciasSemSucessoSteps.voltarParaTelaInicial()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o usuário clicar no ícone \"EXTRATO\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "TelaInicialSteps.oUsuárioClicarNoÍcone(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve-se exibir as transações da conta e o saldo atual",
  "keyword": "Entao "
});
formatter.match({
  "location": "TransferenciasSemSucessoSteps.deveSeExibirAsTransaçõesDaContaEOSaldoAtual()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Validando Login",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.scenario({
  "name": "Tentativa de login sem inserir email e senha",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@LoginSemInserirDados"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "o usuário inserir o email como \"\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginSteps.oUsuárioInserirOEmailComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "inserir a senha como \"\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.inserirASenhaComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botão Acessar",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.clicarNoBotãoAcessar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve-se exibir uma mensagem informando que o campo é obrigatório",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginSteps.deveSeExibirUmaMensagemInformandoQueOCampoÉObrigatório()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validação do formato inválido do email de login",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@ValidacaoFormatoEmailInvalido"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "o usuário inserir o email como \"mik@sda-*\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginSteps.oUsuárioInserirOEmailComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "inserir a senha como \"12345\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.inserirASenhaComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botão Acessar",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.clicarNoBotãoAcessar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve-se exibir uma mensagem informando que o formato do email para login e inválido",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginSteps.deveSeExibirUmaMensagemInformandoQueOFormatoDoEmailEInválido()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Tentativa de login sem inserir uma senha",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@LoginSemInserirSenha"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "o usuário inserir o email como \"mikael@tester.com\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginSteps.oUsuárioInserirOEmailComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "inserir a senha como \"\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.inserirASenhaComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botão Acessar",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.clicarNoBotãoAcessar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve-se exibir uma mensagem informando que o campo senha é obrigatório",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginSteps.deveSeExibirUmaMensagemInformandoQueOCampoSenhaÉObrigatório()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validando a responsividade do botão exibir senha",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@ValidacaoDoBotaoExibirSenha"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "o usuário inserir o email como \"mikael@teste.com\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginSteps.oUsuárioInserirOEmailComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "inserir a senha como \"123987\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.inserirASenhaComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botão exibir senha",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.clicarNoBotãoExibirSenha()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve-se exibir a senha em formato de texto para o usuário",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginSteps.deveSeExibirASenhaEmFormatoDeTextoParaOUsuário()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Tentativa de login sem inserir um email",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@LoginSemInserirEmail"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "o usuário inserir o email como \"\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginSteps.oUsuárioInserirOEmailComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "inserir a senha como \"123@Teste\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.inserirASenhaComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botão Acessar",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.clicarNoBotãoAcessar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve-se exibir uma mensagem informando que o campo email é obrigatório",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginSteps.deveSeExibirUmaMensagemInformandoQueOCampoEmailÉObrigatório()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Tentativa de login com dados de um usuário inválidos",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@LoginComUsuarioInválido"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que o usuário \"Mikael\" esteja cadastrado",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.queOUsuárioEstejaCadastrado(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o usuário inserir o email como \"mikael@tester.com\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginSteps.oUsuárioInserirOEmailComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "inserir a senha como \"error404\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.inserirASenhaComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botão Acessar",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.clicarNoBotãoAcessar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve-se exibir uma mensagem informando que os dados estão inválidos",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginSteps.deveSeExibirUmaMensagemInformandoQueOsDadosEstãoInválidos()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded6.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Realizar login com sucesso de um usuário",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@LoginComSucesso"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que o usuário \"Mikael\" esteja cadastrado",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.queOUsuárioEstejaCadastrado(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o usuário inserir o email como \"mikael@tester.com\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginSteps.oUsuárioInserirOEmailComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "inserir a senha como \"Passed@200\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.inserirASenhaComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botão Acessar",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.clicarNoBotãoAcessar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve-se exibir a tela principal do sistema com o usuário informado logado",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginSteps.deveSeExibirATelaPrincipalDoSistemaComOUsuárioInformadoLogado()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded7.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Realizar logout com sucesso de um usuário",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@LogoutComSucesso"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que o usuário \"Mikael\" esteja cadastrado",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.queOUsuárioEstejaCadastrado(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o usuário inserir o email como \"mikael@tester.com\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginSteps.oUsuárioInserirOEmailComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "inserir a senha como \"Passed@200\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.inserirASenhaComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botão Acessar",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.clicarNoBotãoAcessar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "na tela principal do sistema clicar no botão Sair",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.naTelaPrincipalDoSistemaClicarNoBotãoSair()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve-se exibir a tela de login do sistema",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginSteps.deveSeExibirATelaDeLoginDoSistema()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded8.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Registro.feature");
formatter.feature({
  "name": "Registros de usuários",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@Registro"
    }
  ]
});
formatter.scenario({
  "name": "Validando o botão de visibilidade de senha",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Registro"
    },
    {
      "name": "@ValidandoVisibilidadeDaSenha"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "o usuário clicar no botão Registrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "RegistroSteps.oUsuárioClicarNoBotãoRegistrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "inserir um email como \"mikael@teste.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.inserirUmEmailComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "inserir um nome como \"Mikael\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.inserirUmNomeComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "inserir uma senha como \"123@Teste\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.inserirUmaSenhaComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "inserir a confirmação da senha",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.inserirAConfirmaçãoDaSenha()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ativar a visibilidade das senhas",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.ativarAVisibilidadeDasSenhas()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve-se exibir as senhas visiveis ao usuário",
  "keyword": "Entao "
});
formatter.match({
  "location": "RegistroSteps.deveSeExibirAsSenhasVisiveisAoUsuário()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded9.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Tentando criar usuario com senha diferente da confirmação",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Registro"
    },
    {
      "name": "@RegistroComSenhasDiferentes"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "o usuário clicar no botão Registrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "RegistroSteps.oUsuárioClicarNoBotãoRegistrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "inserir um email como \"mikael@teste.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.inserirUmEmailComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "inserir um nome como \"Mikael\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.inserirUmNomeComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "inserir uma senha como \"985@Teste\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.inserirUmaSenhaComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "inserir uma confirmação da senha como \"654477\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.inserirUmaConfirmaçãoDaSenhaComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.clicarEmCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve-se exibir uma mensagem informando que as senhas não são iguais",
  "keyword": "Entao "
});
formatter.match({
  "location": "RegistroSteps.deveSeExibirUmaMensagemInformandoQueAsSenhasNãoSãoIguais()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded10.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Tentando criar usuario sem inserir a confirmação de senha",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Registro"
    },
    {
      "name": "@RegistroComConfirmacaoDeSenhaVazia"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "o usuário clicar no botão Registrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "RegistroSteps.oUsuárioClicarNoBotãoRegistrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "inserir um email como \"mikael@teste.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.inserirUmEmailComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "inserir um nome como \"Mikael\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.inserirUmNomeComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "inserir uma senha como \"567@Teste\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.inserirUmaSenhaComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.clicarEmCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve-se exibir uma mensagem informando que o campo confirmação senha e obrigatório",
  "keyword": "Entao "
});
formatter.match({
  "location": "RegistroSteps.deveSeExibirUmaMensagemInformandoQueOCampoConfirmaçãoSenhaEObrigatório()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded11.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Tentando criar usuario sem inserir senha",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Registro"
    },
    {
      "name": "@RegistroComSenhaVazia"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "o usuário clicar no botão Registrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "RegistroSteps.oUsuárioClicarNoBotãoRegistrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "inserir um email como \"mikael@teste.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.inserirUmEmailComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "inserir um nome como \"Mikael\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.inserirUmNomeComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "não inserir uma senha",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.nãoInserirUmaSenha()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.clicarEmCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve-se exibir uma mensagem informando que o campo senha e obrigatório",
  "keyword": "Entao "
});
formatter.match({
  "location": "RegistroSteps.deveSeExibirUmaMensagemInformandoQueOCampoSenhaEObrigatório()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded12.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Tentando criar usuario inserindo um email inválido",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Registro"
    },
    {
      "name": "@RegistroComNomeVazio"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "o usuário clicar no botão Registrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "RegistroSteps.oUsuárioClicarNoBotãoRegistrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "inserir um email como \"mikael@teste.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.inserirUmEmailComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "inserir um nome como \"\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.inserirUmNomeComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "inserir uma senha como \"321@Teste\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.inserirUmaSenhaComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "inserir a confirmação da senha",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.inserirAConfirmaçãoDaSenha()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.clicarEmCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve-se exibir mensagem informando que nome não pode ser vazio",
  "keyword": "Entao "
});
formatter.match({
  "location": "RegistroSteps.deveSeExibirMensagemInformandoQueNomeNãoPodeSerVazio()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded13.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Tentando criar usuario inserindo um email inválido",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Registro"
    },
    {
      "name": "@RegistroComEmailInvalido"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "o usuário clicar no botão Registrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "RegistroSteps.oUsuárioClicarNoBotãoRegistrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "inserir um email como \"sadas\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.inserirUmEmailComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "inserir um nome como \"Mikael\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.inserirUmNomeComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "inserir uma senha como \"321@Teste\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.inserirUmaSenhaComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "inserir a confirmação da senha",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.inserirAConfirmaçãoDaSenha()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.clicarEmCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve-se exibir mensagem informando que o formato é inválido",
  "keyword": "Entao "
});
formatter.match({
  "location": "RegistroSteps.deveSeExibirMensagemInformandoQueOFormatoÉInválido()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded14.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Tentando criar usuario sem inserir um email",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Registro"
    },
    {
      "name": "@RegistroSemInserirEmail"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "o usuário clicar no botão Registrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "RegistroSteps.oUsuárioClicarNoBotãoRegistrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "inserir um email como \"\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.inserirUmEmailComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "inserir um nome como \"Mikael\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.inserirUmNomeComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "inserir uma senha como \"234@Teste\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.inserirUmaSenhaComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "inserir a confirmação da senha",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.inserirAConfirmaçãoDaSenha()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.clicarEmCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve-se exibir mensagem informando que os campos são obrigatórios",
  "keyword": "Entao "
});
formatter.match({
  "location": "RegistroSteps.deveSeExibirMensagemInformandoQueOsCamposSãoObrigatórios()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded15.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Tentando criar usuario sem inserir dados",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Registro"
    },
    {
      "name": "@RegistroSemInserirDados"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "o usuário clicar no botão Registrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "RegistroSteps.oUsuárioClicarNoBotãoRegistrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "inserir um email como \"\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.inserirUmEmailComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "inserir um nome como \"\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.inserirUmNomeComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "inserir uma senha como \"\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.inserirUmaSenhaComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "inserir a confirmação da senha",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.inserirAConfirmaçãoDaSenha()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.clicarEmCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve-se exibir mensagem informando que os campos são obrigatórios",
  "keyword": "Entao "
});
formatter.match({
  "location": "RegistroSteps.deveSeExibirMensagemInformandoQueOsCamposSãoObrigatórios()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded16.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Criando um usuário com sucesso",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Registro"
    },
    {
      "name": "@RegistroDeUsuarioComSucesso"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "o usuário clicar no botão Registrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "RegistroSteps.oUsuárioClicarNoBotãoRegistrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "inserir um email como \"mikael@teste.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.inserirUmEmailComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "inserir um nome como \"Mikael\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.inserirUmNomeComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "inserir uma senha como \"123@Teste\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.inserirUmaSenhaComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "inserir a confirmação da senha",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.inserirAConfirmaçãoDaSenha()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.clicarEmCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve-se exibir uma mensagem informando sucesso ao criar conta",
  "keyword": "Entao "
});
formatter.match({
  "location": "RegistroSteps.deveSeExibirUmaMensagemInformandoSucessoAoCriarConta()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded17.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Criando um usuário sem saldo na conta",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Registro"
    },
    {
      "name": "@RegistroDeUsuarioSemSaldo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "o usuário clicar no botão Registrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "RegistroSteps.oUsuárioClicarNoBotãoRegistrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "inserir um email como \"mikael@teste.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.inserirUmEmailComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "inserir um nome como \"Mikael\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.inserirUmNomeComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "inserir uma senha como \"123@Teste\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.inserirUmaSenhaComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "inserir a confirmação da senha",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.inserirAConfirmaçãoDaSenha()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.clicarEmCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "fechar a mensagem de confirmação da criação de conta",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.fecharAMensagemDeConfirmaçãoDaCriaçãoDeConta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "fazer login com a conta criada",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.fazerLoginComAContaCriada()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve-se exibir o saldo em conta zerado na tela principal",
  "keyword": "Entao "
});
formatter.match({
  "location": "RegistroSteps.deveSeExibirOSaldoEmContaZeradoNaTelaPrincipal()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded18.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Criando um usuário com saldo na conta",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Registro"
    },
    {
      "name": "@RegistroDeUsuarioComSaldo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "o usuário clicar no botão Registrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "RegistroSteps.oUsuárioClicarNoBotãoRegistrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "inserir um email como \"mikael.teste@teste.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.inserirUmEmailComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "inserir um nome como \"Italo\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.inserirUmNomeComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "inserir uma senha como \"12345@Teste\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.inserirUmaSenhaComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "inserir a confirmação da senha",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.inserirAConfirmaçãoDaSenha()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "escolher a opção de criar com com saldo",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.escolherAOpçãoDeCriarComComSaldo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.clicarEmCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "fechar a mensagem de confirmação da criação de conta",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.fecharAMensagemDeConfirmaçãoDaCriaçãoDeConta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "fazer login com a conta criada",
  "keyword": "E "
});
formatter.match({
  "location": "RegistroSteps.fazerLoginComAContaCriada()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve-se exibir o saldo em conta na tela principal",
  "keyword": "Entao "
});
formatter.match({
  "location": "RegistroSteps.deveSeExibirOSaldoEmContaNaTelaPrincipal()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded19.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Requisitos.feature");
formatter.feature({
  "name": "Validando responsividade dos requisitos",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@Requisitos"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que o usuário esteja na página de requisitos",
  "keyword": "Dado "
});
formatter.match({
  "location": "RequisitosSteps.queOUsuárioEstejaNaPáginaDeRequisitos()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar a responsividade do link do repositório no GitHub",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Requisitos"
    },
    {
      "name": "@ResponsividadeLinkRepositorio"
    }
  ]
});
formatter.step({
  "name": "o usuário clicar na opção acessar o link do respositório",
  "keyword": "Quando "
});
formatter.match({
  "location": "RequisitosSteps.oUsuárioClicarNaOpçãoAcessarOLinkDoRespositório()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve-se exibir o repositório do prijeto no GitHub",
  "keyword": "Entao "
});
formatter.match({
  "location": "RequisitosSteps.deveSeExibirORepositórioDoPrijetoNoGitHub()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded20.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que o usuário esteja na página de requisitos",
  "keyword": "Dado "
});
formatter.match({
  "location": "RequisitosSteps.queOUsuárioEstejaNaPáginaDeRequisitos()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar a responsividade da opção login",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Requisitos"
    },
    {
      "name": "@ResponsividadeLogin"
    }
  ]
});
formatter.step({
  "name": "o usuário clicar na opção requisitos de \"Login\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "RequisitosSteps.oUsuárioClicarNaOpçãoRequisitosDe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve-se exibir os requisitos do \"Login\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "RequisitosSteps.deveSeExibirOsRequisitosDo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded21.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que o usuário esteja na página de requisitos",
  "keyword": "Dado "
});
formatter.match({
  "location": "RequisitosSteps.queOUsuárioEstejaNaPáginaDeRequisitos()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar a responsividade da opção cadastro",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Requisitos"
    },
    {
      "name": "@ResponsividadeCadastro"
    }
  ]
});
formatter.step({
  "name": "o usuário clicar na opção requisitos de \"Cadastro\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "RequisitosSteps.oUsuárioClicarNaOpçãoRequisitosDe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve-se exibir os requisitos do \"Cadastro\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "RequisitosSteps.deveSeExibirOsRequisitosDo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded22.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que o usuário esteja na página de requisitos",
  "keyword": "Dado "
});
formatter.match({
  "location": "RequisitosSteps.queOUsuárioEstejaNaPáginaDeRequisitos()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar a responsividade da opção tranferência",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Requisitos"
    },
    {
      "name": "@ResponsividadeTranferencia"
    }
  ]
});
formatter.step({
  "name": "o usuário clicar na opção requisitos de \"Transferência\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "RequisitosSteps.oUsuárioClicarNaOpçãoRequisitosDe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve-se exibir os requisitos do \"Transferência\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "RequisitosSteps.deveSeExibirOsRequisitosDo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded23.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que o usuário esteja na página de requisitos",
  "keyword": "Dado "
});
formatter.match({
  "location": "RequisitosSteps.queOUsuárioEstejaNaPáginaDeRequisitos()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar a responsividade da opção pagamento",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Requisitos"
    },
    {
      "name": "@ResponsividadePagamento"
    }
  ]
});
formatter.step({
  "name": "o usuário clicar na opção requisitos de \"Pagamento\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "RequisitosSteps.oUsuárioClicarNaOpçãoRequisitosDe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve-se exibir os requisitos do \"Pagamento\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "RequisitosSteps.deveSeExibirOsRequisitosDo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded24.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que o usuário esteja na página de requisitos",
  "keyword": "Dado "
});
formatter.match({
  "location": "RequisitosSteps.queOUsuárioEstejaNaPáginaDeRequisitos()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar a responsividade da opção extrato",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Requisitos"
    },
    {
      "name": "@ResponsividadeExtrato"
    }
  ]
});
formatter.step({
  "name": "o usuário clicar na opção requisitos de \"Extrato\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "RequisitosSteps.oUsuárioClicarNaOpçãoRequisitosDe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve-se exibir os requisitos do \"Extrato\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "RequisitosSteps.deveSeExibirOsRequisitosDo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded25.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que o usuário esteja na página de requisitos",
  "keyword": "Dado "
});
formatter.match({
  "location": "RequisitosSteps.queOUsuárioEstejaNaPáginaDeRequisitos()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar a responsividade da opção saque",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Requisitos"
    },
    {
      "name": "@ResponsividadeSaque"
    }
  ]
});
formatter.step({
  "name": "o usuário clicar na opção requisitos de \"Saque\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "RequisitosSteps.oUsuárioClicarNaOpçãoRequisitosDe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve-se exibir os requisitos do \"Saque\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "RequisitosSteps.deveSeExibirOsRequisitosDo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded26.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/TelaInicial.feature");
formatter.feature({
  "name": "Validando responsividade dos ícones da tela principal do sistema",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@TelaInicial"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que um usuário esteja na tela principal do sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "TelaInicialSteps.queUmUsuárioEstejaNaTelaPrincipalDoSistema()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validando a responsividade do ícone transferência",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@TelaInicial"
    },
    {
      "name": "@IconeTransferencia"
    }
  ]
});
formatter.step({
  "name": "o usuário clicar no ícone \"TRANSFERÊNCIA\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "TelaInicialSteps.oUsuárioClicarNoÍcone(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve-se exibir a tela de tranferências",
  "keyword": "Entao "
});
formatter.match({
  "location": "TelaInicialSteps.deveSeExibirATelaDeTranferências()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded27.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que um usuário esteja na tela principal do sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "TelaInicialSteps.queUmUsuárioEstejaNaTelaPrincipalDoSistema()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validando a responsividade do ícone pagamentos",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@TelaInicial"
    },
    {
      "name": "@IconePagamentos"
    }
  ]
});
formatter.step({
  "name": "o usuário clicar no ícone \"PAGAMENTOS\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "TelaInicialSteps.oUsuárioClicarNoÍcone(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve-se exibir uma mensagem que a funcionalidade está em desenvolvimento",
  "keyword": "Entao "
});
formatter.match({
  "location": "TelaInicialSteps.deveSeExibirUmaMensagemQueAFuncionalidadeEstáEmDesenvolvimento()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded28.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que um usuário esteja na tela principal do sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "TelaInicialSteps.queUmUsuárioEstejaNaTelaPrincipalDoSistema()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validando a responsividade do ícone extrato",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@TelaInicial"
    },
    {
      "name": "@IconeExtrato"
    }
  ]
});
formatter.step({
  "name": "o usuário clicar no ícone \"EXTRATO\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "TelaInicialSteps.oUsuárioClicarNoÍcone(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve-se exibir a tela de extrato",
  "keyword": "Entao "
});
formatter.match({
  "location": "TelaInicialSteps.deveSeExibirATelaDeExtrato()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded29.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que um usuário esteja na tela principal do sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "TelaInicialSteps.queUmUsuárioEstejaNaTelaPrincipalDoSistema()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validando a responsividade do ícone saque",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@TelaInicial"
    },
    {
      "name": "@IconeSaque"
    }
  ]
});
formatter.step({
  "name": "o usuário clicar no ícone \"SAQUE\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "TelaInicialSteps.oUsuárioClicarNoÍcone(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve-se exibir uma mensagem que a funcionalidade está em desenvolvimento",
  "keyword": "Entao "
});
formatter.match({
  "location": "TelaInicialSteps.deveSeExibirUmaMensagemQueAFuncionalidadeEstáEmDesenvolvimento()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded30.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/TransferenciasComSucesso.feature");
formatter.feature({
  "name": "Validando transferências com sucesso",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@Transferencia2"
    }
  ]
});
formatter.scenario({
  "name": "Realizando transferência entre duas contas registradas",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Transferencia2"
    },
    {
      "name": "@TransferenciaEntreDuasContas"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que dois usuários sejam cadastrados",
  "keyword": "Dado "
});
formatter.match({
  "location": "TransferenciasComSucessoSteps.queDoisUsuáriosSejamCadastrados()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o primeiro usuário entrar em sua conta",
  "keyword": "Quando "
});
formatter.match({
  "location": "TransferenciasComSucessoSteps.oPrimeiroUsuárioEntrarEmSuaConta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o usuário clicar no ícone \"TRANSFERÊNCIA\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "TelaInicialSteps.oUsuárioClicarNoÍcone(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar os dados da segunda conta",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciasComSucessoSteps.informarOsDadosDaSegundaConta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informe o valor da transferência de \"350\"",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciasSemSucessoSteps.informeOValorDaTransferênciaDe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informe a descrição como \"Entre contas\"",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciasSemSucessoSteps.informeADescriçãoComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em transferir agora",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciasSemSucessoSteps.clicarEmTransferirAgora()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "fechar o aviso de transferência realizada com sucesso",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciasSemSucessoSteps.fecharOAvisoDeTransferênciaRealizadaComSucesso()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "entrar na segunda conta",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciasComSucessoSteps.entrarNaSegundaConta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o usuário clicar no ícone \"EXTRATO\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "TelaInicialSteps.oUsuárioClicarNoÍcone(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve-se exibir o saldo da conta e a transferência recebida no extrato",
  "keyword": "Entao "
});
formatter.match({
  "location": "TransferenciasComSucessoSteps.deveSeExibirOSaldoDaContaEATransferênciaRecebidaNoExtrato()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded31.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validação do saldo na tela principal após uma transferência realizada",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Transferencia2"
    },
    {
      "name": "@ValidandoTransferenciaTelaInicial"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que dois usuários sejam cadastrados",
  "keyword": "Dado "
});
formatter.match({
  "location": "TransferenciasComSucessoSteps.queDoisUsuáriosSejamCadastrados()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o primeiro usuário entrar em sua conta",
  "keyword": "Quando "
});
formatter.match({
  "location": "TransferenciasComSucessoSteps.oPrimeiroUsuárioEntrarEmSuaConta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o usuário clicar no ícone \"TRANSFERÊNCIA\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "TelaInicialSteps.oUsuárioClicarNoÍcone(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar os dados da segunda conta",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciasComSucessoSteps.informarOsDadosDaSegundaConta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informe o valor da transferência de \"200\"",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciasSemSucessoSteps.informeOValorDaTransferênciaDe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informe a descrição como \"Testando transferência\"",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciasSemSucessoSteps.informeADescriçãoComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em transferir agora",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciasSemSucessoSteps.clicarEmTransferirAgora()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "fechar o aviso de transferência realizada com sucesso",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciasSemSucessoSteps.fecharOAvisoDeTransferênciaRealizadaComSucesso()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "voltar para tela inicial",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciasSemSucessoSteps.voltarParaTelaInicial()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve-se exibir na tela principal o saldo em conta de oitocentos reais",
  "keyword": "Entao "
});
formatter.match({
  "location": "TransferenciasSemSucessoSteps.deveSeExibirnaTelaPrincipalOSaldoEmContaDeOitocentosReais()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded32.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/TransferenciasSemSucesso.feature");
formatter.feature({
  "name": "Validando transferências sem sucesso",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@Transferencia"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que um usuário esteja logado",
  "keyword": "Dado "
});
formatter.match({
  "location": "TransferenciasSemSucessoSteps.queUmUsuárioEstejaLogado()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Realizando uma transferência com conta inválida",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Transferencia"
    },
    {
      "name": "@TransferenciaContaInvalida"
    }
  ]
});
formatter.step({
  "name": "o usuário clicar no ícone \"TRANSFERÊNCIA\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "TelaInicialSteps.oUsuárioClicarNoÍcone(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a conta como \"54164894\"",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciasSemSucessoSteps.informarAContaComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o digito como \"0\"",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciasSemSucessoSteps.informarODigitoComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informe o valor da transferência de \"200\"",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciasSemSucessoSteps.informeOValorDaTransferênciaDe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informe a descrição como \"Testando conta invalida\"",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciasSemSucessoSteps.informeADescriçãoComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em transferir agora",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciasSemSucessoSteps.clicarEmTransferirAgora()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve-se exibir uma mensagem informando que a conta é inválida ou inexistente",
  "keyword": "Entao "
});
formatter.match({
  "location": "TransferenciasSemSucessoSteps.deveSeExibirUmaMensagemInformandoQueAContaÉInválidaOuInexistente()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded33.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que um usuário esteja logado",
  "keyword": "Dado "
});
formatter.match({
  "location": "TransferenciasSemSucessoSteps.queUmUsuárioEstejaLogado()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Tentativa de realizar transferência sem saldo sufuciente",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Transferencia"
    },
    {
      "name": "@TransferenciaSaldoInsuficiente"
    }
  ]
});
formatter.step({
  "name": "o usuário clicar no ícone \"TRANSFERÊNCIA\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "TelaInicialSteps.oUsuárioClicarNoÍcone(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informe o valor da transferência de \"2000\"",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciasSemSucessoSteps.informeOValorDaTransferênciaDe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informe a descrição como \"Testando saldo insuficiente\"",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciasSemSucessoSteps.informeADescriçãoComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em transferir agora",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciasSemSucessoSteps.clicarEmTransferirAgora()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve-se exibir uma mensagem informando que não possue saldo suficiente para transferência",
  "keyword": "Entao "
});
formatter.match({
  "location": "TransferenciasSemSucessoSteps.deveSeExibirUmaMensagemInformandoQueNãoPossueSaldoSuficienteParaTransferência()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded34.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que um usuário esteja logado",
  "keyword": "Dado "
});
formatter.match({
  "location": "TransferenciasSemSucessoSteps.queUmUsuárioEstejaLogado()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Tentativa de realizar transferência sem inserir o valor",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Transferencia"
    },
    {
      "name": "@TransferenciaSemInserirValor"
    }
  ]
});
formatter.step({
  "name": "o usuário clicar no ícone \"TRANSFERÊNCIA\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "TelaInicialSteps.oUsuárioClicarNoÍcone(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informe o valor da transferência de \"\"",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciasSemSucessoSteps.informeOValorDaTransferênciaDe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informe a descrição como \"Teste sem valor\"",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciasSemSucessoSteps.informeADescriçãoComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em transferir agora",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciasSemSucessoSteps.clicarEmTransferirAgora()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve-se exibir uma mensagem bugada exigindo o valor da transferência",
  "keyword": "Entao "
});
formatter.match({
  "location": "TransferenciasSemSucessoSteps.deveSeExibirUmaMensagemBugadaExigindoOValorDaTransferência()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded35.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que um usuário esteja logado",
  "keyword": "Dado "
});
formatter.match({
  "location": "TransferenciasSemSucessoSteps.queUmUsuárioEstejaLogado()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Tentativa de realizar transferência para mesma conta",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Transferencia"
    },
    {
      "name": "@TransferenciaParaMesmaConta"
    }
  ]
});
formatter.step({
  "name": "o usuário clicar no ícone \"TRANSFERÊNCIA\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "TelaInicialSteps.oUsuárioClicarNoÍcone(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informe a mesma conta e digito da sua titularidade",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciasSemSucessoSteps.informeAMesmaContaEDigitoDaSuaTitularidade()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informe o valor da transferência de \"200\"",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciasSemSucessoSteps.informeOValorDaTransferênciaDe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informe a descrição como \"Teste sem valor\"",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciasSemSucessoSteps.informeADescriçãoComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em transferir agora",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciasSemSucessoSteps.clicarEmTransferirAgora()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve-se exibir uma mensagem que não pode transferir para a mesma conta",
  "keyword": "Entao "
});
formatter.match({
  "location": "TransferenciasSemSucessoSteps.deveSeExibirUmaMensagemQueNãoPodeTransferirParaAMesmaConta()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded36.png", null);
formatter.after({
  "status": "passed"
});
});