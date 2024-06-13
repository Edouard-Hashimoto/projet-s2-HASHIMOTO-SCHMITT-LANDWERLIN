<script setup lang="ts">
import HeaderPage from '@/components/Header.vue'
import FooterPage from '@/components/Footer.vue'
</script>

<template>
  <HeaderPage />
  <div
    class="flex flex-col justify-center items-center h-[600px] bg-[url('/img/fondtuto4.png')] bg-cover"
  >
    <p class="text-4xl lg:text-4xl xl:text-6xl text-center lg:text-right lg:pl-[900px]">
      Déclaration Impôts
    </p>
  </div>
  <div class="w-full grid p-8 lg:grid-cols-2">
    <div class="w-full p-8 relative ">
      <img src="/public/img/tuto4.png" class="w-[600px] relative duration-500 hover:[transform:rotate3d(20,-10,1,30deg)]" alt="photo tuto" />
    </div>
    <div class="w-full p-8 lg:text-xl text-l">
      <div class="flex items-center justify-center">
        <p class="text-2xl lg:text-3xl">Tutoriel</p>
      </div>
      <div class="w-[30%] h-[5px] bg-black m-10 mx-auto"></div>
      <p class="mb-10"><strong>Qu'est-ce qu'une déclaration d'impôts ?</strong></p>
      <p class="mb-10">
        Une déclaration d'impôts est un document officiel que les contribuables doivent remplir et
        soumettre aux autorités fiscales de leur pays pour déclarer leurs revenus, leurs dépenses et
        d'autres informations financières pertinentes. Cela permet aux autorités fiscales de
        calculer correctement les impôts dus par le contribuable.
      </p>
      <p class="mb-10"><strong>Pourquoi est-il nécessaire ?</strong></p>
      <p class="mb-10">
        La déclaration d'impôts est nécessaire pour s'assurer que les contribuables paient
        correctement leurs impôts sur le revenu, leurs impôts fonciers, leurs taxes sur la valeur
        ajoutée (TVA) et d'autres taxes éventuelles. Cela garantit également que les contribuables
        respectent les lois fiscales en vigueur et évitent les pénalités ou les poursuites
        judiciaires.
      </p>
      <p>
        <strong>Étapes pour faire une déclarations d’impôts :</strong>
      </p>
      <p class="mb-10">a. Collecte des documents et des informations nécessaires :</p>
      <p class="mb-10">
        Avant de commencer à remplir votre déclaration d'impôts, assurez-vous d'avoir tous les
        documents et les informations nécessaires à portée de main. Cela peut inclure :
      </p>

      <p class="mb-4">Formulaires fiscaux fournis par l'administration fiscale</p>

      <p class="mb-4">Relevés de salaire (W-2, 1099, etc.)</p>

      <p class="mb-4">
        Documents de déduction (reçus médicaux, intérêts hypothécaires, dons de bienfaisance, etc.)
      </p>

      <p class="mb-4">
        Informations sur les revenus supplémentaires (revenus de location, dividendes, intérêts,
        etc.)
      </p>

      <p class="mb-4">Preuves de paiement d'impôts anticipés (le cas échéant)</p>

      <p class="mb-10">b. Remplissage du formulaire de déclaration d'impôts :</p>
      <p class="mb-10">
        Une fois les documents et les informations rassemblés, vous pouvez commencer à remplir votre
        déclaration d'impôts. Assurez-vous de suivre attentivement les instructions fournies sur le
        formulaire et de remplir chaque section avec précision. Si vous avez des questions ou des
        incertitudes, n'hésitez pas à consulter les guides fiscaux ou à contacter un professionnel
        de la fiscalité pour obtenir de l'aide.
      </p>
      <p class="mb-10">c. Soumission de la déclaration d'impôts :</p>
      <p class="mb-10">
        Une fois que vous avez rempli votre déclaration d'impôts, assurez-vous de la relire
        attentivement pour détecter les éventuelles erreurs ou omissions. Une fois que vous êtes
        satisfait de votre déclaration, vous pouvez la soumettre aux autorités fiscales conformément
        aux instructions fournies. Cela peut impliquer de la soumettre en ligne via un portail
        électronique ou de l'envoyer par la poste, selon les procédures en vigueur dans votre pays.
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
      </button></RouterLink>
    </div>
  </div>
  <FooterPage />
</template>
