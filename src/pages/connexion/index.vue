<template>
  <HeaderPage />
  <div class="flex h-[800px] items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
      <div v-if="currentUser">
        <h1 class="lg:text-4xl">Bienvenue {{ currentUser?.name }}</h1>
        <div>
          <button
            type="button"
            @click="doLogout"
            class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Déconnexion
          </button>
          <button
            type="button"
            @click="goToProfil"
            class="rounded-md bg-green-600 ml-4 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            Voir Mon Profil
          </button>
        </div>
      </div>
      <div v-else class="bg-white shadow-2xl rounded-2xl overflow-hidden border-4 border-black">
        <h1 class="px-8 py-10 md:px-10 text-4xl font-extrabold text-center text-black">
          {{ loginMode ? 'CONNEXION' : 'INSCRIPTION' }}
        </h1>
        <div class="sm:col-span-2 sm:col-start-1 mt-2 p-8">
          <label for="username" class="block mb-3 text-sm font-medium text-black relative"
            >Adresse mail</label
          >
          <div class="mt-2">
            <input
              v-model="username"
              type="text"
              name="username"
              id="username"
              autocomplete="none"
              placeholder="Entrer l'adresse mail "
              class="block w-full px-4 py-3 mt-2 text-black bg-white border-2 rounded-lg focus:border-black focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-gray-500"
            />
          </div>
        </div>
        <div class="sm:col-span-2 sm:col-start-1 p-8">
          <label for="password" class="block mb-3 text-sm font-medium text-black relative"
            >Mot de passe</label
          >
          <div class="mt-2">
            <input
              v-model="password"
              type="password"
              name="password"
              id="password"
              autocomplete="none"
              placeholder="•••••••• "
              class="block w-full px-4 py-3 mt-2 text-black bg-white border-2 rounded-lg focus:border-black focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-gray-500"
            />
          </div>
        </div>
        <div v-if="loginMode">
          <div class="sm:col-span-2 sm:col-start-1 mt-2">
            <div class="flex flex-col items-center justify-center">
              <button
                type="button"
                @click="doLogin"
                class="w-[60%] mt-4 px-4 py-3 tracking-wide text-white transition-colors duration-200 transform bg-gradient-to-r from-black to-slate-800 rounded-lg hover:from-slate-800 hover:to-slate-500 mb-4"
              >
                Connexion
              </button>

              <button
                type="button"
                @click="loginMode = false"
                class="w-[60%] mb-10 px-4 py-3 tracking-wide text-white transition-colors duration-200 transform bg-gradient-to-r from-black to-slate-800 rounded-lg hover:from-slate-800 hover:to-slate-500"
              >
                S'inscrire
              </button>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="sm:col-span-2 sm:col-start-1 mt-2 p-8">
            <label for="fullName" class="block mb-3 text-sm font-medium text-black relative"
              >Nom Prénom</label
            >
            <div class="mt-2">
              <input
                v-model="fullName"
                type="text"
                name="fullName"
                id="fullName"
                autocomplete="none"
                placeholder="Entrer votre nom complet "
                class="block w-full px-4 py-3 mt-2 text-black bg-white border-2 rounded-lg focus:border-black focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-gray-500"
              />
            </div>
          </div>
          <div class="sm:col-span-2 sm:col-start-1 mt-2">
            <div class="flex items-center justify-center space-x-4 mb-10">
              <button
                type="button"
                @click="doCreateAccount"
                class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm transition-colors duration-200 transform bg-gradient-to-r from-black to-slate-800
                 hover:from-slate-800 hover:to-slate-500"
              >
                Enregistrer le compte
              </button>

              <button
                type="button"
                @click="loginMode = true"
                class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterPage />
</template>

<script setup>
import { onMounted, ref } from 'vue'
import PocketBase from 'pocketbase'
import { useRouter } from 'vue-router'

let pb = null
import HeaderPage from '@/components/Header.vue'
import FooterPage from '@/components/Footer.vue'
const currentUser = ref()
const username = ref('')
const password = ref('')
const fullName = ref('')

const loginMode = ref(true)
const router = useRouter()

onMounted(async () => {
  pb = new PocketBase('https://lazydocs.edouardhashimoto.fr:443')

  pb.authStore.onChange(() => {
    currentUser.value = pb.authStore.model
  }, true)
})

const doLogout = () => {
  pb.authStore.clear()
  currentUser.value = null
}

const doLogin = async () => {
  try {
    const authData = await pb.collection('users').authWithPassword(username.value, password.value)

    // after the above you can also access the auth data from the authStore
    console.log(pb.authStore.isValid)
    console.log(pb.authStore.token)
    console.log(pb.authStore.model)
    // currentUser.value = pb.authStore.model
  } catch (error) {
    alert(error.message)
  }
}

const doCreateAccount = async () => {
  try {
    const data = {
      username: `user_${self.crypto.randomUUID().split('-')[0]}`,
      email: username.value,
      emailVisibility: true,
      password: password.value,
      passwordConfirm: password.value,
      name: fullName.value
    }

    const record = await pb.collection('users').create(data)

    await doLogin()
  } catch (error) {
    alert(error.message)
  }
}

const goToProfil = () => {
  router.push('/profil')
}
</script>

<style scoped>
/* Ajoutez votre style ici */
</style>
