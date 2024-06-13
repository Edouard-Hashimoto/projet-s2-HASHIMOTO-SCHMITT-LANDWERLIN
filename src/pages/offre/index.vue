<script setup lang="ts">
import HeaderPage from '@/components/Header.vue'
import FooterPage from '@/components/Footer.vue'
</script>

<template>
  <HeaderPage />
  <div class="mt-20 mb-10">
    <p class="font-title text-3xl lg:text-6xl xl:text-6xl text-center">Nos offres</p>
  </div>
  <div class="w-[50%] h-1 bg-black m-10 mx-auto"></div>
  <div class="flex flex-col lg:flex-row justify-center items-center gap-4 mb-20">
    <div class="flex flex-col bg-white rounded-3xl border border-black w-80 h-100">
      <div class="px-6 py-8 sm:p-10 sm:pb-6">
        <div class="grid items-center justify-center w-full grid-cols-1 text-left">
          <div>
            <h2 class="text-2xl font-medium tracking-tighter text-gray-600 lg:text-3xl">
              À l’unité
            </h2>
            <p class="mt-2 text-sm text-gray-500 mb-6">
              Faites remplir un seul document par un professionel
            </p>
            <p class="mt-2 text-sm text-gray-500 mb-6">Envoi payant pour 2.99€</p>
          </div>
          <div class="mt-6">
            <p>
              <span class="text-5xl font-light tracking-tight text-[#72EF70]"> 6.99€ </span>
            </p>
          </div>
        </div>
      </div>
      <RouterLink to="/aide-remplissage">
      <div class="flex px-6 pb-8 sm:px-8">
        <div
          aria-describedby="tier-company"
          class="flex items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
          href="#"
        >
          J’en profite
        </div>
      </div></RouterLink>
    </div>
    <div class="flex flex-col bg-white rounded-3xl border border-black w-80 lg:ml-20">
      <div class="px-6 py-8 sm:p-10 sm:pb-6">
        <div class="grid items-center justify-center w-full grid-cols-1 text-left">
          <div>
            <h2 class="text-2xl font-medium tracking-tighter text-gray-600 lg:text-3xl">Premium</h2>
            <p class="mt-2 text-sm text-gray-500">
              N’importe quel document administratifs rempli par des experts 24/7
            </p>
            <p class="mt-2 text-sm text-gray-500">Documents prêt dans les 24 h</p>
            <p class="mt-2 text-sm text-gray-500">Envoi gratuit, sans suivie</p>
          </div>
          <div class="mt-6">
            <p>
              <span class="text-5xl font-light tracking-tight text-[#B588FF]"> 12.99€ </span>
              <span class="text-base font-medium text-gray-500"> /mo </span>
            </p>
          </div>
        </div>
      </div>
      <RouterLink to="/aide-remplissage">
      <div class="flex px-6 pb-8 sm:px-8">
        <div
          aria-describedby="tier-company"
          class="flex items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
          href="#"
        >
          J’en profite
        </div>
      </div></RouterLink>
    </div>
    <div class="flex flex-col bg-white rounded-3xl border border-black w-80 lg:ml-20">
      <div class="px-6 py-8 sm:p-10 sm:pb-6">
        <div class="grid items-center justify-center w-full grid-cols-1 text-left">
          <div>
            <h2 class="text-2xl font-medium tracking-tighter text-gray-600 lg:text-3xl">
              Option Suivi
            </h2>
            <p class="mt-2 text-sm text-gray-500">
              Obtenez le suivie de votre document en temps réel
            </p>
          </div>
          <div class="mt-6">
            <p>
              <span class="text-5xl font-light tracking-tight text-[#B21011]"> 2.99€ </span>
            </p>
          </div>
        </div>
      </div>
      <div class="flex px-6 pb-8 sm:px-8">
        <div
          aria-describedby="tier-company"
          class="flex items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
          href="#"
        >
          J’en profite
        </div>
      </div>
    </div>
  </div>
  <FooterPage />
</template>
