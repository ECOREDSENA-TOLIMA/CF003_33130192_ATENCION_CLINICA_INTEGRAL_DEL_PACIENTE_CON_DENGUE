<template lang="pug">
.curso-main-container.pb-3.tema1
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Vigilancia en salud pública
      
    .row 
      .col-lg-9
        p(data-aos="fade-down") El dengue es un evento de interés en salud pública de notificación obligatoria, que debe cumplirse según los lineamientos e instrumentos del sistema de vigilancia en salud pública nacional, teniendo en cuenta las definiciones de caso vigentes definidas en el protocolo de vigilancia nacional. 
        p(data-aos="fade-left") Por ello, es importante realizar capacitación al personal médico en la detección temprana de la enfermedad y en los sistemas de vigilancia que no son conocidos por gran parte de los equipos de salud en el país.
        p(data-aos="fade-right") En la notificación se debe tener presente, la recolección y análisis de los datos que orientarán las medidas de prevención y control de los casos de dengue y dengue grave a nivel nacional, departamental y municipal según se requiera:
      .col-lg-3(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/tema1/img1.svg').m-auto
    
    .row.justify-content-center.align-items-center.mt-4.mb-4
      .col-lg-10.col-12
        .tabla-b.color-acento-contenido
          table
            tr.tabla-b__header
              th Notificación
              th Responsabilidad
            tr
              th(style='width:30%') Notificación semanal
              td Los casos de dengue se deben notificar semanalmente, de acuerdo con la estructura y contenido mínimo establecidos en el subsistema de vigilancia de los eventos de interés en salud pública. <br/><br/> La notificación de los casos de dengue grave y mortalidad por dengue se exige desde su clasificación como probable y en el nivel local es inmediata.
            tr
              th(style='width:30%') Ajustes por periodos epidemiológicos
              td Los ajustes a la información de casos probables de dengue y clasificación final de los casos se deben realizar a más tardar en el período epidemiológico inmediatamente posterior a la notificación del caso de conformidad con los mecanismos definidos por el sistema.

    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Epidemiológica
      
    p(data-aos="fade-down") La vigilancia del dengue se basa en el conocimiento de la enfermedad, el análisis de las condiciones sanitarias y la respuesta social organizada de las poblaciones en riesgo.

    .cajon-temas.color-secundario.p-4.p-md-5
      .row.justify-content-around.align-items-center
        .col-lg-3.col-md-6.col-10
          img(src="@/assets/curso/temas/tema1/img2.svg")

        .col-lg-9.col-12
          p(data-aos="fade-up") En Colombia el dengue representa un problema prioritario en salud pública debido a:
          p(data-aos="fade-down") ● Intensa transmisión viral con tendencia creciente.
          p(data-aos="fade-up") ● Ciclos epidémicos cada vez más cortos.
          p(data-aos="fade-down") ● Aumento en la frecuencia de brotes de dengue hemorrágico. 
          p(data-aos="fade-up") ● Circulación simultánea de los cuatro serotipos.
          p(data-aos="fade-down") ● Infestación por <i>Aedes aegypti</i> de más del 90% del territorio nacional situado por debajo de los 2.200 m.s.n.m.
          p(data-aos="fade-up") ● Urbanización incontrolada y el aumento de la población con viviendas inadecuadas.

    p(data-aos="fade-up").mt-5 La dinámica de transmisión del virus dengue, depende de interacciones entre el ambiente, el agente, la población huésped y el vector, que coexisten en un hábitat específico. La magnitud e intensidad de la interacción de estos factores define la transmisión del dengue en una localidad, distrito, región o país. Estos componentes pueden agruparse en macrofactores y microfactores determinantes de la transmisión:

    .row.justify-content-center.mt-5.mb-4
      .col-sm-6.col-lg-5.mb-4.mb-lg-0
        .tarjeta--boton.p-4(style="height:100%")
          .crd.crd--avatarHorizontal.crd--first.py-0(style="height:100%")
            .row.justify-content-center.align-items-center(style="height:100%")
              .col-auto
                figure
                  img(src="@/assets/curso/temas/tema1/img3.svg", alt="alt")
              .col
                h5 Macrofactores
                p Factores ambientales y sociales.
          
      .col-sm-6.col-lg-5.mb-4.mb-lg-0
        .tarjeta--boton.p-4(style="height:100%")
          .crd.crd--avatarHorizontal.crd--first.py-0(style="height:100%")
            .row.justify-content-center.align-items-center(style="height:100%")
              .col-auto
                figure
                  img(src="@/assets/curso/temas/tema1/img4.svg", alt="alt")
              .col
                h5 Microfactores
                p Factores de riesgo propios del huésped, el agente causal y el vector.

    separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Virológica

    p(data-aos="fade-up") La vigilancia sobre el dengue debe incluir la confirmación de los casos por laboratorio, ya que clínicamente el dengue puede parecerse a muchas enfermedades; además, está el riesgo de severidad de la enfermedad en los individuos y el riesgo de epidemias que dependen en gran parte del serotipo del virus circulante.

    p(data-aos="fade-left") En la vigilancia activa, el laboratorio cumple un rol importante para la confirmación serológica, virológica y entomológica, que podrán realizarse según el escenario correspondiente.

    p(data-aos="fade-down") En situación de brote, con casos probables de dengue, se deberá confirmar por lo menos el 10%. Intentar la confirmación serológica o virológica en todos los casos probables de dengue significa un gasto de recursos innecesario. ¿Sabes qué significan estos dos tipos de vigilancia? Veamos al respecto:

    .container.tarjeta.tarjeta--blanca.p-4.p-md-5

      .tarjeta--container.row.mb-5
        .col-md.tarjeta-temas.color-primario.p-5(style='border-top-right-radius: inherit; border-bottom-right-radius: inherit;')
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/tema1/img5.svg', alt='Texto que describa la imagen')
      
          h2.text-center Vigilancia serológica
          p Consiste en la detección de anticuerpos de IgM específicos del dengue en el suero del paciente, del 93 al 98 % detestables a partir del sexto al décimo día. Se puede emplear para la vigilancia clínica y para calcular los índices de transmisión de la enfermedad a través de las encuestas serológicas basadas en la población realizadas poco después de que la transmisión epidémica comienza a ceder.
        .col-md.tarjeta-temas.color-secundario.p-5(style='border-bottom-left-radius: inherit; border-top-left-radius: inherit;')
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/tema1/img6.svg', alt='Texto que describa la imagen')
            
          h2.text-center Vigilancia virológica
          p Complementa la vigilancia serológica y es fundamental para desarrollar un sistema de alerta inmediata y predictiva del dengue epidémico. El método de elección para el aislamiento de rutina del virus es su inoculación a la línea de células de mosquito c6/36, que son detectados en los primeros cinco días de la enfermedad.
      
      .row.justify-content-center
        .col-10
          p(data-aos="fade-down").mt-3 La vigilancia del dengue debe ser integral, permitiendo la evaluación de nuevas áreas de propagación del virus, detectando nuevos serotipos y genotipos en áreas infectadas y vigilando los casos graves y mortales atribuidos al dengue, la vigilancia del vector.

    separador 
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Entomológica
    
    p(data-aos="fade-up") La vigilancia entomológica es un proceso descentralizado, permanente organizado, programado y orientado al registro sistemático de información, para su análisis constante que permita predecir, prevenir y/o controlar el <i>Aedes aegypti</i> con la finalidad de hacer oportunas y efectivas las acciones de control.

    .cajon-temas.color-acento-contenido.md-5.mb-5
      .row.justify-content-around.align-items-center
        .col-md-4.col-4
          img(src="@/assets/curso/temas/tema1/img7.svg")
        .col-md-8.col-12.mt-4
          .mb-4
            .d-flex.flex-wrap.align-items-center(data-aos="fade-right")
              img(src='@/assets/curso/temas/icono.svg' style="max-width: 50px;")
              .h3.col-auto.pb-2.mb-0.ms-2(style=" border-bottom: 2px solid #8628A5;") Objetivo general:
          p(data-aos="fade-up") Conocer el comportamiento, la distribución, abundancia y dispersión del vector, sus costumbres y su relación con el ambiente que permita proporcionar información de calidad adecuada y oportuna sobre el <i>Aedes aegypti</i>.

          .mb-4
            .d-flex.flex-wrap.align-items-center(data-aos="fade-right")
              img(src='@/assets/curso/temas/icono.svg' style="max-width: 50px;")
              .h3.col-auto.pb-2.mb-0.ms-2(style=" border-bottom: 2px solid #8628A5;") Objetivos específicos: 

          p ● Identificar factores y variables bióticos y abióticos bajo los cuales se desarrolla el vector y la ocurrencia de las enfermedades en humanos.
          p ● Generar y sistematizar información para establecer las medidas de prevención y control oportunas según los índices entomológicos encontrados mediante la vigilancia del vector.
          p ● Detectar y notificar la introducción del <i>A.albopictus</i>.
          p ● Evaluar y monitorear los niveles de susceptibilidad y resistencia de los vectores tanto adultos como estadios inmaduros a los insecticidas usados y nuevos utilizados en Salud Pública, a través del tiempo. 
          p ● Lograr la participación comunitaria en las actividades de vigilancia.
    
    .mb-4
      .d-flex.flex-wrap.align-items-center(data-aos="fade-right")
        img(src='@/assets/curso/temas/icono.svg' style="max-width: 50px;")
        .h3.col-auto.pb-2.mb-0.ms-2(style=" border-bottom: 2px solid #8628A5;") Ámbito
    
    p(data-aos="fade-up") La vigilancia entomológica tendrá como área de influencia todo el territorio nacional, según escenarios epidemiológicos.
    p(data-aos="fade-up") El Sistema de Vigilancia Entomológica se sustenta en el fortalecimiento institucional, la coordinación intra y extrasectorial y la participación comunitaria, a través de la implementación de las estrategias relacionadas a continuación: 

    .row.mt-5.mb-5.justify-content-between
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta-temas--boton.color-secundario.p-4(style="height:100%")
          .row.justify-content-center.mb-3(style="margin-bottom: 0px !important;")
            .col-10
              figure
                img(src='@/assets/curso/temas/tema1/img8.svg', alt='Sensibilizar a la población y las autoridades de diferentes sectores sobre la importancia de la presencia del Aedes aegypti')
            .col-12.mb-0.px-0.pt-4
              p.mb-0 Sensibilizar a la población y las autoridades de diferentes sectores sobre la importancia de la presencia del <i>Aedes aegypti</i>.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta-temas--botonb.color-primario.p-4(style="height:100%")
          .row.justify-content-center.mb-3(style="")
            .col-12.px-0
              p Incorporar la participación de los gobiernos regionales (CTAR), gobiernos locales (municipalidad), sector educación, empresas prestadoras de agua y saneamiento y principalmente, las organizaciones comunales, que garanticen el sostenimiento y continuidad de las actividades de vigilancia entomológica, a nivel nacional.

      .col-sm-6.col-lg-3.mb-4.mb-sm-0
        .tarjeta-temas--boton.color-secundario.p-4(style="height:100%")
          .row.justify-content-center.mb-3(style="")
            .col-10
              figure
                img(src='@/assets/curso/temas/tema1/img9.svg', alt='Fortalecer la capacidad técnica de los laboratorios de Salud Pública y las densas para la vigilancia entomológica.')
            .col-12.px-0.pt-4
              p Fortalecer la capacidad técnica de los laboratorios de Salud Pública y las densas para la vigilancia entomológica.

      .col-sm-6.col-lg-3
        .tarjeta-temas--botonb.color-primario.p-4(style="height:100%")
          .row.justify-content-center.mb-3(style="")
            .col-10
              figure
                img(src='@/assets/curso/temas/tema1/img10.svg', alt='Promover desde el nivel local la investigación operativa.')
            .col-12.px-0.pt-4
              p  Promover desde el nivel local la investigación operativa.
    
    p(data-aos="fade-up") La Dirección General de Salud Ambiental, coordina, planifica, administra y supervisa a nivel nacional, el sistema de vigilancia entomológica, a través de la Dirección Ejecutiva de Saneamiento Básico (DESAB) y a nivel departamental, las Direcciones de Salud coordinan las acciones operativas en el ámbito intermedio y local de su jurisdicción. Además, se hace necesario la participación integrada y coordinada de instituciones del sector y de otros sectores, gobiernos regionales o departamentales.
    p(data-aos="fade-down") En cuanto a la organización de las actividades de vigilancia entomológica, se hace necesario atender los siguientes aspectos antes de iniciar con su desarrollo:

    .row.mt-5.BGIMG01
      .col-12.mt-5
        LineaTiempoE.color-primario.mb-5
          .row
            .col-lg-2.mb-3.mb-lg-0
              figure
                img.img200(src='@/assets/curso/temas/tema1/img11.svg')
            .col-lg-9.mb-4.mb-lg-0
              p Designar un responsable que organice la vigilancia, haga las coordinaciones necesarias y remita información mensual al nivel regional y central para mantener el flujo de información sobre la situación de todas las localidades vigiladas.
          .row
            .col-lg-2.mb-3.mb-lg-0
              figure
                img.img200(src='@/assets/curso/temas/tema1/img12.svg')
            .col-lg-9.mb-4.mb-lg-0
              p Coordinar todas las acciones con la Cabeza de Red de la jurisdicción, con la Dirección Regional de Salud y con las autoridades locales y comunitarias.
          .row
            .col-lg-2.mb-3.mb-lg-0
              figure
                img.img200(src='@/assets/curso/temas/tema1/img13.svg')
            .col-lg-9.mb-4.mb-lg-0
              p Coordinar y/o capacitar al personal que va a realizar la inspección domiciliaria (reconocimiento de larvas, toma de muestras, uso de fichas, identificación taxonómica, forma de hacer la inspección, uso de los vistos domiciliares si fuera necesario y forma de marcar las casas inspeccionadas, renuentes y cerradas si se están haciendo censos).
          .row
            .col-lg-2.mb-3.mb-lg-0
              figure
                img.img200(src='@/assets/curso/temas/tema1/img14.svg')
            .col-lg-9.mb-4.mb-lg-0
              p Contar con un plano completo de la localidad de trabajo y distribuir copias con las manzanas que se vayan a trabajar por día y por equipo de inspección.
          .row
            .col-lg-2.mb-3.mb-lg-0
              figure
                img.img200(src='@/assets/curso/temas/tema1/img15.svg')
            .col-lg-9.mb-4.mb-lg-0
              p Hacer difusión de la campaña de inspección de viviendas, con información amplia de la necesidad de realizar esta actividad, a través de medios de comunicación masiva, mediante distribución de material impreso o perifoneo.
          .row
            .col-lg-2.mb-3.mb-lg-0
              figure
                img.img200(src='@/assets/curso/temas/tema1/img16.svg')
            .col-lg-9.mb-4.mb-lg-0
              p En localidades donde se vaya a emplear larvitrampas: 
              p ● Seleccionar las viviendas para colocar las trampas. 
              p ● Coordinar que extraños no manipulen las trampas. 
              p ● Designar personal para inspección de las trampas. 
              p ● Si hay muestras, hacer identificación taxonómica y enviar el 10% de la muestra al laboratorio regional para su confirmación previo a la notificación.
    
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

<style lang="sass"></style>
