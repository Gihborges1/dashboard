<template>
  <div class="mb-12">
    <!-- CABEÇALHO -->
    <Pnumericos/>

    <!-- INFOS -->
    <div style="display: grid; place-items: center;" v-show="selecionadoNumericos.user !== ''">
      <v-card 
        class="mt-8 px-2" 
        elevation="1" 
        tile outlined 
        width="70%"
      >
        <v-list>
          <v-list-item>
            <v-list-item-icon>
              <v-icon large class="mt-2 ">mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-subtitle><strong>Nome:</strong> {{ this.selecionadoNumericos.nome }}</v-list-item-subtitle>
              <v-list-item-subtitle><strong>Data Nascimento:</strong> {{ this.calcularIdade(this.selecionadoNumericos.nasc) }} anos</v-list-item-subtitle>
              <v-list-item-subtitle><strong>Área:</strong> {{ this.selecionadoNumericos.area }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </div>

    <Joao v-show="selecionadoNumericos.user === 'Joao'"/>
    <Maria v-show="selecionadoNumericos.user === 'Maria'"/>
    <Lucas v-show="selecionadoNumericos.user === 'Lucas'"/>
    <Fatima v-show="selecionadoNumericos.user === 'Fatima'"/>

  </div>
</template>


<script>
import { mapGetters } from 'vuex';
import Pnumericos from '../pesquisas/Pnumericos.vue';
import Joao from './tables/Joao.vue';
import Maria from './tables/Maria.vue';
import Lucas from './tables/Lucas.vue';
import Fatima from './tables/Fatima.vue';

export default {
  name: "Numericos",

  components: { Joao, Maria, Lucas, Fatima, Pnumericos },

  computed: {
    ...mapGetters(['selecionadoNumericos'])
  },

  data: () => ({
    
  }),

  methods: {
    calcularIdade(nasc) {
      const today = new Date();
      const birthDate = new Date(nasc);
      const yearsDifference = today.getFullYear() - birthDate.getFullYear();
    
      if (
        today.getMonth() < birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
      ) {
        return yearsDifference - 1;
      }
    
      return yearsDifference;
    }
  },
}
</script>


<style>

</style>
