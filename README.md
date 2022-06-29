## Theram-Online-V1

<p align="left"> <img src="https://komarev.com/ghpvc/?username=fabrizinho113&label=Profile%20views&color=0e75b6&style=flat" alt="fabrizinho113" /> </p>

</p>

Proyecto final del curso de Javascript (CoderHouse). Primer proyecto hecho en Javascript (se recomienda usar el navegador Firefox ya que no es responsive y todo fue hecho
en base a ese navegador, con Chrome y Edge pueden haber pequeños problemas visuales).

# El proyecto

El proyecto en si es bastante simple: simular un "juego" click extremadamente sencillo donde peleas con distintos monstruos, ganas experiencia y oro cada vez que ganas una pelea. Tienes la opcion de usar el oro para comprar items en la tienda aunque cada item tiene requisitos (tener cierto nivel y oro).

Con cada personaje puedes guardar y/o cargar tu progreso con los botones de Save y Load. Se recomienda guardar antes de salir para no perder ningun progreso.

## Notas a tener en cuenta:

- No es responsive
- Como se menciono antes, se recomienda usar Firefox como navegador.
- Si tienes el mismo ataque o menos que el monstruo, pierdes el combate.
- La estetica es extremadamente basica en todos los aspectos
- Cuando se hace click en "Pelear"/"Fight" se tarda unos breves segundos en aparecer el resultado. Esto es para hacer una simulacion de backend de forma correcta.

## Niveles:

Nivel 1 a 2: 100 de Experiencia
<br>
Nivel 2 a 3: 200 de Experiencia
<br>
Nivel 3 a 4: 400 de Experiencia
<br>
Nivel 4 a 5: 600 de Experiencia

ACLARACION: Debido a que se trata de simular el "backend" con el setInterval para actualizar los datos mostrados en el DOM, el nivel se muestra correctamente luego de pelear una vez mas (sin importar el resultado). Esto solo afecta al nivel en terminos visuales, los demas atributos como el oro y la experiencia se muestran correctamente siempre.

## Librerias

Decidi aplicar la libreria de SweetAlert2 ya que su implementacion y funcionamiento es extremadamente facil y amigable para mi que es la primera vez que codeo. Se utiliza para comprobar elecciones del usuario, simular "backend" cuando se guarda el progreso, si se realiza una accion con exito, etc.

Decidi hacer la instalacion con npm para empezar a estar familiarizado.

## Codigo y archivos

Se hizo pocos comentarios detallando funciones o variables ya que el nombre que tiene cada una es explicita al funcionamiento que va a cumplir (por ejemplo victoryMusic, fightCundoZombie, closePopUpZombie) y se utilizo barras en los comentarios para que actuen como separador y separar por secciones. El objetivo de esos separadores es para que sea mas facil leer el codigo.

Los archivos (assets) elegi que sean en formatos PNG debido a su peso e impacto a la hora de tener fondo transparentes.

## Paginas HTML

- Index: Cumple la funcion de dar un pantallo y breve descripcion de todo lo mencionado en este readme
- Character Select: Seleccionar un personaje. Se agrego un "boton" para sileciar la musica en caso de que resulte molesta para el usuario
- Cundo, Reyna y Lulu: Cada personaje tiene su propio HTML

## Opinion/critica personal

El proyecto, al principio, era tener los tres personajes pero que cada modal (popup) aparezca un menu de acciones para que el personaje realice una accion (Utilizar ataques, items o huir de la pelea) y tener un simulador RPG por turno al estilo Pokemon o de Final Fantasy viejos. Debido a que la proyeccion inicial era extremadamente ambiciosa y mis conocimientos aun no son suficientes para llevarlo a cabo de esa forma.

Es por eso que decidi simplificar lo mas posible y dejar todo estructurado para que pueda actualizar el proyecto a futuro (cuando aprenda canvas por ejemplo) tanto en codigo como en estetica.


## Datos personales en Github

<p>&nbsp;<img align="center" src="https://github-readme-stats.vercel.app/api?username=fabrizinho113&show_icons=true&locale=en" alt="fabrizinho113" /></p>

<p><img align="left" src="https://github-readme-stats.vercel.app/api/top-langs?username=fabrizinho113&show_icons=true&locale=en&layout=compact" alt="fabrizinho113" /></p>
