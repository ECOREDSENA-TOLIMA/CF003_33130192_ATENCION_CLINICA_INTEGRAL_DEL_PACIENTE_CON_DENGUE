<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Estrategias
    
    p(data-aos="fade-up").mb-5 La vigilancia en el control de los mosquitos es prácticamente inexistente en la mayoría de los países donde el dengue es endémico.
    
    .cajon-temas.color-secundario.p-4.p-md-5.mb-5
      .row.justify-content-around.align-items-center
        .col-1
        .col-3
          img(src="@/assets/curso/temas/tema2/img1.png")

        .col-8
          p(data-aos="fade-up") La vigilancia debe ser regular a través de:
          p(data-aos="fade-down") ● Notificación semanal de casos probables.
          p(data-aos="fade-up") ● Búsqueda activa institucional trimestral de casos.
          p(data-aos="fade-down") ● Toma de muestras de suero o tejidos para la confirmación diagnóstica en casos fatales.
          p(data-aos="fade-up") ● Vigilancia viral, orientación y evaluación de las medidas de control.
    
    p(data-aos="fade-up").mb-5 En los departamentos y ciudades, donde haya vectores presentes sin virus circulante, los planes de preparación y respuesta se deben centrar en estrategias para disminuir los riesgos de transmisión de acuerdo a lineamientos establecidos, que se destacan a continuación: 

    .row.justify-content-center.mb-5
      .col-10.cajon-temas.color-primario
          SlyderB.mb-5(:datos="datosSlyder").mt-4
    separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Orientación y evaluación de las medidas de control

    p(data-aos="fade-up").mb-5 En regiones o zonas sin historia de dengue es preciso verificar el cuadro clínico y explorar los antecedentes de desplazamiento del paciente por alguna zona con transmisión activa de la enfermedad, de forma que sea posible establecer si se trata de un caso importado o de un caso autóctono para proceder a las investigaciones entomológicas respectivas en el área que implican: 

    .row.justify-content-center.mb-5
      .col-sm-5.col-lg-5.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-4(style="height:100%")
          .crd.crd--avatarHorizontal.crd--first.py-4(style="height:100%")
            .row.justify-content-center.align-items-center(style="height:100%")
              .col-auto
                figure
                  img(src="@/assets/curso/temas/tema2/img9.svg")
              .col
                p ● Realizar investigación de campo para establecer las condiciones que han permitido la transmisión de la enfermedad.
          
      .col-sm-6.col-lg-5.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-4(style="height:100%")
          .crd.crd--avatarHorizontal.crd--first.py-4(style="height:100%")
            .row.justify-content-center.align-items-center(style="height:100%")
              .col-auto
                figure
                  img(src="@/assets/curso/temas/tema2/img10.svg")
              .col
                p ● Indagar por antecedentes como desplazamientos a zonas endémicas o epidémicas para esta enfermedad, contacto con personas con cuadros febriles o con dengue confirmado por laboratorio. 
      
      .row.mt-5.text-white.justify-content-center
        .col-10.tarjeta-temas.color-custom
          .row.justify-content-center
            .col-9.mt-5
              p(data-aos="fade-down")(style='margin-left: 30px;').mb-5 Ante casos probables de dengue grave, la caracterización del caso implica, en primer lugar, la revisión de la historia clínica para verificar la aplicación de todos los criterios que constituyen la definición operativa para esta enfermedad. Esta información debe complementarse con la verificación de la obtención de muestras de suero para pruebas de laboratorio y el seguimiento de los resultados.
            .col-3.mt-4(style="padding-right: 0px")
              figure
                img(src='@/assets/curso/temas/tema2/img11.svg')(style="margin-left:1px")

      .row.justify-content-center.mt-5 
        .col-10  
          p(data-aos="fade-up") Además de caracterizar el caso, es preciso configurar el escenario epidemiológico de la región para orientar las acciones de control, así como las de vigilancia virológica y entomológica que sean necesarias. 
          p(data-aos="fade-down") En todos los casos de dengue grave y de mortalidad por dengue es necesario investigar los antecedentes personales en los cuales se establezca la demanda de atención médica previa, el tipo de medicación y recomendaciones dadas al paciente sobre la identificación de signos de alarma y en qué momento buscar nuevamente atención médica, el tiempo transcurrido entre el inicio de la sintomatología y la consulta médica y en general la aplicación de los criterios recomendados para el manejo en la guía de práctica clínica del dengue (de acuerdo con la normatividad vigente). Además, se debe realizar unidad de análisis en cada uno de los casos de mortalidad por dengue.

      .tarjeta.p-4.p-md-5.mb-5.mt-5.BGIMG02
        .row.justify-content-around.align-items-center
          .col-8.col-sm-5.col-md-4.mb-4.mb-md-0
            img(src="@/assets/curso/temas/tema2/img12.svg")

          .col-md.col-lg-8
            .mb-4
              .d-flex.flex-wrap.align-items-center(data-aos="fade-right")
                img(src='@/assets/curso/temas/icono.svg' style="max-width: 50px;")
                .h3.col-auto.pb-2.mb-0.ms-2(style=" border-bottom: 2px solid #8628A5;") Medidas de control sobre casos y contactos
            p(data-aos="fade-up") Todo paciente con dengue y dengue grave que sea hospitalizado debe permanecer bajo toldillo durante los primeros ocho días de la fiebre, período en el cual el ser humano es infectante para el mosquito. Esta medida inmediata permite cortar la cadena de transmisión de la enfermedad. Todo paciente que consulte tempranamente a los servicios de salud y no requiera hospitalización deberá recibir instrucción sobre la importancia del uso del toldillo en los primeros ocho días de la enfermedad y el uso de medidas de protección individual para evitar la infección de nuevos mosquitos. Además, deberá recibir información sobre los principales signos y síntomas de alarma de la enfermedad (manifestaciones hemorrágicas, dolor abdominal generalizado, vómito, entre otros) y la importancia de la consulta oportuna en caso de que se presente una complicación u otro enfermo entre la familia o los vecinos.
      .mb-4
        .d-flex.flex-wrap.align-items-center(data-aos="fade-right")
          img(src='@/assets/curso/temas/icono.svg' style="max-width: 50px;")
          .h3.col-auto.pb-2.mb-0.ms-2(style=" border-bottom: 2px solid #8628A5;") Medidas de control vectorial      
      p(data-aos="fade-up") En zonas endémicas, la vigilancia del dengue debe ser un insumo permanente para realizar las acciones de control vectorial que se llevan a cabo regularmente y permiten su focalización. El aumento del número de casos deberá conducir a la evaluación de las medidas de control implementadas y a la definición de nuevas estrategias que permitan el control del vector y, en consecuencia, de la enfermedad.
      p(data-aos="fade-down") En la implementación de medidas de control vectorial, se recomienda tener en cuenta los siguientes aspectos:

      .row.justify-content-center.tarjeta-temas.color-secundario.mt-5
        .col-lg-10

          SlyderF.custom.mb-5(columnas="col-lg-6 col-xl-4")
            .tarjeta.tarjeta--slyder.p-4.tarjeta--blanca.mt-5
              .row.justify-content-center.mb-3
                .col-8
                  img(src="@/assets/curso/temas/tema2/img13.svg", alt="alt").mt-0
              p.text-center.mb-0(style='color: black;') Las acciones de control vectorial deben realizarse permanentemente y deben ser específicas de acuerdo con las condiciones que favorecen la reproducción del vector en cada criadero.

            .tarjeta.tarjeta--slyder.p-4.tarjeta--blanca.mt-5
              .row.justify-content-center.mb-3
                .col-8
                  img(src="@/assets/curso/temas/tema2/img14.svg", alt="alt").img100.m-auto
              p.text-center.mb-0(style='color: black;') La aplicación de solo una estrategia no garantiza la eliminación permanente del problema vectorial, es necesario combinar adecuadamente diferentes mecanismos garantizando la permanencia de las acciones de control.

            .tarjeta.tarjeta--slyder.p-4.tarjeta--blanca.mt-5
              .row.justify-content-center.mb-3
                .col-8
                  img(src="@/assets/curso/temas/tema2/img15.svg", alt="alt").img100.m-auto
              p.text-center.mb-0(style='color: black;') Es indispensable vincular efectivamente a la comunidad para lograr el control del vector en el ámbito domiciliario y la realización de acciones de ordenamiento del ambiente cada vez que la población identifique factores de riesgo.

            .tarjeta.tarjeta--slyder.p-4.tarjeta--blanca.mt-5
              .row.justify-content-center.mb-3
                .col-8
                  img(src="@/assets/curso/temas/tema2/img16.svg", alt="alt").img100.m-auto
              p.text-center.mb-0(style='color: black;') Durante periodos con casos de la enfermedad, las medidas de reducción de fuentes pueden integrarse con la aplicación de larvicidas en los recipientes que no se pueden eliminar (naturales), cubrir, rellenar o tratar de algún otro modo.

            .tarjeta.tarjeta--slyder.p-4.tarjeta--blanca.mt-5
              .row.justify-content-center.mb-3
                .col-8
                  img(src="@/assets/curso/temas/tema2/img17.svg", alt="alt").img100.m-auto
              p.text-center.mb-0(style='color: black;') Para el control de emergencias, el empleo de insecticidas está destinado a controlar una epidemia de dengue en curso; el objetivo en este caso es la destrucción rápida y masiva de <i>Aedes aegypti</i>.

            .tarjeta.tarjeta--slyder.p-4.tarjeta--blanca.mt-5
              .row.justify-content-center.mb-3
                .col-8
                  img(src="@/assets/curso/temas/tema2/img18.svg", alt="alt").img100.m-auto
              p.text-center.mb-0(style='color: black;') Todas las medidas de control deben estar respaldadas con información entomológica y se debe realizar una evaluación posterior a la intervención con el fin de medir la efectividad del tratamiento utilizado.

      .mb-4.mt-5
        .d-flex.flex-wrap.align-items-center(data-aos="fade-right")
          img(src='@/assets/curso/temas/icono.svg' style="max-width: 50px;")
          .h3.col-auto.pb-2.mb-0.ms-2(style=" border-bottom: 2px solid #8628A5;") Medidas de vigilancia entomológica

      p(data-aos="fade-up") En regiones con riesgo de introducción del vector del dengue, se debe planificar y desarrollar actividades de vigilancia entomológica en los puntos de entrada (puertos, aeropuertos, puestos fronterizos terrestres) y en las zonas urbanas con condiciones propicias para el vector, así como campañas educativas dirigidas a los trabajadores de la salud y a la comunidad sobre los riesgos del dengue y su participación en las acciones de prevención.
      p(data-aos="fade-down") En esta parte se presentan algunas consideraciones relacionadas con la implementación de medidas de vigilancia entomológica para orientar acciones antivectoriales, específicamente en cuanto a la estrategia de aplicación de insecticidas.

    .row.justify-content-center.tarjeta-temas.color-primario--borde
      .col-10.mt-5
        p El empleo de insecticidas está destinado a controlar una epidemia de dengue en curso con la destrucción rápida y masiva del <i>Aedes aegypti</i>. Para implementar adecuadamente esta estrategia es importante considerar los siguientes aspectos:
      .row.justify-content-center.mt-5 
        .col-4
          figure
              img(src='@/assets/curso/temas/tema2/img55.svg')
        .col-6
          .tarjeta-temas.color-acento-contenido.p-4
            PasosB.color-acento-contenido
              .row(titulo="")(style='height: 200px')
                .col
                  p Definir y caracterizar la zona que va a ser intervenida.

              .row(titulo="")
                .col
                  p Determinar los métodos de tratamiento espacial y selección del equipo más adecuado.

              .row(titulo="")
                .col
                  p Utilizar mapas o croquis para la planificación de los recorridos.
              .row(titulo="")
                .col
                  p Calcular la zona total en hectáreas y establecer trayectorias, distancias y velocidades con el vehículo y a pie.

              .row(titulo="")
                .col
                  p Aplicar la dosis correcta para el caudal de la máquina.

              .row(titulo="")
                .col
                  p Al seleccionar un insecticida, tener en cuenta la susceptibilidad del vector al producto, su idoneidad para el equipo de aplicación, así como los costos finales de la aplicación por hectárea para la dosis recomendada.
              .row(titulo="")
                .col
                  p Al seleccionar el equipo de aplicación y los insecticidas, garantizar el servicio post venta de fabricante, que incluye capacitación y eliminación de recipientes.

              .row(titulo="")
                .col
                  p Definir el número de tratamientos y el intervalo entre ellos, de acuerdo al objetivo de la operación.

              .row(titulo="")
                .col
                  p Determinar el número y tipo de máquinas (portátiles o montadas en vehículo), sus operadores y personal auxiliar necesario en función del tamaño y características de la zona que se va a intervenir, el tiempo necesario para completar cada ciclo y su frecuencia.
      .col-10.mt-5
        p.mb-5 Las condiciones climáticas y la actividad de vuelo del <i>Aedes aegypti</i> limitan la operación a dos o tres horas por la mañana. Por ejemplo, si una máquina puede cubrir 60 hectáreas por hora, en tres horas cubriría 180 hectáreas, lo cual requiere seis máquinas para completar esta tarea en una mañana, o, tres máquinas en dos mañanas. Usualmente, se necesitan dos personas para cada nebulizador montado en vehículo, uno para conducir y otro que se encarga del equipo.
            

    separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Análisis de datos: indicadores e interpretación

    .row.justify-content-center
      .col
        .row 
          .col-10.mt-5
            p(data-aos="fade-down") Los indicadores son variables que intentan medir u objetivar en forma cuantitativa o cualitativa, sucesos colectivos (especialmente sucesos biodemográficos) para así, poder respaldar acciones políticas, evaluar logros y metas. La OMS (Organización Mundial de la Salud) los ha definido como variables que sirven para medir los cambios. Los indicadores en salud permiten establecer el impacto de las estrategias implementadas, la evolución de los eventos de vigilancia en el tiempo y la relación con sus determinantes.
            p(data-aos="fade-down") Observe a continuación cómo se clasifican los indicadores de acuerdo al momento de su aplicación y el aspecto evaluado:

          .col-2.mt-4
            figure
              img(src='@/assets/curso/temas/tema2/img19.svg')
    .row.justify-content-center 
      .col-10
        AcordionA.mt-5(tipo="a" clase-tarjeta="tarjeta BGIMG01")(data-aos="flip-up")
          .row(titulo="De acuerdo al momento de su aplicación")
            .col-md-6
                figure
                  img(src='@/assets/curso/temas/tema2/img20.svg', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              h3(data-aos="fade-down") Indicadores de estructura:
              p(data-aos="fade-down") Son la base de la planeación. Se refiere a los indicadores ya estandarizados, de uso común, cuyos análisis involucran series de tiempo.
              h3(data-aos="fade-down") Indicadores de coyuntura:
              p(data-aos="fade-down") Hacen referencia a mediciones situacionales que por políticas, planes y metas sean propuestos por entidades gubernamentales, para diferentes fines. Por ejemplo, el seguimiento y evaluación a actividades específicas de un plan de desarrollo con el sello del programa y las políticas que proponga y realice el gobierno de turno.
              h3(data-aos="fade-down") Indicadores de referencia: 
              p(data-aos="fade-down") Se refieren al entorno demográfico y socioeconómico general (indicadores de población, macroeconómicos, sociales).

          .row(titulo="De acuerdo al aspecto evaluado")
            .col-md-6
                figure
                  img(src='@/assets/curso/temas/tema2/img21.svg', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              h3 Indicadores de proceso:
              p Permiten evaluar la gestión realizada por la entidad territorial en torno a la vigilancia en salud pública. Se refieren a las actividades realizadas para alcanzar determinado resultado.
              h3 Indicadores de resultado:
              p Permiten medir los efectos inmediatos o a corto plazo generados por los productos de una política, programa o proyecto, sobre la población directamente afectada.
              h3 Indicadores de impacto:
              p Se refieren al resultado final, producto de las acciones realizadas. Permiten medir los efectos a mediano y largo plazo, generados por una política, programa o proyecto, sobre la población en general. Los efectos medidos son aquellos directamente atribuibles a dicha política, programa o proyecto específico. Incluyen efectos positivos y negativos, producidos directa o indirectamente por una intervención.

    .mb-4.mt-5
      .d-flex.flex-wrap.align-items-center(data-aos="fade-right")
        img(src='@/assets/curso/temas/icono.svg' style="max-width: 50px;")
        .h3.col-auto.pb-2.mb-0.ms-2(style=" border-bottom: 2px solid #8628A5;") Fichas técnicas

    p(data-aos="fade-left") Las fichas técnicas o metadatos de los indicadores son instrumentos que permiten a los usuarios optimizar el uso y aprovechamiento de la información disponible. Presentan de manera estándar su definición, propósito, construcción, fuentes de información, metas y nivel de aplicación, estableciendo para todos los usuarios un lenguaje común para su procesamiento.
    p(data-aos="fade-right") A la hora de realizar la construcción y establecer comparaciones entre entidades territoriales o por períodos, es importante tener claridad en su definición operacional, las fuentes a utilizar y la calidad y cobertura de los datos para cada uno de los escenarios en estudio. 
    p(data-aos="fade-left") Basado en lo anterior, observe la siguiente descripción que presenta los aspectos utilizados en el formato de una ficha técnica y lo que representan estos: 

    .row
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-botones.p-2.mb-4
          figure
            img(src='@/assets/curso/temas/tema2/img22.svg', alt='Texto que describa la imagen')

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-botones.p-4.mb-4
              h3.p-1 Definición:
              p.text-small.p-1 Significado del indicador.

      .col-sm-6.col-lg-3.mb-4.mb-sm-0
        .tarjeta--boton.color-acento-botones.p-4.mb-4
          h3.p-1 Periodicidad:
          p.text-small.p-1 Cada cuánto debe calcularse el indicador.

      .col-sm-6.col-lg-3.mb-4.mb-sm-0
        .tarjeta--boton.color-acento-botones.p-4.mb-4
          h3.p-1 Propósito: 
          p.text-small.p-1 Qué se busca evaluar, para qué se construye el indicador.
      
      .col-sm-6.col-lg-3
        .tarjeta--boton.color-acento-botones.p-4.mb-4
          h3.p-1 Definición operacional: 
          p.text-small.p-1 Variables utilizadas para su construcción, datos del numerador y denominador.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-botones.p-4.mb-4
              h3.p-1 Coeficiente de multiplicación: 
              p.text-small.p-1 Coeficiente de multiplicación, 100, 1000, 100000.…

      .col-sm-6.col-lg-3.mb-4.mb-sm-0
        .tarjeta--boton.color-acento-botones.p-4.mb-4
          h3.p-1 Fuente de información: 
          p.text-small.p-1 De donde se obtienen los datos para construir el indicador.

      .col-sm-6.col-lg-3
        .tarjeta--boton.color-acento-botones.p-4.mb-4
          h3.p-1 Interpretación:
          p.text-small.p-1 Qué quiere decir el resultado, lectura del resultado del indicador.
      
      .col-sm-6.col-lg-3
        .tarjeta--boton.color-acento-botones.p-4.mb-4
          h3.p-1 Nivel: 
          p.text-small.p-1 A quiénes aplica el indicador, ámbito de aplicación (municipio, UPGD, departamento o nación)

      .col-sm-6.col-lg-3.mt-1
        .tarjeta--boton.color-acento-botones.p-4.mb-4
          h3.p-1 Meta: 
          p.text-small.p-1 Cuál es el valor ideal del indicador en cada nivel de aplicación. 

      .col-sm-6.col-lg-3
        .tarjeta--boton.color-acento-botones.p-4.mb-4
          h3.p-1 Aclaraciones: 
          p.text-small.p-1 Aspectos a tener en cuenta para la búsqueda de la fuente de los datos y en general para la construcción del indicador.
      
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-botones.p-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img23.svg', alt='Texto que describa la imagen')

    .row.justify-content-center.mt-5
      .col-7
        p(data-aos="fade-up") Tenga en cuenta que para el análisis de indicadores se utilizan los siguientes tipos de medidas:

    .row.justify-content-center
      .col-10
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema2/img24.svg", alt="alt").img100
            .col
              p <b>Tasa:</b> expresa la dinámica de un suceso en una población a lo largo del tiempo. Las tasas tienen dos características que las diferencian, el tiempo y un multiplicador, generalmente en base diez (1.000, 10.000 o 100.000) llamado base; se calcula para un determinado período de tiempo que debe incluirse al referirse a la tasa y para un determinado grupo poblacional.
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema2/img25.svg", alt="alt").img100
            .col
              p <b>Proporción:</b> es el número de observaciones específicas de un grupo, dividido por el número total de observaciones en el grupo, donde los datos del numerador están incluidos en el denominador. Los porcentajes son las proporciones más frecuentemente usadas.
        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema2/img26.svg", alt="alt").img100
            .col
              p <b>Razón:</b> es el número de observaciones de un grupo con determinada característica, dividido por el número de observaciones de un grupo sin esa característica, en donde los datos del numerador no están contenidos en el denominador. Las razones explican la relación aritmética entre dos eventos de una misma población, o el mismo evento en dos poblaciones diferentes.

    .row.justify-content-center.mt-5(data-aos="fade-up")
      .col-7
        p A continuación, se señalan los gráficos recomendados de acuerdo al tipo de variables analizadas:
    .row.justify-content-center
      .col-10
        AcordionA.mt-5(tipo="a" clase-tarjeta="tarjeta BGIMG01")
          .row(titulo="Una sola variable cualitativa con nivel de medición nominal")
            p Para representación de una sola variable cualitativa con nivel de medición nominal u ordinal se sugiere trabajar con los gráficos relacionados a continuación:
            .col-md-6
                figure
                  img(src='@/assets/curso/temas/tema2/img27.svg', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              h3 Barras simples 
              p Muestran el comportamiento de los valores de una sola variable. Se representan mediante barras verticales de igual amplitud para cada categoría y con alturas equivalentes al número de miembros o al porcentaje en cada categoría.
          
            .col-md-6.mt-5
                figure
                  img(src='@/assets/curso/temas/tema2/img28.svg', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0.mt-5
              h3 Gráfico circular o de sectores o pastel 
              p Sectores de un círculo con áreas proporcionales a las frecuencias de clase, utilizados para presentar datos en clase nominales.

          .row(titulo="Una sola variable cualitativa con nivel de medición de razón")
            p Para casos de una sola variable cuantitativa a nivel de medición de razón o intervalo, se recomienda utilizar los siguientes gráficos:
            .col-md-6.mt-5
                figure
                  img(src='@/assets/curso/temas/tema2/img29.svg', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0.mt-5
              h3 Histograma de frecuencias
              p Es aplicable cuando la variable objeto de estudio es cuantitativa y está dada en intervalos de clase. Es útil además cuando interesa analizar el comportamiento del fenómeno en similitud con la curva normal de Gauss.
            
            .col-md-6.mt-5
                figure
                  img(src='@/assets/curso/temas/tema2/img30.svg', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0.mt-5            
              h3 Polígono de frecuencias
              p Permite comparar dos o más conjuntos de datos independientes graficando los polígonos respectivos sobre los mismos ejes.

            .col-md-6.mt-5
                figure
                  img(src='@/assets/curso/temas/tema2/img31.svg', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0.mt-5   
              h3 Polígono de frecuencias acumuladas u ojivas
              p Cuando los datos son continuos, la gráfica tiene una forma típica, más o menos definida, llamada curva u ojiva. Cuando los datos son discretos, la gráfica tiene una forma escalonada.

          .row(titulo="Dos variables cuantitativas medidas a nivel nominal ")
            p Para el manejo de dos variables cualitativas medidas a nivel nominal u ordinal, se aconseja representación a través de los siguientes gráficos: 
            .col-md-6.mt-5
                figure
                  img(src='@/assets/curso/temas/tema2/img32.svg', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0.mt-5
              h3 Barras compuestas 
              p Representa el comportamiento de dos o más variables o de la misma variable en tipo o lugares diversos.
            
            .col-md-6.mt-5
                figure
                  img(src='@/assets/curso/temas/tema2/img33.svg', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0.mt-5            
              h3 Gráfico de áreas 
              p Sirve para mostrar el comportamiento de dos o más variables cualitativas tomando como patrón de comparación el hecho que las categorías de cada una de las variables, las ubicadas en el eje X, representan el 100 %.

            .col-md-6.mt-5
                figure
                  img(src='@/assets/curso/temas/tema2/img34.svg', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0.mt-5   
              h3 Barras de componentes 
              p Comparan partes de unas variables entre sí y partes con el total. También se utiliza para comparar barras que tienen formas diferentes.

            .col-md-6.mt-5
                figure
                  img(src='@/assets/curso/temas/tema2/img35.svg', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0.mt-5   
              h3 Barras horizontales
              p Utiliza barras horizontales en lugares de verticales.

          .row(titulo="Dos variables cuantitativas medidas a nivel de razón")
            p Y finalmente, ante el análisis de dos variables cuantitativas medidas a nivel de razón o de intervalo, considerar la utilización de gráficos como los que se señalan a continuación:
            .col-md-6.mt-5
                figure
                  img(src='@/assets/curso/temas/tema2/img36.svg', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0.mt-5
              h3 Gráfico de líneas
              p Utilizado cuando el fenómeno es analizado en función del tiempo y se pretende mostrar las variaciones.
            
            .col-md-6.mt-5
                figure
                  img(src='@/assets/curso/temas/tema2/img37.svg', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0.mt-5            
              h3 Gráfico de relación de variables o nube de puntos
              p Su uso es apropiado cuando se trata de establecer si existe correlación entre dos variables y su sentido, directa o inversa. (Eje x variables independiente, eje y variable dependiente).

            .col-md-6.mt-5
                figure
                  img(src='@/assets/curso/temas/tema2/img38.svg', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0.mt-5   
              h3 Barras de tendencias
              p Utilizado básicamente cuando se trata de ajustar un conjunto de datos a un modelo teórico para fines predictivos

            .col-md-6.mt-5
                figure
                  img(src='@/assets/curso/temas/tema2/img39.svg', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0.mt-5   
              h3 Curva de frecuencias o histograma 
              p Sugiere el uso de una curva suave como una representación idealizada de la distribución de la población.

    .mb-4.mt-5
      .d-flex.flex-wrap.align-items-center(data-aos="fade-right")
        img(src='@/assets/curso/temas/icono.svg' style="max-width: 50px;")
        .h3.col-auto.pb-2.mb-0.ms-2(style=" border-bottom: 2px solid #8628A5;") Fichas técnicas e indicadores del proceso de notificación
    
    p(data-aos="fade-left") Con el fin de evaluar la gestión realizada por las entidades territoriales en el sistema de vigilancia en salud pública, se definen indicadores de cumplimiento y oportunidad.

    .cajon-temas.color-primario.row.justify-content-center
      .col
        .row 
          .col-8.p-4(style='margin-left: 50px')
            p(data-aos="fade-down") Tomando como base el Decreto 3518 de 2006 se define la notificación obligatoria como “la notificación de aquellos eventos de reporte obligatorio definidos en los modelos y protocolos de vigilancia, dentro de los términos de estructura de datos, responsabilidad, clasificación, periodicidad (semanal o inmediata) y destinos señalados en los mismos y observando los estándares de calidad, y veracidad de la información notificada”.
            p(data-aos="fade-up") Para efectos de evaluación del sistema se tendrá en cuenta la notificación ya sea positiva o negativa de la ocurrencia de eventos objeto de vigilancia en salud pública para todas las semanas epidemiológicas. Se considera incumplimiento la ausencia de cualquier tipo de reporte (silencio epidemiológico).

          .col-3.mt-4.mb-4
            figure
              img(src='@/assets/curso/temas/tema2/img40.svg')(style='margin-right: 50px')

    p(data-aos="fade-right").mt-3 Para evaluación del cumplimiento se definen cuatro grupos de indicadores cuyo detalle puede consultar en el Manual para análisis: indicadores para la vigilancia de eventos de interés en salud pública, encontrando: 
    p(data-aos="fade-left") ● Cumplimiento en la entrega del reporte semanal.
    p(data-aos="fade-right") ● Cumplimiento acumulado de la notificación.
    p(data-aos="fade-left") ● Cumplimiento en el ajuste de casos.
    p(data-aos="fade-right") ● Cumplimiento en envío de muestras de laboratorio.

    .tarjeta-temas.color-custom2.p-3
            .row.justify-content-around.align-items-center
              .col-auto
                img(src="@/assets/curso/temas/tema2/img41.svg").img65
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    p.mb-0.text-white  Manual para análisis: indicadores para la vigilancia de eventos de interés en salud pública. Haga clic para consultarlo.
                  .col-sm-auto
                    a.boton.color-acento-botones(href="http://siteold.saludputumayo.gov.co/documentos/NORMAS/MANUAL_INDICADORES.pdf" target="_blank")
                      span Enlace web
                      i.fas.fa-file-code

    .row.justify-content-center.mt-5(data-aos="fade-up")
      .col-8
        p La siguiente tabla relaciona otros indicadores de importancia epidemiológica para el análisis del dengue:

    .tabla-b.color-acento-contenido
      table
        tr.tabla-b__header
          td <b>Proporción</b>
          td <b>Numerador</b>
          td <b>Denominador</b>
          td <b>Coeficiente de multiplicación</b>
          td <b>Parámetro</b>
        tr
          td Pacientes hospitalizados que evolucionan a formas graves del dengue.
          td Número de pacientes hospitalizados que evolucionan por dengue.
          td Total de pacientes hospitalizados.
          td por cien (x 100).
          td <2 % de pacientes hospitalizados que evolucionan a shock por dengue.
        tr
          td Pacientes con formas graves de dengue hospitalizados en tercer nivel.
          td Número de pacientes con dengue grave hospitalizados en tercer nivel.
          td Total de pacientes hospitalizados con diagnóstico de dengue grave.
          td por cien (x 100).
          td 100 % de pacientes hospitalizados y monitoreados en tercer nivel.
        tr
          td Pacientes con dengue con signos de alarma que evolucionan a dengue grave.
          td Número de pacientes con diagnóstico de dengue con signos de alarma que evolucionan a dengue grave.
          td Total de pacientes hospitalizados con diagnóstico de dengue sin signos de alarma.
          td por cien (x 100).
          td <5 % de casos con signos de alarma que evolucionan a formas graves de la enfermedad.
        tr
          td Pacientes que fallecen en primer o segundo nivel de atención por dengue.
          td Número de muertes por dengue que ocurren en primer y segundo nivel de atención.
          td Total de muertes por dengue.
          td por cien (x 100).
          td 0 % de pacientes que fallecen en primer y segundo nivel de atención.
        tr
          td Letalidad por dengue.
          td Número de muertes por dengue en un período específico.
          td Total de casos graves de dengue en un período específico.
          td por cien (x 100).
          td <2 % de pacientes con formas graves de la enfermedad fallecen. 

    p(data-aos="fade-up").mt-5 Las dosis diagnósticas de insecticidas con determinados tiempos en los cuales se exponen las especies vectores son empleados para detectar o monitorear la resistencia en una población de insectos y determinada por la exposición del mosquito al insecticida depositado, en el caso de la metodología CDC, en las paredes internas de las botellas de vidrio empleadas en la prueba, y se calcula por los porcentajes de mortalidad de la especie vectora expuesta con la dosis y el tiempo diagnóstico establecido.
    p(data-aos="fade-up") En Colombia, aún no se han definido intervalos de mortalidad que indiquen si la especie aún es susceptible a un determinado insecticida o ya ha perdido la susceptibilidad. Pero basados en la evidencia con los resultados preliminares reportados en el marco del proyecto de investigación sobre el estado de la susceptibilidad de la resistencia de los vectores de malaria y dengue a diferentes insecticidas, por el PECET, CIDEIM, UNAL e INS y con el fin de apoyar la toma de decisiones en los programas de control de ETV en las Direcciones Departamentales de Salud y orientar al Ministerio de la Protección Social en la consecución y distribución de insumos básicos de control, se define la siguiente interpretación, la cual puede estar sujeta a posteriores cambios:
    
    .row.justify-content-center.mt-5(data-aos="flip-up")
      .col-5
        .tarjeta-temas.color-primario.p-4(style='height: 100%')
          .row.justify-content-center
            .col-auto
              img(src='@/assets/curso/temas/tema2/img42.svg' alt='AvatarTop')
          p.text-center.mt-4.mb-5 Si el porcentaje de mortalidad de los mosquitos expuestos es del 98-100 %, indica que la especie es susceptible al insecticida evaluado.
      .col-5
        .tarjeta-temas.color-primario.p-4
          .row.justify-content-center
            .col-auto
              img(src='@/assets/curso/temas/tema2/img43.svg' alt='AvatarTop')
          p.text-center.mt-4 Si el porcentaje de mortalidad de los mosquitos expuestos es <98 %, indica que la especie ha perdido la susceptibilidad al insecticida evaluado, por lo tanto, es importante vigilar y realizar pruebas continuas confirmatorias del insecticida, información que orientaría el cambio del insecticida empleado dentro del programa de control vectorial.
      
    p(data-aos="fade-up").mt-5 La información sobre la actividad de medición de resistencia o susceptibilidad de los mosquitos <i>Anopheles sp</i>, ante los diferentes insecticidas empleados en el programa de control de las ETV se consigna en el formulario de Susceptibilidad con método CDC – Botella.

    separador
    #t_2_3.titulo-segundo.color-acento-botones
      h2 2.3 Acciones: individuales y colectivas

    p(data-aos="fade-up") Se debe vincular a la comunidad en las acciones de prevención, control y vigilancia en salud pública para controlar la infestación por <i>Aedes aegypti</i>.
    p(data-aos="fade-down") Los métodos de prevención y control se realizan mediante la ejecución de acciones como las que se destacan a continuación: 
    
    .row
      figure
        img(src='@/assets/curso/temas/tema2/img44.png' alt='AvatarTop')
    .row.BGIMG01.mt-5
      .row.justify-content-center.mt-5
        .col-3.mt-4.mb-4
          figure
            img(src='@/assets/curso/temas/tema2/img45.svg')(style='margin-right: 50px')
        
        .col-7.p-4
          p(data-aos="fade-down") En cuanto a las medidas relacionadas con los servicios de salud ante una situación epidémica se considera necesario:
          p(data-aos="fade-up") ● Implementar un mecanismo que garantice el mejoramiento de la calidad del recurso humano para detectar y tratar los casos de dengue. 
          p(data-aos="fade-down") ● Reforzar o actualizar al personal en las definiciones de caso y los mecanismos para el diagnóstico definitivo. 
          p(data-aos="fade-up") ● Garantizar la adecuada atención de los casos en términos de calidad y oportunidad.
          p(data-aos="fade-down") ● Orientar a las personas para que asistan oportunamente a los servicios de salud en los casos en que se realiza búsqueda activa de casos. 

      .row.mt-5.text-white.justify-content-center
        .col-10.tarjeta-temas.color-custom
          .row 
            .col-8.mt-5
              p(style='margin-left: 40px;').mt-4 Se debe evaluar la calidad del proceso de atención y llevar a cabo un plan de mejoramiento ante el incremento de letalidad, hospitalización y complicación de casos que evolucionan a choque.
            .col-3.mt-4
              figure
                img(src='@/assets/curso/temas/tema2/img11.svg')(style='margin-left: 100px;')
      .row.justify-content-center.mt-5
        .col-10
          p En acciones individuales se relacionan medidas de control sobre casos y contactos, dentro de las que se destacan: 
          p ● Ofrecer información sobre los principales signos y síntomas de alarma. La consulta oportuna en caso de que se presente una complicación u otro enfermo entre la familia o los vecinos. 
          p.mb-5 ● Uso de toldillo.

    p(data-aos="fade-up").mt-5 En cuanto a acciones colectivas, es preciso considerar la vigilancia permanente del dengue en zonas endémicas a través de la implementación de medidas de control vectorial y vigilancia entomológica para conocer la dinámica de los vectores en el área. Cada departamento debe contar con un grupo básico para desarrollar acciones de vigilancia entomológica con el fin de ofrecer información analizada permanentemente sobre la situación vectorial y establecer la estrategia más adecuada para el control selectivo de vectores en la zona.

    .row
      .col
        .row 
          .col-8.p-4
            .mb-4.mt-3
              .d-flex.flex-wrap.align-items-center(data-aos="fade-right")
                img(src='@/assets/curso/temas/icono.svg' style="max-width: 50px;")
                .h3.col-auto.pb-2.mb-0.ms-2(style=" border-bottom: 2px solid #8628A5;") Medidas de vigilancia por laboratorio
            p(data-aos="fade-down") Las medidas de vigilancia por laboratorio proveen información sobre los serotipos de los virus circulantes detectando oportunamente la introducción de nuevos serotipos en un área. La vigilancia virológica se debe realizar de forma rutinaria a pacientes con menos de cinco días de evolución. Se obtendrán cinco muestras de suero semanales para ser remitidas al INS según las indicaciones de transporte de muestras para aislamiento viral. 
            p(data-aos="fade-up") Se podrán realizar estudios de prevalencia en áreas que requieran documentar la situación serológica de la población para detectar oportunamente la introducción de serotipos. En caso de brotes, se deben tomar muestras de 5 % de los casos de dengue clásico (una por cada 20 pacientes) y a todos los casos de dengue grave.

          .col-4.mt-5
            figure
              img(src='@/assets/curso/temas/tema2/img46.svg')

    .row.justify-content-center.BGIMG03
      .col-lg-4
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema2/img47.svg", alt="alt").img400.m-auto
      .col-lg-8
        .mb-4.mt-3
          .d-flex.flex-wrap.align-items-center(data-aos="fade-right")
            img(src='@/assets/curso/temas/icono.svg' style="max-width: 50px;")
            .h3.col-auto.pb-2.mb-0.ms-2(style=" border-bottom: 2px solid #8628A5;") Acciones de laboratorio
        
        p Las muestras para realizar pruebas de laboratorio son de dos clases:
        p <b>1)</b> Identificación de anticuerpos.
        p <b>2)</b> Para aislamiento viral.

        .mb-4.mt-3
          .d-flex.flex-wrap.align-items-center(data-aos="fade-right")
            img(src='@/assets/curso/temas/icono.svg' style="max-width: 50px;")
            .h3.col-auto.pb-2.mb-0.ms-2(style=" border-bottom: 2px solid #8628A5;") Muestras de tejido
        
        p Las muestras de tejido se deben obtener de todo paciente que haya fallecido con fiebre y hemorragia, choque o ictericia, que proceda de zona endémica para dengue y que no tenga causa de muerte definida.
        p En caso de mortalidad probable por dengue se precisa obtener muestras de:


        SlyderF.custom.mb-5(columnas="col-lg-6 col-xl-4")
          .tarjeta.color-secundario.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/tema2/img48.svg", alt="alt").img100.m-auto
            p.text-center.mb-0 Hígado

          .tarjeta.color-secundario.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/tema2/img49.svg", alt="alt").img100.m-auto
            p.text-center.mb-0 Bazo

          .tarjeta.color-secundario.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/tema2/img50.svg", alt="alt").img100.m-auto
            p.text-center.mb-0 Pulmón

          .tarjeta.color-secundario.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/tema2/img51.svg", alt="alt").img100.m-auto
            p.text-center.mb-0 Cerebro

          .tarjeta.color-secundario.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/tema2/img52.svg", alt="alt").img100.m-auto
            p.text-center.mb-0 Miocardio

          .tarjeta.color-secundario.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/tema2/img53.svg", alt="alt").img100.m-auto
            p.text-center.mb-0 Médula ósea

          .tarjeta.color-secundario.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/tema2/img54.svg", alt="alt").img100.m-auto
            p.text-center.mb-0 Riñón

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
