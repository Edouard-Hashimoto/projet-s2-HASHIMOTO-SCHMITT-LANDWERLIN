<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { RouterLink } from 'vue-router'

const activeMenu = ref(false)

watchEffect(() => {
  document.body.style.overflow = activeMenu.value ? 'hidden' : ''
})

function closeMenu() {
  activeMenu.value = false
}
</script>

<template>
  <header
    class="flex items-center justify-between px-4 gap-8 border-b-2 border-black h-20 bg-[#ffffff]"
  >
    <RouterLink to="/">
      <img src="/public/img/logoheader.png" class="w-20" />
    </RouterLink>
    <RouterLink to="/">
      <h1 class="font-title text-3xl pl-4">Lazydocs</h1>
    </RouterLink>

    <div class="flex items-center gap-4">
      <RouterLink to="/connexion">
        <img
          src="/public/img/connexion.png"
          class="relative z-10 flex h-12 w-12 flex-col justify-between lg:hidden *:block *:ease *:h-[2px] *:w-full"
        />
      </RouterLink>
      <button @click="activeMenu = !activeMenu">
        <img
          src="/public/img/menu.svg"
          class="relative z-10 flex h-12 w-12 flex-col justify-between lg:hidden *:block *:ease *:h-[2px] *:w-full"
        />
        <span :class="{ 'translate-y-[5px] rotate-45': activeMenu }"></span>
        <span :class="{ '-translate-y-[5px] -rotate-45': activeMenu }"></span>
      </button>
      <RouterLink to="/connexion">
        <img src="/public/img/connexion.png" class="hidden lg:block w-10 h-10" />
      </RouterLink>
    </div>
    <nav
      class="invisible opacity-0 flex-1 px-6 py-12 flex justify-between mt-20 flex-col fixed z-10 inset-0 bg-gray-200 lg:mt-0 lg:flex-row lg:static lg:bg-transparent lg:py-6 lg:visible lg:opacity-100"
      :class="{ '!visible !opacity-100': activeMenu }"
      v-scroll-lock="activeMenu"
    >
      <ul class="flex flex-col gap-4 lg:flex-row">
        <li>
          <RouterLink class="font-title block p-4 rounded-lg" to="/offre" @click="closeMenu"
            >Offres</RouterLink
          >
        </li>
        <li>
          <RouterLink class="font-title block p-4 rounded-lg" to="/alltuto" @click="closeMenu"
            >Tuto</RouterLink
          >
        </li>
        <li>
          <RouterLink class="font-title block p-4 rounded-lg" to="/frise" @click="closeMenu"
            >Aide</RouterLink
          >
        </li>
        <li>
          <RouterLink class="font-title block p-4 rounded-lg" to="/AjoutTuto" @click="closeMenu"
            >Ajouter Tuto</RouterLink
          >
        </li>
      </ul>
    </nav>
  </header>
</template>
