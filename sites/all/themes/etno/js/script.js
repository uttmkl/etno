/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {


// To understand behaviors, see https://drupal.org/node/756722#behaviors
Drupal.behaviors.etno = {
  attach: function(context, settings) {
    Etno = {
      init: function() {
        this.initTabs();
        this.initForms();
        this.initGallery();
      },

      initTabs: function() {
        $(".tabs-ui").tabs();
      },

      initForms: function() {
        if ($('form.node-instructor-form, form.node-news-form, form.node-photos-form, form.node-video-form').size() > 0) {
          setSchool();
        }

        function setSchool() {
          var schoolId = $("#page").data("schoolid");

          if (schoolId) {
            $('#edit-field-school-und option[value=' + schoolId + ']').attr('selected', 'selected');
          }
        }
      },

      initGallery: function() {
        var galleries = $('.photo_gallery_wrapper');

        if (galleries.size() > 0) {
          galleries.each(function() {
            $(this).GITheWall({
              onBeforeInit: null,
              onReady: null,
              onViewPortUpdate: null,
              onItemChange: null,
              onDestroy: null,
              onShow: null,
              onHide: null,
              onContentLoading: null,
              onContentLoaded: null,
              margin: {
                top: 25,
                bottom: 20
              },
              scrollerElm: null,
              scrollOffset: 150,
              arrows: true,
              closebutton: true,
              keyboardNavigation: true,
              animationSpeed: 300,
              autoscroll: true,
              responsive: true,
              initialWrapperHeight: 600,
              dynamicHeight: true,
              nextButtonClass: '',
              prevButtonClass: '',
              closeButtonClass: ''
            });
          });
        }
      }
    };

    Etno.init();
  }
};


})(jQuery, Drupal, this, this.document);
