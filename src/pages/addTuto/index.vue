<script setup lang="ts">
import HeaderPage from '@/components/Header.vue'
import FooterPage from '@/components/Footer.vue'
import { ref, onMounted } from 'vue'

const name = ref('')
const description = ref('')
const file = ref(null)
const tutorials = ref([])

const onFileChange = (event: Event) => {
  file.value = (event.target as HTMLInputElement).files[0]
}

const addTutorial = async () => {
  try {
    const formData = new FormData()
    formData.append('name', name.value)
    formData.append('description', description.value)
    if (file.value) {
      formData.append('img', file.value)
    }

    const response = await fetch('https://lazydocs.edouardhashimoto.fr:443/api/collections/tuto/records', {
      method: 'POST',
      body: formData
    })

    if (!response.ok) {
      throw new Error("Erreur lors de l'ajout du tutoriel")
    }

    name.value = ''
    description.value = ''
    file.value = null

    // Recharger la liste des tutoriels après l'ajout
    await fetchTutorials()
  } catch (error) {
    console.error("Erreur lors de l'ajout du tutoriel:", error)
  }
}

const fetchTutorials = async () => {
  try {
    const response = await fetch('https://lazydocs.edouardhashimoto.fr:443/api/collections/tuto/records')

    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des tutoriels')
    }

    const data = await response.json()
    tutorials.value = data.items
  } catch (error) {
    console.error('Erreur lors de la récupération des tutoriels:', error)
  }
}

const getImageUrl = (fileName: string) => {
  const url = `https://lazydocs.edouardhashimoto.fr:443/api/files/tuto/${fileName}`
  console.log('Generated Image URL:', url)
  return url
}

onMounted(fetchTutorials)
</script>

<template>
  <HeaderPage />
  <div
    class="h-96  my-80 flex items-center justify-center bg-gradient from-slate-500 via-purple-500 to-purple-300"
  >
    <div class="relative">
      <div
        class="absolute -top-2 -left-2 -right-2 -bottom-2 rounded-lg bg-gradient-to-r from-slate-500 via-purple-500 to-purple-300 shadow-lg animate-pulse"
      ></div>
      <div
        id="form-container"
        class="bg-white p-16 rounded-lg shadow-2xl w-80 lg:w-[900px] relative z-10 transform transition duration-500 ease-in-out"
      >
        <h2 id="form-title" class="text-center text-3xl font-bold mb-10 text-gray-800">
          Créer un tuto
        </h2>
        <form @submit.prevent="addTutorial" class="space-y-5">
          <div>
            <label for="name">Nom:</label>
            <input
              class="w-full h-12 border border-gray-800 px-3 rounded-lg"
              type="text"
              v-model="name"
              id="name"
              required
            />
          </div>
          <div>
            <label for="description">Description:</label>
            <textarea
              class="w-full h-12 border border-gray-800 px-3 rounded-lg"
              v-model="description"
              id="description"
              required
            ></textarea>
          </div>
          <div >
            <label for="img">Image:</label>
            <input class="text-xs" type="file" @change="onFileChange" id="img" required />
          </div>

          <button
            type="submit"
            class="overflow-hidden relative w-full p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group"
          >
            Ajouter
            <span
              class="absolute w-64 lg:w-[900px] h-40 -top-8 lg:-top-20 rotate-6 -left-2 bg-fuchsia-200 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
            ></span>
            <span
              class="absolute w-64 lg:w-[900px] h-40 -top-8 lg:-top-20 rotate-6 -left-2 bg-fuchsia-400 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
            ></span>
            <span
              class="absolute w-60 lg:w-[900px] h-40 -top-8 lg:-top-20 rotate-6 -left-2 bg-fuchsia-600 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"
            ></span>
            <span
              class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-12 lg:left-[350px] z-10"
              >le Tutoriel</span
            >
          </button>
        </form>
        <RouterLink to="tutoall" class="text-blue-500 underline">Voir les tutoriels</RouterLink>
      </div>
    </div>
  </div>
  <FooterPage />
</template>
