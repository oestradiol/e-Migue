
import { relative } from 'path';
import styles from './page.module.css';
import Link from "next/link"

export default function Selection_page()  {
  return (
    
    <div className={styles.element}>
      <div className={styles.div}>  
            <div>
              <img
                className={styles.icone_anonimo}
                alt="Icon annimo"
                src="https://generation-sessions.s3.amazonaws.com/947dd278e122fe6a115d674876e525b1/img/icon-an-nimo@2x.png"
              />
            </div>
          
        <div className={styles.logo}>
          <img
            className={styles.e_migue}
            alt="e-migué"
            src="/logo_e-migue_branco.png"
          />
          <h1 className={styles.text_wrapper}>e-migué</h1>
        </div>  
          
        <div>
        <div className={styles.overlap}>
          
          <input type="text" className= {styles.rectangle_4} placeholder="Pesquisar disciplinas ou professores"  name = "Resultado_pesquisa"/>
          <img
            className={styles.icon_lupa}
            alt="Icon lupa"
            src="/icon_lupa.png"
            /> 
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
          <div>
            
            <img
                  className={styles.img}
                  alt="Entrar como Professor"
                  src="/botao_professor.png"
            />
            
          </div>

        </div>
      </div>
    </div>
  );
};


