<template>
  <aside
    :class="`flex flex-col bg-dark text-light overflow-hidden min-h-screen p-4 duration-200 ease-out fixed z-50 md:static md:z-0 ${
      is_expanded ? 'w-[300px]' : 'w-16'
    }`"
  >
    <div class="mb-4">
      <img src="../assets/vue.svg" alt="Vue" class="w-8" />
    </div>

    <!-- arrow button -->
    <div
      :class="`flex justify-end mb-4 relative duration-200 ease-out ${
        is_expanded ? '-top-12' : 'top-0'
      }`"
    >
      <button
        @click="ToggleMenu"
        :class="`duration-200 ease-out ${is_expanded ? '-rotate-180' : ''}`"
      >
        <span
          class="material-icons text-3xl text-light duration-200 ease-out hover:text-primary hover:translate-x-2"
        >
          keyboard_double_arrow_right
        </span>
      </button>
    </div>

    <!-- Menu Items -->
    <h3
      :class="`text-sm text-grey mb-2 uppercase duration-300 ease-in-out ${
        is_expanded ? 'opacity-100' : 'opacity-0'
      }`"
    >
      Menu
    </h3>
    <div class="my-0 -mx-4">
      <router-link
        class="flex items-center no-underline py-2 px-4 duration-200 ease-out hover:bg-dark-alt group"
        to="/"
        exact-active-class="bg-dark-alt border-r-4 border-solid border-primary"
        v-slot="{ isExactActive }"
      >
        <span
          :class="`material-icons text-3xl duration-200 ease-out group-hover:text-primary ${
            isExactActive ? 'text-primary' : 'text-light'
          }`"
          >home</span
        >
        <span
          :class="`duration-300 ease-in-out group-hover:text-primary ${
            is_expanded ? 'opacity-100' : 'opacity-0'
          } ${isExactActive ? 'text-primary' : 'text-light'}`"
          >Home</span
        >
      </router-link>
      <router-link
        class="flex items-center no-underline py-2 px-4 duration-200 ease-out hover:bg-dark-alt group"
        to="/about"
        exact-active-class="bg-dark-alt border-r-4 border-solid border-primary"
        v-slot="{ isExactActive }"
      >
        <span
          :class="`material-icons text-3xl duration-200 ease-out group-hover:text-primary ${
            isExactActive ? 'text-primary' : 'text-light'
          }`"
          >person_search</span
        >
        <span
          :class="`duration-300 ease-in-out group-hover:text-primary ${
            is_expanded ? 'opacity-100' : 'opacity-0'
          } ${isExactActive ? 'text-primary' : 'text-light'}`"
          >About</span
        >
      </router-link>
      <router-link
        class="flex items-center no-underline py-2 px-4 duration-200 ease-out hover:bg-dark-alt group"
        to="/team"
        exact-active-class="bg-dark-alt border-r-4 border-solid border-primary"
        v-slot="{ isExactActive }"
      >
        <span
          :class="`material-icons text-3xl duration-200 ease-out group-hover:text-primary ${
            isExactActive ? 'text-primary' : 'text-light'
          }`"
          >group</span
        >
        <span
          :class="`duration-300 ease-in-out group-hover:text-primary ${
            is_expanded ? 'opacity-100' : 'opacity-0'
          } ${isExactActive ? 'text-primary' : 'text-light'}`"
          >Team</span
        >
      </router-link>
      <router-link
        class="flex items-center no-underline py-2 px-4 duration-200 ease-out hover:bg-dark-alt group"
        to="/contact"
        exact-active-class="bg-dark-alt border-r-4 border-solid border-primary"
        v-slot="{ isExactActive }"
      >
        <span
          :class="`material-icons text-3xl duration-200 ease-out group-hover:text-primary ${
            isExactActive ? 'text-primary' : 'text-light'
          }`"
          >email</span
        >
        <span
          :class="`duration-300 ease-in-out group-hover:text-primary ${
            is_expanded ? 'opacity-100' : 'opacity-0'
          } ${isExactActive ? 'text-primary' : 'text-light'}`"
          >Contact</span
        >
      </router-link>
    </div>

    <!-- gives space between menu items and settings -->
    <div class="flex-1"></div>

    <!-- Settings button -->
    <div class="my-0 -mx-4">
      <router-link
        class="flex items-center no-underline py-2 px-4 duration-200 ease-out hover:bg-dark-alt group"
        to="/settings"
        exact-active-class="bg-dark-alt border-r-4 border-solid border-primary"
        v-slot="{ isExactActive }"
      >
        <span
          :class="`material-icons text-3xl duration-200 ease-out group-hover:text-primary ${
            isExactActive ? 'text-primary' : 'text-light'
          }`"
          >settings</span
        >
        <span
          :class="`duration-300 ease-in-out group-hover:text-primary ${
            is_expanded ? 'opacity-100' : 'opacity-0'
          } ${isExactActive ? 'text-primary' : 'text-light'}`"
          >Settings</span
        >
      </router-link>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue';

const is_expanded = ref(localStorage.getItem('is_expanded') === 'true');

const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value;

  localStorage.setItem('is_expanded', is_expanded.value);
};
</script>
