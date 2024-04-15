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
    let humanidades=0;
    let ciencias=0;
    let psyco=0;

  
    for(i=0;i<=4;i++){
    switch(respuestas[i]){
      case "1":
        humanidades++;
        break;
      case "2":
        ciencias ++;
        break;
      case "3":
        psyco++;
        break;
      default:
        console.log("responde no seas wey ",humanidades);
    }
  }
  if(humanidades>ciencias && humanidades>psyco){
    location.href="humani.html";
  }
  else if(ciencias>humanidades && ciencias>psyco){
    location.href="cienc.html";
  }
  else if(psyco>ciencias && psyco>humanidades){
    location.href="psyco.html";
   }
}
