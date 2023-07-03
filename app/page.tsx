import styles from './page.module.css';
import Link from "next/link"
import Logo from "./components/logo"

export default function Home() {
  return (
    <div className={styles.elemento_pagina_inicial}>
      <div className={styles.div}>
        <Logo></Logo>
        <div className={styles.botoes_login}>
          <div className={styles.anonimo}>
            <Link href ='/user' className={styles.login_button}>
            <img
                className={styles.img}
                alt="Entrar como Anônimo"
                src="/botao_anonimo.png"
                />
            </Link>
          </div>
          <div className={styles.estudante}>
            <Link href ='/user' className={styles.login_button}>
            <img
                  className={styles.img}
                  alt="Entrar como Estudante"
                  src="/botao_estudante.png"
            />
            </Link>
          </div>
          <div className={styles.professor}>
            <Link href ='/user-professor' className={styles.login_button}>
            <img
                  className={styles.img}
                  alt="Entrar como Professor"
                  src="/botao_professor.png"
            />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

