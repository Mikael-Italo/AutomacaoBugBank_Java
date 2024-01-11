package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class BasePage {

//Registro	
	@FindBy(xpath = "//button[contains(@class, 'style__ContainerButton-sc-1wsixal-0 ihdmxA button__child')]")
	protected WebElement btnRegistrar;
	
	@FindBy(xpath = "//button[contains(@class, 'style__ContainerButton-sc-1wsixal-0 otUnI button__child')]")
	protected WebElement btnAcessar;
	
	@FindBy(xpath = "(//input[contains(@name, 'email')])[1]")
	protected WebElement campoEmailInicial;
	
	@FindBy(xpath = "(//input[contains(@name, 'password')])[1]")
	protected WebElement campoSenhaInicial;
	
	@FindBy(xpath = "(//input[contains(@name, 'email')])[2]")
	protected WebElement campoEmailRegistrar;
	
	@FindBy(xpath = "(//input[contains(@name, 'password')])[2]")
	protected WebElement campoSenhaRegistrar;
	
	@FindBy(xpath = "//input[contains(@name, 'name')]")
	protected WebElement campoNomeRegistrar;
	
	@FindBy(xpath = "//input[contains(@name, 'passwordConfirmation')]")
	protected WebElement campoConfirmarSenhaRegistrar;
	
	@FindBy(xpath = "//label[contains(@id, 'toggleAddBalance')]")
	protected WebElement switchSaldoEmContaRegistrar;
	
	@FindBy(xpath = "//button[contains(@class, 'style__ContainerButton-sc-1wsixal-0 CMabB button__child')]")
	protected WebElement btnCadastrar;
	
	@FindBy(xpath = "//div[contains(@class, 'styles__ContainerContent-sc-8zteav-1 cSdWPv')]")
	protected WebElement validaContraCriada;
	
	@FindBy(xpath = "//a[contains(@id, 'btnCloseModal')]")
	protected WebElement btnFecharMsgConfirmaRegistro;
	
	@FindBy(xpath = "//p[contains(@id, 'textBalance')]")
	protected WebElement saldoNaTelaPrincipal;
	
	@FindBy(xpath = "(//p[contains(@class, 'input__warging')])[3]")
	protected WebElement avisoCampoObrigatorio;
	
	@FindBy(xpath = "//p[contains(@id, 'modalText')]")
	protected WebElement avisoNomeVazio;
	
	@FindBy(xpath = "(//p[contains(@class, 'input__warging')])[5]")
	protected WebElement avisoSenhaObrigatorio;
	
	@FindBy(xpath = "(//p[contains(@class, 'input__warging')])[6]")
	protected WebElement avisoConfirmaSenhaObrigatorio;
	
	@FindBy(xpath = "(//button[contains(@class, 'login__eye')])[2]")
	protected WebElement ativaVisibilidadeSenha;
	
	@FindBy(xpath = "(//button[contains(@class, 'login__eye')])[3]")
	protected WebElement ativaVisibilidadeConfirmaSenha;
	
//Login	
	
	@FindBy(xpath = "(//p[contains(@class, 'input__warging')])[1]")
	protected WebElement avisoCampoObgEmailInicial;
	
	@FindBy(xpath = "(//p[contains(@class, 'input__warging')])[2]")
	protected WebElement avisoCampoObgSenhaInicial;
	
	@FindBy(xpath = "//p[contains(@id, 'textName')]")
	protected WebElement validaLoginNomeTelaPrincipal;
	
	@FindBy(xpath = "//a[contains(@id, 'btnExit')]")
	protected WebElement btnSairTelaPrincipal;
	
//Requisitos
	
	@FindBy(linkText = "Conheça nossos requisitos")
	protected WebElement btnAcessarRequisitos;
	
	@FindBy(xpath = "//a[contains(@id, 'linkGithub')]")
	protected WebElement acessarRepositorio;
	
	@FindBy(xpath = "(//meta[contains(@name, 'description')])[1]")
	protected WebElement titleGitHub;
	
	@FindBy(xpath = "//p[contains(@color, 'white')]")
	protected WebElement memoriaLocal;
	
	@FindBy(xpath = "(//button[contains(@class, 'login__eye')])[1]")
	protected WebElement btnExibirSenhaInicial;
	
//Tela inicial 
	
	@FindBy(xpath = "//p[contains(@class, 'transfer__TextInformation-sc-1yjpf2r-7 eUFZOb')]")
	protected WebElement validaTelaTranferencia;
	
	@FindBy(xpath = "//div[contains(@class, 'bank-statement__ContainerTransactions-sc-7n8vh8-8 CUAzQ')]")
	protected WebElement validaTelaExtrato;
	
//Transferencia
	@FindBy(xpath = "//p[contains(@id, 'textAccountNumber')]/span")
	protected WebElement numeroContaTelaInicialSpan;
	
	@FindBy(xpath = "//input[contains(@name, 'accountNumber')]")
	protected WebElement campoNunmeroDaConta;
	
	@FindBy(xpath = "//input[contains(@name, 'digit')]")
	protected WebElement campoDigitoDaConta;
	
	@FindBy(xpath = "//input[contains(@name, 'transferValue')]")
	protected WebElement campoValorTransferencia;
	
	@FindBy(xpath = "//input[contains(@name, 'description')]")
	protected WebElement campoDescTransferencia;
	
	@FindBy(xpath = "//button[contains(@class, 'style__ContainerButton-sc-1wsixal-0 CMabB button__child')]")
	protected WebElement btnTransferirAgora;
	
	@FindBy(xpath = "//a[contains(@id, 'btnBack')]")
	protected WebElement btnVoltar;
	
	@FindBy(xpath = "//p[contains(@id, 'textBalance')]/span")
	protected WebElement saldoNaTelaPrincipalSpan;
	
	@FindBy(xpath = "//p[contains(@id, 'textBalanceAvailable')]")
	protected WebElement saldoContaExtrato;
	
	@FindBy(xpath = "(//p[contains(@id, 'textDescription')])[2]")
	protected WebElement nomeTransferencia2;
	
	@FindBy(xpath = "(//p[contains(@id, 'textTransferValue')])[2]")
	protected WebElement valorTransferencia2;
}

