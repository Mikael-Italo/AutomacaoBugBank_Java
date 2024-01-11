package stepsDefinitions;

import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.LoginPage;
import pageObjects.TelaInicialPage;

import static utils.Utils.*;

public class TelaInicialSteps {

	@Dado("que um usuário esteja na tela principal do sistema")
	public void queUmUsuárioEstejaNaTelaPrincipalDoSistema() throws Exception{
		Thread.sleep(1000);
		na(LoginPage.class).contextoLogado();
	}

	@Quando("o usuário clicar no ícone {string}")
	public void oUsuárioClicarNoÍcone(String string) throws Exception{
		Thread.sleep(1000);
		na(TelaInicialPage.class).selecionaIcone(string);
	}

	@Entao("deve-se exibir a tela de tranferências")
	public void deveSeExibirATelaDeTranferências() throws Exception{
		Thread.sleep(1000);
		na(TelaInicialPage.class).validaTelaTransferencia();
	}

	@Entao("deve-se exibir uma mensagem que a funcionalidade está em desenvolvimento")
	public void deveSeExibirUmaMensagemQueAFuncionalidadeEstáEmDesenvolvimento() throws Exception{
		Thread.sleep(1000);
		na(TelaInicialPage.class).validaModalEmDesenvolvimento();
	}

	@Entao("deve-se exibir a tela de extrato")
	public void deveSeExibirATelaDeExtrato() throws Exception{
		Thread.sleep(1000);
		na(TelaInicialPage.class).validaTelaExtrato();
	}
}
