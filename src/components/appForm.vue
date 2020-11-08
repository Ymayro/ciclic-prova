<template>
   <v-form v-model="valid" ref="appForm">
    <v-container>
      <v-card>
      <v-row align="center" justify="center" width="90%">
        <v-col
          cols="11"
          md="4"
        >
          <v-text-field
            v-model="nome"
            :rules="regraNome"
            label="Nome"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="11"
          md="3"
        >
          <v-currency-field 
            v-model="mensalidade"
            :rules="regraMensal"
            label="Mensalidade (R$)"
            required
          ></v-currency-field >
        </v-col>

        <v-col
          cols="11"
          md="3"
        >
          <v-select
            v-model="tempo"
            :items="tempoArray"
            item-text="texto"
            item-value="valor"
            :rules="regraTempo"
            label="Tempo de Contribuição"
            required
          ></v-select>
        </v-col>
      </v-row>
      <v-divider class="mx-4"></v-divider>
      <v-card-actions>
        <v-spacer />
      <v-btn
        color="#00e1cd"
        rounded
        outlined
        dark
        @click="simular"
      >
        Simular
      </v-btn>
    </v-card-actions>
    </v-card>
    </v-container>
  </v-form>
</template>

<script>
  export default {
    name: 'appForm',

    data: () => ({
      valid: false,
      nome: '',
      mensalidade: null,
      tempo: null,
      tempoArray: [
        {texto: "1 ano", valor: 12},
        {texto: "2 anos", valor: 24},
        {texto: "3 anos", valor: 36},
        {texto: "4 anos", valor: 48},
        {texto: "5 anos", valor: 60},
      ],
      regraNome: [
        v => !!v || 'Favor inserir nome',
      ],
      regraMensal: [
        v => !!v || 'Favor inserir mensalidade',
      ],
      regraTempo: [
        v => !!v || 'Favor selecionar tempo de contribuição',
      ],
    }),
    methods: {
      validar() {
        if(this.$refs.appForm.validate()){
          return true
        } else {
          return false
        }
      },
      simular(){
        if(this.validar()){
          let payload = {
            mensalidade: this.mensalidade,
            tempo: this.tempo,
            nome: this.nome
          }
          this.$store.dispatch("simular", payload)
        }
      }
    }
  }
</script>
