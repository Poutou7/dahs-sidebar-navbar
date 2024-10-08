<template>
  <div class="logo">
    <RouterLink to="/">
      <Logoimg />
    </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import Logoimg from '@/assets/images/logos/Logo.vue';
</script>
