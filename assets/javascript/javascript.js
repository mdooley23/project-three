var color;
var isform = document.getElementById("WC");

function wc(){
    color = document.forms.WC.elements.color.value;
    document.body.style.backgroundColor = color;

}

isform.onsubmit = function(){wc(); return false;};
