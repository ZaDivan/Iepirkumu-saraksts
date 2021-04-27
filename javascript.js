function addItem(){
    let ul = document.getElementById("list");
    let candidate = document.getElementById("form");
    let li = document.createElement("li");
    li.setAttribute('id',form.value);
    li.appendChild(document.createTextNode(form.value));
    ul.appendChild(li);
}

function removeItem(){
    let ul = document.getElementById("list");
    let form = document.getElementById("form");
    let item = document.getElementById(form.value);
    ul.removeChild(item);
}