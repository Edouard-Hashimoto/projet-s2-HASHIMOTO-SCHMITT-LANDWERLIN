<script setup lang="ts">
import HeaderPage from '@/components/Header.vue'
import FooterPage from '@/components/Footer.vue'
</script>

<template>
  <HeaderPage />
  <div
    class="flex flex-col justify-center items-center h-[600px] bg-[url('/img/fondtuto2.png')] bg-cover"
  >
    <p class="text-4xl lg:text-4xl xl:text-6xl text-center lg:text-right lg:pl-[900px]">
      Demande de permis
    </p>
  </div>
  <div class="w-full grid p-8 lg:grid-cols-2">
    <div class="w-full p-8 relative duration-500 hover:[transform:rotate3d(20,-10,1,30deg)]">
      <img src="/public/img/permis.png" class="w-[600px]" alt="photo tuto" />
    </div>
    <div class="w-full p-8 lg:text-xl text-l">
      <div class="flex items-center justify-center">
        <p class="text-2xl lg:text-3xl">Tutoriel</p>
      </div>
      <div class="w-[30%] h-[5px] bg-black m-10 mx-auto"></div>
      <p class="mb-10">
        Tout d’abord, vous devez vous connecter ou créer un compte ANTS : Vous devez vous connecter
        à votre compte sur le site de l’ANTS (Agence nationale des titres sécurisés). Si vous n’avez
        pas de compte, vous pouvez en créer un.
      </p>
      <p class="mb-10">
        Ensuite, cliquer sur <strong>"Nouvelle demande"</strong> : Une fois connecté à votre compte,
        cliquez sur l’option “Nouvelle demande”.:
      </p>
      <p>
        Choisir le motif de votre demande: Sélectionnez l’option
        <strong>“Je demande la fabrication d’un titre de permis de conduire”.</strong>
      </p>
      <p class="mb-10">
        <strong>1. Informations personnelles : </strong>
        Indiquez votre nom complet, votre adresse actuelle, votre date de naissance, et votre numéro
        de téléphone.
      </p>
      <p class="mb-10">
        <strong>2. Type de permis :</strong>
        Précisez le type de permis que vous souhaitez obtenir, par exemple, permis de conduire pour
        véhicules légers (catégorie B), permis de moto (catégorie A), etc.
      </p>
      <p class="mb-10">
        <strong>3. École de conduite :</strong>
        Si vous avez suivi des cours dans une école de conduite, fournissez les détails de l'école,
        tels que le nom de l'école et son numéro d'agrément.
      </p>
      <p class="mb-10">
        <strong>4. Signature :</strong>
        Signez le document à l'endroit indiqué pour attester que toutes les informations que vous
        avez fournies sont exactes et complètes.
      </p>
      <p class="mb-10">
        <strong>5. Date :</strong>
        Indiquez la date à laquelle vous signez le formulaire.
      </p>
    </div>
  </div>
  <div class="w-full place-items-center p-8">
    <p class="font-bold lg:text-2xl text-l text-center mb-20">
      Si vous souhaitez avoir de l’aide et/ou que votre document sois remplit par un professionel.
      Consultez nos offres ci-dessous :
    </p>
    <div class="flex items-center justify-center mb-20">
      <RouterLin to="/offre"></RouterLin>
      <button
        class="overflow-hidden relative w-60 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group"
      >
        Décourir
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
      </button>
    </div>
  </div>
  <FooterPage />
</template>
