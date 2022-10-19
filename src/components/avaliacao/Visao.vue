<template>
  <v-card class="mt-8" elevation="0" tile outlined width="70%">
    <v-card elevation="0" color="#1E88E5" tile dark>
      <v-card-title>Visão Sistêmica</v-card-title>
    </v-card>
    
    <v-card class="container">
      <v-text-field
        v-model="avaliacao.vs1"
        label="Identifica os motivadores da rotatividade na empresa?"
        value="10"
        max="10"
        type="number"
        required outlined dense
        class="mt-2"
      ></v-text-field>

      <v-text-field
        v-model="avaliacao.vs2"
        label="Observa a aceitação da liderança?"
        value="10"
        max="10"
        type="number"
        required outlined dense
      ></v-text-field>

      <v-text-field
        v-model="avaliacao.vs3"
        label="Observa a satisfação dos funcionários com empresa?"
        value="10"
        max="10"
        type="number"
        required outlined dense
      ></v-text-field>

      <v-text-field
        v-model="avaliacao.vs4"
        label="Preocupa com a segurança no ambiente de trabalho durantes as atividades?"
        value="10"
        max="10"
        type="number"
        required outlined dense
      ></v-text-field>

      <v-text-field
        v-model="avaliacao.vs5"
        label="Identifica as causas dos erros ocorridos durante os processos?"
        value="10"
        max="10"
        type="number"
        required outlined dense
        class="mb-n3"
      ></v-text-field>
    </v-card>
  </v-card>
</template>


<script>
import { mapGetters } from 'vuex'

export default {
  name: "Visao",

  computed: {
    ...mapGetters(['avaliacao'])
  },
}
</script>


<style>

</style>
