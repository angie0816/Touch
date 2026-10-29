// audio

/*let ventana2 = document.getElementById("ventana2");
let sonido1 = document.getElementById("audio1");

ventana2.onclick = function () {
    sonido1.play();
};
*/
// hora local

let elementoHora = document.getElementById("hora");

function actualizarReloj() {
  let ahora = new Date();

  let horas = String(ahora.getHours()).padStart(2, "0");
  let minutos = String(ahora.getMinutes()).padStart(2, "0");
  let segundos = String(ahora.getSeconds()).padStart(2, "0");

  console.log(horas + ":" + minutos + ":" + segundos);

  elementoHora.textContent = horas + ":" + minutos + ":" + segundos;
}

actualizarReloj();
setInterval(actualizarReloj, 1000);

// cuadro de texto

let ventana1 = document.getElementById("ventana1");
let informacionVentana1 = document.getElementById("informacion-ventana1");
let visible1 = false;

ventana1.onclick = function () {
    if(visible1 == true){
        visible1 = false;
    }
    else{
        visible1 = true;
    }

    if(visible1 == true){
        informacionVentana1.style.opacity = "1";
    }
    else{
        informacionVentana1.style.opacity = "0";
    }
    
};

let textoVentana1 = document.getElementById("texto-ventana1");

function actualizarContenido1() {
  let ahora = new Date();
  let horas = ahora.getHours();

  if (horas >= 5 && horas < 8) {
    textoVentana1.innerHTML =
      "<b>Lina</b>, de 19 años, se alista para ir a la universidad";
    audioVentana1.src = "assets/ducha.mp3";
    audioVentana1.load();
  } else if (horas >= 8 && horas < 12) {
    textoVentana1.innerHTML =
      "<b>Lina</b>, de 19 años, se encuentra en la universidad tomando su primera clase del día";
  } else if (horas >= 12 && horas < 14) {
    textoVentana1.innerHTML =
      "<b>Lina</b>, de 19 años, está almorzando con sus amigos en la cafeteria de la universidad";
  } else if (horas >= 14 && horas < 17) {
    textoVentana1.innerHTML =
      "<b>Lina</b>, de 19 años, está tomando su segunda clase del día";
  } else if (horas >= 17 && horas < 19) {
    textoVentana1.innerHTML =
      "<b>Lina</b>, de 19 años, hace ejercicio en el gimnacio de la universidad";
  } else if (horas >= 19 && horas < 21) {
    textoVentana1.innerHTML = "<b>Lina</b>, de 19 años, llega de la universidad y se prepara un sandwich para comer, y se pone a estudiar para el parcial que tiene mañana";
    audioVentana1.src = "assets/cortar-vegetales.mp3";
    audioVentana1.load();
  } else if (horas >= 21 && horas < 5) {
    textoVentana1.innerHTML =
      "<b>Lina</b>, de 19 años, se coloca su pijama y se acuesta a dormir para no sentirse cansada al despertarse al día siguiente";
  } 
}

// Ejecutar inmediatamente
actualizarContenido1();

// Volver a comprobar cada minuto
setInterval(actualizarContenido1, 60000);

let ventana2 = document.getElementById("ventana2");
let informacionVentana2 = document.getElementById("informacion-ventana2");
let visible2 = false;

ventana2.onclick = function () {
    if(visible2 == true){
        visible2 = false;
    }
    else{
        visible2 = true;
    }

    if(visible2 == true){
        informacionVentana2.style.opacity = "1";
    }
    else{
        informacionVentana2.style.opacity = "0";
    }
    
};

let textoVentana2 = document.getElementById("texto-ventana2");

function actualizarContenido2() {
  let ahora = new Date();
  let horas = ahora.getHours();

  if (horas >= 5 && horas < 8) {
    textoVentana2.innerHTML =
      "<b>Camilo</b>, de 75 años, se levanta y se arregla temprano ya que hoy lo visita su hijo y sus nietos para almorzar";
    audioVentana2.src = "assets/ducha.mp3";
    audioVentana2.load();
  } else if (horas >= 8 && horas < 12) {
    textoVentana2.innerHTML =
      "<b>Camilo</b>, de 75 años, prepara un arroz cubano y un jugo de lulo para ya tener todo listo para cuando llegue su hijo";
  } else if (horas >= 12 && horas < 14) {
    textoVentana2.innerHTML =
      "<b>Camilo</b>, de 75 años, está almorzando junto a su hijo y sus nietos mientras estos le cuentan como les ha ido en el colegio y lo que han hecho en la semana";
  } else if (horas >= 14 && horas < 17) {
    textoVentana2.innerHTML =
      "<b>Camilo</b>, de 75 años, toma tinto y come galletas con su hijo mientras sus nietos juegan PES en su consola";
  } else if (horas >= 17 && horas < 19) {
    textoVentana2.innerHTML =
      "<b>Camilo</b>, de 75 años, sale con su hijo y sus nietos al parque a jugar un poco de voleibol";
  } else if (horas >= 19 && horas < 21) {
    textoVentana2.innerHTML = "<b>Camilo</b>, de 75 años, vuelve a su casa en donde se despide de su hijo y de sus nietos, luego de despedirse, se alista para dormir";
    audioVentana2.src = "assets/cortar-vegetales.mp3";
    audioVentana2.load();
  } else if (horas >= 21 && horas < 5) {
    textoVentana2.innerHTML =
      "<b>Camilo</b>, de 75 años, se encuentra dormido porque necesita levantarse temprano para preparar todo para la visita de su hija con su esposa";
  } 
}

// Ejecutar inmediatamente
actualizarContenido2();

// Volver a comprobar cada minuto
setInterval(actualizarContenido2, 60000);


let ventana3 = document.getElementById("ventana3");
let informacionVentana3 = document.getElementById("informacion-ventana3");
let visible3 = false;

ventana3.onclick = function () {
    if(visible3 == true){
        visible3 = false;
    }
    else{
        visible3 = true;
    }

    if(visible3 == true){
        informacionVentana3.style.opacity = "1";
    }
    else{
        informacionVentana3.style.opacity = "0";
    }
    
};

let textoVentana3 = document.getElementById("texto-ventana3");

function actualizarContenido3() {
  let ahora = new Date();
  let horas = ahora.getHours();

  
  if (horas >= 5 && horas < 8) {
    textoVentana3.innerHTML =
    "<b>Sandra</b>, de 30 años, se despierta, se baña y desayuna en el carro mientras se dirige a la oficina";
    audioVentana3.src = "assets/ducha.mp3";
    audioVentana3.load();
  } else if (horas >= 8 && horas < 12) {
    textoVentana3.innerHTML =
    "<b>Sandra</b>, de 30 años, trabaja en sus pendientes de la mañana y organiza todo lo que le dejaron y que necesita terminar";
  } else if (horas >= 12 && horas < 14) {
    textoVentana3.innerHTML =
    "<b>Sandra</b>, de 30 años, sale a almorzar en el restaurante de la esquina y aprovecha su descanso para revisar los mensajes de sus amigas";
  } else if (horas >= 14 && horas < 17) {
    textoVentana3.innerHTML =
    "<b>Sandra</b>, de 30 años, termina los trabajos que le dejaron ese día y piensa en la ropa que usará para salir con sus amigas";
  } else if (horas >= 17 && horas < 19) {
    textoVentana3.innerHTML =
    "<b>Sandra</b>, de 30 años, llega a su casa, se baña, se maquilla y escoge un vestido para salir con sus amigas";
  } else if (horas >= 19 && horas < 21) {
    textoVentana3.innerHTML =
    "<b>Sandra</b>, de 30 años, se encuentra en un restrobar con sus amigas, ella escoge un coctel suave para empezar la noche y mientras tanto se ponen al día con sus vidas";
    audioVentana3.src = "assets/cortar-vegetales.mp3";
    audioVentana3.load();
  } else if (horas >= 21 || horas < 5) {
    textoVentana3.innerHTML =
    "<b>Sandra</b>, de 30 años, regresa a su casa después de compartir con sus amigas, se cambia y se acuesta a descansar ya que mañana es otro día de trabajo";
}

}

// Ejecutar inmediatamente
actualizarContenido3();

// Volver a comprobar cada minuto
setInterval(actualizarContenido3, 60000);

let ventana4 = document.getElementById("ventana4");
let informacionVentana4 = document.getElementById("informacion-ventana4");
let visible4 = false;

ventana4.onclick = function () {
    if(visible4 == true){
        visible4 = false;
    }
    else{
        visible4 = true;
    }

    if(visible4 == true){
        informacionVentana4.style.opacity = "1";
    }
    else{
        informacionVentana4.style.opacity = "0";
    }
    
};

let textoVentana4 = document.getElementById("texto-ventana4");

function actualizarContenido4() {
  let ahora = new Date();
  let horas = ahora.getHours();

  if (horas >= 5 && horas < 8) {
    textoVentana4.innerHTML =
    "<b>Felipe</b>, de 23 años, se despierta temprano y alimenta a su gato Mantequilla antes de prepararse su desayuno";
    audioVentana4.src = "assets/ducha.mp3";
    audioVentana4.load();
  } else if (horas >= 8 && horas < 12) {
    textoVentana4.innerHTML =
    "<b>Felipe</b>, de 23 años, trabaja desde su casa y, mientras empieza con sus pendientes del día, Mantequilla duerme tranquilamente a su lado";
  } else if (horas >= 12 && horas < 14) {
    textoVentana4.innerHTML =
    "<b>Felipe</b>, de 23 años, prepara su almuerzo y el de mantequilla y cuando se sientan a comer comparte un momento de tranquilidad con Mantequilla antes de continuar con sus actividades del día";
  } else if (horas >= 14 && horas < 17) {
    textoVentana4.innerHTML =
    "<b>Felipe</b>, de 23 años, termina sus pendientes del día mientras ve como Mantequilla juega con una pelota por toda la casa";
  } else if (horas >= 17 && horas < 19) {
    textoVentana4.innerHTML =
    "<b>Felipe</b>, de 23 años, juega un rato con Mantequilla y aprovecha el tiempo libre que le queda para descansar después de un día ocupado";
  } else if (horas >= 19 && horas < 21) {
    textoVentana4.innerHTML =
    "<b>Felipe</b>, de 23 años, prepara la cena, ve una película en el sofá y acaricia a Mantequilla que está acostado a su lado";
    audioVentana4.src = "assets/cortar-vegetales.mp3";
    audioVentana4.load();
  } else if (horas >= 21 || horas < 5) {
    textoVentana4.innerHTML =
    "<b>Felipe</b>, de 23 años, se baña, se pone la pijama y se acuesta a dormir junto a Mantequilla que se acomoda a los pies de su cama";
}
}

// Ejecutar inmediatamente
actualizarContenido4();

// Volver a comprobar cada minuto
setInterval(actualizarContenido4, 60000);

/*
let ventana5 = document.getElementById("ventana5");
let informacionVentana5 = document.getElementById("informacion-ventana5");
let visible5 = false;

ventana5.onclick = function () {
    if(visible5 == true){
        visible5 = false;
    }
    else{
        visible5 = true;
    }

    if(visible5 == true){
        informacionVentana5.style.opacity = "1";
    }
    else{
        informacionVentana5.style.opacity = "0";
    }
    
};

let textoVentana5 = document.getElementById("texto-ventana5");

function actualizarContenido5() {
  let ahora = new Date();
  let horas = ahora.getHours();

  if (horas >= 5 && horas < 8) {
    textoVentana5.innerHTML =
      "<b>Lina</b>, de 19 años, se alista para ir a la universidad";
    audioVentana5.src = "assets/ducha.mp3";
    audioVentana5.load();
  } else if (horas >= 8 && horas < 12) {
    textoVentana5.innerHTML =
      "<b>Lina</b>, de 19 años, se encuentra en la universidad tomando su primera clase del día";
  } else if (horas >= 12 && horas < 14) {
    textoVentana5.innerHTML =
      "<b>Lina</b>, de 19 años, está almorzando con sus amigos en la cafeteria de la universidad";
  } else if (horas >= 14 && horas < 17) {
    textoVentana5.innerHTML =
      "<b>Lina</b>, de 19 años, está tomando su segunda clase del día";
  } else if (horas >= 17 && horas < 19) {
    textoVentana5.innerHTML =
      "<b>Lina</b>, de 19 años, hace ejercicio en el gimnacio de la universidad";
  } else if (horas >= 19 && horas < 21) {
    textoVentana5.innerHTML = "<b>Lina</b>, de 19 años, llega de la universidad y se prepara un sandwich para comer, y se pone a estudiar para el parcial que tiene mañana";
    audioVentana5.src = "assets/cortar-vegetales.mp3";
    audioVentana5.load();
  } else if (horas >= 21 && horas < 5) {
    textoVentana5.innerHTML =
      "<b>Lina</b>, de 19 años, se coloca su pijama y se acuesta a dormir para no sentirse cansada al despertarse al día siguiente";
  } 
}

// Ejecutar inmediatamente
actualizarContenido5();

// Volver a comprobar cada minuto
setInterval(actualizarContenido5, 60000);


let ventana6 = document.getElementById("ventana6");
let informacionVentana6 = document.getElementById("informacion-ventana6");
let visible6 = false;

ventana6.onclick = function () {
    if(visible6 == true){
        visible6 = false;
        informacionVentana6.style.opacity = "0";
    }
    else{
        visible6 = true;
        informacionVentana6.style.opacity = "1";
    }

    
};

let textoVentana6 = document.getElementById("texto-ventana6");

function actualizarContenido6() {
  let ahora = new Date();
  let horas = ahora.getHours();

  if (horas >= 5 && horas < 8) {
    textoVentana6.innerHTML =
      "<b>Lina</b>, de 19 años, se alista para ir a la universidad";
    audioVentana6.src = "assets/ducha.mp3";
    audioVentana6.load();
  } else if (horas >= 8 && horas < 12) {
    textoVentana6.innerHTML =
      "<b>Lina</b>, de 19 años, se encuentra en la universidad tomando su primera clase del día";
  } else if (horas >= 12 && horas < 14) {
    textoVentana6.innerHTML =
      "<b>Lina</b>, de 19 años, está almorzando con sus amigos en la cafeteria de la universidad";
  } else if (horas >= 14 && horas < 17) {
    textoVentana6.innerHTML =
      "<b>Lina</b>, de 19 años, está tomando su segunda clase del día";
  } else if (horas >= 17 && horas < 19) {
    textoVentana6.innerHTML =
      "<b>Lina</b>, de 19 años, hace ejercicio en el gimnacio de la universidad";
  } else if (horas >= 19 && horas < 21) {
    textoVentana6.innerHTML = "<b>Lina</b>, de 19 años, llega de la universidad y se prepara un sandwich para comer, y se pone a estudiar para el parcial que tiene mañana";
    audioVentana6.src = "assets/cortar-vegetales.mp3";
    audioVentana6.load();
  } else if (horas >= 21 && horas < 5) {
    textoVentana6.innerHTML =
      "<b>Lina</b>, de 19 años, se coloca su pijama y se acuesta a dormir para no sentirse cansada al despertarse al día siguiente";
  } 
}

// Ejecutar inmediatamente
actualizarContenido6();

// Volver a comprobar cada minuto
setInterval(actualizarContenido6, 60000);
*/