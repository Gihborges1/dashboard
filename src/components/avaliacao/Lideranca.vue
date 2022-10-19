<template>
  <v-card class="mt-8" elevation="0" tile outlined width="70%">
    <v-card elevation="0" color="#64B5F6" tile dark>
      <v-card-title>Liderança</v-card-title>
    </v-card>
    
    <v-card class="container">    
      <v-text-field
        v-model="avaliacao.li1"
        label="Delega atividades para a equipe?"
        max="10"
        type="number"
        required outlined dense
        class="mt-2"
      ></v-text-field>

      <v-text-field
        v-model="avaliacao.li2"
        label="Busca diminuir os conflitos?"
        value="10"
        max="10"
        type="number"
        required outlined dense
      ></v-text-field>

      <v-text-field
        v-model="avaliacao.li3"
        label="Orienta e acompanha as atividades da equipe?"
        value="10"
        max="10"
        type="number"
        required outlined dense
      ></v-text-field>

      <v-text-field
        v-model="avaliacao.li4"
        label="Está disponível para atender as necessidades da equipe?"
        value="10"
        max="10"
        type="number"
        required outlined dense
      ></v-text-field>

      <v-text-field
        v-model="avaliacao.li5"
        label="Busca o desenvolvimento continuo dos membros da equipe?"
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
  name: "Lideranca",

  computed: {
    ...mapGetters(['avaliacao'])
  },
}
</script>


<style>

</style>
