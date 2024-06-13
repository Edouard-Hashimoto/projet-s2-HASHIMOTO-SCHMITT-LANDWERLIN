import PocketBase from 'pocketbase'

const pb = new PocketBase('http://localhost:8090') // Remplacez par l'URL de votre PocketBase

export const addTuto = async (nom: string, img: File, description: string) => {
  const formData = new FormData()
  formData.append('nom', nom)
  formData.append('img', img)
  formData.append('description', description)

  try {
    const record = await pb.collection('Tuto').create(formData)
    return record
  } catch (error) {
    console.error("Erreur lors de l'ajout du tutoriel:", error)
    throw error
  }
}
