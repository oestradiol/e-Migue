import { getProfessorById } from "../services/get-professor-by-id";
import styles from './page.module.css';
import Link from "next/link"
export  default async function ProfessorPage({
    params,
}: {
    params:{professorId: number};
}) {
    const professor: any = await getProfessorById(params.professorId);
    return<>
        <div className={styles.element}>
            <div className={styles.div}>
                <div className={styles.tituloContainer}>
                    <h2 className={styles.professorTitulo}>{professor.nome}</h2>
                </div>
                <div className={styles.avaliacoesContainer}>
                    <ul>
                        {professor.turmas.map((turma: any) => (
                            <li key={turma[0]} className={styles.avaliacaoItem}>
                            <Link href={`/turma/${professor.id}`}>  
                            <div className={styles.teacher_info}>
                                <h2> {turma[1]} </h2>
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
