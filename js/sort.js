var container = document.getElementsByClassName("table-body")[0];
var contents = container.querySelectorAll(".table-row");
var elems = container.querySelectorAll("[data-column='1']");
var list = [];

function insertBefore(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode);
}


for (var i = 0; i < contents.length; i++) {
    list.push(elems[i]);
}

list.sort(function(a, b) {
    var aa = parseInt(a.innerText);
    var bb = parseInt(b.innerText);
    console.log(aa < bb ? -1 : (aa > bb ? 1 : 0));
    return aa < bb ? -1 : (aa > bb ? 1 : 0);
});

list.reverse();

for (var i = 0; i < list.length; i++) {
    console.log(list[i].parentNode.innerHTML);
    insertBefore(list[i].parentNode, container.firstChild);
}

