import { getTurmaById } from "../services/get-turma-by-id";
import styles from './page.module.css';
import Link from "next/link"

export default async function TurmaPage({
    params,
}: {
    params: { turmaId: Number };
}) {
    const turma: any = await getTurmaById(params.turmaId);
    const avaliacoes = turma.avaliacoes;
    console.log(avaliacoes);
    return (
        <div className={styles.element}>
            <div className={styles.div}>
                <div className={styles.tituloContainer}>
                    <h2 className={styles.professorTitulo}> {turma.professor_nome} </h2>
                    <h2 className={styles.disciplinaTitulo}> {turma.disciplina_nome} </h2>
                </div>

                <div className={styles.avaliacoesContainer}>
                    <ul className={styles.avaliacoesList}>
                        {avaliacoes.map((avaliacao: any) => (
                            <li key={avaliacao.id} className={styles.avaliacaoItem}>
                                <div className={styles.teacher_info}>
                                    <h2> {avaliacao.user_nome} </h2>
                                    <div className={styles.teacher_rating}>
                                        {renderStars(avaliacao.pontuacao)}
                                    </div>
                                </div>
                                <p>
                                {avaliacao.comentario}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

const renderStars = (rating) => {
    const filledStars = '★'.repeat(rating);
    const emptyStars = '☆'.repeat(5 - rating);
    return (
        <div>
            {filledStars}
            {emptyStars}
        </div>
    );
};
