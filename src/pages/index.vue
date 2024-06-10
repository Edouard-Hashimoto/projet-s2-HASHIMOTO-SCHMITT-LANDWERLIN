<script setup lang="ts">
import HeaderPage from '@/components/Header.vue'
import FooterPage from '@/components/Footer.vue'
</script>

<template>
  <HeaderPage />
  <div
    class="flex flex-col justify-center items-center h-[600px] bg-[url('/img/fondaccueil.webp')] bg-cover bg-opacity-50"
  >
    <p class="text-4xl lg:text-4xl xl:text-6xl text-center lg:text-right lg:pl-[900px]">
      Le site qui vous <br />
      épargne la corvée <br />
      administrative
    </p>
    <div class="w-[30%] h-[5px] lg:mr-60 bg-black m-10 mx-auto"></div>
  </div>
  <div class="mt-20 mb-20">
    <p class="font-title text-4xl lg:text-6xl xl:text-6xl text-center">
      Une Assistance Administrative Personnalisée !
    </p>
  </div>
  <div class="w-[50%] h-[5px] bg-black m-10 mx-auto"></div>
  <div class="flex flex-col lg:flex-row justify-center items-center gap-4 mb-20">
    <div
      class="border border-gray-300 p-4 rounded-lg shadow-lg w-96 flex flex-col items-center justify-center bg-[#E7E7E7]"
    >
      <img src="/public/img/docu.png" alt="" class="w-20" />
      <p class="font-title font-bold mt-2 lg:text-2xl">Guides Simples et Efficaces</p>
      <p class="mt-2">
        Nous vous proposons des guides simples et efficaces qui vous expliquent comment réaliser vos
        démarches administratives.
      </p>
    </div>
    <div
      class="border border-gray-300 p-4 rounded-lg shadow-lg w-96 flex flex-col items-center justify-center bg-[#CBABFF]"
    >
      <img src="/public/img/temps.png" alt="" class="w-20" />
      <p class="font-bold font-title mt-2 lg:text-2xl">Gagner du Temps</p>
      <p class="mt-2">
        En faisant appel à nos services, vous pouvez gagner du temps et vous consacrer à vos
        activités préférées.
      </p>
    </div>
    <div
      class="border border-gray-300 p-4 rounded-lg shadow-lg w-96 flex flex-col items-center justify-center bg-[#E7E7E7]"
    >
      <img src="/public/img/travail.png" alt="" class="w-20" />
      <p class="font-title font-bold mt-2 lg:text-2xl">Assistance Professionnelle</p>
      <p class="mt-2">
        Des professionnelles qui vous aident à remplir vos dossiers administratives de manière
        rapide, fiable et personnalisée.
      </p>
    </div>
  </div>

  <div class="mt-20 mb-20">
    <p class="font-title text-3xl lg:text-6xl xl:text-6xl text-center">Des tutos pour les jeunes</p>
  </div>
  <div class="w-[50%] h-[5px] bg-black m-10 mx-auto"></div>
  <div class="flex flex-col lg:flex-row justify-center items-center gap-4 mb-10">
    <div class="p-4 rounded-lg w-96 flex flex-col items-center justify-center">
      <img src="/public/img/1.jpg" alt="" class="w-96 rounded-2xl" />
      <p class="font-title text-2xl lg:text-3xl text-center mt-2">Demande de Permis de conduire</p>
      <button class="bg-black text-white px-4 py-2 lg:w-60 rounded mt-2">Découvrir</button>
    </div>
    <div class="p-4 rounded-lg w-96 flex flex-col items-center justify-center">
      <img src="/public/img/2.jpg" alt="" class="w-96 rounded-2xl" />
      <p class="font-title text-2xl lg:text-3xl text-center mt-2">
        <span class="sm:inline lg:block">Déclaration des </span>
        <span class="sm:inline lg:block lg:mb-2">impôts</span>
      </p>
      <button class="bg-black text-white px-4 py-2 lg:w-60 rounded mt-2">Découvrir</button>
    </div>
    <div class="p-4 rounded-lg w-96 flex flex-col items-center justify-center">
      <img src="/public/img/3.jpg" alt="" class="w-96 rounded-2xl" />
      <p class="font-title text-2xl lg:text-3xl text-center mt-2">
        <span class="sm:inline lg:block">Demande de </span>
        <span class="sm:inline lg:block lg:mb-2">passport</span>
      </p>
      <button class="bg-black text-white px-4 py-2 lg:w-60 rounded mt-2">Découvrir</button>
    </div>
  </div>
  <div class="flex flex-col lg:flex-row justify-center items-center gap-4">
    <div class="p-4 rounded-lg w-96 flex flex-col items-center justify-center">
      <img src="/public/img/4.jpg" alt="" class="w-96 rounded-2xl" />
      <p class="font-title text-2xl lg:text-3xl text-center mt-2">
        <span class="sm:inline lg:block">Demande de </span>
        <span class="sm:inline lg:block lg:mb-2">visa</span>
      </p>
      <button class="bg-black text-white px-4 py-2 lg:w-60 rounded mt-2">Découvrir</button>
    </div>
    <div class="p-4 rounded-lg w-96 flex flex-col items-center justify-center">
      <img src="/public/img/5.jpg" alt="" class="w-96 rounded-2xl" />
      <p class="font-title text-2xl lg:text-3xl text-center mt-2">Demande de carte d’identité</p>
      <button class="bg-black text-white px-4 py-2 lg:w-60 rounded mt-2">Découvrir</button>
    </div>
  </div>

  <FooterPage />
</template>
