(function ($) {
    'use strict';
    var settings;

    $.fn.tuxedoMenu = function (options) {
        var self = this;

        // Extend default settings with options
        settings = $.extend({
            triggerSelector: '.tuxedo-menu-trigger',
            menuSelector: '.tuxedo-menu',
            tuxedo_bg: '.tuxedo_bg',
            tuxedo_btn: '.close_btn2',
            isFixed: true
        }, options);
/*
        self.addClass('tuxedo-menu tuxedo-menu-pristine animated')
            .toggleClass('tuxedo-menu-visible', !settings.isFixed)
            .toggleClass('tuxedo-menu-fixed slideOutLeft', settings.isFixed);
        $(settings.triggerSelector).addClass('tuxedo-menu-trigger');
*/
        $(settings.triggerSelector).on('click', function () {
            if (!settings.isFixed) {
                return;
            }
            
            $(settings.tuxedo_bg).fadeIn(500);
            $(settings.menuSelector).fadeIn(500);

            return false;
        });

        $(settings.tuxedo_bg).click(function (event) {
            if (!settings.isFixed ||
                $(event.target).is(settings.triggerSelector)) {
                return;
            }

            var isTrigger = $(event.target).is(settings.triggerSelector);
            var isMenu = $(event.target).closest(settings.menuSelector).length === 1;
            var isTuxedo_bg = $(event.target).closest(settings.tuxedo_bg).length === 2;
            var isClickAbleMenuItem = $(event.target).closest('a').length === 0;
            var isParentOfCollapsibleChildren = $(event.target).next().is('ul.collapse, ul.collapsing');
            var isChildElementOfMenu = $.contains($(settings.menuSelector)[0], event.target);

            if ((!isTrigger && !isMenu && !isTuxedo_bg) ||
                (isClickAbleMenuItem && !isParentOfCollapsibleChildren && isChildElementOfMenu)) {

					
                $(settings.menuSelector).fadeOut(500);
                $(settings.tuxedo_bg).fadeOut(500);
                

            }

        });
        
        $(settings.tuxedo_btn).on('click', function () {
            if (!settings.isFixed) {
                return;
            }
            
            
            $(settings.menuSelector).fadeOut(500);
            
            $(settings.tuxedo_bg).fadeOut(500);

            return false;
        });

        return self;
    };
})(jQuery);
