<template>
  <div>
    <!-- NAV DRAWER: MENU LATERAL -->
    <v-navigation-drawer
        :mini-variant="mini"
        permanent
        app
    >
      <v-list
        nav
        dense
      >
        <v-list-item
          :value="false"
          to="/"
          v-show="area != 'admin'"
          color="primary"
        >
          <v-icon>mdi-file-account-outline</v-icon>
        </v-list-item>

        <v-list-item-group
          v-model="group"
          active-class="primary--text text--accent-4"
          v-show="area == 'admin'"
        >
          <v-list-item
              v-for="(item, i) in items"
              :key="'I' + i"
              :to="item.url"
          >
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <!-- CHANGE THEME -->
          <v-btn
              @click="changeTheme"
              :color="colorThema"
              icon
          >
            <v-icon v-if="$vuetify.theme.dark">mdi-brightness-3</v-icon>
            <v-icon v-if="$vuetify.theme.dark === false">mdi-brightness-5</v-icon>
          </v-btn>

          <v-btn 
            dark icon 
            color="blue" 
            @click="fazLogout"
          >
             <v-icon>mdi-power</v-icon>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    
    <!-- APP BAR: MENU TOPO -->
    <v-app-bar 
      fixed
    >
      <v-spacer/>
      <v-toolbar-title>{{ $route.name }}</v-toolbar-title>
      <v-spacer/>

      <v-img
        src="./../assets/logo_4elements.png"
        max-width="69"
        max-height="69"
        class="mt-1"
      >
      </v-img>
    </v-app-bar>
  </div>
</template>


<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  components: {  },

  name: "Tools",

  computed: {
    ...mapGetters(['area'])
  },

  data() {
    return {
      thema: false,
      colorThema: '',

      drawer: false,
      group: null,
      selectedItem: 0,
      mini: true,

      items: [
        {icon: 'mdi-file-account-outline', url: '/'},
        {icon: 'mdi-lightbulb-outline', url: '/funcionarios'},
        {icon: 'mdi-chart-line', url: '/dadosGraficos'},
        {icon: 'mdi-chart-box-outline', url: '/dadosNumericos'},
      ],
    }
  },

  methods: {
    ...mapActions([ 'fazLogout' ]),

    changeTheme() {
      if (this.thema === false) {
        this.thema = true
        this.colorThema = 'primary'
      } else {
        this.thema = false
        this.colorThema = ''
      }

      this.$vuetify.theme.dark = this.thema
    },
  }
}
</script>


<style scoped>

</style>
