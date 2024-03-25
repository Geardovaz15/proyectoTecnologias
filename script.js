function iniciar(){
  location.href="preguntas.html";
}

function home(){
  location.href="";
}

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
