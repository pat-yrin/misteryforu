// ============================================================
//  content.js  ·  TODO LO QUE PUEDES EDITAR SIN TOCAR LA LÓGICA
//  (sorpresa final, fechas, contraseña, textos y pistas de cada sala)
// ============================================================

// --- Ajustes ---
const SORPRESA_T='Nochebuena'; // título del libro final
const INICIO='2026-11-20'; // día 1 = hoy. Cada día se abre una habitación nueva a las 00:00 (hora de Bolivia). Pon null para abrirlas todas.
const ZONA=-4; // Bolivia = UTC-4 (sin horario de verano)
const PW='A1P703NR'; // código final: un carácter por día (8 caracteres)

// --- Textos de cada sala: [subtítulo, historia, pista que se desbloquea, ayuda del botón «Pista»] ---
// Orden: 1 Vestíbulo, 2 Biblioteca, 3 Invernadero, 4 Comedor, 5 Despacho, 6 Sala de música, 7 Dormitorio, 8 Cámara secreta.
// Los saltos de línea dentro de la historia crean párrafos nuevos.
const TX=[
['La invitación',`Lluvia fina, 21:40. Un sobre sin remitente, firmado solo con una «B.», te ha traído hasta esta casa: dentro, una llave, una fotografía y una nota.

En la foto, este mismo vestíbulo la noche del 17 de agosto: Nessyr Oshio, dueña de la casa, rodeada de cuatro invitadas, y detrás de ellas el gran reloj marcando las 8 en punto. Sigue parado desde entonces. Nessyr desapareció esa noche, durante la Cena de los Ocho Relojes, y la policía cerró el caso en tres días.

Las cuatro invitadas: Engfa, la socia que lo administra todo; Charlotte, capitana de velero y amiga de la infancia; Lookmhee, florista; y Sonya, la doctora de cabecera.

Ocho marcas talladas en el marco de la puerta y, sobre la consola, un plano de la casa hecho pedazos: veinte piezas, muchas giradas. Reconstruirlo es el primer paso del caso.`,`Pista 1 — Al reconstruir el plano aparece una nota: «Sonya llegó la última, ocho minutos tarde, y era su primera visita a esta casa: no conocía los papeles de Nessyr». Al pie, con otra letra: «Juras, ¿viste? Casi igual. — B.»`,`Empieza por las esquinas y los bordes. Los nombres de las habitaciones y los muebles te dicen cómo gira cada pieza. Puedes ver el plano completo dos veces.`],
['El poema de las páginas perdidas',`22:10. La biblioteca huele a papel viejo y a lluvia. Alguien arrancó varias hojas de un cuaderno de tapa azul, escrito en versos espejados, de esos que miran el dolor de frente, como los de Sylvia Plath, y las dejó sueltas entre los libros.

De un estante asoma una novela sobre dos mujeres y una floristería, con un marcapáginas de seda. En el margen de una hoja, la letra de Nessyr: «Para abrir el cajón secreto, completa el crucigrama: dejé cada palabra a la vista».`,`Pista 2 — En el cajón secreto, una nota de Nessyr: «Mira el tocador solo cuando conozcas a las cuatro invitadas. Y desconfía de todo papel que se adelanta a los hechos». Alguien subrayó dos veces «se adelanta». — B.`,`La primera es un número de agosto, dicho a tu manera. La segunda lleva una hora en el título. La tercera es un libro de páginas privadas de Plath. La última: mira el perchero y el marco de la puerta del vestíbulo; las marcas largas se cuentan, los ganchos tienen número.`],
['Las flores que no debían florecer',`23:05. En el invernadero florecen, a destiempo, tulipanes, lirios y peonías: flores que jamás coinciden.

Lookmhee, la florista, declara que durante tres noches seguidas llegaron ramos para Nessyr, sin tarjeta, y que ella los entregó. «Me dijeron quién los mandaba, pero ya no recuerdo el orden», admite. Guardó las tarjetas en una caja con candado de cuatro especies: tulipán, lirio, peonía y mariquita. Solo resolviendo el sudoku se abrirá.`,`Pista 3 — Las tarjetas: noche 1, lirios (Sonya); noche 2, peonías (Charlotte); noche 3, tulipanes (Engfa), que ya vivía en la casa desde la primera visita. En la última tarjeta: «Tres ramos, tres excusas para volver a mi casa». Al dorso, una mariquita dibujada. — B.`,`Empieza por la fila 1: solo falta el 3 en la tercera casilla.`],
['La última partida',`00:20. El comedor conserva la última partida de Loba, congelada a media mano: cuatro sillas, cuatro copas y una copa de helado de pasas al ron, intacta sobre el mantel. Nadie deja así un helado. La partida se cortó de golpe, y ese helado sin derretir fija la hora.

Según Lookmhee, Nessyr iba ganando. Para reconstruir su mano hay que ganarla: baja todas tus combinaciones (hay un comodín en la mano) y descarta, como mucho, una carta.`,`Pista 4 — Lookmhee confiesa que cambió una carta a propósito para alargar la partida: no quería que Nessyr se levantara de la mesa. Era su amiga, no su enemiga. Bajo la copa de helado, una pulsera antigua con un dije de mariquita. En el borde del mantel, a lápiz: «Viste». — B.`,`Mira el 7♥: ¿va en la escalera de corazones o en el trío de sietes? Y el comodín rinde más donde faltan cartas de verdad: los dos reyes.`],
['La teoría imposible',`01:15. El despacho de Nessyr: un calendario con el 16 tachado y el 17 rodeado en rojo, una caja fuerte vacía y un lacre roto. En el escritorio, un documento oficial llama la atención: el acta que declara desaparecida a Nessyr.

Una nota de la perito Sisi dice: «Si los papeles mienten, los números no. Compara fechas y horas». Son cinco cuentas, y una de ellas te exige recordar el comedor.`,`Pista 5 — El acta de desaparición está fechada el 16 de agosto, un día ANTES de que Nessyr desapareciera. Quien la redactó sabía lo que iba a pasar y conocía los papeles de Nessyr. Charlotte zarpó el día 14: no estaba aquí. — Perito Sisi`,`1) 19:15 más 53 minutos, contra las 20:00. 3) Ecuador va una hora por detrás de Bolivia. 4) En el comedor: cuenta las velas del techo y las sillas. 5) Tres noches, siete flores por ramo.`],
['La melodía de los ausentes',`02:00. Un gramófono con un disco azul de Sade («By Your Side»), una funda con un paso de cebra y estantes llenos de vinilos. Sobre el atril, una partitura sin letra: la melodía de los ausentes.

En la aguja, enredada, una hebra de seda burdeos: alguien puso este disco la noche del 17. Al pie de la partitura, Nessyr escribió: «Repite la melodía de memoria y la casa te dirá algo».`,`Pista 6 — Al terminar la melodía, el gramófono susurra: «El tocador tiene memoria». La hebra de seda burdeos coincide con los guantes de Engfa, que nunca se los quita. En la funda del disco, a lápiz: «Casi igual. — B.»`,`Son cinco notas. Escucha y repite sin prisa.`],
['Lo que el espejo recuerda',`03:30. El dormitorio de Nessyr. Un tocador con cosméticos perfectamente ordenados, pulseras antiguas y un espejo con un mensaje escrito con pintalabios: OIHSO ED RYSSEN.

Nessyr era meticulosa: cada objeto tiene su sitio y, si algo cambia, se nota. Alguien estuvo aquí después de ella. Observa el tocador unos segundos: doce objetos. Cuando vuelvas a mirar, varios ya no pertenecerán.`,`Pista 7 — Al revés, el espejo dice «NESSYR DE OSHIO». Alguien cambió cuatro objetos: una llave nueva, una escoba diminuta, un pergamino y un helado. La llave abre el armario, y tras él hay una puerta secreta. En el cajón del tocador, una pulsera diminuta, talla de niña, con un dije de mariquita. ¿Para quién era?`,`Memoriza por filas: arriba 💄 🪞 💍 🌷 🐇 🧴 y abajo 🕰️ 🐞 🎀 💌 🌸 📿. Cuatro de ellos cambian.`],
['El juicio',`04:45. Tras el armario: ocho llaves en un tablero, un corcho con la evidencia unida por un hilo rojo y el retrato de una joven con uniforme azul marino, con una escoba cruzando el cielo a su espalda. Es hora del juicio.

Primero, separa lo que un tribunal admitiría de lo que no: un testigo de oídas o un sobre sin cadena de custodia no sostienen un caso. Después, a partir de móvil, medio y oportunidad, señala a quien falsificó el acta.`,`Pista 8 — Caso resuelto. Queda una pregunta: ¿por qué alguien lo dejaría todo preparado para ti? Abre el cofre con el código de las ocho evidencias.`,`Descarta lo que se oyó de oídas y lo que no tiene cadena de custodia. Luego, ¿quién conocía los papeles y tenía acceso a la casa?`]];

// --- Fichas de las sospechosas (se ven en el cuaderno) ---
const SOSPECHOSAS=`<div class='cl'><b>Engfa</b>: socia y administradora de la casa. Elegante, guantes de seda, tacones. Lo controla todo.\n<b>Charlotte</b>: capitana de velero y amiga de la infancia. Abrigo azul marino con botones dorados.\n<b>Lookmhee</b>: florista. Delantal y manos con tierra. Quiere mucho a Nessyr.\n<b>Sonya</b>: doctora de cabecera. Abrigo café, siempre con prisa.</div>`;

// --- Prólogo (se muestra al abrir el juego) ---
const PROLOGO=`<div class='in'><small>PRÓLOGO · CASO Nº 17/08</small><h2>El Caso Nessyr</h2><p>Una noche, una investigadora recibe una invitación inesperada para visitar una antigua mansión. El remitente es desconocido: solo firma con una «B.». Dentro del sobre hay una llave, una fotografía antigua y una nota:</p><div class='cl'>«Hay secretos que no desaparecen. Simplemente esperan a que alguien encuentre la forma correcta de mirarlos».</div><p>La mansión pertenece a Nessyr Oshio, que desapareció sin dejar rastro la noche del 17 de agosto, durante la Cena de los Ocho Relojes. La policía cerró el caso en tres días. Pero antes de desaparecer, Nessyr preparó ocho habitaciones, ocho cerraduras y un expediente incompleto.</p><p>Cada día se abre una habitación nueva a las 00:00, hora de Bolivia. Cada habitación guarda una evidencia, y cada minijuego es una prueba que desbloquea una pista y un carácter del código final. Algunas pruebas parecen contradictorias; otras nombran a personas y lugares sin conexión aparente. Cuatro invitadas siguen bajo ese techo: Engfa, Charlotte, Lookmhee y Sonya. Una de ellas miente.</p><p>El verdadero misterio no es solo qué ocurrió, sino por qué alguien dejó todo preparado para ti.</p><div class='row'><button id='cx'>Abrir el expediente</button></div></div>`;

// --- Desenlace: se muestra al abrir el cofre con el código. Desde aquí se abre el libro ---
const DESENLACE=()=>`<div class='in'><small>CASO RESUELTO</small><h2>La verdad de Nessyr</h2><p>Engfa falsificó el acta del 16 de agosto: un papel fechado antes de que ocurrieran los hechos. Y eso es lo que hace el miedo: escribir el «ya no» antes de que pase. Un documento que se adelanta al final no prueba nada.</p><p>Nessyr Oshio nunca desapareció. Dejó ocho habitaciones, ocho evidencias y un expediente incompleto para que alguien capaz de mirar cada detalle lo resolviera. Ese alguien eras tú, porque Nessyr es la hija de la bruja y de la detective de este caso: es hija de las dos. Detective como tú y bruja como su madre, llegó desde el futuro (por eso va una hora por delante) para dejar una prueba contra el miedo: si estás leyendo esto, no se acabó.</p><p>Cada sospechosa era una forma de ese miedo. Engfa, el que escribe el final antes de tiempo. Charlotte, que zarpó: la distancia entre dos países. Sonya, que llegó ocho minutos tarde: la hora de diferencia. Lookmhee, que quiso retenerla en la mesa: el cariño que no quiere soltar. Y B. era la bruja, que siempre llega ocho minutos tarde y siempre sabe dónde estás. La pulsera con la mariquita, los tulipanes, el helado de pasas al ron y la escoba voladora son recuerdos vuestros.</p><p>El expediente se cierra con el código <b>A1P703NR</b>, y dentro del cofre estaba la historia que más le gustaba a Nessyr: cómo empezó todo.</p><div class='row'><button id='bkbtn'>📖 Abrir el libro</button></div><div class='row' style='margin-top:8px'><button class='x' id='cx'>Volver al tablero</button></div></div>`;

// --- El cuento del libro (un párrafo por línea; puedes editarlo) ---
const CUENTO=[
 "Era Nochebuena y yo estaba en mi cuarto, sin ventanas, pensando en ti. Soy bruja: no necesito ventanas para llegar a donde quiero. Sobre la mesa apareció una escoba pequeña con un lazo rosa pastel.",
 "Me subí y en un segundo estaba en tu ventana. La abriste y te reíste.",
 "—¡Bruja! Sabía que ibas a llegar. Oshio… digo, ocho minutos tarde.",
 "—Casi igual —dije yo.",
 "Te subiste conmigo. La escoba era pequeña, pero nos aguantó: siempre lo hace. Volamos sobre las luces de Navidad y, mientras cruzábamos el cielo, sacaste la mano y comenzaste a atrapar copos con la lengua. Te reías cada vez que uno te caía en la nariz.",
 "—Me hace frío pero no me hace frío —dijiste.",
 "Yo me reí. Entonces algo brillante nos siguió: un dron diminuto con forma de mariquita.",
 "—Mi dron invisible te cuidó todo el camino —dijiste—. No te vayas a resfriar.",
 "El dron soltó un copo más grande y lo atrapaste al vuelo. Yo me quedé mirándote: nunca había visto nevar, y ahí estabas tú, comiéndote el granizo como si fuera lo más natural del mundo.",
 "Aterrizamos en una plaza navideña que parecía sacada de un sueño. Había luces por todas partes, puestos de chocolate caliente, un árbol enorme con adornos de los cuatro elementos y un coro de villancicos desafinados. Caminamos de la mano sin rumbo. Te detuviste en un puesto de pulseras y elegiste una con un dije de mariquita. Yo compré dos tulipanes de papel: te puse uno detrás de la oreja y tú me pusiste el otro a mí.",
 "Seguimos caminando. Nos reímos de los villancicos, nos tomamos una foto con un muñeco de nieve que tenía cara de bruja y me señalaste un puesto de helado. Tú pediste pasas al ron; para mí, vainilla. Tú quisiste darme una cucharada, me reí, y el helado terminó en mi cara.",
 "—Es tu culpa, Patricia —dijiste.",
 "—Así me amas —respondí.",
 "Y me sorprendiste con un beso que afirmaba tus palabras y limpiaba mi desastre.",
 "Nos sentamos en un banco. La plaza estaba llena de gente, pero nosotras estábamos en nuestra propia burbuja. Te mirabas las manos, como si estuvieras midiendo algo que no sabías cómo decir.",
 "—¿Sabes? —empezaste—. A veces pienso que esto no debería ser tan especial. Que debería ser normal despertarse y encontrarte en la cocina, o discutir por quién se queda con la manta, o verte dormir sin que sea una ocasión. Pero no lo es. No es normal. Y creo que por eso lo cuido tanto.",
 "—¿Te da miedo que se acabe? —pregunté.",
 "—Sí —dijiste, sin rodeos—. Me da miedo que se acabe. Y me da miedo que te canses de mi actitud. Porque yo sé cómo soy a veces. Sé que puedo ser intensa, que me cierro, que digo cosas que no quiero decir. Y a veces pienso que un día vas a mirarme y vas a decir “ya no”. Que vas a cansarte de cargar con esto.",
 "Me quedé en silencio. No porque no supiera qué decir, sino porque quería decirlo bien.",
 "—¿Sabes lo que pienso yo? —dije al fin—. Que lo especial no es que pase seguido. Lo especial es que, cuando pasa, no se siente como una excepción. Se siente como un regreso. Y yo no vuelvo por costumbre. Vuelvo porque tú estás ahí.",
 "—Pero mi actitud…",
 "—Tu actitud es parte de ti —dije—. No es un defecto que tengo que aguantar. Es algo que aprendo a leer. Y cuando no sé leerlo, pregunto. Y cuando me equivoco, lo hablamos. No me da miedo tu actitud. Me daría miedo no tenerte cerca para entenderla.",
 "Tú me miraste, con los ojos brillantes.",
 "—¿Y si algún día te cansas?",
 "—Entonces te lo digo —respondí—. Pero no me voy a cansar de ti. Me puedo cansar de la distancia, de los horarios, de las pantallas. De ti, no.",
 "Te reíste bajito, de esa forma en que te ríes cuando algo te llega de verdad. Luego me miraste y dijiste:",
 "—Te amo musho.",
 "—Te amo musho más —respondí.",
 "—Yo musho más y punto —dijiste.",
 "—Imposible —contesté.",
 "Y ninguna de las dos cedió. Nos quedamos ahí, en ese pequeño empate de amor, como si el mundo pudiera esperar.",
 "Luego te dije que para mí también era nuevo: nunca había tenido a alguien con quien compartir los copos de nieve, ni un dron invisible, ni una escoba que cruza países. Que lo nuestro era especial, y que lo especial no era sinónimo de frágil.",
 "—¿Y si me quedo? —pregunté—. ¿Y si esta vez no me voy en la escoba?",
 "—Entonces tendría que inventarme otra forma de cuidarte —dijiste—. Una que no dependa de la distancia.",
 "—¿Y funcionaría?",
 "—Funcionaría —dijiste—. Porque yo también me quedaría.",
 "Nos abrazamos sin prisa, como si el tiempo hubiera decidido quedarse quieto con nosotras. Y entendí que la Navidad no es una fecha ni una costumbre: es la calma de saber que existes, la ternura de elegirte otra vez, la certeza de que incluso en la distancia hay un lugar donde siempre vuelvo. Es tu risa, tu forma de mirarme y esta sensación de hogar que solo aparece cuando estás cerca. Porque no necesito mil luces ni un cielo entero: me basta con tenerte, aunque sea un instante, para que todo lo demás tenga sentido.",
 "Te amo musho musho.",
 "— Tu bruja."
];
