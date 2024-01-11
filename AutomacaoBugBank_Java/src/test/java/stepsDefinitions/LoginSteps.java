package stepsDefinitions;

import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.LoginPage;
import pageObjects.RegistroPage;

import static utils.Utils.*;

public class LoginSteps {
	static String nomeUsuario;
	
	@Quando("o usuário inserir o email como {string}")
	public void oUsuárioInserirOEmailComo(String string) throws Exception{
		na(LoginPage.class).inserirCampoEmailInicial(string);
	}

	@Quando("inserir a senha como {string}")
	public void inserirASenhaComo(String string) throws Exception{
		na(LoginPage.class).inserirCampoSenhaInicial(string);
	}

	@Quando("clicar no botão Acessar")
	public void clicarNoBotãoAcessar() throws Exception{
		na(LoginPage.class).clicarBtnAcessar();
	}

	//Login sem dados
	
	@Entao("deve-se exibir uma mensagem informando que o campo é obrigatório")
	public void deveSeExibirUmaMensagemInformandoQueOCampoÉObrigatório() throws Exception{
	    Thread.sleep(2000);
	    na(LoginPage.class).validaLoginSemDados();
	}
	
	//Login sem senha
	
	@Entao("deve-se exibir uma mensagem informando que o campo senha é obrigatório")
	public void deveSeExibirUmaMensagemInformandoQueOCampoSenhaÉObrigatório() throws Exception{
	    Thread.sleep(2000);
	    na(LoginPage.class).validaLoginSemSenha();
	}
	
	//Login sem email
	
	@Entao("deve-se exibir uma mensagem informando que o campo email é obrigatório")
	public void deveSeExibirUmaMensagemInformandoQueOCampoEmailÉObrigatório() throws Exception{
	    Thread.sleep(2000);
	    na(LoginPage.class).validaLoginSemEmail();
	}
	 
	//Contexto login
	
	@Dado("que o usuário {string} esteja cadastrado")
	public void queOUsuárioEstejaCadastrado(String nome) throws Exception{
		Thread.sleep(1000);
		nomeUsuario = nome;
		na(RegistroPage.class).contextoCriarContaLogin(nome);
	}

	//Login com dados inválidos
	
	@Entao("deve-se exibir uma mensagem informando que os dados estão inválidos")
	public void deveSeExibirUmaMensagemInformandoQueOsDadosEstãoInválidos() throws Exception{
		Thread.sleep(2000);
		na(LoginPage.class).validaUsuarioInvalido();
	}
	
	//Login com sucesso
	
	@Entao("deve-se exibir a tela principal do sistema com o usuário informado logado")
	public void deveSeExibirATelaPrincipalDoSistemaComOUsuárioInformadoLogado() throws Exception{
	    Thread.sleep(2000);
	    na(LoginPage.class).validaLoginSucesso(nomeUsuario);
	}
	
	//Logout
	
	@Quando("na tela principal do sistema clicar no botão Sair")
	public void naTelaPrincipalDoSistemaClicarNoBotãoSair() throws Exception{
		Thread.sleep(700);
		na(LoginPage.class).clicarBtnSair();
	}

	@Entao("deve-se exibir a tela de login do sistema")
	public void deveSeExibirATelaDeLoginDoSistema() throws Exception{
		Thread.sleep(1000);
		na(LoginPage.class).validaLogoutSucesso();
	}
	
	//Visibilidade da senha
	
	@Quando("clicar no botão exibir senha")
	public void clicarNoBotãoExibirSenha() throws Exception{
		Thread.sleep(1000);
		na(LoginPage.class).clicarBtnExibirSenha();
	}

	@Entao("deve-se exibir a senha em formato de texto para o usuário")
	public void deveSeExibirASenhaEmFormatoDeTextoParaOUsuário() throws Exception{
		Thread.sleep(1000);
		na(LoginPage.class).validaVisibilidadeSenhaInicial();
	}

	//Formato inválido
	
	@Entao("deve-se exibir uma mensagem informando que o formato do email para login e inválido")
	public void deveSeExibirUmaMensagemInformandoQueOFormatoDoEmailEInválido() throws Exception{
		Thread.sleep(1000);
		na(LoginPage.class).validaFormatoInvalido();
	}
	
	
}
