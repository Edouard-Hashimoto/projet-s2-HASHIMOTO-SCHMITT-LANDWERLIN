<script setup lang="ts">
import HeaderPage from '@/components/Header.vue'
import FooterPage from '@/components/Footer.vue'
</script>

<template>
  <HeaderPage />
  <div
    class="flex flex-col justify-center items-center h-[600px] bg-[url('/img/fondtuto1.png')] bg-cover"
  >
    <p class="text-4xl lg:text-4xl xl:text-6xl text-center lg:text-right lg:pl-[900px]">
      Demande de carte d’identité/passport
    </p>
    </div>
  <div class="w-full grid p-8 lg:grid-cols-2">
    <div class="w-full p-8 relative duration-500 hover:[transform:rotate3d(20,-10,1,30deg)]">
      <img src="/public/img/image_cerfa_cni.webp" class="w-[600px]" alt="photo tuto" />
    </div>
    <div class="w-full p-8 lg:text-xl text-l">
            <div class="flex items-center justify-center">
        <p class="text-2xl lg:text-3xl">Tutoriel</p>
      </div>
      <div class="w-[30%] h-[5px] bg-black m-10 mx-auto"></div>
      <p class="mb-10">
        Pour faire une demande de carte d’identité/passeport vous devez remplir ce formulaire CERFA.
      </p>
      <p class="mb-10"><strong>Il y a deux façon de l’obtenir:</strong></p>
      <p>
        <strong>-Vous pouvez faire une pré-demande en ligne sur le site de l’ANTS,</strong> en
        renseignant vos informations personnelles et celles de vos parents. Vous recevrez ensuite un
        numéro de pré-demande que vous devrez présenter à la mairie lors du dépôt du dossier. La
        mairie récupérera vos données, vérifiera vos pièces justificatives et recueillera vos
        empreintes.
      </p>
      <p class="mb-10">
        <strong>-Vous pouvez remplir le formulaire papier qui vous sera remis à la mairie.</strong> Il s’agit d’un
        formulaire cartonné qui ne peut pas être téléchargé. Il doit être rempli à l’encre noire et
        en lettres majuscules. Les informations à indiquer sur le formulaire sont les suivantes :
        nom de famille, deuxième nom (si vous en avez un), prénoms, taille, date et lieu de
        naissance, adresse, numéro de téléphone portable (si vous voulez être informé par SMS de la
        fabrication de la carte), nom et prénom(s) des parents, date et lieu de naissance des
        parents.
      </p>
      <p class="mb-10">
        <strong>Dans les deux cas, vous devrez fournir les documents suivants :</strong> <br />

        -Une photo d’identité récente <br />

        -Un justificatif de domicile <br />

        -Un acte de naissance <br />

        -Un justificatif de nationalité française (si vous êtes né à l’étranger ou si l’un de vos
        parents est étranger).
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
