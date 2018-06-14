'use strict';

var APP = APP || {};

// *********** Function declarations ********************
APP.user = (function (scope) {
    var _bindDOMEvents = function () {
        $('#js-form-signin').submit(function (e) {
            if (scope.signIn($(this))) {
                APP.utilities.setCookie('user', true, 2);
                window.location.reload();
            }
            return false;
        });

        var userCredentials = APP.utilities.getStorage('user');
        if (document.querySelector('.user-name a') != null) {
            document.querySelector('.user-name a').innerHTML = `Hello ${userCredentials.name}`
        }

        $('#js-form-signup').submit(function (e) {
            scope.signUp();
        });

        $('.btn-logout').click(function () {
            APP.utilities.deleteCookie('user');
            window.location = '/index.html'
        });
    }

    scope.signIn = function (thisElem) {
        $('#js-form-signin .error-text').hide(); // hiding error message on submit
        var userName = $('#userName').val();
        var userPass = $('#password').val();
        var userCredentials = APP.utilities.getStorage('user'); // get item from local storage

        if (userCredentials.name !== userName || userCredentials.password !== userPass) {
            thisElem.find('button[type="submit"]').before('<span class="error-text text-center">Please check your user name or Password</span>');
            return false;
        }
        return true;
    };

    scope.signUp = function () {
        var newUserName = $('#newUser').val();
        var newUserEmail = $('#newEmail').val();
        var newUserPass = $('#newPassword').val();
        var newuser = {
            name: newUserName,
            email: newUserEmail,
            password: newUserPass
        }
        APP.utilities.setStorage('user', newuser);
        APP.utilities.setCookie('user', true, 2);
        window.location = '/profile.html'
    };

    scope.init = function () {
        _bindDOMEvents();
    }

    return scope;
}(APP.user || {}))



