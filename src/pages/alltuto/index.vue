<script setup lang="ts">
import HeaderPage from '@/components/Header.vue'
import FooterPage from '@/components/Footer.vue'
</script>

<template>
  <HeaderPage />
  <div class="mt-20 mb-10">
    <p class="font-title text-3xl lg:text-6xl xl:text-6xl text-center">Tutoriels</p>
  </div>
  <div class="w-[50%] h-1 bg-black m-10 mx-auto"></div>
  <div class="overflow-x-auto flex space-x-4 p-4 snap-x snap-mandatory">
    <div class="w-full flex-shrink-0 snap-center flex items-center justify-center">
      <div class="bg-white rounded-lg shadow-lg p-6 w-[90%] lg:w-[50%]">
        <RouterLink to="/tuto2">
          <div class="flex items-center justify-center">
            <img
              src="/public/img/1.webp"
              class="w-[600px] transition-all duration-300 ease-in-out hover:scale-105"
            /></div
        ></RouterLink>
        <p class="text-center mt-4 lg:text-3xl">Demande de Permis de conduire</p>
      </div>
    </div>
    <div class="w-full flex-shrink-0 snap-center flex items-center justify-center">
      <div class="bg-white rounded-lg shadow-lg p-6 w-[90%] lg:w-[50%]">
        <RouterLink to="/tuto4">
        <div class="flex items-center justify-center">
          <img
            src="/public/img/2.webp"
            class="w-[600px] transition-all duration-300 ease-in-out hover:scale-105"
          />
        </div></RouterLink>
        <p class="text-center mt-4 lg:text-3xl">Déclaration des impôts</p>
      </div>
    </div>
    <div class="w-full flex-shrink-0 snap-center flex items-center justify-center">
      <div class="bg-white rounded-lg shadow-lg p-6 w-[90%] lg:w-[50%]">
        <RouterLink to="/tuto1">
        <div class="flex items-center justify-center">
          <img
            src="/public/img/3.webp"
            class="w-[600px] transition-all duration-300 ease-in-out hover:scale-105"
          />
        </div></RouterLink>
        <p class="text-center mt-4 lg:text-3xl">Demande de passport</p>
      </div>
    </div>
    <div class="w-full flex-shrink-0 snap-center flex items-center justify-center">
      <div class="bg-white rounded-lg shadow-lg p-6 w-[90%] lg:w-[50%]">
        <RouterLink to="/tuto3">
        <div class="flex items-center justify-center">
          <img
            src="/public/img/4.webp"
            class="w-[600px] transition-all duration-300 ease-in-out hover:scale-105"
          />
        </div></RouterLink>
        <p class="text-center mt-4 lg:text-3xl">Demande de visa</p>
      </div>
    </div>
    <div class="w-full flex-shrink-0 snap-center flex items-center justify-center">
      <div class="bg-white rounded-lg shadow-lg p-6 w-[90%] lg:w-[50%]">
        <RouterLink to="/tuto1">
        <div class="flex items-center justify-center">
          <img
            src="/public/img/5.webp"
            class="w-[600px] transition-all duration-300 ease-in-out hover:scale-105"
          />
        </div></RouterLink>
        <p class="text-center mt-4 lg:text-3xl">Demande de carte d’identité</p>
      </div>
    </div>
  </div>
  <div class="flex items-center justify-center my-10">
      <RouterLink to="/addTuto">
        <button
          class="overflow-hidden relative w-60 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group"
        >
          Ajouter des tutoriels
          <span
            class="absolute w-64 h-40 -top-8 rotate-6 -left-2 bg-red-200 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
          ></span>
          <span
            class="absolute w-64 h-40 -top-8 rotate-6 -left-2 bg-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
          ></span>
          <span
            class="absolute w-60 h-40 -top-8 rotate-6 -left-2 bg-red-600 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"
          ></span>
          <span
            class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-16 z-10"
            >Maintenant</span
          >
        </button>
      </RouterLink>
    </div>
  <FooterPage />
</template>
