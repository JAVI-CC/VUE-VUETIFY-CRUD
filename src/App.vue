<template>
  <v-app>
    <v-app-bar app color="blue darken-3">
      <v-app-bar-nav-icon
        class="white--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <router-link class="text-decoration-none" :to="{ name: 'home' }">
        <v-toolbar-title class="headline white--text row-pointer">Vuetify</v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <v-btn class="ma-2" color="success" :to="{ name: 'botones' }"
        >styles buttons</v-btn
      >
      <v-btn class="ma-2" :to="{ name: 'grid' }" color="error">Grid</v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" temporary dark>
      <v-layout mt-4 column align-center>
        <v-flex>
          <v-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" alt="" />
          </v-avatar>
        </v-flex>
        <v-flex>
          <p class="white--text mt-3 headline">User Random</p>
        </v-flex>
      </v-layout>
      <v-layout column>
        <v-flex class="mx-3">
          <v-btn class="mb-2" block color="success" :to="{ name: 'home' }"
            >Inicio</v-btn
          >
          <v-btn
            class="mb-2"
            block
            color="success"
            :to="{ name: 'tareas-crud' }"
            >Lista de tareas</v-btn
          >
        </v-flex>
      </v-layout>
    </v-navigation-drawer>

    <!-- <v-app-bar app class="mb-20">
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>open_in_new</v-icon>
      </v-btn>
    </v-app-bar> -->

    <v-main class="mt-8">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
