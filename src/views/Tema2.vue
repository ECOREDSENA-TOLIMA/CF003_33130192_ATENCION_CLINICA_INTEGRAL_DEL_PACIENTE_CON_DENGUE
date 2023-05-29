<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Estrategias
    
    p(data-aos="fade-up").mb-5 La vigilancia en el control de los mosquitos es prácticamente inexistente en la mayoría de los países donde el dengue es endémico.
    
    .tarjeta.color-secundario.p-4.p-md-5.mb-5
      .row.justify-content-around.align-items-center
        .col-8.col-sm-5.col-md-4.mb-4.mb-md-0
          img(src="@/assets/curso/temas/tema2/img1.svg")

        .col-md.col-lg-6
          p(data-aos="fade-up") La vigilancia debe ser regular a través de:
          ul.lista-ul--color.ps-3
            li
              i.lista-ul__vineta.txt--green
              | Notificación semanal de casos probables.
            li
              i.lista-ul__vineta.txt--green
              | Búsqueda activa institucional trimestral de casos.
            li
              i.lista-ul__vineta.txt--green
              | Toma de muestras de suero o tejidos para la confirmación diagnóstica en casos fatales.
            li
              i.lista-ul__vineta.txt--green
              | Vigilancia viral, orientación y evaluación de las medidas de control.
    
    p(data-aos="fade-up").mb-5 En los departamentos y ciudades, donde haya vectores presentes sin virus circulante, los planes de preparación y respuesta se deben centrar en estrategias para disminuir los riesgos de transmisión de acuerdo a lineamientos establecidos, que se destacan a continuación: 

    .row.justify-content-center.mb-5
      .col-10.tarjeta.color-primario
          SlyderB.mb-5(:datos="datosSlyder").mt-4

    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Orientación y evaluación de las medidas de control

    p(data-aos="fade-up").mb-5 En regiones o zonas sin historia de dengue es preciso verificar el cuadro clínico y explorar los antecedentes de desplazamiento del paciente por alguna zona con transmisión activa de la enfermedad, de forma que sea posible establecer si se trata de un caso importado o de un caso autóctono para proceder a las investigaciones entomológicas respectivas en el área que implican: 

    .row.justify-content-center.mb-5
      .col-sm-5.col-lg-5.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-4
          .crd.crd--avatarHorizontal.crd--first.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/tema2/img9.svg", alt="alt")
              .col
                p ● Realizar investigación de campo para establecer las condiciones que han permitido la transmisión de la enfermedad.
          
      .col-sm-6.col-lg-5.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-4
          .crd.crd--avatarHorizontal.crd--first.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/tema2/img10.svg", alt="alt")
              .col
                p ● Indagar por antecedentes como desplazamientos a zonas endémicas o epidémicas para esta enfermedad, contacto con personas con cuadros febriles o con dengue confirmado por laboratorio. 
      
      .row.mt-5.text-white.justify-content-center
        .col-10.tarjeta.color-primario
          .row 
            .col-7.mt-5
              p(data-aos="fade-down")(style='margin-left: 30px;').mb-5 Ante casos probables de dengue grave, la caracterización del caso implica, en primer lugar, la revisión de la historia clínica para verificar la aplicación de todos los criterios que constituyen la definición operativa para esta enfermedad. Esta información debe complementarse con la verificación de la obtención de muestras de suero para pruebas de laboratorio y el seguimiento de los resultados.
            .col-3.mt-4
              figure
                img(src='@/assets/curso/temas/tema2/img11.svg')(style='margin-left: 182px;')

      .row.justify-content-center.mt-5 
        .col-10  
          p(data-aos="fade-up") Además de caracterizar el caso, es preciso configurar el escenario epidemiológico de la región para orientar las acciones de control, así como las de vigilancia virológica y entomológica que sean necesarias. 
          p(data-aos="fade-down") En todos los casos de dengue grave y de mortalidad por dengue es necesario investigar los antecedentes personales en los cuales se establezca la demanda de atención médica previa, el tipo de medicación y recomendaciones dadas al paciente sobre la identificación de signos de alarma y en qué momento buscar nuevamente atención médica, el tiempo transcurrido entre el inicio de la sintomatología y la consulta médica y en general la aplicación de los criterios recomendados para el manejo en la guía de práctica clínica del dengue (de acuerdo con la normatividad vigente). Además, se debe realizar unidad de análisis en cada uno de los casos de mortalidad por dengue.

      .tarjeta.color-primario.p-4.p-md-5.mb-5
        .row.justify-content-around.align-items-center
          .col-8.col-sm-5.col-md-4.mb-4.mb-md-0
            img(src="@/assets/curso/temas/tema2/img12.svg")

          .col-md.col-lg-6
            h5 Medidas de control sobre casos y contactos
            p(data-aos="fade-up") Todo paciente con dengue y dengue grave que sea hospitalizado debe permanecer bajo toldillo durante los primeros ocho días de la fiebre, período en el cual el ser humano es infectante para el mosquito. Esta medida inmediata permite cortar la cadena de transmisión de la enfermedad. Todo paciente que consulte tempranamente a los servicios de salud y no requiera hospitalización deberá recibir instrucción sobre la importancia del uso del toldillo en los primeros ocho días de la enfermedad y el uso de medidas de protección individual para evitar la infección de nuevos mosquitos. Además, deberá recibir información sobre los principales signos y síntomas de alarma de la enfermedad (manifestaciones hemorrágicas, dolor abdominal generalizado, vómito, entre otros) y la importancia de la consulta oportuna en caso de que se presente una complicación u otro enfermo entre la familia o los vecinos.
      h4 Medidas de control vectorial      
      p(data-aos="fade-up") En zonas endémicas, la vigilancia del dengue debe ser un insumo permanente para realizar las acciones de control vectorial que se llevan a cabo regularmente y permiten su focalización. El aumento del número de casos deberá conducir a la evaluación de las medidas de control implementadas y a la definición de nuevas estrategias que permitan el control del vector y, en consecuencia, de la enfermedad.
      p(data-aos="fade-down") En la implementación de medidas de control vectorial, se recomienda tener en cuenta los siguientes aspectos:


    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Análisis de datos: indicadores e interpretación

    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3 Acciones: individuales y colectivas
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<script>
export default {
  components: {},
  data: () => ({
    datosSlyder: [
      {
        texto:
          'Realizar la investigación rápida de todo caso con sospecha clínica y buscar en la confirmación de laboratorio la presencia del virus del dengue.',
        imagen: require('@/assets/curso/temas/tema2/img2.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        texto:
          'Determinar si se trata de un caso importado o autóctono (adquirido localmente).',
        imagen: require('@/assets/curso/temas/tema2/img3.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        texto:
          'Ante un caso autóctono en una zona donde nunca antes ha existido transmisión del virus es necesario profundizar al máximo la investigación epidemiológica para conocer la magnitud y extensión de la transmisión y planificar la respuesta integrada de prevención y control involucrando a los actores necesarios para interrumpir la propagación.',
        imagen: require('@/assets/curso/temas/tema2/img4.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        texto:
          'Un elemento muy discutido es el papel de la fumigación, pero está probado que en determinadas situaciones es fundamental para eliminar al mosquito adulto e intensificar al máximo su control.',
        imagen: require('@/assets/curso/temas/tema2/img5.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        texto: 'Activar los mecanismos de respuestas integradas disponibles.',
        imagen: require('@/assets/curso/temas/tema2/img6.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        texto:
          'Definir estrategias de comunicación dirigidas a la población que permitan conocer los signos de alarma para la búsqueda oportuna de atención en los servicios de salud.',
        imagen: require('@/assets/curso/temas/tema2/img7.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        texto:
          'Ofrecer orientación a grupos poblacionales como elemento clave en la organización de la respuesta clínica oportuna. Informar a pacientes y familiares acerca de cómo eliminar los criaderos físicos del vector en sus viviendas y alrededores.',
        imagen: require('@/assets/curso/temas/tema2/img8.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass"></style>
