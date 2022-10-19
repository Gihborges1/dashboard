<template>
  <div>
    <!-- CABEÇALHO -->
    <Pfuncionarios/>

    <!-- LISTA DE FUNCIONÁRIOS -->
    <div style="display: grid; place-items: center;">
      <v-card 
        class="mt-8 px-2" 
        elevation="4" 
        tile outlined 
        width="70%"
        v-for="(func, f) in listaFuncionarios" :key="f"
      >
        <v-list>
          <v-list-item>
            <v-list-item-icon>
              <v-icon large class="mt-3">mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ func.nome }}</v-list-item-title>
              <v-list-item-subtitle>{{ func.area }}</v-list-item-subtitle>
              <v-progress-linear
                :value="(func.pot * 10)"
                height="25"
                color="primary"
                dark
              >
                <strong>{{ Math.trunc(func.pot) }}</strong>
              </v-progress-linear>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </div>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';
import Pfuncionarios from '../pesquisas/Pfuncionarios.vue';

export default {
  name: "Funcionarios",

  components: { Pfuncionarios },

  computed: {
    ...mapGetters(['selecionadoFuncs', 'listaFuncionarios'])
  },

  data: () => ({
    cor: "primary",
  }),

    
}
</script>


<style>

</style>
