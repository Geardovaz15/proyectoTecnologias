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
        Der++;
        break;
      case "2":
        Izq++;
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

function llevar1(){
  if (calcular()=="D"){
    location.href="preguntas2.html";
  }
  else{
    location.href="preguntas3.html";
  }
}

function llevar2(){
  if (calcular()=="D"){
    location.href="preguntas4.html";
  }
  else{
    location.href="nodef.html";
  }
}

function llevar3(){
  if (calcular()=="D"){
    location.href="preguntas7.html";
  }
  else{
    location.href="preguntas8.html";
  }
}

function llevar4(){
  if (calcular()=="D"){
    location.href="preguntas5.html";
  }
  else{
    location.href="preguntas6.html";
  }
}

function llevar5(){
  if (calcular()=="D"){
    location.href="infinc.html";
  }
  else{
    location.href="robele.html";
  }
}

function llevar6(){
  if (calcular()=="D"){
    location.href="mate.html";
  }
  else{
    location.href="fisi.html";
  }
}

function llevar7(){
  if (calcular()=="D"){
    location.href="nodef.html";
  }
  else{
    location.href="nodef.html";
  }
}

function llevar8(){
  if (calcular()=="D"){
    location.href="nodef.html";
  }
  else{
    location.href="nodef.html";
  }
}

