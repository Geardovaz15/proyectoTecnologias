//funciones para referir a links
function iniciar(){
  llevar();
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
let totales=[];
let pika=[];
let con;

function resultado(pregunta, respuesta){
  respuestas[pregunta]= respuesta.value;
}

function calcular(){
    for(i=0;i<=respuestas.length;i++){
    switch(respuestas[i]){
      case "1":
        totales[0]=totales[0]+1;
        break;
      case "2":
        totales[1]=totales[1]+1;
        break;
       case "3":
        totales[2]=totales[2]+1;
        break;
       case "4":
        totales[3]=totales[3]+1;
        break;
       case "5":
        totales[4]=totales[4]+1;
        break;
       case "6":
        totales[5]=totales[5]+1;
        break;
       case "7":
        totales[6]=totales[6]+1;
        break;
       case "8":
        totales[7]=totales[7]+1;
        break;
       case "9":
        totales[8]=totales[8]+1;
        break;
       case "10":
        totales[9]=totales[9]+1;
        break;
      default:
        console.log("En teoria no tiene que salir eso. Hay un error en value o en la respuesta");
      }
    }
    llevar();
}


function elegir(){
  let sig=0;
  let pre= "preguntas";
  sig=Math.floor(Math.random() * 12);
  pre=pre.concat(sig);
  return pre;
}

function decidir(){
  let mayor=0;
  let posMayor=0;
  for (let i = 1; i < totales.length; i++) {
    if (totales[i] > mayor) {
        mayor = totales[i];
        posMayor = i;
    }
  }
    switch(posMayor){
      case "1":
        location.href="quim.html";
        break;
      case "2":
        location.href="arte.html";
        break;
      case "3":
        location.href="cont.html";
        break;
      case "4":
        location.href="dere.html";
        break;
      case "5":
        location.href="fisi.html";
        break;
      case "6":
        location.href="infinc.html";
        break;
       case "7":
        location.href="medi.html";
        break;
       case "8":
        location.href="merc.html";
        break;
       case "9":
        location.href="robele.html";
        break;
       case "10":
        location.href="turi.html";
        break;
      default:
        location.href="nodef.html";
  }
}

function llevar(){
 
  llev=elegir();
  console.log(llev);
  while(checar()!=0){
    llev=elegir();
  }
  console.log(llev);
  let j=0;
  while(j<=pika.length){
    j++;
  }
  pika[j+1]=llev;
  con++;
  llev=llev.concat(".html");
  if(con==7){
    decidir();
  }
  else{
    location.href=llev;
  }
}

function checar(){
  let fla=0;
  for(i=0;i<=pika.length;i++){
    if(pika[i]==llev)
      fla=1;
  }
  if(fla==1){
    return 1;
  }
  else{
    return 0;
  }
}
