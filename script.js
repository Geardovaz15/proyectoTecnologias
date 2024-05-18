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
let respuesta=0;
let totales=[];
let pika=[];
let contador=0;

function resultado(pregunta, respues){
  respuesta= respues.value;
}

function calcular(){
    aumentar();
    switch(respuesta){
      case "1":
        if(totales[0]==null){
          totales[0]=0;
        }
        totales[0]+=1;
        break;
      case "2":
        if(totales[1]==null){
          totales[1]=0;
        }
        totales[1]+=1;
        break;
       case "3":
        if(totales[2]==null){
          totales[2]=0;
        }
        totales[2]+=1;
        break;
       case "4":
        if(totales[3]==null){
          totales[3]=0;
        }
        totales[3]+=1;
        break;
       case "5":
        if(totales[4]==null){
          totales[4]=0;
        }
        totales[4]+=1;
        break;
       case "6":
        if(totales[5]==null){
          totales[5]=0;
        }
        totales[5]+=1;
        break;
       case "7":
        if(totales[6]==null){
          totales[6]=0;
        }
        totales[6]+=1;
        break;
       case "8":
        if(totales[7]==null){
          totales[7]=0;
        }
        totales[7]+=1;
        break;
       case "9":
        if(totales[8]==null){
          totales[8]=0;
        }
        totales[8]+=1;
        break;
       case "10":
        if(totales[9]==null){
          totales[9]=0;
        }
        totales[9]+=1;
        break;
      default:
        console.log("En teoria no tiene que salir eso. Hay un error en value o en la respuesta");
    }
    
}


function elegir(){
  let sig=0;
  let pre= "preguntas";
  sig=Math.floor(Math.random() *(12 - 1) + 1);
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
      case 0:
        location.href="quim.html";
        break;
      case 1:
        location.href="arte.html";
        break;
      case 2:
        location.href="cont.html";
        break;
      case 3:
        location.href="dere.html";
        break;
      case 4:
        location.href="fisi.html";
        break;
      case 5:
        location.href="infinc.html";
        break;
       case 6:
        location.href="medi.html";
        break;
       case 7:
        location.href="merc.html";
        break;
       case 8:
        location.href="robele.html";
        break;
       case 9:
        location.href="turi.html";
        break;
      default:
        location.href="nodef.html";
  }
}

function llevar(){
  
  llev=elegir();
  console.log(llev);
  while(checar(llev)!=0){
    llev=elegir();
  }
  console.log(llev);
  let j=0;
  while(j<=pika.length){
    j++;
  }
  pika[j+1]=llev;
  
  
  console.log(contador);
  llev=llev.concat(".html");
  if(contador==2){
    decidir();
  }
  else{
    location.href=llev;
  }
}

function checar(llev){
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

function aumentar(){
  const xd=1;
  contador = contador + xd;
}
