let jsonObject = {
  "preguntas": [
    {
      "id": 1,
      "title": "Pregunta 1: Matrimonio Igualitario",
      "description": "¿Cuál es tu postura respecto al matrimonio igualitario y los derechos LGBT+?",
      "options": [{ "value": 3, "text": "Debe ser legalizado y garantizar igualdad de derechos para todas las personas."},
      { "value": 2, "text": "Debe ser legalizado habiendo ciertos límites y consideraciones basadas en valores tradicionales."},
      { "value": 1, "text": "No debe ser legalizado o reconocido como una forma válida de unión."}],
      "type": "sociales"
    },
    {
      "id": 2,
      "title": "Pregunta 2: Genero",
      "description": "¿Qué importancia le das a la igualdad de género y la lucha contra la discriminación?",
      "options": [{ "value": 3, "text": "Debe haber póliticas activas que fomenten la inclusión y se debe luchar por la igualdad de géneros. Se deben privilegiar a las minorías en compensación por años de discriminación y exclusión."},
      { "value": 2, "text": "Debe haber ciertos ajustes y medidas que afecten positivamente la inclusión y el equilibrio entre géneros"},
      { "value": 1, "text": "No es necesario enfocarse en lograr la igualdad de género mientras exista el respeto a las personas independientemente de su género."}],
      "type": "sociales"
    },
    {
      "id": 3,
      "title": "Pregunta 3: Drogas",
      "description": "¿Cuál es tu opinión sobre la legalización y regulación de las drogas?",
      "options": [{ "value": 3, "text": "Debe ser legalizado y regulado para reducir la violencia y proteger la salud pública."},
      { "value": 2, "text": "Debe haber ciertos límites y restricciones para evitar el abuso y proteger la sociedad."},
      { "value": 1, "text": "No debe ser legalizado y debe haber una política de tolerancia cero hacia las drogas."}],
      "type": "sociales"
    },
    {
      "id": 4,
      "title": "Pregunta 4: Salud",
      "description": "¿Qué importancia le das al acceso universal a la atención médica y los servicios de salud?",
      "options": [{ "value": 3, "text": "Debe ser un derecho universal y garantizado por el Estado."},
      { "value": 2, "text": "Debe haber un equilibrio entre el acceso universal y la responsabilidad individual."},
      { "value": 1, "text": "No es necesario garantizar el acceso universal a la atención médica."}],
      "type": "sociales"
    },
    {
      "id": 5,
      "title": "Pregunta 5: Aborto",
      "description": "¿Cuál es tu postura sobre el aborto y los derechos reproductivos de las mujeres?",
      "options": [{ "value": 3, "text": "Debe ser legal y respetar la autonomía y los derechos de las mujeres sobre su cuerpo."},
      { "value": 2, "text": "Debe haber ciertas restricciones y consideraciones basadas en valores y circunstancias específicas."},
      { "value": 1, "text": "No debe ser legalizado y se deben imponer restricciones estrictas al aborto."}],
      "type": "sociales"
    },
    {
      "id": 6,
      "title": "Pregunta 6: Educación",
      "description": "¿Qué importancia le das a la educación pública y el acceso equitativo a la educación?",
      "options": [{ "value": 3, "text": "Debe haber una inversión significativa en la educación pública y garantizar el acceso equitativo."},
      { "value": 2, "text": "Debe haber cierta inversión, y también fomentar la educación privada."},
      { "value": 1, "text": "La educación debería ser idealmente privada, y se debería invertir los justo y necesario en educación pública"}],
      "type": "sociales"
    },
    {
      "id": 7,
      "title": "Pregunta 7: Pena de Muerte",
      "description": "¿Cuál es tu opinión sobre la pena de muerte y el sistema de justicia penal?",
      "options": [{ "value": 3, "text": "Debe ser abolida y reemplazada por medidas de rehabilitación."},
      { "value": 2, "text": "Debe haber ciertos casos en los que se aplique la pena de muerte, pero con restricciones."},
      { "value": 1, "text": "La pena de muerte debe ser una opción válida en el sistema de justicia penal."}],
      "type": "sociales"
    },
    {
      "id": 8,
      "title": "Pregunta 8: Inmigración",
      "description": "¿Cuál es tu postura respecto a la inmigración y los derechos de los migrantes?",
      "options": [{ "value": 3, "text": "Deben garantizarse los derechos de los migrantes y fomentar la inclusión y la integración."},
      { "value": 2, "text": "Debe haber ciertos límites y restricciones para proteger la seguridad y la economía nacional."},
      { "value": 1, "text": "No se deben otorgar muchos derechos a los migrantes y se deben reforzar las restricciones."}],
      "type": "sociales"
    },
    {
      "id": 9,
      "title": "Pregunta 9: Medio Ambiente",
      "description": "¿Qué importancia le das a la protección del medio ambiente y la lucha contra el cambio climático?",
      "options": [{ "value": 3, "text": "Debe haber medidas urgentes para proteger el medio ambiente y combatir el cambio climático."},
      { "value": 2, "text": "Debe haber un equilibrio entre el desarrollo económico y la protección del medio ambiente."},
      { "value": 1, "text": "No es necesario enfocarse demasiado en la protección del medio ambiente o el cambio climático."}],
      "type": "sociales"
    },
    {
      "id": 10,
      "title": "Pregunta 10: Armas",
      "description": "¿Cuál es tu visión sobre la regulación de las armas de fuego y el control de armas?",
      "options": [{ "value": 3, "text": "Debe haber una regulación estricta y un control exhaustivo de las armas de fuego."},
      { "value": 2, "text": "Debe haber ciertas restricciones y regulaciones, pero respetando el derecho a portar armas."},
      { "value": 1, "text": "No debe haber regulación o restricciones significativas sobre las armas de fuego."}],
      "type": "sociales"
    },
    {
      "id": 11,
      "title": "Pregunta 11: Intervencionismo",
      "description": "¿Cuál es tu postura sobre el papel del gobierno en la economía?",
      "options": [{ "value": 1, "text": "Debe ser el principal actor económico y controlar la mayoría de los sectores."},
      { "value": 2, "text": "Debe intervenir activamente para regular y controlar los sectores clave."},
      { "value": 3, "text": "Debe tener una participación limitada y permitir el libre mercado."}],
      "type": "economicas"
    },
    {
      "id": 12,
      "title": "Pregunta 12: Impuestos",
      "description": "¿Cuál es tu opinión sobre el sistema de impuestos y redistribución de la riqueza?",
      "options": [{ "value": 1, "text": "Debe haber impuestos progresivos y programas sólidos de redistribución."},
      { "value": 2, "text": "Debe haber un equilibrio entre la redistribución y la incentivación del crecimiento económico."},
      { "value": 3, "text": "Debe haber impuestos bajos y mínima o nula intervención en la redistribución de la riqueza."}],
      "type": "economicas"
    },
    {
      "id": 13,
      "title": "Pregunta 13: Derechos Laborales",
      "description": "¿Qué importancia le das a la protección de los derechos laborales y sindicales?",
      "options": [{ "value": 1, "text": "Deben ser fuertemente protegidos para garantizar condiciones justas para los trabajadores."},
      { "value": 2, "text": "Deben ser equilibrados con las necesidades de las empresas y la competitividad."},
      { "value": 3, "text": "No es necesario otorgar muchos derechos laborales o fomentar la formación de sindicatos."}],
      "type": "economicas"
    },
    {
      "id": 14,
      "title": "Pregunta 14: Mercado y Banca",
      "description": "¿Cuál es tu visión sobre la regulación de los mercados financieros y la banca?",
      "options": [{ "value": 1, "text": "Deben estar fuertemente regulados para prevenir crisis y proteger a los consumidores."},
      { "value": 2, "text": "Debe haber cierta regulación, pero también espacio para la libre competencia."},
      { "value": 3, "text": "Deben ser mínimamente regulados para fomentar la innovación y el crecimiento económico."}],
      "type": "economicas"
    },
    {
      "id": 15,
      "title": "Pregunta 15: Comercio Internacional",
      "description": "¿Cuál es tu postura sobre el comercio internacional y los acuerdos comerciales?",
      "options": [{ "value": 1, "text": "Deben existir barreras comerciales para proteger la economía nacional y los empleos."},
      { "value": 2, "text": "Deben haber acuerdos justos y equitativos que beneficien a todos los países involucrados."},
      { "value": 3, "text": "Debe haber una liberalización total del comercio sin restricciones."}],
      "type": "economicas"
    },
    {
      "id": 16,
      "title": "Pregunta 16: Educación y Capacitación Laboral",
      "description": "¿Qué importancia le das a la inversión en educación y capacitación laboral?",
      "options": [{ "value": 1, "text": "Debe ser una prioridad para garantizar un capital humano bien preparado."},
      { "value": 2, "text": "Debe haber cierta inversión, además de la responsabilidad del individuo."},
      { "value": 3, "text": "Es responsabilidad de cada individuo, no es necesario invertir en educación y capacitación laboral."}],
      "type": "economicas"
    },
    {
      "id": 17,
      "title": "Pregunta 17: Monopolios y Propiedad Privada",
      "description": "¿Cuál es tu opinión sobre la propiedad privada y la regulación de los monopolios?",
      "options": [{ "value": 1, "text": "Debe existir una regulación estricta para evitar abusos y garantizar la competencia."},
      { "value": 2, "text": "Debe haber cierta regulación, pero también se debe respetar la propiedad privada."},
      { "value": 3, "text": "No es necesario regular los monopolios o limitar la propiedad privada."}],
      "type": "economicas"
    },
    {
      "id": 18,
      "title": "Pregunta 18: Medio Ambiente",
      "description": "¿Cuál es tu postura respecto al desarrollo sostenible y la protección del medio ambiente?",
      "options": [{ "value": 1, "text": "Debe haber regulaciones ambientales estrictas y un enfoque en la sostenibilidad."},
      { "value": 2, "text": "Debe haber un equilibrio entre la protección del medio ambiente y el desarrollo económico."},
      { "value": 3, "text": "No es necesario enfocarse en la protección del medio ambiente en detrimento del crecimiento económico."}],
      "type": "economicas"
    },
    {
      "id": 19,
      "title": "Pregunta 19: PYMES e Incentivos",
      "description": "¿Qué importancia le das al apoyo estatal a las pequeñas y medianas empresas (PYMES)?",
      "options": [{ "value": 1, "text": "Deben recibir apoyo y beneficios especiales para promover su crecimiento y desarrollo."},
      { "value": 2, "text": "Deben recibir cierto apoyo, pero no en detrimento de las grandes empresas."},
      { "value": 3, "text": "No es necesario brindar apoyo estatal a las PYMES."}],
      "type": "economicas"
    },
    {
      "id": 20,
      "title": "Pregunta 20: Globalización",
      "description": "¿Cuál es tu visión sobre la globalización y la apertura económica?",
      "options": [{ "value": 1, "text": "Debe haber un enfoque más proteccionista y limitar la influencia extranjera."},
      { "value": 2, "text": "Debe haber una apertura económica controlada que beneficie a todos los actores involucrados."},
      { "value": 3, "text": "Debe haber una apertura total y liberalización económica sin restricciones."}],
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





