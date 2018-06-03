// global variable go here



// execute functions here
window.onload = setUp;

$('.tab-links a').click(function(){
    var elem = $(this).attr('href');
    $('.tab-links li').removeClass('active')
    $(this).parent().addClass('active');
    $('.tab-content').hide();
    $(elem).show();
})

// function defination goes here
function setUp(){
    console.log();
}
