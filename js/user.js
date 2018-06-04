$(document).ready(function () {
    var getAuthUser = localStorage.getItem('user');
    if (getAuthUser == null) {
        $('body').addClass('unAuthUser'); // adding class to body in case of un-Authorised user.
    }

    $('#js-form-signin').submit(function (e) {

        $('#js-form-signin .error-text').hide(); // hiding error message on submit
        var userName = $('#userName').val();
        var userPass = $('#password').val();
        var userCredentials = getStorage('user'); // get item from local storage
        
        if (userCredentials.name !== userName || userCredentials.password !== userPass) {
            $(this).find('button[type="submit"]').before('<span class="error-text text-center">Please check user name or Password</span>');
            return false;
        }
    })

    $('#js-form-signup').submit(function (e) {
        var newUserName = $('#newUser').val();
        var newUserEmail = $('#newEmail').val();
        var newUserPass = $('#newPassword').val();
        var newuser = {
            name: newUserName,
            email: newUserEmail,
            pass: newUserPass
        }
        setStorage('user',newuser);

        window.location = '/profile.html'
    })
})


// function declarations

// getting data from localstorage
function getStorage(item){
    return JSON.parse(localStorage.getItem(item));
}

// setting data to localstorage
function setStorage(item,data){
    if (window.localStorage) {
        localStorage.setItem(item, JSON.stringify(data))
    }
    else {
        console.error('Your Browser Doesn\'t Support local Storage')
    }
}

function createCookie(){
    var d = new Data();
    
}