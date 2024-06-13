<script setup lang="ts">
import { ref } from 'vue';
import HeaderPage from '@/components/Header.vue'
import FooterPage from '@/components/Footer.vue'

const name = ref('');
const email = ref('');
const subject = ref('');
const message = ref('');

const submitForm = () => {
  console.log(name.value, email.value, subject.value, message.value);
};
</script>

<template>
  <HeaderPage />
  <div class="flex flex-col items-center justify-center min-h-screen py-2">
    <div class="flex flex-col bg-white p-10 rounded-lg shadow-md w-full lg:w-1/2">
      <h2 class="font-bold text-2xl mb-6 text-center">Contactez-nous</h2>
      <form @submit.prevent="submitForm">
        <input type="text" v-model="name" placeholder="Votre nom" class="border p-2 rounded mb-3 w-full">
        <input type="email" v-model="email" placeholder="Votre email" class="border p-2 rounded mb-3 w-full">
        <input type="text" v-model="subject" placeholder="Sujet" class="border p-2 rounded mb-3 w-full">
        <textarea v-model="message" placeholder="Votre message" class="border p-2 rounded mb-3 w-full"></textarea>
        <div class="flex justify-between">
          <button type="submit" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Envoyer</button>
          <button type="reset" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Réinitialiser</button>
        </div>
      </form>
    </div>
  </div>
  <FooterPage />
</template>