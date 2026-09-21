import type { BlogArticle, BlogSectionContent } from '../blogContent'

export const spanishBlogArticles: BlogArticle[] = [
  {
    slug: 'organize-rental-property-receipts-tax-season',
    title: 'Cómo organizar los recibos de tus alquileres para la declaración de la renta',
    readingTime: '5 min de lectura',
    date: '18 de marzo de 2026',
    category: 'Impuestos y finanzas',
    excerpt:
      'Aprende cómo los propietarios particulares organizan los justificantes de gastos, clasifican las deducciones fiscales y evitan el caos de las hojas de cálculo al declarar sus impuestos.',
    content: {
      lead: 'Para los propietarios particulares, la temporada fiscal suele significar un caótico fin de semana buscando justificantes en guanteras, cajas de zapatos, extractos bancarios y carpetas de correo para reconstruir doce meses de gastos de alquiler. Controlar el seguimiento de recibos durante todo el año transforma la declaración de la renta en una rápida revisión de 15 minutos en lugar de un agotador esfuerzo contrarreloj.',
      subheadings: [
        {
          title: '1. Por qué mezclar cuentas y justificantes en papel crea una pesadilla fiscal',
          paragraphs: [
            'El mayor error que cometen los propietarios particulares es pagar suministros de la vivienda, fontaneros de urgencia o electrodomésticos con tarjetas de crédito personales o efectivo sin archivar de inmediato el comprobante de compra.',
            'Los recibos de papel térmico se borran a los pocos meses con el calor y la luz solar. Si alguna vez te enfrentas a una inspección de la Agencia Tributaria, los recibos desvaídos o los cargos bancarios sin justificar pueden conllevar la denegación de deducciones y sanciones. La regla de oro de la contabilidad de alquileres es: digitaliza cada justificante en cuanto lo recibas.',
          ],
          takeaways: [
            'Nunca confíes en los justificantes en papel durante más de 24 horas.',
            'Separa los ingresos y gastos de tus alquileres de tus gastos personales del día a día.',
            'Fotografía las facturas en la ferretería o en la propia vivienda inmediatamente.',
          ],
        },
        {
          title: '2. Las 5 categorías principales de gastos de alquiler que debes registrar',
          paragraphs: [
            'Organizar los gastos en categorías estándar evita prisas de última hora y asegura que aproveches cada deducción legal disponible para tus inmuebles:',
            'Reparaciones y conservación: Mantenimiento habitual como grifos que gotean, limpieza de canalones, revisión de climatización y pintura. Son deducibles en el ejercicio en que se producen.',
            'Mejoras y reformas: Inversiones estructurales como una cubierta nueva o reforma de cocina. Generalmente se amortizan a lo largo de varios años.',
            'IBI, tasas y seguros: Seguro de impago o responsabilidad civil del arrendador, seguro de hogar, IBI y tasas municipales.',
            'Servicios profesionales y software: Costes de aplicaciones de gestión de alquileres como My Rents, asesoría jurídica, gestoría fiscal o gastos de tramitación.',
            'Intereses de hipoteca y suministros: La porción de intereses del préstamo del inmueble y suministros a cargo del propietario (agua, basuras, alumbrado comunitario).',
          ],
        },
        {
          title: '3. Captura digital: flujo de trabajo fotográfico en el acto',
          paragraphs: [
            'La forma más sencilla de no perder una deducción es hacer una foto del recibo directamente en la app de gestión mientras estás en la caja de la tienda o inspeccionando la reparación recién terminada.',
            'Al asociar la foto a la propiedad y unidad específica, eliminas la duda meses después de "¿para qué vivienda compré esta válvula?".',
          ],
        },
        {
          title: '4. Lo que tu gestor o asesor fiscal realmente necesita',
          paragraphs: [
            'Tu asesor no quiere una bolsa llena de tickets en papel. Necesita un informe limpio y desglosado en PDF o Excel que muestre ingresos totales por inmueble, gastos deducibles categorizados y los justificantes digitales adjuntos.',
            'Con una aplicación integral como My Rents, puedes exportar resúmenes financieros anuales detallados por propiedad con un solo toque.',
          ],
        },
      ],
      summaryBox: {
        title: 'Conclusión clave para propietarios',
        text: 'Llevar un registro móvil al instante ahorra una media de 14 horas al preparar los impuestos y protege miles de euros en deducciones legítimas que de otro modo se perderían.',
      },
    },
  },
  {
    slug: 'landlord-lease-renewals-rent-increase-guide',
    title: 'Guía para propietarios: renovación de contratos y actualización de rentas',
    readingTime: '6 min de lectura',
    date: '14 de marzo de 2026',
    category: 'Gestión de contratos',
    excerpt:
      'Guía práctica para propietarios sobre plazos de renovación de alquileres, cálculo de actualizaciones de renta, preavisos legales y cómo retener a buenos inquilinos.',
    content: {
      lead: 'Retener a inquilinos fiables y puntuales en el pago es la base de una inversión inmobiliaria rentable. Sin embargo, gestionar los vencimientos y comunicar subidas de renta puede resultar incómodo. Con un calendario estructurado y una comunicación transparente, las renovaciones se convierten en trámites predecibles y sencillos.',
      subheadings: [
        {
          title: '1. El calendario 90-60-30 días antes del vencimiento',
          paragraphs: [
            'Una renovación exitosa empieza mucho antes del último mes de contrato. Seguir unos plazos claros te da tiempo suficiente tanto a ti como a los inquilinos:',
            '90 días antes: Revisa tus costes operativos (subidas de IBI, seguros, medias de mantenimiento) y consulta precios de mercado de alquileres similares en la zona.',
            '60 días antes: Envía al inquilino una propuesta de renovación por escrito detallando las condiciones, nueva duración y ajuste de renta propuesto, pidiendo confirmación en 30 días.',
            '30 días antes: Formaliza el anexo o nuevo contrato firmado. Si decide no renovar, dispones de margen suficiente para publicar el anuncio y organizar visitas, minimizando la vacancia.',
          ],
        },
        {
          title: '2. Calcular subidas razonables frente al coste de rotación',
          paragraphs: [
            'Un fallo común en propietarios inexpertos es subir el alquiler al máximo posible, forzando la marcha de un inquilino ejemplar. Considera el coste real de una vivienda vacía:',
            'La rotación suele costar entre 1.500 € y 4.000 € entre meses sin renta, limpieza a fondo, cambio de cerraduras, pintura y honorarios de comercialización. Una subida de 50 €/mes (600 €/año) se esfuma con un solo mes de vacancia.',
            'Al actualizar la renta, explica los motivos de forma transparente (p. ej., IPC o costes de la comunidad) y mantén un precio ligeramente ventajoso para inquilinos que cuidan la propiedad como propia.',
          ],
          takeaways: [
            'Calcula el coste real de 30 días de desocupación antes de fijar una subida de renta.',
            'Un inquilino puntual y fiable a un 3-5% por debajo del máximo de mercado suele ser más rentable que uno desconocido al precio pico.',
            'Comprueba siempre los límites legales de actualización de renta aplicables en tu jurisdicción.',
          ],
        },
        {
          title: '3. Cumplimiento legal: plazos de preaviso y topes a las rentas',
          paragraphs: [
            'Muchas legislaciones exigen plazos mínimos de preaviso (30, 60 o hasta 90 días) para renovaciones o ajustes de renta, así como topes a los porcentajes de incremento.',
            'Verifica siempre la normativa local antes de emitir notificaciones. Comunicarlo mediante registros digitales o el portal del inquilino garantiza un registro verificable con fecha y hora.',
          ],
        },
        {
          title: '4. Centralizar documentos y recordatorios en un solo lugar',
          paragraphs: [
            'Gestionar alertas de calendario dispersas en móviles o correos conduce inevitablemente a vencimientos olvidados. Cuando un contrato pasa a prórroga tácita sin gestión previa, el propietario pierde previsibilidad.',
            'Una app dedicada te avisa con antelación suficiente y mantiene el contrato firmado siempre a mano en tu teléfono.',
          ],
        },
      ],
      summaryBox: {
        title: 'Conclusión clave para propietarios',
        text: 'Preavisar las renovaciones con 60 días de margen protege la buena relación con el inquilino, evita periodos de desocupación y garantiza ingresos estables año tras año.',
      },
    },
  },
  {
    slug: 'spreadsheets-vs-landlord-app-why-spreadsheets-fail',
    title: 'Por qué Excel y las hojas de cálculo fallan a los propietarios en 2026',
    readingTime: '4 min de lectura',
    date: '8 de marzo de 2026',
    category: 'Tecnología y productividad',
    excerpt:
      'Por qué gestionar alquileres en Excel o Google Sheets provoca pagos olvidados, fórmulas rotas y horas perdidas de gestión administrativa.',
    content: {
      lead: 'Casi todo propietario particular empieza con una hoja de cálculo. Resulta familiar, gratuita y personalizable. Pero en cuanto sumas un segundo contrato, la fianza, una factura de reparación a mitad de mes o un recordatorio de cobro pendiente, las hojas de cálculo empiezan a mostrar graves debilidades.',
      subheadings: [
        {
          title: '1. La trampa del ordenador: los alquileres se gestionan sobre la marcha',
          paragraphs: [
            'No gestionas tus propiedades sentado ante dos pantallas de oficina. Las gestionas en la calle tras terminar el fontanero, al ver un aviso bancario en el coche o al responder una llamada urgente de un inquilino.',
            'Abrir una hoja de cálculo compleja en la pantalla del móvil es incómodo y propenso a errores. Como registrar datos desde el móvil cuesta tanto, se pospone el registro, lo que lleva a tickets olvidados y deducciones perdidas.',
          ],
        },
        {
          title: '2. Fragilidad de fórmulas y sobrescrituras accidentales',
          paragraphs: [
            'Las hojas de cálculo dependen de celdas delicadas, fórmulas SUMA y referencias cruzadas entre pestañas. Una tecla errónea o fila borrada por error puede corromper en silencio el balance de todo el año sin mostrar ninguna alerta.',
            'A diferencia de una base de datos con validaciones estrictas, una hoja de cálculo no impide duplicados, fechas incongruentes ni monedas discordantes.',
          ],
          takeaways: [
            'Las hojas de cálculo carecen de validación automática de datos y registro de auditoría.',
            'Borrar una fila por accidente puede distorsionar los totales anuales sin ningún aviso de error.',
            'Editar fórmulas complejas desde el móvil provoca frecuentes pérdidas y daños en los datos.',
          ],
        },
        {
          title: '3. Lo que una app especializada hace y las hojas de cálculo nunca podrán',
          paragraphs: [
            'Las apps móviles modernas como My Rents se estructuran con datos relacionales: una propiedad contiene unidades; una unidad contratos; un contrato inquilinos, cobros, pagos y gastos asociados.',
            'Esta arquitectura permite funciones automáticas inmediatas que una hoja de cálculo no ofrece sin cientos de horas de programación:',
            'Avisos automáticos de retraso cuando no se ha registrado el cobro en la fecha límite.',
            'Justificantes fotográficos vinculados directamente a cada gasto.',
            'Funcionamiento sin conexión para apuntar cobros o reparaciones en sótanos o trasteros sin cobertura.',
            'Portales seguros para inquilinos con acceso a sus contratos y recibos.',
          ],
        },
      ],
      summaryBox: {
        title: 'Conclusión clave para propietarios',
        text: 'Pasar de hojas de cálculo manuales a una app diseñada para propietarios ahorra de 4 a 6 horas al mes y elimina por completo los errores de cálculo.',
      },
    },
  },
  {
    slug: 'tenant-portal-benefits-small-landlords',
    title: 'Portales de inquilinos: cómo el acceso compartido simplifica cobros y comunicación',
    readingTime: '5 min de lectura',
    date: '28 de febrero de 2026',
    category: 'Operativa',
    excerpt:
      'Cómo los portales privados para inquilinos eliminan dudas sobre contratos, reparaciones y pagos sin exigirles instalar aplicaciones pesadas.',
    content: {
      lead: 'Cuando los inquilinos tienen dudas sobre el fin de su contrato, la fianza o si se recibió su última transferencia, ¿qué hacen? Normalmente, escribir un mensaje a las 21:00 un domingo. Contar con un portal de autoservicio sencillo elimina roces y aporta una imagen completamente profesional.',
      subheadings: [
        {
          title: '1. El problema del software empresarial pesado para inquilinos',
          paragraphs: [
            'Muchos programas tradicionales de gestión inmobiliaria obligan al inquilino a crearse cuentas complejas, recordar contraseñas o descargar apps de 200 MB solo para consultar su contrato.',
            'Los inquilinos son reacios a instalar más aplicaciones o pierden sus claves a las dos semanas. Para propietarios que gestionan de 1 a 20 viviendas, un portal web ligero ofrece una experiencia infinitamente mejor.',
          ],
        },
        {
          title: '2. Centro de documentos: simplicidad protegida por contraseña',
          paragraphs: [
            'My Rents lo resuelve mediante el Centro de documentos. Cada contrato puede generar un enlace cifrado protegido por una clave de acceso asignada por el propietario.',
            'El inquilino simplemente abre el enlace desde su móvil o navegador, introduce la clave y accede al instante a:',
            'Contratos de alquiler firmados y anexos en PDF de alta calidad.',
            'Historial de pagos verificado con fecha de cobro y saldo pendiente.',
            'Facturas de suministros o liquidaciones de mantenimiento compartidas.',
          ],
          takeaways: [
            'Sin necesidad de instalar apps: funciona en cualquier navegador móvil o de escritorio.',
            'Claves de acceso por rol que limitan la visualización estrictamente a su contrato.',
            'Reducción inmediata de mensajes repetitivos pidiendo copias de contratos o recibos.',
          ],
        },
        {
          title: '3. La transparencia previene discrepancias con los inquilinos',
          paragraphs: [
            'Cuando propietario e inquilino disponen de visibilidad 24/7 sobre el registro exacto de cobros y documentos adjuntos, las dudas se resuelven antes de convertirse en problemas.',
            'Si surge una discrepancia sobre si la renta de un mes se abonó el día 1 o el 5, el portal ofrece un registro objetivo y fechado que ambas partes pueden comprobar al instante.',
          ],
        },
      ],
      summaryBox: {
        title: 'Conclusión clave para propietarios',
        text: 'Un portal web sencillo aumenta la satisfacción del inquilino, transmite profesionalidad y ahorra horas de mensajes innecesarios.',
      },
    },
  },
  {
    slug: 'getting-started-diy-landlord-guide',
    title: 'Cómo gestionar tu primer alquiler: hoja de ruta paso a paso',
    readingTime: '7 min de lectura',
    date: '20 de febrero de 2026',
    category: 'Primeros pasos',
    excerpt:
      'Desde el inventario inicial y contratos digitales hasta el registro de rentas y reparaciones, aquí tienes la guía paso a paso para gestionar sin estrés.',
    content: {
      lead: 'Comprar tu primera propiedad para alquilar es un gran logro financiero. Pero una vez firmadas las escrituras, empieza la gestión real. Establecer rutinas organizadas y ágiles desde el primer día es lo que diferencia a los inversores tranquilos de los propietarios sobrepasados.',
      subheadings: [
        {
          title: 'Paso 1: Registra el estado inicial de la propiedad',
          paragraphs: [
            'Antes de poner el anuncio o firmar el contrato, crea un registro digital exhaustivo de la vivienda. Toma fotos con fecha de cada estancia, números de serie de electrodomésticos, llaves de paso de agua y notas de estado inicial.',
            'En My Rents puedes crear la ficha del inmueble, indicar si tiene una o varias unidades y guardar contactos esenciales como tu fontanero, electricista o agente de seguros.',
          ],
        },
        {
          title: 'Paso 2: Formaliza contratos y fianzas conforme a la ley',
          paragraphs: [
            'Nunca te fíes de acuerdos verbales ni plantillas genéricas desactualizadas. Utiliza contratos redactados con arreglo a la normativa vigente que especifiquen con claridad fechas de pago, periodos de gracia, normas de convivencia y responsabilidades de reparación.',
            'Guarda el contrato firmado directamente en la app para no tener que buscar papeles cuando surja una duda.',
          ],
        },
        {
          title: 'Paso 3: Establece un proceso claro de cobro y registro',
          paragraphs: [
            'Fija pautas claras desde el primer mes: método de pago acordado, día límite y recordatorios automáticos.',
            'En cuanto recibas la transferencia, anota el cobro en la app para generar el justificante tanto para ti como para el inquilino.',
          ],
          takeaways: [
            'Realiza siempre un inventario y estado de entrega firmado por el inquilino al inicio del contrato.',
            'Deposita la fianza en el organismo oficial correspondiente según la legislación aplicable.',
            'Apunta cada cobro y gasto en el momento exacto en que se produzca.',
          ],
        },
      ],
      summaryBox: {
        title: 'Conclusión clave para propietarios',
        text: 'Una gestión organizada desde el primer mes protege tu inversión patrimonial, evita conflictos costosos y prepara tu cartera para crecer de forma escalable.',
      },
    },
  },
]

export const spanishBlogContent: BlogSectionContent = {
  eyebrow: 'Centro de conocimiento para propietarios',
  title: 'Guías prácticas y consejos para propietarios particulares',
  description:
    'Consejos expertos sobre gestión de alquileres, optimización fiscal, renovación de contratos, comunicación con inquilinos y escalabilidad de tu cartera inmobiliaria.',
  readMoreLabel: 'Leer guía completa',
  backToArticlesLabel: 'Volver a todos los artículos',
  articles: spanishBlogArticles,
}
