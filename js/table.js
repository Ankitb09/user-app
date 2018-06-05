$(document).ready(function () {
    getData();

    $('#product-table').on('click', '.js-remove-row', function () {
        $(this).parent().remove();
    })
})


function getData() {
    var xhr = new XMLHttpRequest();
    const URL = 'js/db.json';
    xhr.open('GET', URL);
    xhr.onload = function () {
        var data = JSON.parse(xhr.responseText)
        structreCreation(data)
    }
    xhr.send();
}

function structreCreation(data) {
    var productArr = data.details;

    productArr.map((curr, i, arr) => {
        var tableRowNode = `<li>
            <span class="table-col">${i + 1}</span>
            <span class="table-col">${curr.name}</span>
            <span class="table-col">${curr.code}</span>
            <span class="table-col">
            ${(curr.size).map((item) => {
                return `<i>${item}</i>`
            })}
            </span>
            <span class="table-col">${curr.price}</span>
            <span class="table-col product-color">
            ${(curr.color).map((item) => {
                return `<i style=${`background-color:${item}`}></i>`
            }).join('')}
            </span>
            <span class="table-col">${curr.productCount} items</span>
            <span class="table-col js-remove-row">&#10008;</span>
       </li>`;
        $('#product-table').append(tableRowNode)
    })

}
