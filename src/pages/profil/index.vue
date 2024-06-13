<template>
  <div>
    <HeaderPage />
    <div class="flex h-screen items-center justify-center bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 px-4 py-12 sm:px-6 lg:px-8">
      <div class="w-full max-w-md space-y-8 p-8 bg-white rounded-lg shadow-md">
        <div class="text-center">
          <img :src="currentUser?.avatar" alt="Avatar" class="mx-auto h-24 w-24 rounded-full object-cover mb-4" v-if="currentUser?.avatar" />
          <h1 class="text-2xl font-bold">Profil de {{ currentUser?.name }}</h1>
          <p class="text-gray-600">Email: {{ currentUser?.email }}</p>
        </div>
        <div class="space-y-4">
          <button
            @click="goToChangePassword"
            class="w-full flex items-center justify-center mb-4 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Changer le mot de passe
          </button>
          <RouterLink to="/change-profil">
            <button
              class="w-full flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Modifier le profil
            </button>
          </RouterLink>
        </div>
      </div>
    </div>
    <FooterPage />
  </div>
</template>




<script setup>
import { ref, onMounted } from 'vue'
import HeaderPage from '@/components/Header.vue'
import FooterPage from '@/components/Footer.vue'
import PocketBase from 'pocketbase'
import { useRouter } from 'vue-router'

const router = useRouter()
const currentUser = ref(null)

onMounted(() => {
  const pb = new PocketBase('https://lazydocs.edouardhashimoto.fr:443')
  currentUser.value = pb.authStore.model
})

const goToChangePassword = () => {
  router.push('/change-password')
}


</script>
