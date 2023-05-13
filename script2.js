const couleur=document.getElementById("couleur");
const size=document.getElementById("taille");
const text=document.getElementById("txt");
const font=document.getElementById("fnt");
couleur.addEventListener("input", function() { 
    text.style.color=couleur.value;
} );
size.addEventListener("input", function() { 
    text.style.fontSize=size.value + "px";
} );
font.addEventListener("change", function() { 
    text.style.fontFamily=font.value;
} );
