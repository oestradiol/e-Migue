import { relative } from 'path';
import styles from './page.module.css';
import Link from "next/link"
import { getAllProfessores } from './services/get-all-professores';
import React from 'react';

interface MyComponentProps {
  teachers: any[];
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

export default async function Professores() {
    const teachers = await getAllProfessores()
  return (
    <div className={styles.element}>
      <div className={styles.div}>
      <div className = {styles.a}>   
      <Link href="/rota-disciplinas" className={styles.buttonsid} id="Disciplina">Disciplina</Link>
      <Link href="/rota-professores" className={styles.buttonsid}  id="Professores">Professores</Link>
      </div>  

        <div className={styles.overlap}>
          <input type="text" className={styles.rectangle_4} placeholder="Pesquisar disciplinas ou professores" name="Resultado_pesquisa" />
          <img
            className={styles.icon_lupa}
            alt="Icon lupa"
            src="/icon_lupa.png"
          />
          
          

        </div>
          <div className={styles.lista_professores}>    
              <TeacherList teachers={teachers} />
          </div>
        
      </div>
    </div>
  );
}

const TeacherList: React.FC<MyComponentProps> = ({ teachers }) => {
  return (
    <div>
      {teachers.map((teacher: any) => (
        
        <div className={styles.teacher_card} key={teacher.id}>
          <Link href={`/perfil-professor/${teacher.id}`}>
          <div className={styles.teacher_info}>
            <h3>{teacher.nome}</h3>
          </div>
          </Link>
          <div className={styles.teacher_rating}>
            {renderStars(teacher.sum_avaliacoes/teacher.qtd_avaliacoes)}
          </div>
        </div>
      ))}
    </div>
  );
};

const renderStars = (rating: any) => {
  const filledStars = '★'.repeat(rating);
  const emptyStars = '☆'.repeat(5 - rating);
  return (
    <div>
      {filledStars}
      {emptyStars}
    </div>
  );
};
