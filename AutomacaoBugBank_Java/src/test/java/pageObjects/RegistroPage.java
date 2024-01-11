package pageObjects;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotEquals;
import static org.junit.Assert.assertTrue;

public class RegistroPage extends BasePage{

	public void clicarBtnRegistrar() {
		btnRegistrar.click();
	}
	
	private static String email;
	public void inserirEmailRegistro(String string) {
		email = string;
		campoEmailRegistrar.sendKeys(string);
	}
	
	public void inserirNomeRegistro(String string) {
		campoNomeRegistrar.sendKeys(string);
	}
	
	private static String senha;
	public void inserirSenhaRegistro(String string) {
		senha = string;
		campoSenhaRegistrar.sendKeys(string);
	}
	
	public void confirmarSenhaRegistro() {
		campoConfirmarSenhaRegistrar.sendKeys(senha);
	}
	
	public void switchInserirSaldoRegistro() {
		switchSaldoEmContaRegistrar.click();
	}
	
	public void clicarBtnCadastrar() {
		btnCadastrar.click();
	}
	
	public void btnFecharMsgRegistro() {
		btnFecharMsgConfirmaRegistro.click();
	}
	
	public void fazerLoginAccCriada() throws Exception {
		campoEmailInicial.sendKeys(email);
		campoSenhaInicial.sendKeys(senha);
		Thread.sleep(700);
		btnAcessar.click();
	}
	
	public void naoInserirSenha() {
		campoConfirmarSenhaRegistrar.sendKeys("213@Teste");
	}
	
	public void confirmaSenhaDiferente(String string) {
		campoConfirmarSenhaRegistrar.sendKeys(string);
	}
	
	private static String typeSenhaBefore;
	private static String typeConfirmaSenhaBefore;
	
	public void ativarVisibilidadeSenha() {
		typeSenhaBefore = campoSenhaRegistrar.getAttribute("type");
		ativaVisibilidadeSenha.click();
		typeConfirmaSenhaBefore = campoConfirmarSenhaRegistrar.getAttribute("type");
		ativaVisibilidadeConfirmaSenha.click();
	}
	
	//Contexto conta criada
		public void contextoCriarContaLogin(String nome) throws Exception{
			clicarBtnRegistrar();
			Thread.sleep(200);
			inserirEmailRegistro("mikael@tester.com");
			Thread.sleep(200);
			inserirNomeRegistro(nome);
			Thread.sleep(200);
			inserirSenhaRegistro("Passed@200");
			Thread.sleep(200);
			confirmarSenhaRegistro();
			Thread.sleep(200);
			switchInserirSaldoRegistro();
			Thread.sleep(200);
			clicarBtnCadastrar();
			Thread.sleep(200);
			btnFecharMsgRegistro();
		}
	
//Validações
	public void validaContaCriada() {
		assertTrue(validaContraCriada.isDisplayed());
	}
	
	public void validaSaldoEmConta() {
		assertEquals("Saldo em conta R$ 1.000,00", saldoNaTelaPrincipal.getText());
	}
	
	public void validaSemSaldoEmConta() {
		assertEquals("Saldo em conta R$ 0,00", saldoNaTelaPrincipal.getText());
	}
	
	public void validaCampoObrigatorio() {
		assertEquals("É campo obrigatório", avisoCampoObrigatorio.getText());
	}
	
	public void validaEmailInvalido() {
		assertEquals("Formato inválido", avisoCampoObrigatorio.getText());
	}
	
	public void validaNomeVazio() {
		assertEquals("Nome não pode ser vazio.", avisoNomeVazio.getText());
	}
	
	public void validaCampoSenhaObrigatorio() {
		assertEquals("É campo obrigatório", avisoSenhaObrigatorio.getText());
	}
	
	public void validaCampoConfirmacaoSenha() {
		assertEquals("É campo obrigatório", avisoConfirmaSenhaObrigatorio.getText());
	}
	
	public void validaSenhasNaoIguais() {
		assertEquals("As senhas não são iguais.", avisoNomeVazio.getText());
	}
	
	public void validaVisibilidadeSenha() {
		assertNotEquals(typeSenhaBefore, campoSenhaRegistrar.getAttribute("type"));
		assertNotEquals(typeConfirmaSenhaBefore, campoConfirmarSenhaRegistrar.getAttribute("type"));
	}
}
