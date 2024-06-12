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
      <div class="bg-white rounded-lg shadow-lg p-6 w-[50%]">
        <div class="flex items-center justify-center">
          <img src="/public/img/1.webp" class="w-[600px] transition-all duration-300 ease-in-out hover:scale-105" />
        </div>
        <p class="text-center mt-4 lg:text-3xl">Demande de Permis de conduire </p>
      </div>
    </div>
    <div class="w-full flex-shrink-0 snap-center flex items-center justify-center">
      <div class="bg-white rounded-lg shadow-lg p-6 w-[50%]">
        <div class="flex items-center justify-center">
          <img src="/public/img/2.webp" class="w-[600px] transition-all duration-300 ease-in-out hover:scale-105" />
        </div>
        <p class="text-center mt-4 lg:text-3xl">Déclaration des impôts</p>
      </div>
    </div>
    <div class="w-full flex-shrink-0 snap-center flex items-center justify-center">
      <div class="bg-white rounded-lg shadow-lg p-6 w-[50%]">
        <div class="flex items-center justify-center">
          <img src="/public/img/3.webp" class="w-[600px] transition-all duration-300 ease-in-out hover:scale-105" />
        </div>
        <p class="text-center mt-4 lg:text-3xl">Demande de passport</p>
      </div>
    </div>
    <div class="w-full flex-shrink-0 snap-center flex items-center justify-center">
      <div class="bg-white rounded-lg shadow-lg p-6 w-[50%]">
        <div class="flex items-center justify-center">
          <img src="/public/img/4.webp" class="w-[600px] transition-all duration-300 ease-in-out hover:scale-105" />
        </div>
        <p class="text-center mt-4 lg:text-3xl">Demande de visa</p>
      </div>
    </div>
    <div class="w-full flex-shrink-0 snap-center flex items-center justify-center">
      <div class="bg-white rounded-lg shadow-lg p-6 w-[50%]">
        <div class="flex items-center justify-center">
          <img src="/public/img/5.webp" class="w-[600px] transition-all duration-300 ease-in-out hover:scale-105" />
        </div>
        <p class="text-center mt-4 lg:text-3xl">Demande de carte d’identité</p>
      </div>
    </div>
  </div>
  <FooterPage />
</template>
