import { FunctionComponent } from "react";
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

export default PaginaInicial;
