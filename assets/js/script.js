
var preguntas=[


    "¿Cuál fue la primera película de terror en color?",
    "¿A qué año viajan Marty y Doc en Regreso al futuro II?",
    " ¿En The Notebook, ¿cuántos hijos tienen Noah y Allie?",
    "¿Cuántos Oscars consiguió Titanic?"

];

var opciones =[
    ["La maldición de Frankenstein","Casa del diablo","misterio del museo de cera"],
    ["2016","2015","2014"],
    ["uno","dos","tres"],
    ["9","7","11"]
    

];
var puntajePorOpcion = [
    [5, 0, 0],
    [ 0, 0, 5],
    [0, 0, 5],
    [0, 0, 5],
      
]

var indecePreg = 0;
var puntaje = 0;


function mostrarelresultado(){
    //se remueve los hijos del div con clase "card",dentro de el agregamos
    var cuadrado =document.getElementById("cuadrado");
    cuadrado.innerHTML=""
    //detrminalasrespuestascorectas(max=35)
    if (puntaje >30){
        
    }
}

function nuevaPregunta(){
    document.getElementById("pregunta").innerHTML = preguntas[indecePreg];

document.getElementById("op1").innerHTML = opciones[indecePreg][0];
document.getElementById("op2").innerHTML = opciones[indecePreg][1];
document.getElementById("op3").innerHTML = opciones[indecePreg][2];
//document.getElementById("op4").innerHTML = opciones[indecePreg][3];
//document.getElementById("op5").innerHTML = opciones[indecePreg][4];

document.getElementById("barra-progreso").value = indecePreg/preguntas.length*100;

}

function actualizarPuntaje(opcione){
    var indece = opcione - 1;
    puntaje = puntaje + puntajePorOpcion[indecePreg][indece];
    indecePreg = indecePreg + 1;
    if(indecePreg<preguntas.length){
        nuevaPregunta();
    }
    else{
        //se muestra el puntaje final 
    }

}


nuevaPregunta();

document.getElementById("op1").addEventListener("click",
function(){
    actualizarPuntaje(1)
}
);

document.getElementById("op2").addEventListener("click",
function(){
    actualizarPuntaje(2)
}
);

document.getElementById("op3").addEventListener("click",
function(){
    actualizarPuntaje(3)
}
);

document.getElementById("op4").addEventListener("click",
function(){
    actualizarPuntaje(4)
}
);

document.getElementById("op5").addEventListener("click",
function(){
    actualizarPuntaje(5)
}
);




