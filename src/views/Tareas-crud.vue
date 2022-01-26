<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex md6>
        <v-card
          class="mb-6"
          v-for="(item, index) in listaTareas"
          :key="item.id"
        >
          <v-card-text>
            <v-chip label color="pink" text-color="white" class="ml-0 mb-2">
              <v-icon left>label</v-icon>
              {{ item.titulo }}
            </v-chip>
            <p>
              {{ item.descripcion }}
            </p>
            <v-btn class="mr-2 ml-0" color="warning" @click="editar(index)"
              >Editar</v-btn
            >
            <v-btn class="mr-2" color="error" @click="eliminarTarea(item.id)" :disabled="editandoTarea"
              >Eliminar</v-btn
            >
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex md6 v-if="formAgregar">
        <v-card class="mb-6 pa-6">
          <v-form @submit.prevent="agregarTarea">
            <v-text-field label="Titulo de la tarea" v-model="titulo">
            </v-text-field>
            <v-textarea
              label="Descripcion de la tarea"
              v-model="descripcion"
            ></v-textarea>
            <v-btn block color="success" type="submit">Agregar Tarea</v-btn>
          </v-form>
        </v-card>
      </v-flex>

      <v-flex md6 v-else>
        <v-card class="mb-6 pa-6">
          <v-form @submit.prevent="editarTarea">
            <v-text-field label="Titulo de la tarea" v-model="titulo">
            </v-text-field>
            <v-textarea
              label="Descripcion de la tarea"
              v-model="descripcion"
            ></v-textarea>
            <v-btn block color="warning" type="submit">Editar Tarea</v-btn>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>

    <v-snackbar v-model="snackbar">
      {{ mensaje }}
      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false"
          >Cerrar</v-btn
        >
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      listaTareas: [
        {
          id: 1,
          titulo: "Titulo Tarea #1",
          descripcion:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          id: 2,
          titulo: "Titulo Tarea #2",
          descripcion:
            "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      ],
      titulo: "",
      descripcion: "",
      snackbar: false,
      mensaje: "",
      formAgregar: true,
      indexTarea: "",
      editandoTarea: false,
    };
  },
  methods: {
    agregarTarea() {
      if (this.titulo === "" || this.descripcion === "") {
        this.snackbar = true;
        this.mensaje = "Rellena todos los campos!";
      } else {
        this.listaTareas.push({
          id: Date.now(),
          titulo: this.titulo,
          descripcion: this.descripcion,
        });
        (this.titulo = ""), (this.descripcion = "");
        this.snackbar = true;
        this.mensaje = "Tarea agregada!";
      }
    },
    eliminarTarea(id) {
      this.listaTareas = this.listaTareas.filter((e) => e.id !== id);
    },
    editar(index) {
      this.formAgregar = false;
      this.titulo = this.listaTareas[index].titulo;
      this.descripcion = this.listaTareas[index].descripcion;
      this.editandoTarea = true
      this.indexTarea = index;
    },
    editarTarea() {
      this.listaTareas[this.indexTarea].titulo = this.titulo;
      this.listaTareas[this.indexTarea].descripcion = this.descripcion;
      this.titulo = "";
      this.descripcion = "";
      this.formAgregar = true;
      this.snackbar = true
      this.editandoTarea = false
      this.mensaje = 'Tarea editada'
    },
  },
};
</script>
