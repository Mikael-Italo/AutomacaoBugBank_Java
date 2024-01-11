package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static stepsDefinitions.Hooks.*;

public class TelaInicialPage extends BasePage{
	
	//Seleciona icone
	public void selecionaIcone(String icone) throws Exception {
		WebElement guia = driver.findElement(By.xpath("//a[contains(@id, 'btn-"+icone+"')]"));
		Thread.sleep(600);
		guia.click();
	}
	
	//Validações
	public void validaTelaTransferencia() {
		assertTrue(validaTelaTranferencia.isDisplayed());
	}
	
	public void validaModalEmDesenvolvimento() {
		assertEquals("Funcionalidade em desenvolvimento", avisoNomeVazio.getText());
	}
	
	public void validaTelaExtrato() {
		assertTrue(validaTelaExtrato.isDisplayed());
	}

}
