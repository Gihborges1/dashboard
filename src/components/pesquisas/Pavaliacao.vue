<template>
  <!-- CABEÇALHO -->
  <v-card class="mt-2 px-4" elevation="0" color="transparent">
    <v-row>
      <v-col class="mt-4">
        <v-text-field
          label="Avaliador"
          :value="avaliador"
          required readonly outlined dense
        ></v-text-field>
      </v-col>

      <v-col class="mt-4">
        <v-text-field
          label="Setor"
          :value="area"
          required readonly outlined dense
        ></v-text-field>
      </v-col>

      <v-spacer/>

      <v-col class="mt-4">
        <v-select
          v-model="select"
          :items="nomeFuncs"
          label="Avaliado"
          required outlined dense
        ></v-select>
      </v-col>

      <v-col cols="1">
        <v-btn 
          class="mt-4"
          color="primary"
          @click="abreSnackEnvia"
        >
          Enviar
        </v-btn>
      </v-col>
    </v-row>
    <v-divider/>

    <v-snackbar
      v-model="snackbarEnvia"
      timeout="4000"
    >
      {{ this.texto }}
    </v-snackbar>
  </v-card>
</template>


<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "Pavaliacao",

  computed: {
    ...mapGetters(['avaliador', 'area', 'nomeFuncs', 'avaliacao', 'snackbarEnvia'])
  },

  data: () => ({
    select: null,
    cor: "",
    texto : "Enviado com sucesso."
  }),

  methods: {
    ...mapActions(['abreSnackEnvia']),
  }
}
</script>


<style>

</style>
