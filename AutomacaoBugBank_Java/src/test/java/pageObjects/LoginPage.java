package pageObjects;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotEquals;
import static org.junit.Assert.assertTrue;
import static utils.Utils.*;

public class LoginPage extends BasePage {

	public void inserirCampoEmailInicial(String string) {
		campoEmailInicial.sendKeys(string);
	}

	public void inserirCampoSenhaInicial(String string) {
		campoSenhaInicial.sendKeys(string);
	}

	public void clicarBtnAcessar() {
		btnAcessar.click();
	}
	
	public void clicarBtnSair() {
		btnSairTelaPrincipal.click();
	}
	
	
	private static String typeSenhaBefore;
	
	public void clicarBtnExibirSenha() {
		typeSenhaBefore = campoSenhaInicial.getAttribute("type");
		btnExibirSenhaInicial.click();
	}

//Validações
	public void validaLoginSemDados() {
		assertEquals("É campo obrigatório", avisoCampoObgEmailInicial.getText());
		assertEquals("É campo obrigatório", avisoCampoObgSenhaInicial.getText());
	}

	public void validaLoginSemSenha() {
		assertTrue(avisoCampoObgSenhaInicial.isDisplayed());
	}

	public void validaLoginSemEmail() {
		assertTrue(avisoCampoObgEmailInicial.isDisplayed());
	}

	public void validaUsuarioInvalido() {
		assertEquals("Usuário ou senha inválido. Tente novamente ou verifique suas informações!",
				avisoNomeVazio.getText().replaceAll("\\n", " "));
	}

	public void validaLoginSucesso(String nome) {
		assertEquals("Olá "+ nome +",", validaLoginNomeTelaPrincipal.getText());
	}
	
	public void validaLogoutSucesso() {
		assertTrue(campoEmailInicial.isDisplayed());
		assertTrue(campoSenhaInicial.isDisplayed());
		assertTrue(btnAcessar.isDisplayed());
		assertTrue(btnRegistrar.isDisplayed());
	}
	
	public void validaVisibilidadeSenhaInicial() {
		assertNotEquals(typeSenhaBefore, campoSenhaInicial.getAttribute("type"));
	}
	
	public void validaFormatoInvalido() {
		assertEquals("Formato inválido", avisoCampoObgEmailInicial.getText());
	}
	
	
	//Contexto conta criada e na tela principal 
	public void contextoLogado() throws Exception {
		na(RegistroPage.class).contextoCriarContaLogin("Mikael");
		inserirCampoEmailInicial("mikael@tester.com");
		inserirCampoSenhaInicial("Passed@200");
		clicarBtnAcessar();
	}

	
}