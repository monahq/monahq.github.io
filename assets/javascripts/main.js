(function (requirejs) {
    'use strict';

    requirejs.onError = function (err) {
        console.error(err);
    };

    requirejs.config({
        packages: [
        ],
        shim: {
            'bootstrap'        : ['jquery'],
            'jquery.easing'    : ['jquery'],
            'jquery.plusanchor': ['jquery'],
            'spin'             : ['jquery'],
            'ladda'            : ['spin']
        },
        paths: {
            'jquery'           : '//cdn.jsdelivr.net/webjars/org.webjars.bower/jquery/3.1.0/dist/jquery.min',
            'bootstrap'        : '//cdn.jsdelivr.net/webjars/org.webjars.bower/bootstrap/3.3.7/dist/js/bootstrap.min',
            'jquery.plusanchor': '/assets/javascripts/jquery.plusanchor.min',
            'jquery.easing'    : '//cdn.jsdelivr.net/webjars/org.webjars.bower/jquery.easing/1.3.0/js/jquery.easing.min',
            'ladda'            : '//cdn.jsdelivr.net/webjars/org.webjars.bower/ladda/1.0.0/dist/ladda.min',
            'spin'             : '//cdn.jsdelivr.net/webjars/org.webjars.bower/ladda/1.0.0/dist/spin.min'
        }
    });

    require([
        'jquery',
        'jquery.plusanchor',
        'jquery.easing',
        'bootstrap',
        'spin',
        'ladda'
    ]);
})(requirejs);
