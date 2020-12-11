var color;

function wc(){
    color = document.forms.WC.elements.color.value;
    document.getElementById("pie").innerHTML = color;

}

document.getElementById("WC").onsubmit = function(){wc()};
