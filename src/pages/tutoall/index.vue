<template>
    <HeaderPage />
  <div>
    <h1>Ajouter un Tutoriel</h1>
    <div v-if="tutos.length">
      <div v-for="tuto in tutos" :key="tuto.id" class="tuto-item">
         <div class="w-full p-8 lg:text-xl text-l">
        <div class="flex items-center justify-center">
        <p class="text-2xl lg:text-3xl">{{ tuto.name }}</p>
      </div>
      <div class="w-[30%] h-[5px] bg-black m-5 mx-auto"></div>
      <div class="grid grid-cols-1 lg:grid-cols-2 place-items-center p-8">
      <div class="w-full p-8 relative duration-500 hover:[transform:rotate3d(20,-10,1,30deg)]">
        <img class="w-[600px]" :src="getImageUrl(tuto.id, tuto.img)" :alt="tuto.name" />
        </div>
      <p>{{ tuto.description }}</p>
      </div>
      </div>
      </div>
    </div>
    <div v-else>
      <p>Aucun tutoriel disponible.</p>
    </div>
  </div>
  <FooterPage />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import HeaderPage from '@/components/Header.vue'
import FooterPage from '@/components/Footer.vue'
import pocketbaseService from '@/services/pocketbase';

const tutos = ref([] as any[])

const fetchTutos = async () => {
  tutos.value = await pocketbaseService.getTutos()
}

const getImageUrl = (tutoId: string, imagePath: string) => {
  const url = `http://127.0.0.1:8090/api/files/e0g6nbqh3tf4ypr/${tutoId}/${imagePath}?token=`
  console.log('Image URL:', url)
  return url
}

onMounted(fetchTutos)
</script>
