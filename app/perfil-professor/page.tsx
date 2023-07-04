
import { FunctionComponent } from "react";
import styles from "./page.module.css";

export const ElementPerfilProfessor = () => {
  return (
    <div className="element-perfil-professor">
      <div className="div">
        <div className="feedbacks">
          <div className="feedbacks-2">
            <img className="vector" alt="Vector" src="vector.svg" />
            <div className="text-wrapper">Feedbacks:</div>
          </div>
          <div className="bloco-disciplinas">
            <div className="overlap-group">
              <div className="icon-aluno-azul" />
              <div className="text-wrapper-2">Técnicas de Programação 1</div>
            </div>
          </div>
          <div className="bloco-disciplinas">
            <div className="overlap-group">
              <div className="icon-aluno-azul" />
              <div className="text-wrapper-3">Técnicas de Programação 2</div>
            </div>
          </div>
        </div>
        <div className="perfil-professor">
          <img className="icon-professor" alt="Icon professor" src="icon-professor.png" />
          <h1 className="h-1">João Cleiton Patrick</h1>
        </div>
        <div className="pesquisa">
          <div className="overlap">
            <div className="text-wrapper-4">Pesquisar disciplinas ou professores</div>
            <img className="combined-shape" alt="Combined shape" src="combined-shape.svg" />
          </div>
        </div>
        <div className="barra-esquerda">
          <div className="overlap-2">
            <div className="sair">
              <div className="text-wrapper-5">Sair</div>
              <img className="icon-sair" alt="Icon sair" src="icon-sair.svg" />
            </div>
            <div className="professores">
              <div className="text-wrapper-6">Professores</div>
              <img className="icon-professores" alt="Icon professores" src="icon-professores.svg" />
            </div>
            <div className="disciplinas">
              <div className="text-wrapper-7">Disciplinas</div>
              <img className="icon-disciplinas" alt="Icon disciplinas" src="icon-disciplinas.svg" />
            </div>
            <div className="pgina-inicial">
              <div className="text-wrapper-8">Pagina Inicial</div>
              <img className="home" alt="Home" src="home.svg" />
            </div>
            <img className="logo-e-migu-branco" alt="Logo e migu branco" src="logo-e-migu-branco.png" />
          </div>
          <img className="icon-voltar" alt="Icon voltar" src="icon-voltar.svg" />
        </div>
        <div className="perfil">
          <div className="overlap-group-wrapper">
            <div className="overlap-group-2">
              <div className="rectangle" />
              <img className="icon-aluno" alt="Icon aluno" src="icon-aluno.png" />
            </div>
          </div>
          <div className="text-wrapper-9">Cleiton Jorge</div>
          <img className="icon-editar-perfil" alt="Icon editar perfil" src="icon-editar-perfil.svg" />
        </div>
      </div>
    </div>
  );
};


