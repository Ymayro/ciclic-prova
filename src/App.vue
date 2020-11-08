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
    </v-app-bar>
    
    <v-main>
      <v-progress-linear
        :active="carregando"
        :indeterminate="carregando"
        background-color="#b0f86a"
        color="#00e1cd"
      ></v-progress-linear>

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
    carregando(){
      return this.$store.getters.carregando
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
