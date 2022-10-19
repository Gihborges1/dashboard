<template>
  <div>
    <!-- CABEÇALHO -->
    <Pgraficos/>

    <!-- INFOS -->
    <div style="display: grid; place-items: center;" v-show="selecionadoGraficos.user !== ''">
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
              <v-list-item-subtitle><strong>Nome:</strong> {{ this.selecionadoGraficos.nome }}</v-list-item-subtitle>
              <v-list-item-subtitle><strong>Data Nascimento:</strong> {{ this.calcularIdade(this.selecionadoGraficos.nasc) }} anos</v-list-item-subtitle>
              <v-list-item-subtitle><strong>Área:</strong> {{ this.selecionadoGraficos.area }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </div>

    <Joaografico v-show="selecionadoGraficos.user === 'Joao'"/>
    <Mariagrafico v-show="selecionadoGraficos.user === 'Maria'"/>
    <Lucasgrafico v-show="selecionadoGraficos.user === 'Lucas'"/>
    <Fatimagrafico v-show="selecionadoGraficos.user === 'Fatima'"/>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';
import Pgraficos from '../pesquisas/Pgraficos.vue';
import Joaografico from './Joaografico.vue';
import Mariagrafico from './Mariagrafico.vue';
import Lucasgrafico from './Lucasgrafico.vue';
import Fatimagrafico from './Fatimagrafico.vue';

export default {
  name: "Graficos",

  components: { Joaografico, Mariagrafico, Lucasgrafico, Fatimagrafico, Pgraficos },

  computed: {
    ...mapGetters(['selecionadoGraficos'])
  },

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
  }
}
</script>


<style>

</style>
