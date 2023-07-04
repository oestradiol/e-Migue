import { getDisciplinaById } from "../services/get-disciplina-by-id";
import styles from './page.module.css';
import Link from "next/link"
export default async function DisciplinaPage({
    params,
}: {
    params: { disciplinaId: any };
}) {
    const disciplina: any = await getDisciplinaById(params.disciplinaId);
    console.log(disciplina);
    const professores = disciplina.professores
    return <> 
        <div className={styles.element}>
            <div className={styles.div}>
                
                <div className={styles.tituloContainer}>
                    <h2 className={styles.professorTitulo}> {disciplina.nome}  </h2>
                </div>

                <div className={styles.avaliacoesContainer}>
                    <ul>
                        {professores.map((professor: any) => (
                            <li key={professor.id} className={styles.avaliacaoItem}>
                             <Link href={`/turma/${professor.id}`}>  
                            <div className={styles.teacher_info}>
                                
                                <h2>{professor.nome} </h2>
                                <div className={styles.teacher_rating}>
                                    {renderStars(professor.sum_avaliacoes/(professor.qtd_avaliacoes| 1))}
                                </div>
                            </div>
                            </Link> 
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </>
}


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
