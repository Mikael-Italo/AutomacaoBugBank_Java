package stepsDefinitions;

import static utils.Utils.na;

import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.TransferenciasSemSucessoPage;

public class TransferenciasSemSucessoSteps {
	
	@Dado("que um usuário esteja logado")
	public void queUmUsuárioEstejaLogado() throws Exception {
		Thread.sleep(300);
		na(TransferenciasSemSucessoPage.class).cadastrarLogarTransferencias();
		na(TransferenciasSemSucessoPage.class).getConta();
	}


	@Quando("informe o valor da transferência de {string}")
	public void informeOValorDaTransferênciaDe(String string) throws Exception {
		Thread.sleep(300);
		na(TransferenciasSemSucessoPage.class).informaValorTransferencia(string);
	}

	@Quando("informe a descrição como {string}")
	public void informeADescriçãoComo(String string) throws Exception {
		Thread.sleep(300);
		na(TransferenciasSemSucessoPage.class).informarDescricao(string);
	}

	@Quando("clicar em transferir agora")
	public void clicarEmTransferirAgora() throws Exception {
		Thread.sleep(300);
		na(TransferenciasSemSucessoPage.class).clicarTransferirAgora();
	}

	@Quando("fechar o aviso de transferência realizada com sucesso")
	public void fecharOAvisoDeTransferênciaRealizadaComSucesso() throws Exception {
		Thread.sleep(300);
		na(TransferenciasSemSucessoPage.class).fecharAviso();
	}

	@Quando("voltar para tela inicial")
	public void voltarParaTelaInicial() throws Exception {
		Thread.sleep(300);
		na(TransferenciasSemSucessoPage.class).voltarTelaInicial();
	}

	@Entao("deve-se exibir na tela principal o saldo em conta de oitocentos reais")
	public void deveSeExibirnaTelaPrincipalOSaldoEmContaDeOitocentosReais() throws Exception {
		Thread.sleep(300);
		na(TransferenciasSemSucessoPage.class).validaSaldoTelaInicial();
	}
	
	@Quando("informar a conta como {string}")
	public void informarAContaComo(String string) throws Exception {
		Thread.sleep(300);
		na(TransferenciasSemSucessoPage.class).informarConta(string);
	}

	@Quando("informar o digito como {string}")
	public void informarODigitoComo(String string) throws Exception {
		Thread.sleep(300);
		na(TransferenciasSemSucessoPage.class).informarDigito(string);
	}

	@Entao("deve-se exibir uma mensagem informando que a conta é inválida ou inexistente")
	public void deveSeExibirUmaMensagemInformandoQueAContaÉInválidaOuInexistente() throws Exception {
		Thread.sleep(300);
		na(TransferenciasSemSucessoPage.class).validaMsgInvalida();
	}
	
	@Entao("deve-se exibir uma mensagem informando que não possue saldo suficiente para transferência")
	public void deveSeExibirUmaMensagemInformandoQueNãoPossueSaldoSuficienteParaTransferência() throws Exception{
	    Thread.sleep(300);
	    na(TransferenciasSemSucessoPage.class).validaMsgSaldoInsuficiente();
	}
	
	@Entao("deve-se exibir as transações da conta e o saldo atual")
	public void deveSeExibirAsTransaçõesDaContaEOSaldoAtual() throws Exception{
		Thread.sleep(300);
	    na(TransferenciasSemSucessoPage.class).validaExtrato();
	}
	
	@Entao("deve-se exibir uma mensagem bugada exigindo o valor da transferência")
	public void deveSeExibirUmaMensagemBugadaExigindoOValorDaTransferência() throws Exception{
		Thread.sleep(300);
	    na(TransferenciasSemSucessoPage.class).validaMsgValorTransferencia();
	}
	
	@Quando("informe a mesma conta e digito da sua titularidade")
	public void informeAMesmaContaEDigitoDaSuaTitularidade() throws Exception{
		Thread.sleep(300);
		na(TransferenciasSemSucessoPage.class).inserirMesmaConta();
	}
	
	@Entao("deve-se exibir uma mensagem que não pode transferir para a mesma conta")
	public void deveSeExibirUmaMensagemQueNãoPodeTransferirParaAMesmaConta() throws Exception {
	    Thread.sleep(1000);
	    na(TransferenciasSemSucessoPage.class).validaMesmaConta();
	}
}
