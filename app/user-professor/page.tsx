import { FunctionComponent } from "react";
import styles from "./page.module.css";

const PaginaSouProfessor: FunctionComponent = () => {
  return (
    <div className={styles.element_sou_professor}>
      <div className={styles.div}>
        <div className={styles.botoes_sou_professor}>
          <div className={styles.perfil}>
            <div className={styles.overlap_group_wrapper}>
              <div className={styles.overlap_group}>
                <div className={styles.rectangle} />
                <img
                  className={styles.icon_professor}
                  alt="Icon professor"
                  src="icon_professor.png"
                />
              </div>
            </div>
            <div className={styles.text_wrapper}>Dom Vinicius</div>
            <img
              className={styles.icon_editar_perfil}
              alt="Icon editar perfil"
              src="icon_editar_perfil.svg"
            />
          </div>
          <div className={styles.botes_sou_professor}>
            <div className={styles.nota_geral}>
              <div className={styles.text_wrapper_2}>Nota geral: 4.0</div>
              <div className={styles.estrelas}>
                <img
                  className={styles.icon_estrela}
                  alt="Icon estrela"
                  src="icon_estrela.svg"
                />
                <img
                  className={styles.icon_estrela_1}
                  alt="Icon estrela"
                  src="icon_estrela.svg"
                />
                <img
                  className={styles.icon_estrela_2}
                  alt="Icon estrela"
                  src="icon_estrela.svg"
                />
                <img
                  className={styles.icon_estrela_3}
                  alt="Icon estrela"
                  src="icon_estrela.svg"
                />
                <img
                  className={styles.icon_estrela_4}
                  alt="Icon estrela"
                  src="icon_estrela (1).svg"
                />
              </div>
            </div>
            <div className={styles.div_wrapper}>
              <a href="app/PaginaPlanoEnsino.tsx" className={styles.sou_professor_buton}>
                <div className={styles.overlap_group_2}>
                  <div className={styles.icon_aluno_azul} />
                  <div className={styles.text_wrapper_3}>
                    Editar plano de ensino
                  </div>
                </div>
              </a>
            </div>
            <div className={styles.div_wrapper}>
              <a href="app/PaginaFeedbackAlunos.tsx" className={styles.sou_professor_buton}>
                <div className={styles.overlap_group_2}>
                  <div className={styles.text_wrapper_4}>
                    Feedbacks dos alunos
                  </div>
                </div>
              </a>
            </div>
            <div className={styles.div_wrapper}>
              <a href="app/PaginaForumDuvidas.tsx" className={styles.sou_professor_buton}>
                <div className={styles.overlap_group_2}>
                  <div className={styles.text_wrapper_5}>
                    Fórum de dúvidas
                  </div>
                </div>
              </a>
            </div>
            <div className={styles.text_wrapper_6}>Ver mais</div>
          </div>
          <a href="app/PaginaInicial.tsx" className={styles.sou_professor_buton}>
            <img
              className={styles.icon_voltar}
              alt="Icon voltar"
              src="icon_voltar.svg"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PaginaSouProfessor;


/*import { FunctionComponent } from "react";
import styles from './page.module.css';

const PaginaInicial: FunctionComponent = () => {
  return (
    <div className={styles.elemento_pagina_inicial}>
      <div className={styles.div}>
        <div className={styles.botoes_login}>
          <div className={styles.anonimo}>
            <a href ='app/PaginaAnonima.tsx' className={styles.login_button}>
            <img
                className={styles.img}
                alt="Sou estudante"
                src="https://generation-sessions.s3.amazonaws.com/cc110aa53dfcee1c13265cea2eb53bbb/img/an-nimo.png"
                />
            </a>
          </div>
          <a href="/rota-estudante" className={styles.login_button}>
            <img
                  className={styles.sou_estudante}
                  alt="Rectangle"
                  src="https://generation-sessions.s3.amazonaws.com/b755119efba693a9a63adf890d2ebeee/img/sou-estudante@2x.png"
            />
          </a>
          <a href="/rota-professor" className={styles.login_button}>
            <div className={styles.sou_estudante}>
              <div className={styles.overlap_group}>
                <img
                  className={styles.rectangle}
                  alt="Rectangle"
                  src="https://generation-sessions.s3.amazonaws.com/b755119efba693a9a63adf890d2ebeee/img/rectangle-5-1.svg"
                />
                <img
                  className={styles.sou_professor}
                  alt="Sou professor"
                  src="https://generation-sessions.s3.amazonaws.com/b755119efba693a9a63adf890d2ebeee/img/sou-professor.svg"
                />
                <img
                  className={styles.icon_professor}
                  alt="Ícone professor"
                  src="https://generation-sessions.s3.amazonaws.com/b755119efba693a9a63adf890d2ebeee/img/icon-professor@2x.png"
                />
              </div>
            </div>
          </a>
        </div>
        <div className={styles.e_migue}>
          <div className={styles.overlap}>
            <h1 className={styles.text_wrapper}>e-migué</h1>
            <img
              className={styles.logo_e_migue_branco}
              alt="Logo e miguê branco"
              src="https://generation-sessions.s3.amazonaws.com/b755119efba693a9a63adf890d2ebeee/img/logo-e-migu--branco@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginaInicial;*/
