package stepsDefinitions;

import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.TransferenciasComSucessoPage;

import static utils.Utils.*;

public class TransferenciasComSucessoSteps {

	@Dado("que dois usuários sejam cadastrados")
	public void queDoisUsuáriosSejamCadastrados() throws Exception {
		na(TransferenciasComSucessoPage.class).cadastrarUsuario("p@tes.com", "Primeiro", "12345");
		Thread.sleep(500);
		na(TransferenciasComSucessoPage.class).getPrimeiraAcc();
		Thread.sleep(1000);
		na(TransferenciasComSucessoPage.class).fecharMsg();
		
		Thread.sleep(500);
		na(TransferenciasComSucessoPage.class).cadastrarUsuario("s@teste.com", "Segundo", "54321");
		Thread.sleep(500);
		na(TransferenciasComSucessoPage.class).getSegundaAcc();
		Thread.sleep(1000);
		na(TransferenciasComSucessoPage.class).fecharMsg();
	}
	
	@Quando("o primeiro usuário entrar em sua conta")
	public void oPrimeiroUsuárioEntrarEmSuaConta() throws Exception{
		na(TransferenciasComSucessoPage.class).primeiroLogar();
	}

	@Quando("informar os dados da segunda conta")
	public void informarOsDadosDaSegundaConta() throws Exception{
		na(TransferenciasComSucessoPage.class).informarDadosSegunda();
	}
	
	@Quando("entrar na segunda conta")
	public void entrarNaSegundaConta() throws Exception{
		Thread.sleep(1000);
		na(TransferenciasComSucessoPage.class).segundoLogar();
	}

	@Entao("deve-se exibir o saldo da conta e a transferência recebida no extrato")
	public void deveSeExibirOSaldoDaContaEATransferênciaRecebidaNoExtrato() throws Exception{
	    Thread.sleep(1500);
	    na(TransferenciasComSucessoPage.class).validaTransferenciaEntreExtrato();
	}

}
