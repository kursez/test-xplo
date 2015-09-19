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
     * Slider Colorbox
     */
    sliderColorbox: function() {
        var images = $('[data-colorbox]'),
            count = images.size(),
            interval;

        function resetSlider() {
            $(document).unbind('cbox_open');
            clearInterval(interval);
            $('#cboxNext').click(function(){});
            $('#cboxPrevious').click(function(){});
        }

        function setSliderInterval() {
            interval = setInterval(function() {
                count -= 1;

                if (count > 0) {
                    $.colorbox.next();
                } else {
                    $.colorbox.close();
                    resetSlider();
                }
            }, 2000);
        }

        // Events

        $(document).bind('cbox_open', function() {
            setSliderInterval();
        });

        $(document).bind('cbox_closed', function() {
            resetSlider();
            $(document).unbind('cbox_closed');
        });

        $('#cboxNext').click(function() {
            resetSlider();
        });

        $('#cboxPrevious').click(function() {
            resetSlider();
        });

        $(document).ready(function() {
            images.colorbox({
                rel:'gal',
                open: true,
                width: '80%',
                height: '80%'
            });
        });
    }
  };

  $(function() {
    App.init();
  });

})(jQuery);
