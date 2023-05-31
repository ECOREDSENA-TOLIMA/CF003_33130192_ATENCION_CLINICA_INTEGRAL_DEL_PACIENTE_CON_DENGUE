<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p(data-aos="fade-right").mb-5 El dengue es una de las patologías infecciosas de mayor impacto y constituye un tema cuya vigilancia, prevención y control revisten especial interés en salud pública. Es así como en el siguiente, video se presentan a manera de introducción, los principales elementos propuestos en el componente formativo como aporte a la atención integral del paciente con dengue:
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/7T509_r9Dbg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video: Leyenda del video
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
