<template>
  <main-layout>
    <div
      class="flex flex-col items-center h-full gap-4 p-4 md:flex-row md:gap-8"
    >
      <figure
        class="flex flex-col gap-5 md:gap-8 md:flex-1 justify-items-center"
      >
        <img
          class="object-center object-cover rounded-full shadow-2xl h-[60%]"
          src="https://i.imgur.com/a07iX5a.jpg"
        />
        <figcaption class="grid h-[40%] content-around text-xl gap-4">
          <p>
            <map-marker
              class-name="inline-block text-red-400 mx-2 w-8 h-8"
            />Internet
          </p>

          <p>
            <graduation-cap
              class-name="inline-block text-red-400 mx-2 w-8 h-8"
            />Sistemas Computacionales | UMG | 2013 - 2018
          </p>

          <p>
            <work class-name="inline-block text-red-400 mx-2 w-8 h-8" />Frontend
            Engineer | Htech | 2021 - Current
          </p>
        </figcaption>
      </figure>

      <p
        class="h-full p-4 text-xl text-justify align-middle  md:flex-1 md:text-3xl"
      >
        Mi nombre es Alexis Barba y soy software engineer, me especializo en
        tecnologías web más específicamente en el área de frontend. Estudié Ing.
        en Sistemas Computacionales y Cibernética en la Universidad Marista de
        Guadalajara de la cual me gradué en 2018, estudié algunos años
        desarrollo web por mi cuenta a través de cursos, documentación oficial y
        comunidades, por lo que me gusta decir que soy autodidacta. Me encanta
        el open source, lo uso siempre que puedo y también lo promuevo. Nací en
        Tepic, Nayarit donde pasé mis estudios básicos. Me gustan las
        matemáticas y las ciencias, diría que el software es mi manera de
        generar un cambio en la sociedad. También me gusta hacer ejercicio, el
        emprendimiento, las finanzas, los videojuegos y el ajedrez. Creo en que
        la web 3 es el presente y quiero ser parte de las personas que ayudan a
        construirla.
      </p>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/MainLayout.vue';
import GraduationCap from '../components/icons/GraduationCap';
import MapMarker from '../components/icons/MapMarker';
import Work from '../components/icons/Work';

export default {
  name: 'About',
  components: {
    MainLayout,
    MapMarker,
    GraduationCap,
    Work
  },
  head: {
    title: 'Alexis Barba - About 🚀'
  }
};
</script>

<style scoped></style>
