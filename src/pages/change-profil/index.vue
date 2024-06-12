<template>
  <div>
    <HeaderPage />
    <div class="flex h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div class="w-full max-w-md space-y-8">
        <h1>Modifier le profil</h1>
        <div>
          <label for="newName" class="block text-sm font-medium leading-6 text-gray-900">Nouveau nom</label>
          <input v-model="newName" type="text" id="newName" class="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
        <div>
          <label for="newEmail" class="block text-sm font-medium leading-6 text-gray-900">Nouvelle adresse e-mail</label>
          <input v-model="newEmail" type="email" id="newEmail" class="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
        <div>
          <button @click="updateProfile" class="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Enregistrer les modifications</button>
        </div>
      </div>
    </div>
    <FooterPage />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import PocketBase from 'pocketbase';
import HeaderPage from '@/components/Header.vue';
import FooterPage from '@/components/Footer.vue';

const newName = ref('');
const newEmail = ref('');

const updateProfile = async () => {
  try {
    const pb = new PocketBase('http://127.0.0.1:8090');

    // Vérifiez si l'utilisateur est authentifié
    if (!pb.authStore.isValid) {
      throw new Error('Utilisateur non authentifié');
    }

    // Mettez à jour le profil de l'utilisateur
    const response = await pb.collection('users').update(pb.authStore.model.id, {
      name: newName.value,
      email: newEmail.value,
      emailVisibility: true  // Mettre à jour la visibilité de l'e-mail si nécessaire
    });

    alert('Profil mis à jour avec succès!');
  } catch (error) {
    alert('Erreur lors de la mise à jour du profil: ' + error.message);
  }
};
</script>

