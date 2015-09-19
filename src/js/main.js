/* ==========================================================================

    Project: test-xplo
    Author: XHTMLized
    Last updated: @@timestamp

   ========================================================================== */

(function($) {

  'use strict';

  var App = {

    /**
     * Init Function
     */
    init: function() {
       App.sliderColorbox();
    },

    /**
     * Custom feature 1
     */
    sliderColorbox: function() {
        var images = $('[data-colorbox]'),
            count = images.size(),
            interval;

        function resetSlider() {
            $(document).unbind('cbox_open');
            clearInterval(interval);
        }

        $(document).bind('cbox_open', function() {
            interval = setInterval(function() {
                count -= 1;

                if (count > 0) {
                    $.colorbox.next();
                } else {
                    $.colorbox.close();
                    resetSlider();
                }
            }, 2000);
        });

        $(document).bind('cbox_closed', function() {
            resetSlider();
            $(document).unbind('cbox_closed');
        });

        $(document).ready(function() {
            images.colorbox({
                rel:'gal',
                open: true,
                width: '600px',
                height: '300px'
            });
        });
    }
  };

  $(function() {
    App.init();
  });

})(jQuery);
