<template>
  <div>
    <v-card class="mt-6 mx-auto" tile width="90%">
      <v-card-title>
        Liderança (LI)
      </v-card-title>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Nº</th>
              <th class="text-left"></th>
              <th class="text-left"></th>
              <th class="text-left"></th>
              <th class="text-left"></th>
              <th class="text-center">Media Geral</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td style="background-color: #2196F3">{{ selecionadoNumericos.notas[1].Maria[0].p1 }}</td>
              <td>{{ selecionadoNumericos.notas[0].Joao[0].p1 }}</td>
              <td>{{ selecionadoNumericos.notas[2].Lucas[0].p1 }}</td>
              <td>{{ selecionadoNumericos.notas[3].Fatima[0].p1 }}</td>
              <td rowspan="5" class="text-center text-h5">{{ selecionadoNumericos.notas[1].Maria[0].li_mg }}</td>
            </tr>
            <tr>
              <td>2</td>
              <td style="background-color: #2196F3">{{ selecionadoNumericos.notas[1].Maria[0].p2 }}</td>
              <td>{{ selecionadoNumericos.notas[0].Joao[0].p2 }}</td>
              <td>{{ selecionadoNumericos.notas[2].Lucas[0].p2 }}</td>
              <td>{{ selecionadoNumericos.notas[3].Fatima[0].p2 }}</td>
            </tr>
            <tr>
              <td>3</td>
              <td style="background-color: #2196F3">{{ selecionadoNumericos.notas[1].Maria[0].p3 }}</td>
              <td>{{ selecionadoNumericos.notas[0].Joao[0].p3 }}</td>
              <td>{{ selecionadoNumericos.notas[2].Lucas[0].p3 }}</td>
              <td>{{ selecionadoNumericos.notas[3].Fatima[0].p3 }}</td>
            </tr>
            <tr>
              <td>4</td>
              <td style="background-color: #2196F3">{{ selecionadoNumericos.notas[1].Maria[0].p4 }}</td>
              <td>{{ selecionadoNumericos.notas[0].Joao[0].p4 }}</td>
              <td>{{ selecionadoNumericos.notas[2].Lucas[0].p4 }}</td>
              <td>{{ selecionadoNumericos.notas[3].Fatima[0].p4 }}</td>
            </tr>
            <tr>
              <td>5</td>
              <td style="background-color: #2196F3">{{ selecionadoNumericos.notas[1].Maria[0].p5 }}</td>
              <td>{{ selecionadoNumericos.notas[0].Joao[0].p5 }}</td>
              <td>{{ selecionadoNumericos.notas[2].Lucas[0].p5 }}</td>
              <td>{{ selecionadoNumericos.notas[3].Fatima[0].p5 }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>

    <v-card class="mt-6 mx-auto" tile width="90%">
      <v-card-title>
        Negociação (NE)
      </v-card-title>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Nº</th>
              <th class="text-left"></th>
              <th class="text-left"></th>
              <th class="text-left"></th>
              <th class="text-left"></th>
              <th class="text-center">Media Geral</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td style="background-color: #2196F3">{{ selecionadoNumericos.notas[1].Maria[1].p1 }}</td>
              <td>{{ selecionadoNumericos.notas[0].Joao[1].p1 }}</td>
              <td>{{ selecionadoNumericos.notas[2].Lucas[1].p1 }}</td>
              <td>{{ selecionadoNumericos.notas[3].Fatima[1].p1 }}</td>
              <td rowspan="5" class="text-center text-h5">{{ selecionadoNumericos.notas[1].Maria[1].ne_mg }}</td>
            </tr>
            <tr>
              <td>2</td>
              <td style="background-color: #2196F3">{{ selecionadoNumericos.notas[1].Maria[1].p2 }}</td>
              <td>{{ selecionadoNumericos.notas[0].Joao[1].p2 }}</td>
              <td>{{ selecionadoNumericos.notas[2].Lucas[1].p2 }}</td>
              <td>{{ selecionadoNumericos.notas[3].Fatima[1].p2 }}</td>
            </tr>
            <tr>
              <td>3</td>
              <td style="background-color: #2196F3">{{ selecionadoNumericos.notas[1].Maria[1].p3 }}</td>
              <td>{{ selecionadoNumericos.notas[0].Joao[1].p3 }}</td>
              <td>{{ selecionadoNumericos.notas[2].Lucas[1].p3 }}</td>
              <td>{{ selecionadoNumericos.notas[3].Fatima[1].p3 }}</td>
            </tr>
            <tr>
              <td>4</td>
              <td style="background-color: #2196F3">{{ selecionadoNumericos.notas[1].Maria[1].p4 }}</td>
              <td>{{ selecionadoNumericos.notas[0].Joao[1].p4 }}</td>
              <td>{{ selecionadoNumericos.notas[2].Lucas[1].p4 }}</td>
              <td>{{ selecionadoNumericos.notas[3].Fatima[1].p4 }}</td>
            </tr>
            <tr>
              <td>5</td>
              <td style="background-color: #2196F3">{{ selecionadoNumericos.notas[1].Maria[1].p5 }}</td>
              <td>{{ selecionadoNumericos.notas[0].Joao[1].p5 }}</td>
              <td>{{ selecionadoNumericos.notas[2].Lucas[1].p5 }}</td>
              <td>{{ selecionadoNumericos.notas[3].Fatima[1].p5 }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>

    <v-card class="mt-6 mx-auto" tile width="90%">
      <v-card-title>
        Visão Sistêmica (VS)
      </v-card-title>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Nº</th>
              <th class="text-left"></th>
              <th class="text-left"></th>
              <th class="text-left"></th>
              <th class="text-left"></th>
              <th class="text-center">Media Geral</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td style="background-color: #2196F3">{{ selecionadoNumericos.notas[1].Maria[2].p1 }}</td>
              <td>{{ selecionadoNumericos.notas[0].Joao[2].p1 }}</td>
              <td>{{ selecionadoNumericos.notas[2].Lucas[2].p1 }}</td>
              <td>{{ selecionadoNumericos.notas[3].Fatima[2].p1 }}</td>
              <td rowspan="5" class="text-center text-h5">{{ selecionadoNumericos.notas[1].Maria[2].vs_mg }}</td>
            </tr>
            <tr>
              <td>2</td>
              <td style="background-color: #2196F3">{{ selecionadoNumericos.notas[1].Maria[2].p2 }}</td>
              <td>{{ selecionadoNumericos.notas[0].Joao[2].p2 }}</td>
              <td>{{ selecionadoNumericos.notas[2].Lucas[2].p2 }}</td>
              <td>{{ selecionadoNumericos.notas[3].Fatima[2].p2 }}</td>
            </tr>
            <tr>
              <td>3</td>
              <td style="background-color: #2196F3">{{ selecionadoNumericos.notas[1].Maria[2].p3 }}</td>
              <td>{{ selecionadoNumericos.notas[0].Joao[2].p3 }}</td>
              <td>{{ selecionadoNumericos.notas[2].Lucas[2].p3 }}</td>
              <td>{{ selecionadoNumericos.notas[3].Fatima[2].p3 }}</td>
            </tr>
            <tr>
              <td>4</td>
              <td style="background-color: #2196F3">{{ selecionadoNumericos.notas[1].Maria[2].p4 }}</td>
              <td>{{ selecionadoNumericos.notas[0].Joao[2].p4 }}</td>
              <td>{{ selecionadoNumericos.notas[2].Lucas[2].p4 }}</td>
              <td>{{ selecionadoNumericos.notas[3].Fatima[2].p4 }}</td>
            </tr>
            <tr>
              <td>5</td>
              <td style="background-color: #2196F3">{{ selecionadoNumericos.notas[1].Maria[2].p5 }}</td>
              <td>{{ selecionadoNumericos.notas[0].Joao[2].p5 }}</td>
              <td>{{ selecionadoNumericos.notas[2].Lucas[2].p5 }}</td>
              <td>{{ selecionadoNumericos.notas[3].Fatima[2].p5 }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>

    <v-card class="mt-6 mx-auto" tile width="90%">
      <v-card-title>
        Resiliência (RE)
      </v-card-title>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Nº</th>
              <th class="text-left"></th>
              <th class="text-left"></th>
              <th class="text-left"></th>
              <th class="text-left"></th>
              <th class="text-center">Media Geral</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td style="background-color: #2196F3">{{ selecionadoNumericos.notas[1].Maria[3].p1 }}</td>
              <td>{{ selecionadoNumericos.notas[0].Joao[3].p1 }}</td>
              <td>{{ selecionadoNumericos.notas[2].Lucas[3].p1 }}</td>
              <td>{{ selecionadoNumericos.notas[3].Fatima[3].p1 }}</td>
              <td rowspan="5" class="text-center text-h5">{{ selecionadoNumericos.notas[1].Maria[3].re_mg }}</td>
            </tr>
            <tr>
              <td>2</td>
              <td style="background-color: #2196F3">{{ selecionadoNumericos.notas[1].Maria[3].p2 }}</td>
              <td>{{ selecionadoNumericos.notas[0].Joao[3].p2 }}</td>
              <td>{{ selecionadoNumericos.notas[2].Lucas[3].p2 }}</td>
              <td>{{ selecionadoNumericos.notas[3].Fatima[3].p2 }}</td>
            </tr>
            <tr>
              <td>3</td>
              <td style="background-color: #2196F3">{{ selecionadoNumericos.notas[1].Maria[3].p3 }}</td>
              <td>{{ selecionadoNumericos.notas[0].Joao[3].p3 }}</td>
              <td>{{ selecionadoNumericos.notas[2].Lucas[3].p3 }}</td>
              <td>{{ selecionadoNumericos.notas[3].Fatima[3].p3 }}</td>
            </tr>
            <tr>
              <td>4</td>
              <td style="background-color: #2196F3">{{ selecionadoNumericos.notas[1].Maria[3].p4 }}</td>
              <td>{{ selecionadoNumericos.notas[0].Joao[3].p4 }}</td>
              <td>{{ selecionadoNumericos.notas[2].Lucas[3].p4 }}</td>
              <td>{{ selecionadoNumericos.notas[3].Fatima[3].p4 }}</td>
            </tr>
            <tr>
              <td>5</td>
              <td style="background-color: #2196F3">{{ selecionadoNumericos.notas[1].Maria[3].p5 }}</td>
              <td>{{ selecionadoNumericos.notas[0].Joao[3].p5 }}</td>
              <td>{{ selecionadoNumericos.notas[2].Lucas[3].p5 }}</td>
              <td>{{ selecionadoNumericos.notas[3].Fatima[3].p5 }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>

    <v-card class="mt-6 mx-auto" tile width="90%">
      <v-card-title>
        Inovação e Criatividade (IC)
      </v-card-title>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Nº</th>
              <th class="text-left"></th>
              <th class="text-left"></th>
              <th class="text-left"></th>
              <th class="text-left"></th>
              <th class="text-center">Media Geral</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td style="background-color: #2196F3">{{ selecionadoNumericos.notas[1].Maria[4].p1 }}</td>
              <td>{{ selecionadoNumericos.notas[0].Joao[4].p1 }}</td>
              <td>{{ selecionadoNumericos.notas[2].Lucas[4].p1 }}</td>
              <td>{{ selecionadoNumericos.notas[3].Fatima[4].p1 }}</td>
              <td rowspan="5" class="text-center text-h5">{{ selecionadoNumericos.notas[1].Maria[4].ic_mg }}</td>
            </tr>
            <tr>
              <td>2</td>
              <td style="background-color: #2196F3">{{ selecionadoNumericos.notas[1].Maria[4].p2 }}</td>
              <td>{{ selecionadoNumericos.notas[0].Joao[4].p2 }}</td>
              <td>{{ selecionadoNumericos.notas[2].Lucas[4].p2 }}</td>
              <td>{{ selecionadoNumericos.notas[3].Fatima[4].p2 }}</td>
            </tr>
            <tr>
              <td>3</td>
              <td style="background-color: #2196F3">{{ selecionadoNumericos.notas[1].Maria[4].p3 }}</td>
              <td>{{ selecionadoNumericos.notas[0].Joao[4].p3 }}</td>
              <td>{{ selecionadoNumericos.notas[2].Lucas[4].p3 }}</td>
              <td>{{ selecionadoNumericos.notas[3].Fatima[4].p3 }}</td>
            </tr>
            <tr>
              <td>4</td>
              <td style="background-color: #2196F3">{{ selecionadoNumericos.notas[1].Maria[4].p4 }}</td>
              <td>{{ selecionadoNumericos.notas[0].Joao[4].p4 }}</td>
              <td>{{ selecionadoNumericos.notas[2].Lucas[4].p4 }}</td>
              <td>{{ selecionadoNumericos.notas[3].Fatima[4].p4 }}</td>
            </tr>
            <tr>
              <td>5</td>
              <td style="background-color: #2196F3">{{ selecionadoNumericos.notas[1].Maria[4].p5 }}</td>
              <td>{{ selecionadoNumericos.notas[0].Joao[4].p5 }}</td>
              <td>{{ selecionadoNumericos.notas[2].Lucas[4].p5 }}</td>
              <td>{{ selecionadoNumericos.notas[3].Fatima[4].p5 }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>

    <v-card class="mt-6 mx-auto" tile width="90%">
      <v-card-title>
        Trabalho em Equipe (TE)
      </v-card-title>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Nº</th>
              <th class="text-left"></th>
              <th class="text-left"></th>
              <th class="text-left"></th>
              <th class="text-left"></th>
              <th class="text-center">Media Geral</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td style="background-color: #2196F3">{{ selecionadoNumericos.notas[1].Maria[5].p1 }}</td>
              <td>{{ selecionadoNumericos.notas[0].Joao[5].p1 }}</td>
              <td>{{ selecionadoNumericos.notas[2].Lucas[5].p1 }}</td>
              <td>{{ selecionadoNumericos.notas[3].Fatima[5].p1 }}</td>
              <td rowspan="5" class="text-center text-h5">{{ selecionadoNumericos.notas[1].Maria[5].te_mg }}</td>
            </tr>
            <tr>
              <td>2</td>
              <td style="background-color: #2196F3">{{ selecionadoNumericos.notas[1].Maria[5].p2 }}</td>
              <td>{{ selecionadoNumericos.notas[0].Joao[5].p2 }}</td>
              <td>{{ selecionadoNumericos.notas[2].Lucas[5].p2 }}</td>
              <td>{{ selecionadoNumericos.notas[3].Fatima[5].p2 }}</td>
            </tr>
            <tr>
              <td>3</td>
              <td style="background-color: #2196F3">{{ selecionadoNumericos.notas[1].Maria[5].p3 }}</td>
              <td>{{ selecionadoNumericos.notas[0].Joao[5].p3 }}</td>
              <td>{{ selecionadoNumericos.notas[2].Lucas[5].p3 }}</td>
              <td>{{ selecionadoNumericos.notas[3].Fatima[5].p3 }}</td>
            </tr>
            <tr>
              <td>4</td>
              <td style="background-color: #2196F3">{{ selecionadoNumericos.notas[1].Maria[5].p4 }}</td>
              <td>{{ selecionadoNumericos.notas[0].Joao[5].p4 }}</td>
              <td>{{ selecionadoNumericos.notas[2].Lucas[5].p4 }}</td>
              <td>{{ selecionadoNumericos.notas[3].Fatima[5].p4 }}</td>
            </tr>
            <tr>
              <td>5</td>
              <td style="background-color: #2196F3">{{ selecionadoNumericos.notas[1].Maria[5].p5 }}</td>
              <td>{{ selecionadoNumericos.notas[0].Joao[5].p5 }}</td>
              <td>{{ selecionadoNumericos.notas[2].Lucas[5].p5 }}</td>
              <td>{{ selecionadoNumericos.notas[3].Fatima[5].p5 }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </div>
</template>


<script>
import { mapGetters } from 'vuex'

export default {
  name: "Maria",

  computed: {
    ...mapGetters(['selecionadoNumericos'])
  }

}
</script>


<style>

</style>
