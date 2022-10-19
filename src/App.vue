<template>
  <v-app>
    <!-- TOOLS -->
    <tools class="mb-16"></tools>

    <v-main>
      <login/>

      <router-view/>
    </v-main>
  </v-app>
</template>


<script>
import Tools from './components/Tools.vue';
import Login from './components/Login.vue';

export default {
  name: 'App',

  components: { Tools, Login },

  // NOME DA GUIA DO NAVEGADOR
  watch: {
    $route: {
      immediate: true,
      handler(to,) {
        document.title = to.meta.title || 'Dashboard';
      }
    },
  },
};
</script>
