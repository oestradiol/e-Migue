import { getProfessorById } from "../services/get-professor-by-id";

export  default async function ProfessorPage({
    params,
}: {
    params:{professorId: number};
}) {
    const professor: any = await getProfessorById(params.professorId);
    return<>
        <h2>{professor.nome}</h2>
        <ul>
            {professor.turmas.map((turma: any) => (
                <li key={turma.id}>
                <div>
                <h2> Nome: {turma.nome} </h2>
                </div>
                </li>
            ))}
        </ul>
        <h2>{professor.qtd_avaliacoes}</h2>
        <h2>{professor.sum_avaliacoes}</h2>
    </>
}