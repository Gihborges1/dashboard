<template>
  <div>
    <v-card class="mt-2 px-4" elevation="0" color="transparent">
      <v-row justify="center">
        <v-col class="mt-4" offset="3">
          <v-select
            v-model="select"
            :items="nomeFuncs"
            label="Pesquisar funcionário"
            outlined dense
          ></v-select>
        </v-col>
        <v-col class="mt-3">
          <v-btn 
            class="mt-1"
            color="primary"
            @click="pesquisa()"
          >
            Pesquisar
          </v-btn>
        </v-col>
      </v-row>
      <v-divider/>
    </v-card>    
  </div>
</template>


<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "Pfuncionarios",

  computed: {
    ...mapGetters(['nomeFuncs'])
  },

  data: () => ({
    select: null,
  }),

  methods: {
    ...mapActions(['pesquisarFunc']),

    pesquisa() {
      this.pesquisarFunc(this.select)
    }
  }
}
</script>


<style>

</style>
