$(document).ready(function () {
    var trigger = $('.hamburger'),
        overlay = $('.overlay'),
        isClosed = false;

    function buttonSwitch() {
        if (isClosed === true) {
            overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
        } else {
            overlay.show();
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
        }
    }

    trigger.click(function () {
        buttonSwitch();
    });

    $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
    });
});
///** End */////

$(document).ready(function () {
    var trigger = $('.hamburger2'),
        overlay = $('.overlay2'),
        isClosed = false;

    function buttonSwitch() {
        if (isClosed === true) {
            overlay.hide();
            trigger.removeClass('is-open2');
            trigger.addClass('is-closed2');
            isClosed = false;
        } else {
            overlay.show();
            trigger.removeClass('is-closed2');
            trigger.addClass('is-open2');
            isClosed = true;
        }
    }

    trigger.click(function () {
        buttonSwitch();
    });

    $('[data-toggle="offcanvas2"]').click(function () {
        $('#wrapper2').toggleClass('toggled2');
    });
});

///** End */////

$(document).ready(function () {
    var trigger = $('.hamburger3'),
        overlay = $('.overlay3'),
        isClosed = false;

    function buttonSwitch() {
        if (isClosed === true) {
            overlay.hide();
            trigger.removeClass('is-open3');
            trigger.addClass('is-closed3');
            isClosed = false;
        } else {
            overlay.show();
            trigger.removeClass('is-closed3');
            trigger.addClass('is-open3');
            isClosed = true;
        }
    }

    trigger.click(function () {
        buttonSwitch();
    });

    $('[data-toggle="offcanvas3"]').click(function () {
        $('#wrapper3').toggleClass('toggled3');
    });
});

///** End */////

///** 4 */////

$(document).ready(function () {
    var trigger = $('.hamburger4'),
        overlay = $('.overlay4'),
        isClosed = false;

    function buttonSwitch() {
        if (isClosed === true) {
            overlay.hide();
            trigger.removeClass('is-open4');
            trigger.addClass('is-closed4');
            isClosed = false;
        } else {
            overlay.show();
            trigger.removeClass('is-closed4');
            trigger.addClass('is-open4');
            isClosed = true;
        }
    }

    trigger.click(function () {
        buttonSwitch();
    });

    $('[data-toggle="offcanvas4"]').click(function () {
        $('#wrapper4').toggleClass('toggled4');
    });
});

///** End */////

///** 5 */////

///** End */////