<template>
  <div class="py-10">
    <header class="flex items-center justify-between px-3">
      <span
        class="w-28 rounded-full bg-brand-purple-2 px-5 py-2 text-center text-xs font-semibold uppercase text-white"
      >
        Menu
      </span>

      <img :src="logo" alt="Connect Four Game Logo" width="40" />

      <span
        class="w-28 rounded-full bg-brand-purple-2 px-5 py-2 text-center text-xs font-semibold uppercase text-white"
      >
        Restart
      </span>
    </header>

    <main></main>
  </div>
</template>

<script>
import logo from "@/assets/images/logo.png";

export default {
  name: "GameBoard",
  data() {
    return {
      logo,
    };
  },
};
</script>

<style lang="scss" scoped></style>
