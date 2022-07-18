<template>
  <nav>
    <v-app-bar clipped-right app>
      <v-app-bar-nav-icon @click="show = !show"></v-app-bar-nav-icon>
      <v-toolbar-title>omarFayez</v-toolbar-title>
      <v-spacer> </v-spacer>
      <v-btn depressed>
        <span>Sign Out</span>
        <v-icon>mdi-accounts-group</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer app class="indigo" v-model="show">
      <v-icon class="white--text" @click="show = !show">mdi-close</v-icon>
      <v-list>
        <v-list-item
          v-for="(link, i) in links"
          :key="i"
          router
          :to="link.router"
          class="my-6"
        >
          <v-list-item-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-content>
            <v-list-item-title class="white--text">{{
              link.text
            }}</v-list-item-title>
          </v-list-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
  <!-- <div class="div">asd</div> -->
</template>

<script>
export default {
  name: "navBar",
  data() {
    return {
      show: false,
      links: [
        { icon: "mdi-view-dashboard", text: "DashBoard", router: "/" },
        {
          icon: "mdi-folder-star-multiple",
          text: "Projects",
          router: "/projects",
        },
        {
          icon: "mdi-account-multiple-check-outline",
          text: "Team",
          router: "/teams",
        },
      ],
    };
  },
};
</script>
