<script setup lang="ts">
import { ref } from 'vue'
import HeaderPage from '@/components/Header.vue'
import FooterPage from '@/components/Footer.vue'

const buyTicket = () => {
  console.log(`Acheter un billet pour ${selectedTuto.value.title}`)
}

const tutos = ref([
  { title: 'Demande de Carte d’identité / Passeport' },
  { title: 'Demande de Permis' },
  { title: 'Demande de VISA' },
  { title: 'Déclaration Impôts' },
  { title: 'Autres' }
])

const showModal = ref(false)
const selectedTuto = ref(null)

const openModal = (tuto) => {
  selectedTuto.value = tuto
  showModal.value = true
}
</script>

<template>
  <HeaderPage />
  <div class="flex flex-col items-center justify-center mt-20 mb-60 mx-10">
    <div class="flex flex-col bg-white p-10 rounded-lg shadow-md lg:w-1/2">
      <div class="flex items-center justify-center">
        <h1 class="text-2xl lg:text-3xl">Aide au remplissage de formulaire</h1>
      </div>
      <div class="w-[30%] h-[5px] bg-black m-10 mx-auto"></div>
      <div class="mt-6">
        <label for="selectedTuto" class="block text-sm font-medium text-gray-700"
          >Sélectionnez le document que vous souhaitez que l’ont remplisse
        </label>
        <select
          id="selectedTuto"
          v-model="selectedTuto"
          class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option v-for="tuto in tutos" :key="tuto.title" :value="tuto">{{ tuto.title }}</option>
        </select>
        <p class="mt-10">Numéro de tel</p>
        <input
          class="w-96 border border-gray-400"
          type="tel"
          name="phone"
          id="phone"
          placeholder="Entrez votre numéro de téléphone"
        />
        <p class="mt-10">Message (Facultatif)</p>
        <input
          class="w-96 border border-gray-400"
          type="tel"
          name="phone"
          id="phone"
          placeholder="Entrez votre message"
        />
        <div>
          <button
            class="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            @click="envoyer"
          >
            Envoyer
          </button>
        </div>
      </div>
    </div>
    <p class="text-center mt-10">
      Vous recevrez une réponse dans un délai maximum de 24h par mail ou sms (jours ouvrables)
    </p>
  </div>
  <FooterPage />
</template>
