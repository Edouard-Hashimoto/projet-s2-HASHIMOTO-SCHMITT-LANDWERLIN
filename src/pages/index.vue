<script setup lang="ts">
import HeaderPage from '@/components/Header.vue'
import FooterPage from '@/components/Footer.vue'
import { RouterLink } from 'vue-router';
</script>

<template>
  <HeaderPage />
  <div
    class="flex flex-col justify-centerh-[600px] bg-[url('/img/fondaccueil.webp')] bg-cover bg-opacity-50"
  >
    <p class="text-4xl lg:text-4xl xl:text-6xl text-center lg:text-right lg:right lg:mr-72 lg:mt-40">
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

  <div class="mt-20 mb-10">
    <p class="font-title text-3xl lg:text-6xl xl:text-6xl text-center">Des tutos pour les jeunes</p>
  </div>
  <div class="w-[50%] h-[5px] bg-black m-10 mx-auto"></div>
  <div class="flex flex-col lg:flex-row justify-center items-center gap-4 mb-10">
    <div class="p-4 rounded-lg w-96 flex flex-col items-center justify-center overflow-hidden">
      <img src="/public/img/1.webp" alt="" class="w-96 rounded-2xl" />
      <p class="font-title text-2xl lg:text-3xl text-center mt-2">Demande de Permis de conduire</p>
      <RouterLink to="/tuto2">
      <button
        class="overflow-hidden relative w-60 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group"
      >
        Découvrir
        <span
          class="absolute w-64 h-40 -top-8 rotate-6 -left-2 bg-blue-200 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
        ></span>
        <span
          class="absolute w-64 h-40 -top-8 rotate-6 -left-2 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
        ></span>
        <span
          class="absolute w-60 h-40 -top-8 rotate-6 -left-2 bg-blue-600 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"
        ></span>
        <span
          class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-16 z-10"
          >Maintenant</span
        >
      </button></RouterLink>
    </div>
    <div class="p-4 rounded-lg w-96 flex flex-col items-center justify-center">
      <img src="/public/img/2.webp" alt="" class="w-96 rounded-2xl" />
      <p class="font-title text-2xl lg:text-3xl text-center mt-2">
        <span class="sm:inline lg:block">Déclaration des </span>
        <span class="sm:inline lg:block lg:mb-2">impôts</span>
      </p>
      <RouterLink to="/tuto4">
        <button
          class="overflow-hidden relative w-60 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group"
        >
          Découvrir
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
    <div class="p-4 rounded-lg w-96 flex flex-col items-center justify-center">
      <img src="/public/img/3.webp" alt="" class="w-96 rounded-2xl" />
      <p class="font-title text-2xl lg:text-3xl text-center mt-2">
        <span class="sm:inline lg:block">Demande de </span>
        <span class="sm:inline lg:block lg:mb-2">passport</span>
      </p>
      <RouterLink to="/tuto1">
        <button
          class="overflow-hidden relative w-60 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group"
        >
          Découvrir
          <span
            class="absolute w-64 h-40 -top-8 rotate-6 -left-2 bg-green-200 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
          ></span>
          <span
            class="absolute w-64 h-40 -top-8 rotate-6 -left-2 bg-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
          ></span>
          <span
            class="absolute w-60 h-40 -top-8 rotate-6 -left-2 bg-green-600 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"
          ></span>
          <span
            class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-16 z-10"
            >Maintenant</span
          >
        </button></RouterLink
      >
    </div>
  </div>
  <div class="flex flex-col lg:flex-row justify-center items-center gap-4">
    <div class="p-4 rounded-lg w-96 flex flex-col items-center justify-center">
      <img src="/public/img/4.webp" alt="" class="w-96 rounded-2xl" />
      <p class="font-title text-2xl lg:text-3xl text-center mt-2">
        <span class="sm:inline lg:block">Demande de </span>
        <span class="sm:inline lg:block lg:mb-2">visa</span>
      </p>
      <RouterLink to="/tuto3">
      <button
        class="overflow-hidden relative w-60 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group"
      >
        Découvrir
        <span
          class="absolute w-64 h-40 -top-8 rotate-6 -left-2 bg-purple-200 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
        ></span>
        <span
          class="absolute w-64 h-40 -top-8 rotate-6 -left-2 bg-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
        ></span>
        <span
          class="absolute w-60 h-40 -top-8 rotate-6 -left-2 bg-purple-600 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"
        ></span>
        <span
          class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-16 z-10"
          >Maintenant</span
        >
      </button>
    </RouterLink>
    </div>
    <div class="p-4 rounded-lg w-96 flex flex-col items-center justify-center">
      <img src="/public/img/5.webp" alt="" class="w-96 rounded-2xl" />
      <p class="font-title text-2xl lg:text-3xl text-center mt-2">Demande de carte d’identité</p>
      <RouterLink to="/tuto1">
        <button
          class="overflow-hidden relative w-60 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group"
        >
          Découvrir
          <span
            class="absolute w-64 h-40 -top-8 rotate-6 -left-2 bg-yellow-200 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
          ></span>
          <span
            class="absolute w-64 h-40 -top-8 rotate-6 -left-2 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
          ></span>
          <span
            class="absolute w-60 h-40 -top-8 rotate-6 -left-2 bg-yellow-600 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"
          ></span>
          <span
            class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-16 z-10"
            >Maintenant</span
          >
        </button></RouterLink
      >
    </div>
  </div>
  <div class="mt-20 mb-10">
    <p class="font-title text-3xl lg:text-6xl xl:text-6xl text-center">Nos offres du moment</p>
  </div>
  <div class="w-[50%] h-1 bg-black m-10 mx-auto"></div>
  <div class="flex flex-col lg:flex-row justify-center items-center gap-4 mb-20">
    <div class="flex flex-col bg-white rounded-3xl border border-black w-80 h-80">
      <div class="px-6 py-8 sm:p-10 sm:pb-6">
        <div class="grid items-center justify-center w-full grid-cols-1 text-left">
          <div>
            <h2 class="text-lg font-medium tracking-tighter text-gray-600 lg:text-3xl">
              À l’unité
            </h2>
            <p class="mt-2 text-sm text-gray-500 mb-6">
              Faites remplir un seul document par un professionel
            </p>
          </div>
          <div class="mt-6">
            <p>
              <span class="text-5xl font-light tracking-tight text-[#72EF70]"> 6.99€ </span>
            </p>
          </div>
        </div>
      </div>
      <RouterLink to="/offre">
        <div class="flex px-6 pb-8 sm:px-8">
          <div
            aria-describedby="tier-company"
            class="flex items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
            href="#"
          >
            En savoir +
          </div>
        </div>
      </RouterLink>
    </div>
    <div class="flex flex-col bg-white rounded-3xl border border-black w-80">
      <div class="px-6 py-8 sm:p-10 sm:pb-6">
        <div class="grid items-center justify-center w-full grid-cols-1 text-left">
          <div>
            <h2 class="text-lg font-medium tracking-tighter text-gray-600 lg:text-3xl">Premium</h2>
            <p class="mt-2 text-sm text-gray-500">
              N’importe quel document administratifs rempli par des experts 24/7
            </p>
          </div>
          <div class="mt-6">
            <p>
              <span class="text-5xl font-light tracking-tight text-[#B588FF]"> 12.99€ </span>
              <span class="text-base font-medium text-gray-500"> /mo </span>
            </p>
          </div>
        </div>
      </div>
      <RouterLink to="/offre">
        <div class="flex px-6 pb-8 sm:px-8">
          <div
            aria-describedby="tier-company"
            class="flex items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
            href="#"
          >
            En savoir +
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
  <div class="mt-20 mb-10">
    <p class="font-title text-3xl lg:text-6xl xl:text-6xl text-center">Vous avez des questions ?</p>
  </div>
  <div class="w-[50%] h-1 bg-black m-10 mx-auto"></div>
  <div class="flex items-center justify-center mb-20">
    <RouterLink to="/contact">
    <button
      class="w-60 h-16 lg:w-80 lg:h-20 bg-white cursor-pointer rounded-3xl border-2 border-[#000000] shadow-[inset0px-2px0px_1px#9748FF] group hover:bg-[#000000] transition duration-300 ease-in-out"
    >
      <span class="font-medium text-2xl lg:text-4xl text-[#000000] group-hover:text-white"
        >Contactez-nous !
      </span>
    </button></RouterLink>
  </div>
  <FooterPage />
</template>
