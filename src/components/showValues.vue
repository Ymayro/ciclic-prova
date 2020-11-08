<template>
    <v-container>
    <v-card v-if="informacao">
      <v-row align="center" justify="center">
        <v-col
          cols="12"
          md="4"
        >
        <v-card-title>
        Olá {{informacao.nome}}
        </v-card-title>
        <v-card-text>
        Juntando <b>R$ {{informacao.mensalidade}}</b> todo mês, você terá <b>R$ {{resultado}}</b> em {{informacao.tempo / 12}} ano(s)
        
        </v-card-text>
          
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
        @click="simularNovamente"
      >
        Simular Novamente
      </v-btn>
    </v-card-actions>
    </v-card>
    <v-card v-else>
      <v-row align="center" justify="center">
        <v-col
          cols="12"
          md="4"
        >
        <v-card-title>
        Você não simulou nada ainda
        </v-card-title>
        <v-card-text>
        Você ainda não simulou um possível investimento. Clique no botão abaixo para voltar a página inicial.
        </v-card-text>
          
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
        @click="simularNovamente"
      >
        Voltar
      </v-btn>
    </v-card-actions>
    </v-card>
    </v-container>
</template>

<script>
import router from '@/router'

  export default {
    name: 'appForm',
    computed:{
        informacao(){
            return this.$store.getters.informacoes
        },
        resultado(){
            return Number(this.$store.getters.resultado.result).toFixed(2)
        }
    },
    data: () => ({
      
    }),
    methods: {
      simularNovamente(){
          router.push('/')
      },
    }
  }
</script>
