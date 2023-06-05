export default {
  global: {
    componenteFormativo: 'Vigilancia, prevención y control',
    descripcionCurso:
      'El componente formativo aborda aspectos relacionados con los procesos establecidos para la notificación, recolección y análisis de datos con miras a la generación de información oportuna, válida y confiable para orientar medidas de prevención y control del dengue. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Vigilancia en salud pública',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Epidemiológica',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Virológica',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Entomológica',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Estrategias',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Orientación y evaluación de las medidas de control',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Análisis de datos: indicadores e interpretación',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Acciones: individuales y colectivas',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '2.2 Análisis de datos: indicadores e interpretación',
      referencia:
        'Ministerio de la Protección Social. Decreto 3518 de 2006. Por medio cual se crea y reglamenta el Sistema de Vigilancia en Salud Pública y se dictan otras disposiciones. 9 de octubre de 2006.',
      tipo: 'Decreto',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Decreto-3518-de-2006.pdf',
    },
    {
      tema: '2.2 Análisis de datos: indicadores e interpretación',
      referencia:
        'Instituto Nacional de Salud. (2010). Manual para análisis: indicadores para la vigilancia de eventos de interés en salud pública 2012.',
      tipo: 'Manual',
      link:
        'http://siteold.saludputumayo.gov.co/documentos/NORMAS/MANUAL_INDICADORES.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Dengue',
      significado:
        'Enfermedad viral febril aguda, con manifestaciones que van desde procesos asintomáticos hasta cuadros severos, lo que define sus diversas formas clínicas: dengue sin signos de alarma, dengue con signos de alarma, dengue grave que incluye síndrome de choque dengue (SCD) y otras complicaciones del dengue como miocarditis, encefalitis y hepatitis todas ellas asociadas con mayor mortalidad.',
    },
    {
      termino: 'Estrategias de vigilancia en salud',
      significado:
        'Conjunto de métodos y procedimientos para la vigilancia de eventos de interés en salud pública, diseñadas con base en las características de los eventos a vigilar; la capacidad existente para detectar y atender el problema; los objetivos de la vigilancia; los costos relacionados con el desarrollo de la capacidad necesaria y las características de las instituciones involucradas en el proceso de la vigilancia.',
    },
    {
      termino: 'Eventos de interés en salud pública',
      significado:
        'Eventos importantes o trascendentes para la salud colectiva teniendo en cuenta frecuencia, gravedad, comportamiento epidemiológico, posibilidades de prevención, costo–efectividad de las intervenciones, e interés público; que, requieren ser enfrentados con medidas de salud pública.',
    },
    {
      termino: 'Factores de riesgo',
      significado:
        'Atributos, variables o circunstancias inherentes o no a los individuos que están relacionados con los fenómenos de salud y que determinan en la población expuesta a ellos, una mayor probabilidad de ocurrencia de un evento en salud.',
    },
    {
      termino: 'Sistema de Vigilancia en Salud Pública – Sivigila',
      significado:
        'Conjunto de usuarios, normas, procedimientos, recursos técnicos, financieros y de talento humano, organizados entre sí para la recopilación, análisis, interpretación, actualización, divulgación y evaluación sistemática y oportuna de la información sobre eventos en salud, para la orientación de las acciones de prevención y control en salud pública.',
    },
    {
      termino: 'Unidad Primaria Generadora de Datos – UPGD',
      significado:
        'Entidad pública o privada que capta la ocurrencia de eventos de interés en salud pública y genera información útil y necesaria para los fines del Sistema de Vigilancia en Salud Pública, Sivigila.',
    },
  ],
  referencias: [
    {
      referencia:
        'Instituto Nacional de Salud. (2010). Protocolo de vigilancia y control de dengue.',
      link:
        'https://www.minsalud.gov.co/comunicadosPrensa/Documents/DENGUE.pdf',
    },
    {
      referencia:
        'Instituto Nacional de Salud. (2018). Informe de evento Dengue, Colombia, 2018.',
      link:
        'https://www.ins.gov.co/buscador-eventos/Informesdeevento/DENGUE_2018.pdf',
    },
    {
      referencia:
        'Ministerio de la Protección Social. Decreto 3518 de 2006. Por medio cual se crea y reglamenta el Sistema de Vigilancia en Salud Pública y se dictan otras disposiciones. 9 de octubre de 2006. D.O. No. 46417.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Decreto-3518-de-2006.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social – Federación Médica Colombiana (2012-2013). Dengue. Memorias',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/TH/Memorias_dengue.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (s.f.). Dimensión vida saludable y enfermedades. Plan Decenal de Salud Pública 2012-2021.',
      link:
        'https://www.minsalud.gov.co/PlanDecenal/Paginas/dimension-vida-saludable.aspx',
    },
    {
      referencia:
        'Organización Panamericana de la Salud. (2016). Dengue. Guías para la atención en enfermos en la Región de las Américas.',
      link:
        'https://www.paho.org/es/documentos/dengue-guias-para-atencion-enfermos-region-americas-2a-edicion',
    },
    {
      referencia:
        'Organización Panamericana de la Salud. (2017). Estrategia de Gestión Integrada para la prevención y control del dengue en la Región de las Américas.',
      link:
        'https://iris.paho.org/bitstream/handle/10665.2/34859/OPSCHA17039_spa.pdf?sequence=8&isAllowed=y',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Suralba Mosquera Mosquera',
          cargo: 'Experta Temática',
          centro: 'Regional Antioquia - Centro de Servicios de Salud',
        },
        {
          nombre: 'Maribel Avellaneda Nieves',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
        },
        {
          nombre: 'Humberto Arias Díaz',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Asesor Metodológico',
          centro: 'Regional Distrito Capital – Centro de Diseño y Metrología',
        },
        {
          nombre: 'Maria Inés Machado López',
          cargo: 'Asesora Metogológica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo desarrollo curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrección de estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Iván Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Davison Gaitán Escobar',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Davison Gaitán Escobar',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
