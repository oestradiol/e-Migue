export async function getTurmaById (turmaId: any) {
    const response = await fetch(`https://e-migue-git-develop-oestradiol.vercel.app/api/turma/${turmaId}`);
    const turma = await response.json();

    return turma;
} 
