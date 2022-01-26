<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-btn class="ma-2">Texto</v-btn>

        <v-btn class="ma-2" color="primary">Texto</v-btn>

        <v-btn dark class="ma-2" color="blue">Texto</v-btn>

        <v-btn class="ma-2" color="secondary" text>Sin Fondo</v-btn>

        <v-btn class="ma-2" color="warning" Large>Largo</v-btn>
        <v-btn class="ma-2" color="warning" small>Largo</v-btn>

        <v-btn class="ma-2" color="warning" large :disabled="true">Largo</v-btn>

        <v-btn class="ma-2" color="info" depressed>Botón</v-btn>

        <v-btn class="ma-2">
          <v-icon>forum</v-icon>
        </v-btn>

        <v-btn class="ma-2" color="primary" icon text>
          <v-icon>forum</v-icon>
        </v-btn>

        <v-btn class="ma-2" color="primary" icon fab>
          <v-icon>forum</v-icon>
        </v-btn>

        <v-btn class="ma-2" color="primary" fab small>
          <v-icon>forum</v-icon>
        </v-btn>

        <v-btn class="ma-2" color="primary" fab large>
          <v-icon>forum</v-icon>
        </v-btn>

        <v-btn class="ma-2" color="success"
          >Texto
          <v-icon>forum</v-icon>
        </v-btn>

        <v-btn class="ma-2" color="success"
          >Texto
          <v-icon class="ml-2">forum</v-icon>
        </v-btn>

        <v-btn class="ma-2" color="success"
          >Texto
          <v-icon right>forum</v-icon>
        </v-btn>

        <v-btn class="ma-2" color="success">
          <v-icon left>forum</v-icon>
          Texto
        </v-btn>

        <v-btn class="ma-2" color="success" outlined>
          <v-icon left>forum</v-icon>
          Texto
        </v-btn>

         <v-btn class="ma-2" color="success" rounded>
          <v-icon left>forum</v-icon>
          Texto
        </v-btn>

        <v-btn class="ma-2" color="success" block>
          <v-icon left>forum</v-icon>
          Texto
        </v-btn>


      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
