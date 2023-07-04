export async function getDisciplinaById (disciplinaId: any) {
    const response = await fetch(`https://e-migue-git-develop-oestradiol.vercel.app/api/disciplina/${disciplinaId}`);
    const disciplina = await response.json();

    return disciplina;
} 
