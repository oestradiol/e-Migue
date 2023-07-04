import { getTurmaById } from "../services/get-turma-by-id";

export default async function TurmaPage({
    params,
}: {
    params: { turmaId: Number };
}) {
    const turma: any = await getTurmaById(params.turmaId);
    const avaliacoes = turma.avaliacoes;
    console.log(avaliacoes);
    return <> 
        <div>
        <h2> {turma.professor_nome}  </h2>
        <h2> {turma.disciplina_nome}  </h2>
        <h2> estrelinhas  </h2>
        </div>

        <div>
        <ul>
            {avaliacoes.map((avaliacao: any) => (
                <li key={avaliacao.id}>
                <div>
                <h2> Pontuacao: {avaliacao.pontuacao} </h2>
                <h2> Nome: {avaliacao.user_nome} </h2>
                <p>
                Comentario:  {avaliacao.comentario}
                </p>
                </div>
                </li>
            ))}
        </ul>
        </div>
    </>
}
