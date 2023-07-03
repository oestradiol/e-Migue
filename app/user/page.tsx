
import { relative } from 'path';
import styles from './page.module.css';

export default function Selection_page()  {
  return (
    
    <div className={styles.element}>
      <div className={styles.div}>
        <div className={styles.perfil}>
          <div className={styles.overlap_group_wrapper}>
            <div className={styles.overlap_group}>
              
              <img
                className={styles.icone_anonimo}
                alt="Icon annimo"
                src="https://generation-sessions.s3.amazonaws.com/947dd278e122fe6a115d674876e525b1/img/icon-an-nimo@2x.png"
              />
            </div>
          </div>
          <div className={styles.text_wrapper}>Anônimo</div>
          <img
            className={styles.icon_editar_perfil}
            alt="Icon editar perfil"
            src="https://generation-sessions.s3.amazonaws.com/947dd278e122fe6a115d674876e525b1/img/icon-editar-perfil.svg"
          />
        </div>
        <div className={styles.botes}>
          <div className={styles.div_wrapper }>
            <div className={styles.overlap_group_2}>
              <div className={styles.text_wrapper_2}>Disciplinas</div>
              <img
                className={styles.icon_disciplinas}
                alt="Icon disciplinas"
                src="https://generation-sessions.s3.amazonaws.com/947dd278e122fe6a115d674876e525b1/img/icon-disciplinas-1.svg"
              />
            </div>
          </div>
          <div className={styles.div_wrapper}>
            <div className={styles.overlap_group_2}>
              <div className={styles.text_wrapper_3}>Professores</div>
              <img
                className={styles.icon_professores}
                alt="Icon professores"
                src="https://generation-sessions.s3.amazonaws.com/947dd278e122fe6a115d674876e525b1/img/icon-professores-1.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.pesquisa}>
          <div className={styles.overlap}>
          
            <input type="text" className= {styles.rectangle_4} placeholder="Pesquisar disciplinas ou professores"  name = "Resultado_pesquisa"/>
           <img
              className={styles.icon_lupa}
              alt="Icon lupa"
              src="https://generation-sessions.s3.amazonaws.com/947dd278e122fe6a115d674876e525b1/img/icon-lupa.svg"
          /> 


          
          </div>
        </div>
        <div className={styles.e_migu}>
          <div className={styles.overlap_2}>
            <h1 className={styles.h_1}>e-migué</h1>
            <img
              className={styles.logo_e_migu_branco}
              alt="Logo e migu branco"
              src="https://generation-sessions.s3.amazonaws.com/947dd278e122fe6a115d674876e525b1/img/logo-e-migu--branco-1@2x.png"
            />
          </div>
        </div>
        


        
      </div>
    </div>
  );
};


