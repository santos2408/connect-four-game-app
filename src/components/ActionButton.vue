<template>
  <button type="button" :class="data.class">
    {{ data.title }}
    <img v-if="data.icon" :src="data.icon" class="h-10" />
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: ["data"],
};
</script>

<style scoped>
button {
  @apply flex h-20 w-full max-w-xs items-center justify-between rounded-3xl border-4 border-black px-5 text-xl font-semibold uppercase;
  box-shadow: 0px 8px 0px #000;
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
