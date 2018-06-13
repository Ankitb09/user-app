'use strict';

var APP = APP || {};
APP.utilities = (function (scope) {
    scope.getStorage = function (item) {
        return JSON.parse(localStorage.getItem(item));
    };

    scope.setStorage = function (item, data) {
        if (window.localStorage) {
            localStorage.setItem(item, JSON.stringify(data))
        }
        else {
            console.error('Your Browser Doesn\'t Support local Storage')
        }
    };

    scope.setCookie = function (cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 1000 * 60 * 60 * 24));
        var expires = "expires=" + d.toGMTString();
        window.document.cookie = cname + "=" + cvalue + "; " + expires;
    };

    scope.readCookie = function (cname) {
        var name = cname + "=";
        var cArr = window.document.cookie.split(';');

        for (var i = 0; i < cArr.length; i++) {
            var c = cArr[i].trim();
            if (c.indexOf(name) == 0)
                return c.substring(name.length, c.length);
        }
        return "";
    };

    scope.deleteCookie = function (cname) {
        var d = new Date();
        d.setTime(d.getTime() - (1000 * 60 * 60 * 24)); //Set the time to the past. 1000 milliseonds = 1 second
        var expires = "expires=" + d.toGMTString(); //Compose the expirartion date
        window.document.cookie = cname + "=" + "; " + expires;//Set the cookie with name and the expiration date
    }

    return scope;

}(APP.utilities || {}))


APP.common = (function (scope) {
    var _bindDOMEvents = function () {
        var getAuthUser = APP.utilities.readCookie('user');
        // adding class to body in case of un-Authorised user.
        getAuthUser == "" ? $('body').addClass('unAuthUser') : $('body').addClass('authUser');

        scope.tabbing($('.tab-links li.active a'))

        // floating label inputs
        $('.label-float input').on('blur', function () {
            scope.labelFloat($(this))
        });

        // tabbing click
        $('.tab-links a').click(function () {
            scope.tabbing($(this))
        });

        // modal show
        $('#addProduct').click(function(){
            $('#addProduct-modal').show();
            $('.overlay').show();
        })
        //modal close
        $('.modal-head .close').click(function(){
            $('#addProduct-modal').hide();
            $('.overlay').hide();
        })

    };

    scope.labelFloat = function (elemArr) {
        elemArr.each(function (i, elem) {
            if ($(this).val() !== '') {
                $(this).addClass("filled");
            } else {
                $(this).removeClass("filled");
            }
        })
    };

    scope.tabbing = function (ele) {
        var clickedElem = ele.attr('data-href');
        $('.tab-links li').removeClass('active')
        ele.parent().addClass('active');
        $('.tab-content').hide();
        $(clickedElem).show();
    };

    scope.init = function () {
        _bindDOMEvents();
    };
    return scope;

}(APP.common || {}))