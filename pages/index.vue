<template>
  <MainLayout>
    <div
      class="grid grid-flow-row-dense gap-4 mx-4  justify-items-center md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
    >
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
  </MainLayout>
</template>

<script>
import Card from '../components/Card.vue';
import MainLayout from '../layouts/MainLayout.vue';

export default {
  name: 'Portfolio',
  components: {
    Card,
    MainLayout
  },
  data: () => {
    return {
      cards: [
        {
          title: 'Cusiin',
          id: 'cusiin',
          description:
            'SaaS All-in-one (frontend, backend y dashboard), first-mobile, pensado para facilitar las ventas minoristas online principalmente en la industria restaurantera a bajo coste.',
          labels: [
            'React',
            'NextJS',
            'TailwindCSS',
            'Stripe',
            'GoogleAPI',
            'Serverless',
            'SWR',
            'MongoDB',
            'Strapi'
          ],
          url: 'https://rojodelicias.com',
          img: 'https://i.imgur.com/xoap3hF.png'
        },
        {
          title: 'Teresa López Blog',
          id: 'teresa',
          description:
            'El blog esta hecho con una starter library de Gatsby y se personalizó. Teresa es una escritora recien empezada, aún no es famosa pero algún dia lo será. Su contenido aún está en proceso pero el diseño y la funcionalidad están listos para explotar su talento.',
          labels: ['React', 'Gatsby', 'Markdown'],
          url: 'https://www.teresaescribe.com',
          img: 'https://i.imgur.com/B8kJUSn.png'
        },
        {
          title: 'Calculadora Binaria',
          id: 'binaryCalculator',
          description:
            'Calculadora binaria hecha con Vanilla JS y CSS, usando Regex, a prueba de errores, para el reto "10 Days of Javascript" de Hackerrank',
          labels: ['Calculadora', 'Javascript', 'CSS'],
          url: 'https://alexbarba.github.io/BinaryCalculator/',
          img: 'https://i.imgur.com/tKNvJ7t.png'
        },
        {
          title: 'Petgram',
          id: 'petgram',
          description: 'PWA hecha en el curso de React Avanzado en Platzi',
          labels: ['PWA', 'React', 'Hooks', 'Apollo', 'Helmet', 'Router'],
          url: 'https://petgram-alexbarba.vercel.app/',
          img: 'https://i.imgur.com/Z7lgRlU.png'
        },
        {
          title: 'Rick and Morty',
          id: 'rickandmorty',
          description:
            'Consumo de la API de Rick and Morty para mostrar una lista de los personajes, con manejo de favoritos, buscador y darkmode, hecha en el curso de Reac Hooks de Platzi',
          labels: ['React', 'React Hooks', 'Tailwind'],
          url: 'https://rickyandmorty.vercel.app/',
          img: 'https://i.imgur.com/DFzcIjp.png'
        },
        {
          title: 'Platzi Video',
          id: 'platzivideo',
          description:
            'UI para reproducción de video hecha en React. Proyecto realizado para el curso de React 2017 en la plataforma de educación Platzi.',
          labels: ['React'],
          url: 'https://alexbarba.github.io/curso-react/',
          img: 'https://i.imgur.com/la6x97t.png'
        },
        {
          title: 'Rojo Delicias',
          id: 'rojodelicias',
          description:
            '(2018) Sitio web estatico donde publican su información de contacto, su menú (desplegado con vue y un archivo JSON) y fotos de sus platillos.',
          labels: ['Bootstrap', 'HTML', 'CSS'],
          url: 'https://alexbarba.github.io/rojodelicias-site/',
          img: 'https://alexbarba.github.io/rojodelicias-site/images/medium/logo-collapsed.png'
        },
        {
          title: 'Fiestas de Octubre',
          id: 'fiestas',
          description:
            'Mi primer proyecto llevado a producción fue el sitio web de Fiestas de Octubre Guadalajara 2017, para el cual mis nociones de HTML5 eran muy básicas. Inicié con un template como guia y lo personalicé al grado de que quedó identico al mockup que me entregaron. La duración del proyecto fue de una semana.',
          labels: ['HTML', 'CSS', 'Bootstrap'],
          url: 'https://alexbarba.github.io/fiestas-de-octubre-2017/',
          img: 'https://alexbarba.github.io/fiestas-de-octubre-2017/images/home/logo-nuevo.png'
        }
      ]
    };
  },
  head: {
    title: 'Alexis Barba - Portafolio 🚀'
  }
};
</script>

