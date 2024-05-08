//funciones para referir a links
function iniciar(){
  location.href="preguntas1.html";
}

function home(){
  location.href="index.html";
}

function cuceiF(){
  location.href="https://www.facebook.com/udegcucei/?locale=es_LA";
}
function cuceiW(){
  location.href="http://www.cucei.udg.mx/";
}

function cuceaF(){
  location.href="https://www.facebook.com/cucea.oficial/?locale=es_LA";
}
function cuceaW(){
  location.href="https://www.cucea.udg.mx/";
}

function cucadF(){
  location.href="https://es-la.facebook.com/CUAAD/";
}
function cucadW(){
  location.href="https://cuaad.udg.mx/";
}

function cucsF(){
  location.href="https://www.facebook.com/CUCSUdeG/?locale=es_LA";
}
function cucsW(){
  location.href="https://www.cucs.udg.mx/";
}

function cucshW(){
  location.href="http://www.cucsh.udg.mx/";
}

function udgF(){
  location.href="https://www.facebook.com/udg.mx/?locale=es_LA";
}
function udgW(){
  location.href="https://www.udg.mx/es";
}


//funciones para calcular resultados
let respuestas=[];

function resultado(pregunta, respuesta){
  respuestas[pregunta]= respuesta.value;
}

function calcular(){
    let Der=0;
    let Izq=0;
  
    for(i=0;i<=4;i++){
    switch(respuestas[i]){
      case "1":
        Izq++;
        break;
      case "2":
        Der++;
        break;
      default:
        console.log("al chile no se porque imprime esto");
    }
  }
  if(Der>Izq){
    return "D";
  }
  else if(Izq>Der){
    return "I";
  }
}

function llevar(){
  switch(actual){
    case 1:
      if (calcular()=="I"){
        location.href="preguntas2.html";
        }
      else{
        location.href="preguntas3.html";
        }
      break;
    case 2:
      if (calcular()=="I"){
        location.href="preguntas4.html";
      }
      else{
        location.href="preguntas9.html";
      }
      break;
    case 3:
      if (calcular()=="I"){
        location.href="preguntas7.html";
      }
      else{
        location.href="preguntas8.html";
      }
      break;
    case 4:
      if (calcular()=="I"){
        location.href="preguntas5.html";
      }
      else{
        location.href="preguntas6.html";
      }
      break;
    case 5:
      if (calcular()=="I"){
        location.href="infinc.html";
      }
      else{
        location.href="robele.html";
      }
      break;
    case 6:
      if (calcular()=="I"){
        location.href="mate.html";
      }
      else{
        location.href="fisi.html";
      }
      break;
    case 7:
      if (calcular()=="I"){
        location.href="merc.html";
      }
      else{
        location.href="dere.html";
      }
      break;
    case 8:
      if (calcular()=="I"){
        location.href="turi.html";
      }
      else{
        location.href="cont.html";
      }
      break;
      case 9:
      if (calcular()=="I"){
        location.href="preguntas10.html";
      }
      else{
            location.href="preguntas11.html.html";
      }
      break;
      case 10:
      if (calcular()=="I"){
        location.href="medi.html";
      }
      else{
        location.href="quim.html";
      }
      break;
      case 11:
      if (calcular()=="I"){
        location.href="nodef.html";
      }
      else{
        location.href="arte.html";
      }
     break;
    default:
      console.log("No existe el numero que mandaste de referencia");
      break;
  }
}
