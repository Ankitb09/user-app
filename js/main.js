// global variable go here



// execute functions here
window.onload = setUp;

$('.tab-links a').click(function () {
    tabbing($(this))
})

//=========== function defination goes here ==============
function setUp() {
    // tabbing for signin/register
    tabbing($('.tab-links li.active a'))


    // floating label inputs
    $('.label-float input').on('blur', function () {
        labelFloat($(this))
    });
}


// tab function
function tabbing(ele) {
    var clickedElem = ele.attr('data-href');
    $('.tab-links li').removeClass('active')
    ele.parent().addClass('active');
    $('.tab-content').hide();
    $(clickedElem).show();
}

// floating label
function labelFloat(elemArr) {
    elemArr.each(function (i, elem) {
        if ($(this).val() !== '') {
            $(this).addClass("filled");
        } else {
            $(this).removeClass("filled");
        }
    })
}
