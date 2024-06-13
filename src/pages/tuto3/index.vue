<script setup lang="ts">
import HeaderPage from '@/components/Header.vue'
import FooterPage from '@/components/Footer.vue'
</script>

<template>
  <HeaderPage />
  <div
    class="flex flex-col justify-center items-center h-[600px] bg-[url('/img/fondtuto3.png')] bg-cover"
  >
    <p class="text-4xl lg:text-4xl xl:text-6xl text-center lg:text-right lg:pl-[900px]">
      Demande de VISA
    </p>
  </div>
  <div class="w-full grid p-8 lg:grid-cols-2">
    <div class="w-full p-8 relative duration-500 hover:[transform:rotate3d(20,-10,1,30deg)]">
      <img src="/public/img/tuto3.png" class="w-[600px]" alt="photo tuto" />
    </div>
    <div class="w-full p-8 lg:text-xl text-l">
      <div class="flex items-center justify-center">
        <p class="text-2xl lg:text-3xl">Tutoriel</p>
      </div>
      <div class="w-[30%] h-[5px] bg-black m-10 mx-auto"></div>
      <p class="mb-10"><strong>Qu'est-ce qu'un visa ?</strong></p>
      <p class="mb-10">
        Un visa est un document officiel délivré par un pays qui autorise un individu à entrer sur
        son territoire pour une période spécifique et dans un but déterminé. Les visas peuvent
        varier en fonction du pays visité et du motif du voyage, que ce soit pour le tourisme, les
        affaires, les études, ou d'autres raisons.
      </p>
      <p class="mb-10"><strong>Pourquoi est-il nécessaire ?</strong></p>
      <p class="mb-10">
        Les visas sont nécessaires pour contrôler l'entrée des étrangers dans un pays et pour
        garantir que les visiteurs respectent les lois et les réglementations en vigueur. Ils
        permettent également aux autorités de surveiller et de réguler les flux migratoires.
      </p>
      <p>
        <strong>Étapes pour faire une demande de visa :</strong>
      </p>
      <p class="mb-10">a. Préparation des documents :</p>
      <p class="mb-10">
        Avant de commencer le processus de demande de visa, il est essentiel de rassembler tous les
        documents nécessaires. Cela peut inclure :
      </p>

      <p class="mb-4">Passeport valide</p>

      <p class="mb-4">Photos d'identité conformes aux exigences du pays</p>

      <p class="mb-4">Preuves de réservation de vol et d'hébergement</p>

      <p class="mb-4">Relevés bancaires ou preuves de moyens financiers suffisants</p>

      <p class="mb-4">Lettre d'invitation (le cas échéant)</p>

      <p class="mb-4">Autres documents spécifiques au type de visa demandé</p>
      <p class="mb-10">b. Remplissage du formulaire de demande de visa :</p>
      <p class="mb-10">
        Une fois les documents préparés, le prochain pas consiste à remplir le formulaire de demande
        de visa. Ce formulaire peut être disponible en ligne sur le site Web de l'ambassade ou du
        consulat du pays que vous souhaitez visiter. Assurez-vous de remplir toutes les sections du
        formulaire avec précision et de fournir des informations exactes.
      </p>
    </div>
  </div>
  <div class="w-full place-items-center p-8">
    <p class="font-bold lg:text-2xl text-l text-center mb-20">
      Si vous souhaitez avoir de l’aide et/ou que votre document sois remplit par un professionel.
      Consultez nos offres ci-dessous :
    </p>
    <div class="flex items-center justify-center mb-20">
      <RouterLink to="/offre">
      <button
        class="overflow-hidden relative w-60 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group"
      >
        Découvrir
        <span
          class="absolute w-64 h-40 -top-8 rotate-6 -left-2 bg-pink-200 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
        ></span>
        <span
          class="absolute w-64 h-40 -top-8 rotate-6 -left-2 bg-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
        ></span>
        <span
          class="absolute w-60 h-40 -top-8 rotate-6 -left-2 bg-pink-600 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"
        ></span>
        <span
          class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-16 z-10"
          >Nos Offres</span
        >
      </button></RouterLink>
    </div>
  </div>
  <FooterPage />
</template>
