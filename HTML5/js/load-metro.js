$(function(){
    if (document.location.host.indexOf('.dev') > -1) {
        $("<script/>").attr('src', 'js/metro-loader.js').appendTo($('head'));
    } else {
        $("<script/>").attr('src', 'js/metro.min.js').appendTo($('head'));
    }
})