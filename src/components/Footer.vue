<template>
  <footer class="bg-black text-white py-8">
    <div class="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      <div class="flex flex-col items-start space-y-4">
        <div>
          <img src="/public/img/logoblanc.png" alt="Logo" class="w-30 h-20 ml-4">
        </div>
        <div class="flex space-x-2 lg:items-start ml-4">
          <img src="/public/img/lk.png" alt="Linkedin" class="w-10 h-10">
          <img src="/public/img/Twitter.png" alt="Twitter" class="w-10 h-10">
          <img src="/public/img/Insta.png" alt="Instagram" class="w-10 h-10">
          <img src="/public/img/TikTok.png" alt="TikTok" class="w-10 h-10">
        </div>
      </div>

      <div class="flex flex-col lg:w-[900px] sm: space-y-1items-start mt-10 ml-4">
        <router-link to="/connexion" class="text-2xl">Connexion</router-link>
        <router-link to="/contact" class="text-2xl">Contact</router-link>
        <router-link to="/mentions-legales" class="text-2xl">Mentions légales</router-link>
        <router-link to="/politique-de-confidentialite" class="text-2xl">Politique de confidentialité</router-link>
        <router-link to="/conditions-generales-d-utilisations" class="text-2xl">Conditions Générales d'Utilisations</router-link>
        <router-link to="/charte-d-utilisation-et-de-respect-de-la-vie-privee" class="text-2xl">Charte d'Utilisation et de Respect de la Vie Privée</router-link>
        <router-link to="/politique-relative-aux-cookies-et-aux-donnees-personnelles" class="text-2xl">Politique relative aux cookies et aux données personnelles</router-link>
      </div>

      <div class="flex justify-end items-start hidden lg:flex ">
        <img src="/public/img/logommiblanc.png" alt="Image" class="w-20 h-15">
      </div>
    </div>

    <div class="container mx-auto text-center my-4 mt-20 ">
      <p class="text-xs">Département MMI, 4 Pl. Lucien Tharradin, 25200 Montbéliard</p>
    </div>

    <div class="container mx-auto text-center">
      <p class="text-sm">&copy;  2024 Lazydocs. Tous droits réservés.</p>
    </div>
  </footer>
</template>