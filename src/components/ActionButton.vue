<template>
  <button type="button" :class="data.class" @click="goToPage">
    {{ data.title }}
    <img v-if="data.icon" :src="data.icon" class="h-10" />
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    goToPage() {
      this.$router.push(this.data.link);
    },
  },
};
</script>

<style scoped>
button {
  @apply flex h-20 w-full max-w-xs items-center justify-between rounded-3xl border-4 border-black px-5 text-xl font-semibold uppercase;
  box-shadow: 0px 8px 0px #000;
  transition: 0.1s;
}

button:active {
  transform: translateY(2px);
}

.primary-button {
  @apply bg-brand-red-1 text-white;
}

.secondary-button {
  @apply bg-brand-yellow-1 text-black;
}

.third-button {
  @apply bg-white text-black;
}
</style>
