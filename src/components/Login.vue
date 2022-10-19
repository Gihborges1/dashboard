<template>
  <v-dialog
      v-model="dialogLogin"
      fullscreen
      persistent
  >
    <v-card tile color="#031044">
      <v-img
        lazy-src="./../assets/wall.jpg"
        src="./../assets/wall.jpg" 
        max-width="100vw" 
        max-height="100vh"
      ></v-img>
      <div class="centro">
        <v-card 
            width="500"
            light
            color="#E3F2FD"
            elevation="24"
            class="py-4 px-8 rounded-xl"
        >
          <v-form
              ref="forms"
              lazy-validation
          >
            <div class="d-flex flex-column justify-space-between align-center mt-4 mb-12">
              <v-img
                lazy-src="./../assets/logo_4elements.png"
                max-height="250"
                max-width="250"
                src="./../assets/logo_4elements.png"
              ></v-img>
            </div>
          
            <v-text-field
              :value="username"
              @change="setUsername"
              label="Email"
              type="email"
              required outlined
              class="mt-n12"
            ></v-text-field>

            <v-text-field
              :value="password"
              @change="setPassword"
              label="Password"
              type="password"
              required outlined
            ></v-text-field>

            <v-btn
              block
              dark
              color="blue"
              class="my-4"
              @click="fazLogin"
              @keyup.enter="fazLogin"
            >
              Logar
            </v-btn>
          </v-form>
        </v-card>
      </div>
    </v-card>

    <v-snackbar
      v-model="snackbarLogin"
      timeout="4000"
    >
      {{ this.texto }}
    </v-snackbar>

  </v-dialog>
</template>


<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
  name: "Login",

  data: () => ({
    texto : "Usuário ou senha incorretos."
  }),

  computed: {
    ...mapGetters([ 'dialogLogin', 'username', 'password', 'snackbarLogin' ]),
  },

  methods: {
    ...mapMutations([ 'setUsername', 'setPassword' ]),
    ...mapActions([ 'fazLogin' ]),
  }
}
</script>


<style>
.centro {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
