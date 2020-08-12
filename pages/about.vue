<template>
  <main-layout>
    <div class="content-center md:flex items-center">
      <div class="m-4 lg:m-8 md:flex-1 object-center">
        <img
          class="rounded-full shadow-2xl object-none"
          src="../assets/about.jpg"
        />
        <div class="m-4">
          <map-marker class="inline p-2 text-letf" />
          <p class="inline p-2">
            Tepic, Nayarit
          </p>
        </div>
        <div class="block-inline m-4">
          <graduation-cap class="inline p-2" />
          <p class="inline p-2">
            Ing. Cibernética y Sistemas Computacionales
          </p>
        </div>
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
  head: {
    title: 'Alexis Barba - About 🚀',
  },
};
</script>

<style scoped></style>
