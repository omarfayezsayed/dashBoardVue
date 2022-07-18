<template>
  <v-app>
    <div id="app">
      <navBar />
      <v-main class="mx-5">
        <router-view />
      </v-main>
    </div>
  </v-app>
</template>
<script>
import navBar from "./components/navBar.vue";
export default {
  name: "App",
  components: {
    navBar,
  },
};
</script>
