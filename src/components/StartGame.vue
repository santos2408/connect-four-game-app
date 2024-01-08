<template>
  <header class="flex h-screen flex-col items-center justify-center gap-14">
    <img :src="logo" alt="Connect Four Game Logo" class="w-12" />

    <nav class="flex w-full flex-col items-center justify-center gap-5 px-3">
      <action-button
        v-for="menuButton in menuButtons"
        :key="menuButton.id"
        :data="menuButton"
      />
    </nav>
  </header>
</template>

<script>
import logo from "@/assets/images/logo.png";
import buttonIcon1 from "@/assets/images/button-icon-1.png";
import buttonIcon2 from "@/assets/images/button-icon-2.png";

import ActionButton from "@/components/ActionButton.vue";

export default {
  name: "TheHome",
  components: {
    ActionButton,
  },
  data() {
    return {
      logo,
      buttonIcon1,
      buttonIcon2,
      menuButtons: [
        {
          id: 1,
          title: "Play vs CPU",
          link: "/",
          icon: buttonIcon1,
          class: "primary-button",
        },
        {
          id: 2,
          title: "Play vs Player",
          link: "/gameboard",
          icon: buttonIcon2,
          class: "secondary-button",
        },
        {
          id: 3,
          title: "Game Rules",
          link: "/",
          icon: null,
          class: "third-button",
        },
      ],
    };
  },
};
</script>
