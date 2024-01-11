package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import static org.junit.Assert.assertEquals;
import static stepsDefinitions.Hooks.*;

public class TransferenciasComSucessoPage extends BasePage{
	private static String conta1, digito1, conta2, digito2;
	
	public void cadastrarUsuario(String email, String nome, String senha) throws Exception{
		btnRegistrar.click();
		campoEmailRegistrar.clear();
		campoEmailRegistrar.sendKeys(email);
		campoNomeRegistrar.clear();
		campoNomeRegistrar.sendKeys(nome);
		campoSenhaRegistrar.clear();
		campoSenhaRegistrar.sendKeys(senha);
		campoConfirmarSenhaRegistrar.clear();
		campoConfirmarSenhaRegistrar.sendKeys(senha);
		Thread.sleep(300);
		switchSaldoEmContaRegistrar.click();
		Thread.sleep(300);
		btnCadastrar.click();
		Thread.sleep(300);
	}
	
	public void getPrimeiraAcc() {
		WebElement txt = driver.findElement(By.xpath("//p[contains(@class, 'styles__Text-sc-8zteav-4 gpcLtj')]"));
		String[] split = (txt.getText()).split("-");
		
		String acc = split[0];
		String dig = split[1];
		
		conta1 = acc.replaceAll("[^0-9.]", "");
		digito1 = dig.replaceAll("[^0-9.]", "");
	}
	
	public void getSegundaAcc() {
		WebElement txt = driver.findElement(By.xpath("//p[contains(@class, 'styles__Text-sc-8zteav-4 gpcLtj')]"));
		String[] split = (txt.getText()).split("-");
		
		String acc = split[0];
		String dig = split[1];
		
		conta2 = acc.replaceAll("[^0-9.]", "");
		digito2 = dig.replaceAll("[^0-9.]", "");
	}
	
	public void fecharMsg() {
		btnFecharMsgConfirmaRegistro.click();
	}
	
	public void imprimeConta() {
		System.out.println("Primeira conta");
		System.out.println(conta1);
		System.out.println(digito1);
		System.out.println("=================");
		System.out.println("Segunda conta");
		System.out.println(conta2);
		System.out.println(digito2);
	}

	public void primeiroLogar() throws Exception {
		campoEmailInicial.clear();
		campoEmailInicial.sendKeys("p@tes.com");
		campoSenhaInicial.clear();
		campoSenhaInicial.sendKeys("12345");
		Thread.sleep(500);
		btnAcessar.click();
	}

	public void informarDadosSegunda() {
		campoNunmeroDaConta.sendKeys(conta2);
		campoDigitoDaConta.sendKeys(digito2);
	}

	public void segundoLogar() throws Exception {
		btnSairTelaPrincipal.click();
		Thread.sleep(700);
		campoEmailInicial.clear();
		campoEmailInicial.sendKeys("s@teste.com");
		campoSenhaInicial.clear();
		campoSenhaInicial.sendKeys("54321");
		Thread.sleep(500);
		btnAcessar.click();
	}

	public void validaTransferenciaEntreExtrato() {
		assertEquals("R$ 350,00", saldoContaExtrato.getText());
		assertEquals("Entre contas", nomeTransferencia2.getText());
		assertEquals("R$ 350,00", valorTransferencia2.getText());
	}
}
