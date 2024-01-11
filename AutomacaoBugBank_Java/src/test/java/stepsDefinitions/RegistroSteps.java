package stepsDefinitions;

import static utils.Utils.na;

import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.RegistroPage;

public class RegistroSteps {

	@Quando("o usuário clicar no botão Registrar")
	public void oUsuárioClicarNoBotãoRegistrar() throws Exception {
		Thread.sleep(250);
		na(RegistroPage.class).clicarBtnRegistrar();
	}

	@Quando("inserir um email como {string}")
	public void inserirUmEmailComo(String string) throws Exception {
		Thread.sleep(250);
		na(RegistroPage.class).inserirEmailRegistro(string);
	}

	@Quando("inserir um nome como {string}")
	public void inserirUmNomeComo(String string) throws Exception {
		Thread.sleep(250);
		na(RegistroPage.class).inserirNomeRegistro(string);
	}

	@Quando("inserir uma senha como {string}")
	public void inserirUmaSenhaComo(String string) throws Exception {
		Thread.sleep(250);
		na(RegistroPage.class).inserirSenhaRegistro(string);
	}

	@Quando("inserir a confirmação da senha")
	public void inserirAConfirmaçãoDaSenha() throws Exception {
		Thread.sleep(250);
		na(RegistroPage.class).confirmarSenhaRegistro();
	}

	@Quando("clicar em cadastrar")
	public void clicarEmCadastrar() throws Exception {
		Thread.sleep(250);
		na(RegistroPage.class).clicarBtnCadastrar();
	}

	@Quando("escolher a opção de criar com com saldo")
	public void escolherAOpçãoDeCriarComComSaldo() throws Exception{
		Thread.sleep(250);
		na(RegistroPage.class).switchInserirSaldoRegistro();
	}

	@Entao("deve-se exibir uma mensagem informando sucesso ao criar conta")
	public void deveSeExibirUmaMensagemInformandoSucessoAoCriarConta() throws Exception {
		Thread.sleep(2000);
		na(RegistroPage.class).validaContaCriada();
	}
	
	@Quando("fechar a mensagem de confirmação da criação de conta")
	public void fecharAMensagemDeConfirmaçãoDaCriaçãoDeConta() throws Exception{
		Thread.sleep(250);
		na(RegistroPage.class).btnFecharMsgRegistro();;
	}

	@Quando("fazer login com a conta criada")
	public void fazerLoginComAContaCriada() throws Exception{
		Thread.sleep(1000);
		na(RegistroPage.class).fazerLoginAccCriada();
	}
	
	@Quando("não inserir uma senha")
	public void nãoInserirUmaSenha() throws Exception {
		Thread.sleep(250);
		na(RegistroPage.class).naoInserirSenha();
	}
	
	@Quando("inserir uma confirmação da senha como {string}")
	public void inserirUmaConfirmaçãoDaSenhaComo(String string) throws Exception{
		Thread.sleep(250);
		na(RegistroPage.class).confirmaSenhaDiferente(string);
	}


	@Quando("ativar a visibilidade das senhas")
	public void ativarAVisibilidadeDasSenhas() throws Exception{
		Thread.sleep(250);
		na(RegistroPage.class).ativarVisibilidadeSenha();
	}

	@Entao("deve-se exibir o saldo em conta na tela principal")
	public void deveSeExibirOSaldoEmContaNaTelaPrincipal() throws Exception{
	   Thread.sleep(2000);
	   na(RegistroPage.class).validaSaldoEmConta();
	}
	
	@Entao("deve-se exibir o saldo em conta zerado na tela principal")
	public void deveSeExibirOSaldoEmContaZeradoNaTelaPrincipal() throws Exception{
	    Thread.sleep(2000);
	    na(RegistroPage.class).validaSemSaldoEmConta();
	}
	
	@Entao("deve-se exibir mensagem informando que os campos são obrigatórios")
	public void deveSeExibirMensagemInformandoQueOsCamposSãoObrigatórios() throws Exception{
		Thread.sleep(2000);
		na(RegistroPage.class).validaCampoObrigatorio();
	}

	@Entao("deve-se exibir mensagem informando que o formato é inválido")
	public void deveSeExibirMensagemInformandoQueOFormatoÉInválido() throws Exception{
	    Thread.sleep(2000);
	    na(RegistroPage.class).validaEmailInvalido();
	}

	@Entao("deve-se exibir mensagem informando que nome não pode ser vazio")
	public void deveSeExibirMensagemInformandoQueNomeNãoPodeSerVazio() throws Exception{
	    Thread.sleep(2000);
	    na(RegistroPage.class).validaNomeVazio();
	}
	
	@Entao("deve-se exibir uma mensagem informando que o campo confirmação senha e obrigatório")
	public void deveSeExibirUmaMensagemInformandoQueOCampoConfirmaçãoSenhaEObrigatório() throws Exception{
	    Thread.sleep(2000);
	    na(RegistroPage.class).validaCampoConfirmacaoSenha();
	}

	@Entao("deve-se exibir uma mensagem informando que o campo senha e obrigatório")
	public void deveSeExibirUmaMensagemInformandoQueOCampoSenhaEObrigatório() throws Exception{
	    Thread.sleep(2000);
	    na(RegistroPage.class).validaCampoSenhaObrigatorio();
	}
	
	@Entao("deve-se exibir uma mensagem informando que as senhas não são iguais")
	public void deveSeExibirUmaMensagemInformandoQueAsSenhasNãoSãoIguais() throws Exception{
	    Thread.sleep(2000);
	    na(RegistroPage.class).validaSenhasNaoIguais();
	}
	

	@Entao("deve-se exibir as senhas visiveis ao usuário")
	public void deveSeExibirAsSenhasVisiveisAoUsuário() throws Exception{
	    Thread.sleep(2000);
	    na(RegistroPage.class).validaVisibilidadeSenha();
	}


}
