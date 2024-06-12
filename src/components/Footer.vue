<template>
  <footer class="bg-black text-white py-8">
    <div class="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      <div class="flex flex-col items-start space-y-4">
        <div>
          <img src="/public/img/logoblanc.png" alt="Logo" class="w-30 h-20">
        </div>
        <div class="flex space-x-2 lg:items-start">
          <img src="/public/img/lk.png" alt="Linkedin" class="w-10 h-10">
          <img src="/public/img/Twitter.png" alt="Twitter" class="w-10 h-10">
          <img src="/public/img/Insta.png" alt="Instagram" class="w-10 h-10">
          <img src="/public/img/TikTok.png" alt="TikTok" class="w-10 h-10">
        </div>
      </div>

      <div class="flex flex-col space-y-1items-start mt-10 ">
        <router-link to="/billetterie" class="text-2xl">Billetterie</router-link>
        <router-link to="/contact" class="text-2xl">Contact</router-link>
        <router-link to="/reviews" class="text-2xl">Mentions légales</router-link>
      </div>

      <div class="flex justify-end items-start hidden lg:flex ">
        <img src="/public/img/logommiblanc.png" alt="Image" class="w-20 h-15">
      </div>
    </div>

    <div class="container mx-auto text-center my-4 mt-20">
      <p class="text-sm">Fondation Cartier, 261 Bd Raspail, 75014 Paris</p>
    </div>

    <div class="container mx-auto text-center">
      <p class="text-sm">&copy; 2024 Expo Rogers</p>
    </div>
  </footer>
</template>