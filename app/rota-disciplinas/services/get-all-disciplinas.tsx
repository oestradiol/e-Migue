export async function getAllDisciplinas () {
    const response = await fetch(`https://e-migue-git-develop-oestradiol.vercel.app/api/disciplinas`);
    const disciplinas = await response.json();

    return disciplinas;
} 
