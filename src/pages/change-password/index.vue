<template>
  <div>
    <HeaderPage />
    <div class="flex h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div class="w-full max-w-md space-y-8">
        <h1>Changer le mot de passe</h1>
        <div>
          <label for="currentPassword" class="block text-sm font-medium leading-6 text-gray-900">Mot de passe actuel</label>
          <input v-model="currentPassword" type="password" id="currentPassword" class="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
        <div>
          <label for="newPassword" class="block text-sm font-medium leading-6 text-gray-900">Nouveau mot de passe</label>
          <input v-model="newPassword" type="password" id="newPassword" class="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
        <div>
          <button @click="changePassword" class="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Changer le mot de passe</button>
        </div>
      </div>
    </div>
    <FooterPage />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import PocketBase from 'pocketbase';
import HeaderPage from '@/components/Header.vue'
import FooterPage from '@/components/Footer.vue'

const currentPassword = ref('');
const newPassword = ref('');

const changePassword = async () => {
  try {
    const pb = new PocketBase('http://127.0.0.1:8090');

    // Vérifiez si l'utilisateur est authentifié
    if (!pb.authStore.isValid) {
      throw new Error('Utilisateur non authentifié');
    }

    // Vérifiez si le nouveau mot de passe est conforme aux exigences
    if (newPassword.value.length < 8) {
      throw new Error('Le nouveau mot de passe doit contenir au moins 8 caractères.');
    }

    // Mettez à jour le mot de passe de l'utilisateur
    const response = await pb.collection('users').update(pb.authStore.model.id, {
      password: newPassword.value,
      passwordConfirm: newPassword.value
    });

    alert('Mot de passe changé avec succès!');
  } catch (error) {
    alert('Erreur lors du changement de mot de passe: ' + error.message);
  }
};
</script>

