<template>
  <main-layout>
    <div class="md:flex mt-4 sm:mt-8">
      <div class="md:flex-1 object-center">
        <img
          class="rounded-full shadow-2xl object-none"
          src="https://i.imgur.com/a07iX5a.jpg"
        />
        <div class="m-4">
          <map-marker class="inline p-2 text-letf" />
          <p class="inline p-2">Internet</p>
        </div>
        <div class="block-inline m-4">
          <graduation-cap class="inline p-2" />
          <p class="inline p-2">Sistemas Computacionales | UMG | 2013-2018</p>
        </div>
        <div class="block-inline m-4">
          <PlatziIcon class="inline p-2" />
          <p class="inline p-2">Platzi | 2018-Presente</p>
        </div>
      </div>

      <div class="text-justify m-4 md:flex-1 h-full mt-8">
        <h2 class="lg:text-3xl md:text-lg text-xl">
          Hola, mi nombre es Alexis Barba.
        </h2>
        <p class="lg:text-2xl md:text-md mt-4">
          Soy desarrollador web, con bases sólidas y muchas ganas de seguir
          aprendiendo. Estudié Ing. en Sistemas Computacionales y Cibernética en
          la Universidad Marista de Guadalajara de la cual me gradué en 2018,
          llevo dos años estudiando desarrollo web en Platzi, documentación
          oficial y comunidades, por lo tanto prefiero decir que soy autodidacta
          y amante del open source. Nací en Tepic, Nayarit donde pasé mis
          estudios básicos. Me gustan las matemáticas y las ciencias, pero
          siempre me llamó la atención llevarlas a la pŕactica y por eso me he
          orientado hacia el desarrollo de software. También me gusta hacer
          ejercicio, el emprendimiento, las finanzas, los videojuegos y el
          ajedrez. Me gustaría ser un profesional en IA y en Data Science algún
          día.
        </p>
      </div>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/MainLayout.vue';
import GraduationCap from '../components/icons/GraduationCap';
import MapMarker from '../components/icons/MapMarker';
import PlatziIcon from '../components/icons/PlatziIcon';

export default {
  name: 'About',
  components: {
    MainLayout,
    MapMarker,
    GraduationCap,
    PlatziIcon,
  },
  head: {
    title: 'Alexis Barba - About 🚀',
  },
};
</script>

<style scoped></style>
