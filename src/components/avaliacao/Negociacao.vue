<template>
  <v-card class="mt-8" elevation="0" tile outlined width="70%">
    <v-card elevation="0" color="#42A5F5" tile dark>
      <v-card-title>Negociação</v-card-title>
    </v-card>
    
    <v-card class="container">
      <v-text-field
        v-model="avaliacao.ne1"
        label="Negocia preço com  fornecedores?"
        value="10"
        max="10"
        type="number"
        required outlined dense
        class="mt-2"
      ></v-text-field>

      <v-text-field
        v-model="avaliacao.ne2"
        label="Verifica se há benefícios para compra no atacado?"
        value="10"
        max="10"
        type="number"
        required outlined dense
      ></v-text-field>

      <v-text-field
        v-model="avaliacao.ne3"
        label="O frete/entrega é negociável?"
        value="10"
        max="10"
        type="number"
        required outlined dense
      ></v-text-field>

      <v-text-field
        v-model="avaliacao.ne4"
        label="É oferecido alternativas no pagamento?"
        value="10"
        max="10"
        type="number"
        required outlined dense
      ></v-text-field>

      <v-text-field
        v-model="avaliacao.ne5"
        label="Identificar o que a concorrência oferece é uma preocupação?"
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
  name: "Negociacao",

  computed: {
    ...mapGetters(['avaliacao'])
  },
}
</script>


<style>

</style>
