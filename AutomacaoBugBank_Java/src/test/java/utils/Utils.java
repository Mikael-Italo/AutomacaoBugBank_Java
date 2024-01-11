package utils;

import static stepsDefinitions.Hooks.driver;
import org.openqa.selenium.support.PageFactory;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import io.cucumber.core.api.Scenario;


public class Utils {
	
//Iniciar elementos	
	public static <T> T na(Class<T> classe) {
		return PageFactory.initElements(driver, classe);
	}

//Print	
	public static void print(Scenario cenario) {
		final byte[] screenshot = ((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES);
		cenario.embed(screenshot, "image/png");
	}

}
