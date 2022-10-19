<template>
  <v-card class="mt-8" elevation="0" tile outlined width="70%">
    <v-card elevation="0" color="#0D47A1" tile dark>
      <v-card-title>Trabalho em equipe</v-card-title>
    </v-card>
    
    <v-card class="container">
      <v-text-field
        v-model="avaliacao.te1"
        label="Há colaboração na execução das tarefas?"
        value="10"
        max="10"
        type="number"
        required outlined dense
        class="mt-2"
      ></v-text-field>

      <v-text-field
        v-model="avaliacao.te2"
        label="Há compartilhamento de ideias e conhecimentos das atividades realizadas?"
        value="10"
        max="10"
        type="number"
        required outlined dense
      ></v-text-field>

      <v-text-field
        v-model="avaliacao.te3"
        label="Busca ter flexibilidade e transparência na comunicação para melhor compreensão?"
        value="10"
        max="10"
        type="number"
        required outlined dense
      ></v-text-field>

      <v-text-field
        v-model="avaliacao.te4"
        label="Busca alinhar objetivos para não comprometer o trabalho como um todo?"
        value="10"
        max="10"
        type="number"
        required outlined dense
      ></v-text-field>

      <v-text-field
        v-model="avaliacao.te5"
        label="Se empenha para desenvolver as tarefas coletivamente?"
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
  name: "Trabalho",

  computed: {
    ...mapGetters(['avaliacao'])
  },
}
</script>


<style>

</style>
