function addItem(){
    var ul = document.getElementById("list");
    var candidate = document.getElementById("groza");
    var candidate = document.getElementById("daudz");
    var li = document.createElement("li");
    li.setAttribute('id',groza.value);
    li.appendChild(document.createTextNode(groza.value));
    ul.appendChild(li);
    li.setAttribute('id',daudz.value);
    li.appendChild(document.createTextNode(daudz.value));
    ul.appendChild(li);
}

function removeItem(){
    var ul = document.getElementById("list");
    var groza = document.getElementById("groza");
    var item = document.getElementById(groza.value);
    var groza = document.getElementById("daudz");
    var item = document.getElementById(daudz.value);
    ul.removeChild(item);