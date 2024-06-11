<script setup lang="ts"></script>

<template>
  <div class="w-full h-[300px] lg:h-[400px] relative bg-black">
    <div class="flex items-start">
    </div>
    <div class="flex flex-col justify-center items-center text-center text-white mb-10">
      <p class="text-xl lg:text-[30px] lg:m-6">Nous suivre</p>
      <div class="flex justify-center items-center space-x-4">
      </div>
      <RouterLink to="/contact">
      <p class="text-[15px] lg:text-[30px] lg:m-6 lg:mt-16">Contact</p>
      </RouterLink>
      <p class="text-[15px] lg:text-[30px]">Mentions légales</p>
    </div>
    <p class="text-[15px] text-left lg:text-center text-white">
      edouard.hashimoto@edu.univ-fcomte.fr
    </p>
    <p class="text-[15px] text-left lg:text-center text-white">
      XX-XX-XX-XX-XX
    </p>
  </div>
</template>
