<template>
  <MainLayout>
    <Card
      v-for="card in cards"
      :key="card.id"
      :title="card.title"
      :description="card.description"
      :labels="card.labels"
      :url="card.url"
      :img="card.img"
    />
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
            'Es una estudiante de creación literaria. Aún no es una escritora famosa pero algún dia lo será. Su contenido aún está en proceso pero el diseño y la funcionalidad están listos para explotar su talento.',
          labels: ['Blog', 'Literatura'],
          url: 'https://www.teresaescribe.net/',
          img:
            'https://raw.githubusercontent.com/alexbarba/me/master/assets/teresa.png',
        },
      ],
    };
  },
};
</script>
