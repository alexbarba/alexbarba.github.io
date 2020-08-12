<template>
  <main-layout>
    <div class="content-center md:flex items-center">
      <div class="m-4 lg:m-8 md:flex-1 object-center">
        <img
          class="rounded-full shadow-2xl object-none"
          src="../assets/about.jpg"
        />
        <p class="block text-left">
          <map-marker class="m-4 mx-10 whitespace-pre" />Tepic, Nayarit
        </p>
        <p class="block text-left">
          <graduation-cap class="m-4 mx-10 whitespace-pre" />Ing. Cibernética y
          Sistemas Computacionales
        </p>
      </div>

      <div class="about text-justify m-4 lg:m-8 md:flex-1">
        <h2 class="lg:text-3xl md:text-lg text-xl">
          Hola, mi nombre es Alexis Barba.
        </h2>
        <p class="lg:text-2xl md:text-md text-lg">
          Soy un web developer que se está iniciando profesionalmente, con bases
          sólidas y muchas ganas de aprender. Estudié Ing. en Sistemas
          Computacionales y Cibernética en la Universidad Marista de Guadalajara
          de la cual me gradue en 2018, llevo dos años estudiando poco a poco
          desarrollo web con algunos cursos y documentación oficial por lo tanto
          prefiero decir que soy autodidacta. Soy originario de Tepic, Nayarit
          donde pasé mis estudios básicos. Me gustan las matemáticas y las
          ciencias, pero siempre me llamó la atención llevarlas a la pŕactica y
          por eso me he orientado hacia las ciencias computacionales. También me
          gusta hacer ejercicio, el emprendimiento, las finanzas, los
          videojuegos y el ajedrez. Mis padres tienen una panadería desde que
          nací por lo cual también se hacer pan de todo tipo y conozco la
          ciencia detrás de el proceso.
        </p>
      </div>
    </div>
    <div>
      <h2 class="lg:text-3xl md:text-lg text-xl">
        Lenguajes, Frameworks, Herramientas
      </h2>
      <div class="m-8">
        <img class="h-40 inline-block m-4" src="../assets/js.png" />
        <img class="h-40 inline-block m-4" src="../assets/html5.png" />
        <img class="h-40 inline-block m-4" src="../assets/css.svg" />
        <img class="h-40 inline-block m-4" src="../assets/react.png" />
        <img class="h-40 inline-block m-4" src="../assets/vue.png" />
        <img class="h-40 inline-block m-4" src="../assets/git.png" />
        <img class="h-40 inline-block m-4" src="../assets/graphql.png" />
        <img class="h-40 inline-block m-4" src="../assets/linux.png" />
        <img class="h-40 inline-block m-4" src="../assets/python.png" />
        <img class="h-40 inline-block m-4" src="../assets/code.png" />
      </div>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/MainLayout.vue';
import GraduationCap from '../components/icons/GraduationCap';
import MapMarker from '../components/icons/MapMarker';

export default {
  name: 'About',
  components: {
    MainLayout,
    MapMarker,
    GraduationCap,
  },
};
</script>

<style scoped></style>
