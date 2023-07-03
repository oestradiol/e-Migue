
import { relative } from 'path';
import styles from './page.module.css';
import Link from "next/link"

export default function Disciplinas()  {
  return (
    
    <div className={styles.element}>
      <div className={styles.div}>  
            
      <div className={styles.overlap}>
          
          <input type="text" className= {styles.rectangle_4} placeholder="Pesquisar disciplinas ou professores"  name = "Resultado_pesquisa"/>
          <img
            className={styles.icon_lupa}
            alt="Icon lupa"
            src="/icon_lupa.png"
            /> 
        </div>
        
      </div>
    </div>
  );
};


