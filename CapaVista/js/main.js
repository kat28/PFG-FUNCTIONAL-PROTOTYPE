$(document).ready(function ($) {

    "use strict";

    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#probootstrap-loader').length > 0) {
                $('#probootstrap-loader').removeClass('show');
            }
        }, 1);
    };
    loader();

    var carousel = function () {
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            stagePadding: 5,
            nav: false,
            navText: ['<span class="icon-chevron-left">', '<span class="icon-chevron-right">'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
    };
    carousel();


    var counter = function () {

        $('#section-counter').waypoint(function (direction) {

            if (direction === 'down' && !$(this.element).hasClass('probootstrap-animated')) {

                var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
                $('.probootstrap-number').each(function () {
                    var $this = $(this),
                        num = $this.data('number');
                    console.log(num);
                    $this.animateNumber(
                        {
                            number: num,
                            numberStep: comma_separator_number_step
                        }, 7000
                    );
                });

            }

        }, { offset: '95%' });

    }
    counter();



    var contentWayPoint = function () {
        var i = 0;
        $('.probootstrap-animate').waypoint(function (direction) {

            if (direction === 'down' && !$(this.element).hasClass('probootstrap-animated')) {

                i++;

                $(this.element).addClass('item-animate');
                setTimeout(function () {

                    $('body .probootstrap-animate.item-animate').each(function (k) {
                        var el = $(this);
                        setTimeout(function () {
                            var effect = el.data('animate-effect');
                            if (effect === 'fadeIn') {
                                el.addClass('fadeIn probootstrap-animated');
                            } else if (effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft probootstrap-animated');
                            } else if (effect === 'fadeInRight') {
                                el.addClass('fadeInRight probootstrap-animated');
                            } else {
                                el.addClass('fadeInUp probootstrap-animated');
                            }
                            el.removeClass('item-animate');
                        }, k * 50, 'easeInOutExpo');
                    });

                }, 100);

            }

        }, { offset: '95%' });
    };
    contentWayPoint();

    var datePicker = function () {
        $('#probootstrap-date').datepicker({
            'format': 'm/d/yyyy',
            'autoclose': true
        });
    };
    datePicker();

    var hiResImg = function () {
        if (window.devicePixelRatio == 2) {
            var images = $("img.hires");

            // loop through the images and make them hi-res
            for (var i = 0; i < images.length; i++) {
                // create new image name
                var imageType = images[i].src.substr(-4);
                var imageName = images[i].src.substr(0, images[i].src.length - 4);
                imageName += "@3x" + imageType;

                //rename image
                images[i].src = imageName;
            }
        }
    };
    hiResImg();


}
    (function () {
        "use strict";

        /*==================================================================
        [ Validate ]*/

        var input = $('.validate-input .input100');

        $('.validate-form').on('submit', function () {
            var check = true;

            for (var i = 0; i < input.length; i++) {
                if (validate(input[i]) == false) {
                    showValidate(input[i]);
                    check = false;
                }
            }

            return check;
        });


        $('.validate-form .input100').each(function () {
            $(this).focus(function () {
                hideValidate(this);
            });
        });

        function validate(input) {
            if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
                if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                    return false;
                }
            }
            else {
                if ($(input).val().trim() == '') {
                    return false;
                }
            }
        }

        function showValidate(input) {
            var thisAlert = $(input).parent();

            $(thisAlert).addClass('alert-validate');
        }

        function hideValidate(input) {
            var thisAlert = $(input).parent();

            $(thisAlert).removeClass('alert-validate');
        }

    }

    ));

