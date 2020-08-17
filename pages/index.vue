<template>
  <MainLayout>
    <div class="container mx-auto divide-y-2 divide-black divide-opacity-25">
      <div class="py-4">
        <h2 class="lg:text-3xl text-2xl">Proyectos</h2>
        <Card
          v-for="card in cards"
          :key="card.id"
          :title="card.title"
          :description="card.description"
          :labels="card.labels"
          :url="card.url"
          :img="card.img"
        />
      </div>

      <div class="py-4">
        <h2 class="lg:text-3xl text-2xl">
          Lenguajes, Frameworks, Herramientas, Librerías
        </h2>
        <div class="m-8">
          <img
            class="h-40 inline-block m-4"
            src="https://i.imgur.com/x3CYclw.png"
          />
          <img
            class="h-40 inline-block m-4"
            src="https://i.imgur.com/cFC4rej.png"
          />
          <img class="h-40 inline-block m-4" src="../assets/css.svg" />
          <img
            class="h-40 inline-block m-4"
            src="https://i.imgur.com/9YHOqS6.png"
          />
          <img
            class="h-40 inline-block m-4"
            src="https://i.imgur.com/DGIFtCv.png"
          />
          <img
            class="h-40 inline-block m-4"
            src="https://i.imgur.com/aVSMiAF.png"
          />
          <img
            class="h-40 inline-block m-4"
            src="https://i.imgur.com/xeZOCCj.png"
          />
          <img
            class="h-40 inline-block m-4"
            src="https://i.imgur.com/Omud1zQ.png"
          />
          <img
            class="h-40 inline-block m-4"
            src="https://i.imgur.com/aK5pheS.png"
          />
          <img
            class="h-40 inline-block m-4"
            src="https://i.imgur.com/tVIwnQg.png"
          />
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script>
import Card from '../components/Card.vue';
import MainLayout from '../layouts/MainLayout.vue';

export default {
  name: 'Portfolio',
  components: {
    Card,
    MainLayout,
  },
  data: () => {
    return {
      cards: [
        {
          title: 'Fiestas de Octubre',
          id: 'fiestas',
          description:
            'Mi primer proyecto llevado a producción fue el sitio web de Fiestas de Octubre Guadalajara 2017, para el cual mis nociones de HTML5 eran muy básicas. Inicié con un template como guia y lo personalicé al grado de que quedó identico al mockup que me entregaron. La duración del proyecto fue de una semana.',
          labels: ['Jalisco', 'Evento'],
          url: 'https://alexbarba.github.io/fiestas-de-octubre-2017/',
          img:
            'https://alexbarba.github.io/fiestas-de-octubre-2017/images/home/logo-nuevo.png',
        },
        {
          title: 'Rojo Delicias',
          id: 'rojodelicias',
          description:
            'Sitio web donde publican su información de contacto, su menú (desplegado con vue y un archivo JSON) y fotos de sus platillos. También he realizado: creación del menú, instalacion del sistema Odoo POS (Punto de Venta) y campañas de marketing para obtener followers.',
          labels: ['Restaurante', 'Café', 'Postres'],
          url: 'https://www.rojodelicias.com/',
          img: 'https://www.rojodelicias.com/images/medium/logo-collapsed.png',
        },
        {
          title: 'Teresa López Blog',
          id: 'teresa',
          description:
            'El blog esta hecho con una starter library de Gatsby y se personalizó. Teresa es una escritora recien empezada, aún no es famosa pero algún dia lo será. Su contenido aún está en proceso pero el diseño y la funcionalidad están listos para explotar su talento.',
          labels: ['Blog', 'Literatura'],
          url: 'https://www.teresaescribe.net/',
          img: 'https://i.imgur.com/B8kJUSn.png',
        },
        {
          title: 'Platzi Video',
          id: 'platzivideo',
          description:
            'UI para reproducción de video hecha en React. Proyecto realizado para el curso de React 2017 en la plataforma de educación Platzi.',
          labels: ['React', 'Javascript', 'Platzi'],
          url: 'https://alexbarba.github.io/curso-react/',
          img: 'https://i.imgur.com/la6x97t.png',
        },
        {
          title: 'Calculadora Binaria',
          id: 'binaryCalculator',
          description:
            'Calculadora binaria hecha con Vainilla JS y CSS, usando Regex, a prueba de errores, para el reto "10 Days of Javascript" de Hackerrank',
          labels: ['Calculadora', 'Javascript', 'CSS'],
          url: 'https://alexbarba.github.io/BinaryCalculator/',
          img:
            'https://raw.githubusercontent.com/alexbarba/me/master/assets/binarycalculator.png',
        },
      ],
    };
  },
  head: {
    title: 'Alexis Barba - Portafolio 🚀',
  },
};
</script>
