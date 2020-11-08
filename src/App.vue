<template>
  <v-app>
    <v-app-bar
    app
    class="grad"
    >
    <div class="d-flex align-center">
        <v-img
          class="shrink mr-2"
          src="@/assets/logo.png"
          transition="scale-transition"
        />
      </div>
      <!-- <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">{{test}}</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-main>
      <v-row align="center" justify="center" width="90%">
        <v-col
          cols="12"
        >
          <router-view />
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
// import appForm from './components/appForm';

export default {
  name: 'App',

  components: {
    // appForm,
  },
  computed: {
    test(){
      return this.$store.getters.resultado
    }
  },
  data: () => ({
    //
  }),
};
</script>
<style scoped>
.grad {
  background-image: linear-gradient(to right, #ffffff, #ECF7D0, #b0f86a, #00e1cd);
}
</style>
