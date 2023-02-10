function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className ="";
    opciones[0].className ="";
    opciones[0].className ="";
    opciones[0].className ="";
    opciones[0].className ="";
    link.className="seleccionado";
    var x= document.getElementById("nav");
    x.className="";
}

function responsiveMenu(){
    var x= document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive";
    }else {
        x.className ="";
    }
}


window.onscroll = function(){
    efectoHabilidades()
};

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills =window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("css").classList.add("barra-progreso2");
        document.getElementById("js").classList.add("barra-progreso3");
        document.getElementById("j").classList.add("barra-progreso4");
        document.getElementById("pts").classList.add("barra-progreso5");
        document.getElementById("ps").classList.add("barra-progreso6");
        document.getElementById("cst").classList.add("barra-progreso7");
        document.getElementById("pwp").classList.add("barra-progreso8");
        document.getElementById("exl").classList.add("barra-progreso9");
        document.getElementById("wrd").classList.add("barra-progreso10");
 
    }
    
}