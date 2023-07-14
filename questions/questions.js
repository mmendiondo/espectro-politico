let jsonObject = {
  "preguntas": [
    {
      "id": 1,
      "title": "Pregunta 1: Libertad de expresión",
      "description": "Algunos individuos y medios de comunicación difunden con facilidad opiniones equivocadas con objetivos cuestionables.",
      "options": [{ "value": 1, "text": "Debe prohibirse la difusión de opiniones equivocadas cuyo objetivo sea manipular y/o influir en los demás."},
      { "value": 2, "text": "Debe prohibirse la realización de apologías de ideologías extremas."},
      { "value": 3, "text": "No debe haber censura de opiniones por parte del Estado en ningún caso."}],
      "type": "sociales"
    },
    {
      "id": 2,
      "title": "Pregunta 2: Religión",
      "description": "La Iglesia realiza ciertas labores de carácter social. Por ello...",
      "options": [{ "value": 1, "text": "El Estado debe contribuir a la financiación de la Iglesia, y tener en cuenta sus valores a la hora de legislar."},
      { "value": 2, "text": "El Estado debe ser aconfesional, aunque puede contribuir a la financiación de la Iglesia para sostener su labor social en colegios concertados, centros de asistencia, etc..."},
      { "value": 3, "text": "La Iglesia debe autofinanciarse, y estar en igualdad de condiciones con cualquier otra asociación. El Estado debe permanecer laico."}],
      "type": "sociales"
    },
    {
      "id": 3,
      "title": "Pregunta 3: Servicio Militar",
      "description": "La defensa del país corresponde a quienes prestan Servicio Militar en los ejércitos.",
      "options": [{ "value": 1, "text": "El Servicio Militar debe ser obligatorio como forma de contribuir al bien común y/o a la formación de los jóvenes."},
      { "value": 2, "text": "El Sercicio Militar debe ser voluntario. Es el mejor modo de tener un ejército profesional y preparado para defender nuestros intereses y compromisos en el exterior."},
      { "value": 3, "text": "El Servicio Militar debería ser voluntario en caso de existir ejército, y de ser así, su naturaleza debería limitarse a sus funciones más esenciales de defensa."}],
      "type": "sociales"
    },
    {
      "id": 4,
      "title": "Pregunta 4: Sexo",
      "description": "Las relaciones sexuales entre adultos que consienten son un asunto de la esfera privada de las personas. Sin embargo...",
      "options": [{ "value": 1, "text": "Conductas como la homosexualidad, la poligamia o la prostitución deben prohibirse o estar fuertemente controladas."},
      { "value": 2, "text": "La prostitución debe prohibirse o estar fuertemente controlada."},
      { "value": 3, "text": "Las leyes no deben entrometerse en las relaciones sexuales entre adultos que consientan, en ningún caso."}],
      "type": "sociales"
    },
    {
      "id": 5,
      "title": "Pregunta 5: Drogas",
      "description": "Las drogas suponen un drama para muchas familias.",
      "options": [{ "value": 1, "text": "El Estado debería combatir el tráfico de drogas con más medios y de un modo más eficaz."},
      { "value": 2, "text": "El uso de algunas de las drogas prohibidas actualmente debería ser legal, aunque debería controlarse su distribución."},
      { "value": 3, "text": "Deberían legalizarse las drogas, despenalizando su uso y liberalizando su distribución."}],
      "type": "sociales"
    },
    {
      "id": 6,
      "title": "Pregunta 6: Seguridad",
      "description": "La toma de medidas preventivas puede suponer una mejora de la seguridad ciudadana. Sin embargo, en muchos casos éstas chocan con algunos derechos individuales, como el derecho a la intimidad.",
      "options": [{ "value": 1, "text": "La seguridad de todos está por encima de los derechos de uno solo; Las fuerzas de seguridad del Estado no deben ver su función entorpecida porque un posible criminal se ampare en sus derechos individuales."},
      { "value": 2, "text": "Las leyes y el poder judicial deben establecer en qué casos se puede anteponer el uso de medidas preventivas de seguridad a ciertos derechos individuales y en qué casos no."},
      { "value": 3, "text": "El Estado no debe vulnerar ningún derecho individual por motivos de seguridad."}],
      "type": "sociales"
    },
    {
      "id": 7,
      "title": "Pregunta 7: Discriminación",
      "description": "En ciertas instituciones, grupos o profesiones, existe disparidad entre el número de hombres y mujeres, o entre distintas razas o grupos sociales.",
      "options": [{ "value": 1, "text": "Las cuotas obligatorias son el mejor instrumento para remediar las situaciones de discriminación histórica."},
      { "value": 2, "text": "Las ayudas para la integración o los beneficios fiscales a los grupos menos representados son el mejor instrumento para paliar la discriminación."},
      { "value": 3, "text": "Cualquier tipo de imposición o beneficio basado en criterios de sexo, raza o grupo social, viola el principio de igualdad ante la ley, y no debe ser impuesto por el Estado."}],
      "type": "sociales"
    },
    {
      "id": 8,
      "title": "Pregunta 8: Inmigración",
      "description": "Las fronteras se utilizan para controlar la inmigración.",
      "options": [{ "value": 1, "text": "Hay que limitar decididamente la entrada de nuevos inmigrantes y/o expulsar a aquellos que no se integren."},
      { "value": 2, "text": "El Estado debe regular la inmigración para permitir que los inmigrantes necesarios vengan de un modo legal."},
      { "value": 3, "text": "No debe haber diferencias de derechos en función del lugar de nacimiento o nacionalidad."}],
      "type": "sociales"
    },
    {
      "id": 9,
      "title": "Pregunta 9: Nación",
      "description": "El Estado moderno suele ir aparejado al concepto de una nación.",
      "options": [{ "value": 1, "text": "El Estado debe promover el sentimiento patriótico y defender la identidad nacional, cultura e idioma que le son propios."},
      { "value": 2, "text": "El Estado debe proteger y/o promover la cultura y el idioma que son propios de su nación."},
      { "value": 3, "text": "El Estado no debe intervenir en cuestiones tan personales como la identidad o la cultura. Cada ciudadano debe tener la libertad de usar el idioma que considere."}],
      "type": "sociales"
    },
    {
      "id": 10,
      "title": "Pregunta 10: Medio Ambiente",
      "description": "Una de las mayores amenazas para la civilización es el deterioro del Medio Ambiente.",
      "options": [{ "value": 1, "text": "Las leyes deben obligar a contaminar menos imponiendo estrictas limitaciones de contaminantes."},
      { "value": 2, "text": "Hay que promover las energías limpias mediante incentivos a aquellos que contaminen menos y cargas a los que contaminan más."},
      { "value": 3, "text": "Se contaminaría menos si se estableciesen responsabilidades claras y derechos de propiedad bien definidos con respecto a la contaminación."}],
      "type": "sociales"
    },   
    {
      "id": 11,
      "title": "Pregunta 11: Globalización",
      "description": "La importación de bienes del extranjero puede ser limitada por el Estado mediante diversos instrumentos, como los aranceles aduaneros, las prohibiciones, o ciertas regulaciones.",
      "options": [{ "value": 1, "text": "El Estado debe limitar la entrada de productos de otros países para favorecer a los productores nacionales."},
      { "value": 2, "text": "El Estado debe limitar la entrada de productos del tercer mundo, ya que se producen con mano de obra barata."},
      { "value": 3, "text": "El Estado no debe limitar el comercio internacional. Éste debe ser libre y los aranceles deben reducirse o eliminarse."}],
      "type": "economicas"
    },
    {
      "id": 12,
      "title": "Pregunta 12: Impuestos",
      "description": "Los impuestos son necesarios para sufragar los gastos del Estado.",
      "options": [{ "value": 1, "text": "Los ricos deberían pagar más impuestos para aumentar las prestaciones y servicios del Estado."},
      { "value": 2, "text": "Los impuestos no deberían subir. Deben ser los justos y necesarios para sufragar los gastos del Estado."},
      { "value": 3, "text": "Los impuestos deberían reducirse, aunque para ello haya que recortar algunas prestaciones y servicios del Estado."}],
      "type": "economicas"
    },
    {
      "id": 13,
      "title": "Pregunta 13: Pensiones",
      "description": "Las pensiones para la jubilación garantizan el bienestar cuando se llega a la tercera edad.",
      "options": [{ "value": 1, "text": "Las pensiones de jubilación deben ser gestionadas por el Estado con un sistema público de contribuciones obligatorias (Seguridad Social)."},
      { "value": 2, "text": "Las pensiones de jubilación deben estar garantizadas por el Estado, con algún tipo de modelo mixto que pueda conjugar un sistema público y planes privados."},
      { "value": 3, "text": "Las pensiones de jubilación son un asunto de ahorro y planificación individual. El Estado no debe exigir contribuciones obligatorias a un sistema público."}],
      "type": "economicas"
    },
    {
      "id": 14,
      "title": "Pregunta 14: Solidaridad",
      "description": "Los pobres y necesitados dependen de la solidaridad del resto de la sociedad.",
      "options": [{ "value": 1, "text": "El Estado debe encargarse de eliminar o reducir la desigualdad y la pobreza en la sociedad."},
      { "value": 2, "text": "El Estado debe gestionar la ayuda y asistencia adecuada a los necesitados, independientemente de que las instituciones privadas de caridad puedan complementarla voluntariamente."},
      { "value": 3, "text": "Las instituciones privadas de caridad deben ser las principales canalizadoras de la solidaridad de la sociedad."}],
      "type": "economicas"
    },
    {
      "id": 15,
      "title": "Pregunta 15: Permisos",
      "description": "Algunas profesiones requieren una cierta cualificación para ejercerlas.",
      "options": [{ "value": 1, "text": "Los sectores profesionales tienen que estar regulados por las leyes. El ejercicio de las profesiones cualificadas debe requerir de las oportunas licencias y permisos otorgadas en cada caso por el órgano competente del Estado."},
      { "value": 2, "text": "Los sectores profesionales deben estar regulados por organismos independientes, como los colegios profesionales. Los profesionales cualificados deben colegiarse en ellos, ya que su supervisión garantiza la calidad de sus servicios."},
      { "value": 3, "text": "Las licencias, permisos y colegios profesionales son trabas innecesarias. El ejercicio de cualquier profesión debe ser libre para cualquier persona cualificada."}],
      "type": "economicas"
    },
    {
      "id": 16,
      "title": "Pregunta 16: Sindicatos",
      "description": "Los sindicatos representan los intereses de los trabajadores.",
      "options": [{ "value": 1, "text": "Los sindicatos son esenciales para proteger los derechos de los trabajadores. El Estado debe proveerles financiación y atribuírles funciones especiales en la legislación laboral."},
      { "value": 2, "text": "Los sindicatos, como representantes de los trabajadores, deben contar con ciertas funciones especiales en la legislación laboral, pero no deben ser financiados por el Estado."},
      { "value": 3, "text": "Los sindicatos deben regirse por las normas aplicables a cualquier otra asociación, y no recibir financiación pública o atribuírseles funciones especiales."}],
      "type": "economicas"
    },
    {
      "id": 17,
      "title": "Pregunta 17: Sanidad",
      "description": "La cobertura médica es una necesidad eventual para todas las personas.",
      "options": [{ "value": 1, "text": "El Estado debe gestionar centros médicos de carácter público, y financiarlos mediante contribuciones a un seguro médico público de carácter obligatorio (Seguridad Social)."},
      { "value": 2, "text": "El Estado debe garantizar el acceso universal a la sanidad mediante centros con algún tipo de financiación pública, sean gestionados o no por el Estado."},
      { "value": 3, "text": "Gestionar centros médicos no debe ser una función del Estado. Los centros médicos deben ser privados, y los ciudadanos ser libres de contratar el seguro médico que prefieran."}],
      "type": "economicas"
    },
    {
      "id": 18,
      "title": "Pregunta 18: Bancos",
      "description": "El Banco Central y el sistema bancario, formado por los bancos comerciales, son los que ponen en circulación el dinero de curso legal.",
      "options": [{ "value": 1, "text": "Tanto el Banco Central como los bancos comerciales deben ser públicos y atender a las necesidades sociales."},
      { "value": 2, "text": "El Banco Central tiene una función esencial regulando la economía, por lo que debe ser independiente y supervisar a los bancos comerciales."},
      { "value": 3, "text": "El Banco Central debería reducir sus competencias, y los bancos comerciales ser todos de carácter privado."}],
      "type": "economicas"
    },
    {
      "id": 19,
      "title": "Pregunta 19: Grandes superficies",
      "description": "Las grandes superficies tienen ciertas ventajas competetitivas frente al pequeño comercio tradicional.",
      "options": [{ "value": 1, "text": "Algunas Grandes Superficies tienen prácticas de competencia abusivas. Deberían imponérseles condiciones más restrictivas de funcionamiento, o cerrarse."},
      { "value": 2, "text": "Se deben corregir algunas ventajas competitivas de las Grandes Superfies, regulando ciertas materias como sus horarios y días de apertura, o el descuento máximo que pueden aplicar."},
      { "value": 3, "text": "Las Grandes Superficies son empresas como cualquier otra. Tienen derecho a competir libremente en el mercado, sin restricciones en sus horarios o precios."}],
      "type": "economicas"
    },
    {
      "id": 20,
      "title": "Pregunta 20: Mercado laboral",
      "description": "Los contratos laborales vinculan a empresarios y trabajadores en sus obligaciones.",
      "options": [{ "value": 1, "text": "La legislación sobre contratos laborales debería restringir más el despido, así como limitar más el empleo precario y garantizar una mayor protección al trabajador."},
      { "value": 2, "text": "La legislación sobre contratos laborales debe siempre mantener una protección especial al trabajador, protegiéndole frente al despido y el empleo precario."},
      { "value": 3, "text": "Los contratos laborales deben gozar de más libertad de cláusulas entre las partes. La legislación debería interferir menos en materias puramente contractuales, como su duración o causas de rescisión."}],
      "type": "economicas"
    },
    {
      "id": 21,
      "title": "Pregunta 21: Participación ciudadana",
      "description": "¿Cuál es tu opinión sobre la participación ciudadana en la toma de decisiones politicas?",
      "options": [
        { "value": 1, "text": "Debe ser limitada y restringida a expertos."},
        { "value": 2, "text": "Debe ser moderada, con un equilibrio entre expertos y ciudadanos."},
        { "value": 3, "text": "Debe ser amplia y fomentar la inclusión de todos los ciudadanos."}],
      "type": "politicas"
    },
    {
      "id": 22,
      "title": "Pregunta 22: Elecciones",
      "description": "¿Qué nivel de transparencia deberían tener los procesos electorales y el financiamiento político?",
      "options": [
        { "value": 1, "text": "No es necesario un alto nivel de transparencia en estos aspectos."},
        { "value": 2, "text": "Debe haber cierta transparencia, pero con salvaguardias para proteger la privacidad."},
        { "value": 3, "text": "Debe haber total transparencia y rendición de cuentas."}],
      "type": "politicas"
    },
    {
      "id": 23,
      "title": "Pregunta 23: Medios",
      "description": "¿Cuál es tu postura sobre el control y la regulación de los medios de comunicación?",
      "options": [
        { "value": 1, "text": "Deben estar estrictamente controlados para evitar la desinformación."},
        { "value": 2, "text": "Deben estar regulados en cierta medida para garantizar la veracidad de la información."},
        { "value": 3, "text": "Deben ser independientes y tener libertad editorial."}],
      "type": "politicas"
    },
    {
      "id": 24,
      "title": "Pregunta 24: Separación de Poderes",
      "description": "¿Qué importancia le das a la separación de poderes en un sistema político?",
      "options": [
        { "value": 1, "text": "No es necesario tener una clara separación de poderes."},
        { "value": 2, "text": "Es importante, pero se pueden hacer excepciones en casos particulares."},
        { "value": 3, "text": "Es esencial para evitar abusos de poder."}],
      "type": "politicas"
    },
    {
      "id": 25,
      "title": "Pregunta 25: Derechos Humanos",
      "description": "¿Cuál es tu opinión sobre la protección de los derechos humanos y las libertades individuales?",
      "options": [
        { "value": 1, "text": "Deben ser protegidos aunque primero se deben priorizar libertades colectivas."},
        { "value": 2, "text": "Deben ser equilibrados con las necesidades de seguridad y estabilidad."},
        { "value": 3, "text": "Deben ser protegidos y respetados en todo momento."}],
      "type": "politicas"
    },
    {
      "id": 26,
      "title": "Pregunta 26: Sistema Judicial",
      "description": "¿Cuál es tu visión sobre la independencia del sistema judicial?",
      "options": [
        { "value": 1, "text": "Debe estar subordinado al poder político para garantizar la estabilidad."},
        { "value": 2, "text": "Debe tener cierta independencia, pero estar sujeto a controles democráticos."},
        { "value": 3, "text": "Debe ser completamente independiente y ajeno a influencias politicas."}],
      "type": "politicas"
    },
    {
      "id": 27,
      "title": "Pregunta 27:  Privacidad",
      "description": "¿Cuál es tu postura respecto a la protección de la privacidad y el uso de datos personales por parte del gobierno?",
      "options": [
        { "value": 1, "text": "El gobierno debe tener amplio acceso a los datos personales para garantizar la seguridad."},
        { "value": 2, "text": "Debe haber cierto equilibrio entre la protección de la privacidad y la seguridad nacional."},
        { "value": 3, "text": "Debe haber estrictas protecciones y limitaciones en el uso de datos personales."}],
      "type": "politicas"
    },
    {
      "id": 28,
      "title": "Pregunta 28: Libertad de expresión",
      "description": "¿Cuál es tu posición sobre la existencia de restricciones a la libertad de expresión?",
      "options": [
        { "value": 1, "text": "Debe haber límites claros para evitar discursos de odio y desinformación."},
        { "value": 2, "text": "Debe haber cierta regulación, pero sin limitar la libertad de expresión fundamental."},
        { "value": 3, "text": "No se deben imponer restricciones a la libertad de expresión."}],
      "type": "politicas"
    },
    {
      "id": 29,
      "title": "Pregunta 29: Inclusión",
      "description": "¿Qué importancia le das a la diversidad y la inclusión en la política y la toma de decisiones?",
      "options": [
        { "value": 1, "text": "Debe haber una representación diversa e inclusiva en todos los niveles de gobierno."},
        { "value": 2, "text": "Es importante considerar la diversidad, pero no debe ser un factor determinante."},
        { "value": 3, "text": "La diversidad no es relevante para la toma de decisiones politicas."}],
      "type": "politicas"
    },
    {
      "id": 30,
      "title": "Pregunta 30: Transparencia",
      "description": "¿Cuál es tu opinión sobre la rendición de cuentas de los líderes políticos?",
      "options": [
        { "value": 1, "text": "No es necesario que los líderes políticos rindan cuentas públicamente."},
        { "value": 2, "text": "Deben ser responsables, pero también deben tener margen de maniobra."},
        { "value": 3, "text": "Deben ser totalmente responsables de sus acciones y decisiones."}],
      "type": "politicas"
    }
  ]
}