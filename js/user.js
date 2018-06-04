$(document).ready(function () {
    var getAuthUser = localStorage.getItem('user');
    if (getAuthUser == null) {
        $('body').addClass('unAuthUser'); // adding class to body in case of un-Authorised user.
    }

    $('#js-form-signin').submit(function (e) {


        $('#js-form-signin .error-text').hide(); // hiding error message on submit

        var userName = $('#userName').val();
        var userPass = $('#password').val();

        var userCredentials = JSON.parse(localStorage.getItem('user'));
        if (userCredentials.name != userName) {
            $('#userName').after('<span class="error-text">Please check user name</span>');
            return false;
        }
        if (userCredentials.pass != userPass) {
            $('#password').after('<span class="error-text">Please check your password</span>');
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
        if (window.localStorage) {
            localStorage.setItem('user', JSON.stringify(newuser))
        }
        else {
            console.error('Your Browser Doesn\'t Support local Storage')
        }
        e.preventDefault();
    })
})