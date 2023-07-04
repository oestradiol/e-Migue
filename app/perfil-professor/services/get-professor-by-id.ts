export async function getProfessorById(professorId: any) {
    const response = await fetch(`https://e-migue-git-develop-oestradiol.vercel.app/api/professor/${professorId}`);
    const user = await response.json();

    return user 
    
}