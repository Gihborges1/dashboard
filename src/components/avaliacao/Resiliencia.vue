<template>
  <v-card class="mt-8" elevation="0" tile outlined width="70%">
    <v-card elevation="0" color="#1976D2" tile dark>
      <v-card-title>Resiliência</v-card-title>
    </v-card>
    
    <v-card class="container">
      <v-text-field
        v-model="avaliacao.re1"
        label="Mantem o controle em situações adversas?"
        value="10"
        max="10"
        type="number"
        required outlined dense
        class="mt-2"
      ></v-text-field>

      <v-text-field
        v-model="avaliacao.re2"
        label="Mantem a produtividade trabalhando sob pressão?"
        value="10"
        max="10"
        type="number"
        required outlined dense
      ></v-text-field>

      <v-text-field
        v-model="avaliacao.re3"
        label="Administra  conflitos?"
        value="10"
        max="10"
        type="number"
        required outlined dense
      ></v-text-field>

      <v-text-field
        v-model="avaliacao.re4"
        label="Se adapta  a qualquer ambiente?"
        value="10"
        max="10"
        type="number"
        required outlined dense
      ></v-text-field>

      <v-text-field
        v-model="avaliacao.re5"
        label="Mantem o foco independente das circunstâncias?"
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
  name: "Resiliencia",

  computed: {
    ...mapGetters(['avaliacao'])
  },
}
</script>


<style>

</style>
