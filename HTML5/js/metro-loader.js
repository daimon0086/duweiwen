var plugins = [
    'core',
    'locale',
    'touch-handler',

    'accordion',
    'button-set',
    'date-format',
    'calendar',
    'datepicker',
    'carousel',
    'countdown',
    'dropdown',
    'input-control',
    'live-tile',

    'progressbar',
    'rating',
    'slider',
    'tab-control',
    'table',
    'times',
    'dialog',
    'notify',
    'listview',
    'treeview',
    'fluentmenu',
    'hint',
    'streamer',
    'stepper',
    'drag-tile',
    'scroll',

    'initiator'


];

$.each(plugins, function(i, plugin){
    $("<script/>").attr('src', 'js/metro-'+plugin+'.js').appendTo($('head'));
});
