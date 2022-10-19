<template>
  <v-card class="mt-8" elevation="0" tile outlined width="70%">
    <v-card elevation="0" color="#1565C0" tile dark>
      <v-card-title>Inovação e Criatividade</v-card-title>
    </v-card>
    
    <v-card class="container">
      <v-text-field
        v-model="avaliacao.ic1"
        label="Proporciona incentivos para equipe dar novas ideias?"
        value="10"
        max="10"
        type="number"
        required outlined dense
        class="mt-2"
      ></v-text-field>

      <v-text-field
        v-model="avaliacao.ic2"
        label="Desenvolve novos métodos para execução de tarefas?"
        value="10"
        max="10"
        type="number"
        required outlined dense
      ></v-text-field>

      <v-text-field
        v-model="avaliacao.ic3"
        label="Buscar atender o cliente de forma diferenciada, conforme seu perfil?"
        value="10"
        max="10"
        type="number"
        required outlined dense
      ></v-text-field>

      <v-text-field
        v-model="avaliacao.ic4"
        label="Esta atendo as mudança do mercado para as devidas adequações?"
        value="10"
        max="10"
        type="number"
        required outlined dense
      ></v-text-field>

      <v-text-field
        v-model="avaliacao.ic5"
        label="Busca desenvolver novos produtos?"
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
  name: "Inovacao",

  computed: {
    ...mapGetters(['avaliacao'])
  },
}
</script>


<style>

</style>
