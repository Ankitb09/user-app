$(document).ready(function () {
    var getAuthUser = utilities.readCookie('user');
    // adding class to body in case of un-Authorised user.
    getAuthUser == "" ? $('body').addClass('unAuthUser') : $('body').addClass('authUser');

    $('#js-form-signin').submit(function (e) {

        if (formActions.signIn($(this))) {
            utilities.setCookie('user', true, 2);
            window.location.reload();
        }
        return false;
    })

    $('#js-form-signup').submit(function (e) {
        formActions.signUp();
    });

    $('.btn-logout').click(function () {
        utilities.deleteCookie('user');
        window.location = '/index.html'
    })
})


// *********** Function declarations ********************

var formActions = {
    signIn: function (thisElem) {
        $('#js-form-signin .error-text').hide(); // hiding error message on submit
        var userName = $('#userName').val();
        var userPass = $('#password').val();
        var userCredentials = utilities.getStorage('user'); // get item from local storage

        if (userCredentials.name !== userName || userCredentials.password !== userPass) {
            thisElem.find('button[type="submit"]').before('<span class="error-text text-center">Please check user name or Password</span>');
            return false;
        }
        return true;
    },
    signUp: function () {
        var newUserName = $('#newUser').val();
        var newUserEmail = $('#newEmail').val();
        var newUserPass = $('#newPassword').val();
        var newuser = {
            name: newUserName,
            email: newUserEmail,
            password: newUserPass
        }
        utilities.setStorage('user', newuser);
        utilities.setCookie('user', true, 2);
        window.location = '/profile.html'
    }
}

// utility functions
var utilities = {
    getStorage: function (item) {
        return JSON.parse(localStorage.getItem(item));
    },
    setStorage: function (item, data) {
        if (window.localStorage) {
            localStorage.setItem(item, JSON.stringify(data))
        }
        else {
            console.error('Your Browser Doesn\'t Support local Storage')
        }
    },
    setCookie: function (cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 1000 * 60 * 60 * 24));
        var expires = "expires=" + d.toGMTString();
        window.document.cookie = cname + "=" + cvalue + "; " + expires;
    },

    readCookie: function (cname) {
        var name = cname + "=";
        var cArr = window.document.cookie.split(';');

        for (var i = 0; i < cArr.length; i++) {
            var c = cArr[i].trim();
            if (c.indexOf(name) == 0)
                return c.substring(name.length, c.length);
        }
        return "";
    },
    deleteCookie: function (cname) {
        var d = new Date();
        d.setTime(d.getTime() - (1000 * 60 * 60 * 24)); //Set the time to the past. 1000 milliseonds = 1 second
        var expires = "expires=" + d.toGMTString(); //Compose the expirartion date
        window.document.cookie = cname + "=" + "; " + expires;//Set the cookie with name and the expiration date
    }
}






