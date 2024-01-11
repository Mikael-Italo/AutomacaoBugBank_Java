package pageObjects;

import static org.junit.Assert.assertEquals;
import static utils.Utils.na;

public class TransferenciasSemSucessoPage extends BasePage{
	private static String conta, digito;

	
	public void informaValorTransferencia(String valor) {
		campoValorTransferencia.clear();
		campoValorTransferencia.sendKeys(valor);
	}
	
	public void informarDescricao(String desc) {
		campoDescTransferencia.clear();
		campoDescTransferencia.sendKeys(desc);
	}
	
	public void clicarTransferirAgora() throws Exception{
		btnTransferirAgora.click();
		Thread.sleep(500);
	}
	
	public void fecharAviso() throws Exception {
		Thread.sleep(300);
		btnFecharMsgConfirmaRegistro.click();
	}
	
	public void voltarTelaInicial() {
		btnVoltar.click();
	}
	
	public void clicarBtnSair() {
		btnSairTelaPrincipal.click();	
	}
	
	public void informarConta(String string) {
		campoNunmeroDaConta.clear();
		campoNunmeroDaConta.sendKeys(string);
	}

	public void informarDigito(String string) {
		campoDigitoDaConta.clear();
		campoDigitoDaConta.sendKeys(string);
	}
	
	public void inserirMesmaConta() throws Exception {
		informarConta(conta);
		informarDigito(digito);
	}
	
	public void cadastrarLogarTransferencias() throws Exception {
		na(RegistroPage.class).contextoCriarContaLogin("Mikael");
		campoEmailInicial.sendKeys("mikael@tester.com");
		campoSenhaInicial.sendKeys("Passed@200");
		btnAcessar.click();
	}
	
	public void getConta() {
		String[] txt = (numeroContaTelaInicialSpan.getText()).split("-");
		conta = txt[0];
		digito = txt[1];
	}
	
	//Validações
	
	public void validaSaldoTelaInicial() {
		System.out.println(saldoNaTelaPrincipalSpan.getText());
		assertEquals("R$ 800,00", saldoNaTelaPrincipalSpan.getText());
	}

	public void validaMsgInvalida() {
		assertEquals("Conta inválida ou inexistente", avisoNomeVazio.getText());
	}

	public void validaMsgSaldoInsuficiente() {
		assertEquals("Você não tem saldo suficiente para essa transação", avisoNomeVazio.getText());
	}

	public void validaExtrato() {
		assertEquals("R$ 350,00", saldoContaExtrato.getText());
		assertEquals("Veremos no extrato", nomeTransferencia2.getText());
		assertEquals("-R$ 650,00", valorTransferencia2.getText());
	}

	public void validaMsgValorTransferencia() {
		assertEquals("transferValue must be a `number` type, but the final value was: `NaN` (cast from the value `\"\"`).",
				avisoCampoObrigatorio.getText());
	}

	public void validaMesmaConta() {
		assertEquals("Nao pode transferir pra mesmo conta", avisoNomeVazio.getText());
	}

	

	
	
}
