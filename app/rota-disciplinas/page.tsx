import { relative } from 'path';
import styles from './page.module.css';
import Link from "next/link"
import React from 'react';
import { getAllDisciplinas } from './services/get-all-disciplinas';

interface MyComponentProps {
  disciplinas: any[];
}


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


const DisciplinaList: React.FC<MyComponentProps> = ({ disciplinas }) => {
  return (
    <div>
      {disciplinas.map((disciplina) => (
        <div className={styles.disciplina_card} key={disciplina.id}>
          <Link href={`/disciplina/${disciplina.id}`}>
          <div className={styles.disciplina_info}>
            <h3>{disciplina.nome}</h3>
          </div></Link>
        </div>
      ))}
    </div>
  );
};

export default async function Disciplinas() {
    const disciplinas = await getAllDisciplinas()
  return (
    <div className={styles.element}>
      <div className={styles.div}>
        <div className={styles.a}>
          <Link href="/rota-disciplinas" className={`${styles.buttonsid} ${styles.selected}`} id="disciplinaButton">
            Disciplina
          </Link>
          <Link href="/rota-professores" className={styles.buttonsid} id="professoresButton">
            Professores
          </Link>
        </div>
        <div className={styles.overlap}>
          <input
            type="text"
            className={styles.rectangle_4}
            placeholder="Pesquisar disciplinas ou professores"
            name="Resultado_pesquisa"
          />
          <img className={styles.icon_lupa} alt="Icon lupa" src="/icon_lupa.png" />
        </div>
        <div className={styles.lista_disciplinas}>
          <DisciplinaList disciplinas={disciplinas} />
          
        </div>
      </div>
    </div>
  );
}
