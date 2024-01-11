package stepsDefinitions;

import static utils.Utils.na;

import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.RequisitosPage;

public class RequisitosSteps {
	
	//Repositorio GitHub
	
	@Dado("que o usuário esteja na página de requisitos")
	public void queOUsuárioEstejaNaPáginaDeRequisitos() throws Exception{
	    Thread.sleep(1000);
	    na(RequisitosPage.class).dadoRequisitos();
	}

	@Quando("o usuário clicar na opção acessar o link do respositório")
	public void oUsuárioClicarNaOpçãoAcessarOLinkDoRespositório() throws Exception{
		Thread.sleep(1000);
		na(RequisitosPage.class).acessarRepositorio();
	}

	@Entao("deve-se exibir o repositório do prijeto no GitHub")
	public void deveSeExibirORepositórioDoPrijetoNoGitHub() throws Exception{
		Thread.sleep(1000);
		na(RequisitosPage.class).validaGitHub();
	}
	
	//Acessando as guias
	
	@Quando("o usuário clicar na opção requisitos de {string}")
	public void oUsuárioClicarNaOpçãoRequisitosDe(String string) throws Exception{
		Thread.sleep(1000);
		na(RequisitosPage.class).clicarOpcaoRequisitos(string);
	}

	//Validando guias
	
	@Entao("deve-se exibir os requisitos do {string}")
	public void deveSeExibirOsRequisitosDo(String string) throws Exception {
		Thread.sleep(1000);
		na(RequisitosPage.class).validaOpcaoRequisitos(string);
	}

}
