<template>
  <v-container grid-list-md>
    <!-- Card -->
    <v-layout class="mb-16" row wrap>
      <v-flex xs12 sm6>
        <v-card>
          <v-img src="https://cdn.quasar.dev/img/parallax1.jpg"> </v-img>
          <v-card-title>
            <h2>Lorem, ipsum dolor.</h2>
          </v-card-title>
          <v-card-text>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="info" class="text-capitalize" text @click="dialog = true">Acción</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6>
        <v-card>
          <v-img src="https://cdn.quasar.dev/img/parallax1.jpg">
            <v-container>
              <v-layout>
                <v-flex>
                  <span class="headline white--text">Lorem, ipsum dolor.</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title>
            <h2>Lorem, ipsum dolor.</h2>
          </v-card-title>
          <v-card-text>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn color="info" text @click="dialog = true">Acción</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

    <!-- Grid colores tipografias -->
    <v-layout wrap>
      <v-flex class="primary" xs12>
        <h1>12</h1>
      </v-flex>
      <v-flex class="secondary" xs6>
        <h1>6</h1>
      </v-flex>
      <v-flex class="error" xs6>
        <h1>6</h1>
      </v-flex>
    </v-layout>
    <v-layout
      class="mt-5 secondary"
      justify-center
      align-center
      style="height: 300px"
    >
      <v-flex class="info" xs3>
        <h1>Centrado</h1>
      </v-flex>
      <v-flex class="pink lighten-1 white--text" xs3>
        <h1>Centrado</h1>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex>
        <h1 class="display-1 text-uppercase">Lorem, ipsum dolor.</h1>
        <h1 class="display-2 primary pa-16 mt-16">Lorem, ipsum dolor.</h1>
        <h1 class="display-3 text-center">Lorem, ipsum dolor.</h1>
        <h1 class="display-4">Lorem, ipsum dolor.</h1>
      </v-flex>
    </v-layout>

    <!-- Dialog -->

    <v-dialog v-model="dialog" width="500" persistent>
      <v-card>
        <v-card-title>Este es el título</v-card-title>
        <v-card-text
          >Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.</v-card-text
        >
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn  @click="dialog = false">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Fin Dialog -->
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
