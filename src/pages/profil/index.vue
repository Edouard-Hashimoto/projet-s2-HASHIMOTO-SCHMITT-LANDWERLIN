<template>
  <div>
    <HeaderPage />
    <div class="flex h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div class="w-full max-w-md space-y-8">
        <h1>Profil de {{ currentUser?.name }}</h1>
        <p>Email: {{ currentUser?.email }}</p>
        <!-- Ajoutez un bouton pour changer le mot de passe -->
        <button
          @click="goToChangePassword"
          class="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Changer le mot de passe
        </button>
        <RouterLink to="/change-profil">
          <button
            class="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Modifier le profil
          </button></RouterLink
        >
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
  const pb = new PocketBase('http://127.0.0.1:8090')
  currentUser.value = pb.authStore.model
})

const goToChangePassword = () => {
  router.push('/change-password')
}
</script>
