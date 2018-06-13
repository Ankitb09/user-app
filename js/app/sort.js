'use strict';

APP = APP || {};


APP.sorting = (function (scope) {
 


    return scope;

}(APP.sorting || {}))

function initSorting() {
    var container = document.getElementsByClassName("table-body")[0];
    var contents = container.querySelectorAll(".table-row");
    var mainElem = document.querySelectorAll('.table-head .table-col');
    var clickedElem;

    function insertBefore(el, referenceNode) {
        referenceNode.parentNode.insertBefore(el, referenceNode);
    }


    mainElem.forEach(element => {
        element.addEventListener('click', function () {
            clickedElem = this.getAttribute('data-column');

            var elems = container.querySelectorAll('[data-column="' + clickedElem + '"]');
            console.log(elems)
            var list = [];

            for (var i = 0; i < contents.length; i++) {
                list.push(elems[i]);
            }

            list.sort(function (a, b) {
                var aa = parseInt(a.innerText);
                var bb = parseInt(b.innerText);
                console.log(aa < bb ? -1 : (aa > bb ? 1 : 0));
                return aa < bb ? -1 : (aa > bb ? 1 : 0);
            });

            list.reverse();

            for (var i = 0; i < list.length; i++) {
                insertBefore(list[i].parentNode, container.firstChild);
            }
        })
    });

};
