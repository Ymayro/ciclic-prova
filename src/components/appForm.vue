<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'appForm',

    data: () => ({
      
    }),
  }
</script>
