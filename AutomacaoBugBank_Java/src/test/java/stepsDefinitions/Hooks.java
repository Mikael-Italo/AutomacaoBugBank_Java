package stepsDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import static utils.Utils.*;

public class Hooks {

public static WebDriver driver;
	
	@Before
	public void setUp() {
		 System.setProperty("webdriver.chrome.driver", "C://chromedriver.exe");
		   driver = new ChromeDriver();
		   driver.manage().window().maximize();
		   driver.manage().deleteAllCookies();
		   driver.get("chrome://settings/clearBrowserData");
		   driver.findElement(By.xpath("//settings-ui")).sendKeys(Keys.ENTER);
		   driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
		   driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		   driver.get("https://bugbank.netlify.app/");
		   
		   driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
	}
	
	
	@After
	public void tearDown(Scenario cenario) {
		print(cenario);
		driver.quit();
	}
}
