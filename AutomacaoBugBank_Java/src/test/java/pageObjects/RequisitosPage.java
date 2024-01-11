package pageObjects;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static stepsDefinitions.Hooks.driver;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class RequisitosPage extends BasePage {

	public void dadoRequisitos() {
		btnAcessarRequisitos.click();
	}

	public void acessarRepositorio() {
		acessarRepositorio.click();
	}
	
	//Escolhendo a guia
	public void clicarOpcaoRequisitos(String guias) throws Exception{
		WebElement guia = driver.findElement(By.xpath("//div[contains(@id, 'accordion"+guias+"')]"));
		Thread.sleep(600);
		guia.click();
	}

//Validações
	public void validaGitHub() {
		assertEquals(
				"O banco com bugs e falhas do seu jeito. Contribute to jhonatasmatos/bugbank development by creating an account on GitHub.",
				titleGitHub.getAttribute("content"));
	}
	
	//Validando cada guia
	public void validaOpcaoRequisitos(String guias) throws Exception{
		WebElement dropDown = driver.findElement(By.xpath("//div[contains(@id, 'textAccordion"+guias+"')]"));
		Thread.sleep(600);
		
		assertTrue(dropDown.isDisplayed());
	}
}
