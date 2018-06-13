'use strict';

APP = APP || {};
APP.grid = (function (scope) {
    scope.getData = function () {
        var xhr = new XMLHttpRequest();
        const URL = 'data/db.json';
        xhr.open('GET', URL);
        xhr.onload = function () {
            var data = JSON.parse(xhr.responseText)
            scope.structreCreation(data)
        }
        xhr.send();
    };

    scope.structreCreation = function (data) {
        var productArr = data.products;
        productArr.map((curr, i, arr) => {
            var tableRowNode = `<div class="table-row">
                <span class="table-col" data-column="1">${i + 1}</span>
                <span class="table-col" data-column="2">${curr.name}</span>
                <span class="table-col" data-column="3">${curr.code}</span>
                <span class="table-col" data-column="4">
                ${(curr.size).map((item) => {
                    return `<i>${item}</i>`
                })}
                </span>
                <span class="table-col" data-column="5">${curr.price}</span>
                <span class="table-col product-color" data-column="6">
                ${(curr.color).map((item) => {
                    return `<i style=${`background-color:${item}`}></i>`
                }).join('')}
                </span>
                <span class="table-col" data-column="7">${curr.productCount} items</span>
                <span class="table-col js-remove-row" data-column="8" title="delete row">&#10008;</span>
           </div>`;
            $('#product-table .table-body').append(tableRowNode)
        })
    };

    scope.resizeCols = function () {
        var thElm;
        var startOffset;
        var colElems;
        Array.prototype.forEach.call(
            document.querySelectorAll(".tigger-resize"),
            function (th) {
                //th.style.position = 'relative';
                th.addEventListener('mousedown', function (e) {
                    thElm = th;
                    startOffset = th.parentNode.offsetWidth - e.pageX;
                    colElems = thElm.parentNode.getAttribute('data-column');
                });
            });

        document.addEventListener('mousemove', function (e) {
            if (thElm) {
                thElm.parentNode.style.width = startOffset + e.pageX + 'px';
                $(`span[data-column="${colElems}"]`).width(startOffset + e.pageX);
            }
        });

        document.addEventListener('mouseup', function () {
            thElm = undefined;
        });




        // var pressed = false;
        // var start = undefined;
        // var startX, startWidth;
        // $("#product-table").on('mousedown', '.table-head .table-col', (function (e) {
        //     start = $(this).attr('data-column');
        //     pressed = true;
        //     startX = e.pageX;
        //     startWidth = $(this).width();
        //     $(`span[data-column="${start}"]`).addClass("resizing");
        // }));

        // $("#product-table").mousemove(function (e) {
        //     if (pressed) {
        //         $(`span[data-column="${start}"]`).width(startWidth + (e.pageX - startX));
        //     }
        // });

        // $("#product-table").mouseup(function () {
        //     if (pressed) {
        //         $(`span[data-column="${start}"]`).removeClass("resizing");
        //         pressed = false;
        //     }
        // });
    };

    scope.deleteRow = function () {
        // Delete Row
        $('#product-table').on('click', '.js-remove-row', function () {
            $(this).parent().remove();
        })
    }
    scope.deleteColumn = function () {
        // Delete Column
        $('#product-table').on('click', '.js-remove-col', function () {
            $(this).parent().remove();
        })
    }

    scope.init = function () {
        scope.resizeCols();
        scope.getData();
        scope.deleteColumn();
        scope.deleteRow();
    }

    return scope;


}(APP.grid || {}))





