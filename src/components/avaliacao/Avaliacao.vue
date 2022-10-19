<template>
  <div class="mb-8">
    <!-- CABEÇALHO -->
    <Pavaliacao/>

    <div style="display: grid; place-items: center;">
      <!-- REQUISITO LIDERANÇA -->
      <Lideranca/>

      <!-- REQUISITO NEGOCIAÇÃO -->
      <Negociacao/>

      <!-- REQUISITO VISÃO SISTÊMICA -->
      <Visao/>

      <!-- REQUISITO RESILIÊNCIA -->
      <Resiliencia/>

      <!-- REQUISITO INOVAÇÃO CRIATIVIDADE -->
      <Inovacao/>

      <!-- REQUISITO TRABALHO EM EQUIPE -->
      <Trabalho/>
    </div>
  </div>
</template>


<script>
import Pavaliacao from '../pesquisas/Pavaliacao.vue'
import Lideranca from './Lideranca.vue'
import Negociacao from './Negociacao.vue'
import Visao from './Visao.vue'
import Resiliencia from './Resiliencia.vue'
import Inovacao from './Inovacao.vue'
import Trabalho from './Trabalho.vue'


export default {
  name: "Avaliacao",

  components: { Lideranca, Negociacao, Visao, Resiliencia, Inovacao, Trabalho, Pavaliacao },
  
}
</script>


<style>

</style>
