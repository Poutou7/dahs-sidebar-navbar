<template>
  <v-dialog :class="[dialogWith, { cairo: $i18n.locale == 'ro' }]" @afterLeave="emit('close')">
    <v-card class="mx-auto" :class="padding">
      <v-card-title v-if="title" class="d-flex align-center justify-space-between">
        <span class="d-block title">{{ title }}</span>
        <button @click="emit('close')">
          <Icon icon="solar:close-circle-bold-duotone" width="28" height="28" />
        </button>
      </v-card-title>
      <v-card-text :style="{ padding: paddingBody }" class="body">
        <slot></slot>
      </v-card-text>
      <v-card-actions v-if="isActions" class="mt-4">
        <slot name="actions"></slot>
      </v-card-actions>
      <slot name="note"></slot>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

defineProps({
  title: {
    type: String
  },
  padding: {
    type: String,
    default: 'pa-md-5 pt-4 pb-4'
  },
  paddingBody: {
    type: String,
    default: '16px 24px 10px'
  },
  isActions: {
    type: Boolean,
    default: true
  },
  dialogWith: {
    type: String,
    default: 'dialog-mw'
  }
});
const emit = defineEmits(['close']);
</script>

<style scoped>
.v-card-actions {
  min-height: auto;
  padding: 0;
  margin: auto;
}
@media (max-width: 575px) {
  .body {
    padding: 15px !important;
  }
}
</style>
