
import { relative } from 'path';
import styles from './page.module.css';
import Link from "next/link"


function selectButton(selectedButton: 'disciplina' | 'professores') {
  const disciplinaButton = document.getElementById("disciplinaButton");
  const professoresButton = document.getElementById("professoresButton");

  if (selectedButton === "disciplina") {
    disciplinaButton?.classList.add("selected");
    professoresButton?.classList.remove("selected");
  } else if (selectedButton === "professores") {
    professoresButton?.classList.add("selected");
    disciplinaButton?.classList.remove("selected");
  }
}


export default function Disciplinas()  {
  return (
    
    <div className={styles.element}>
      <div className={styles.div}>  

      
      <div className = {styles.a}>   
      <Link href="/rota-disciplinas" className={styles.buttonsid} id="Disciplina">Disciplina</Link>
      <Link href="/rota-professores" className={styles.buttonsid}  id="Professores">Professores</Link>
      </div>  


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


