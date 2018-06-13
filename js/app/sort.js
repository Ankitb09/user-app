'use strict';

APP = APP || {};


APP.sorting = (function (scope) {

    scope.sort = function () {
        var container = document.getElementsByClassName("table-body")[0];
        var contents = container.querySelectorAll(".table-row");
        var mainElem = document.querySelectorAll('.table-head .table-col');
        var clickedElem;

        function insertBefore(el, referenceNode) {
            referenceNode.parentNode.insertBefore(el, referenceNode);
        }

        Array.prototype.forEach.call(mainElem, function (elem) {
            elem.addEventListener('click', function () {
                clickedElem = this.getAttribute('data-column');
                console.log(clickedElem)

                var elems = container.querySelectorAll('[data-column="' + clickedElem + '"]');
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
        })

      
    }
    return scope;

}(APP.sorting || {}))
