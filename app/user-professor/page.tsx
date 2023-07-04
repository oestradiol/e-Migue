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
