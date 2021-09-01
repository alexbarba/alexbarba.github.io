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
            v-for="technology in technologies"
            :key="technology.name"
            class="h-40 inline-block m-4"
            :src="technology.src"
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
      technologies: [
        { src: 'https://i.imgur.com/x3CYclw.png', name: 'JavaScript' },
        { src: 'https://i.imgur.com/cFC4rej.png', name: 'HTML5' },
        {
          src:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png',
          name: 'CSS',
        },
        { src: 'https://i.imgur.com/9YHOqS6.png', name: 'React' },
        { src: 'https://i.imgur.com/DGIFtCv.png', name: 'Vue' },
        { src: 'https://i.imgur.com/aVSMiAF.png', name: 'Git' },
        { src: 'https://i.imgur.com/MIfbW7x.png', name: 'NextJS' },
        { src: 'https://i.imgur.com/dt7xOcw.png', name: 'TailwindCSS' },
        { src: 'https://i.imgur.com/aK5pheS.png', name: 'Python' },
        { src: 'https://i.imgur.com/xeZOCCj.png', name: 'Graphql' },
        { src: 'https://i.imgur.com/xNjaHz9.png', name: 'Apollo' },
        { src: 'https://i.imgur.com/Omud1zQ.png', name: 'Linux' },
      ],
      cards: [
        {
          title: 'Cusiin',
          id: 'cusiin',
          description:
            '[en desarrollo] SaaS All-in-one (frontend, backend y dashboard), first-mobile, pensado para facilitar las ventas minoristas online principalmente en la industria restaurantera a bajo coste.',
          labels: [
            'React',
            'NextJS',
            'TailwindCSS',
            'Stripe',
            'GoogleAPI',
            'Serverless',
            'SWR',
            'MongoDB',
            'Strapi',
          ],
          url: 'https://cusiin-git-dev-alexbarba.vercel.app',
          img: 'https://i.imgur.com/xoap3hF.png',
        },
        {
          title: 'Teresa López Blog',
          id: 'teresa',
          description:
            'El blog esta hecho con una starter library de Gatsby y se personalizó. Teresa es una escritora recien empezada, aún no es famosa pero algún dia lo será. Su contenido aún está en proceso pero el diseño y la funcionalidad están listos para explotar su talento.',
          labels: ['React', 'Gatsby', 'Markdown'],
          url: 'https://www.teresaescribe.com',
          img: 'https://i.imgur.com/B8kJUSn.png',
        },
        {
          title: 'Petgram',
          id: 'petgram',
          description: 'PWA hecha en el curso de React Avanzado en Platzi',
          labels: ['PWA', 'React', 'Hooks', 'Apollo', 'Helmet', 'Router'],
          url: 'https://petgram-alexbarba.vercel.app/',
          img: 'https://i.imgur.com/Z7lgRlU.png',
        },
        {
          title: 'Calculadora Binaria',
          id: 'binaryCalculator',
          description:
            'Calculadora binaria hecha con Vanilla JS y CSS, usando Regex, a prueba de errores, para el reto "10 Days of Javascript" de Hackerrank',
          labels: ['Calculadora', 'Javascript', 'CSS'],
          url: 'https://alexbarba.github.io/BinaryCalculator/',
          img: 'https://i.imgur.com/tKNvJ7t.png',
        },
        {
          title: 'Rojo Delicias',
          id: 'rojodelicias',
          description:
            '(2018) Sitio web estatico donde publican su información de contacto, su menú (desplegado con vue y un archivo JSON) y fotos de sus platillos.',
          labels: ['Bootstrap', 'HTML', 'CSS'],
          url: 'https://alexbarba.github.io/rojodelicias-site/',
          img:
            'https://alexbarba.github.io/rojodelicias-site/images/medium/logo-collapsed.png',
        },
        {
          title: 'ERP Estrella',
          id: 'estrella',
          description:
            '[en desarrollo] El proyecto comienza con un módulo de inventario y posteriormente se irán añadiendo módulos para las ventas y demás necesidades de datos de la empresa. En este proyecto utilicé una base de datos Mongo en Mongo Cloud, Apollo Server para administrar las querys y mutaciones, y en la parte del frontend React y Apollo Client.',
          labels: ['React', 'Apollo', 'Graphql', 'Mongo', 'Express'],
          url: 'https://estrella-erp.vercel.app/',
          img: 'https://i.imgur.com/XcP2hAU.png',
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
          title: 'Fiestas de Octubre',
          id: 'fiestas',
          description:
            'Mi primer proyecto llevado a producción fue el sitio web de Fiestas de Octubre Guadalajara 2017, para el cual mis nociones de HTML5 eran muy básicas. Inicié con un template como guia y lo personalicé al grado de que quedó identico al mockup que me entregaron. La duración del proyecto fue de una semana.',
          labels: ['Jalisco', 'Evento'],
          url: 'https://alexbarba.github.io/fiestas-de-octubre-2017/',
          img:
            'https://alexbarba.github.io/fiestas-de-octubre-2017/images/home/logo-nuevo.png',
        },
      ],
    };
  },
  head: {
    title: 'Alexis Barba - Portafolio 🚀',
  },
};
</script>
