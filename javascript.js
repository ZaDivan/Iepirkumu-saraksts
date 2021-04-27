function addItem(){
    let ul = document.getElementById("list");
    let candidate = document.getElementById("groza");
    let candidate = document.getElementById("daudzums");
    let li = document.createElement("li");
    li.setAttribute('id',groza.value);
    li.appendChild(document.createTextNode(groza.value));
    ul.appendChild(li);
    li.setAttribute('id',daudzums.value);
    li.appendChild(document.createTextNode(daudzums.value));
    ul.appendChild(li);
}

function removeItem(){
    let ul = document.getElementById("list");
    let groza = document.getElementById("groza");
    let item = document.getElementById(groza.value);
    let daudzums = document.getElementById("daudzums");
    let item = document.getElementById(daudzums.value);
    ul.removeChild(item);
}