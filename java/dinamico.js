document.addEventListener("DOMContentLoaded", function() {
    
var mainElement = document.getElementById("mainElement");
var elementoAjustable = document.getElementById("elementoAjustable");
var elementoAjustables = document.getElementById("elementoAjustables");

var mainWidth = mainElement.offsetWidth;
var mainHeight = mainElement.offsetHeight;


elementoAjustable.style.width = mainWidth + "px";
elementoAjustable.style.height = mainHeight + "px";

elementoAjustables.style.width = mainWidth + "px";
elementoAjustables.style.height = mainHeight + "px";
});