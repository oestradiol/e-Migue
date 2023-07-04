export async function getAllProfessores () {
    const response = await fetch(`https://e-migue-git-develop-oestradiol.vercel.app/api/professores`);
    const professores = await response.json();

    return professores;
} 
