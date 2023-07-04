import { getDisciplinaById } from "../services/get-disciplina-by-id";

export default async function DisciplinaPage({
    params,
}: {
    params: { disciplinaId: Number };
}) {
    const disciplina: any = await getDisciplinaById(params.disciplinaId);
    console.log(disciplina);
    const professores = disciplina.professores
    return <> 
        <div>
        <h2> {disciplina.nome}  </h2>
        </div>

        <div>
        <ul>
            {professores.map((professor: any) => (
                <li key={professor.id}>
                <div>
                <h2> Pontuacao: {professor.sum_avaliacoes/(professor.qtd_avaliacoes| 1)} </h2>
                <h2> Nome: {professor.nome} </h2>
                </div>
                </li>
            ))}
        </ul>
        </div>
    </>
}
