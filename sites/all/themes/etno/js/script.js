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

    // Place your code here.
    if ($('form.node-instructor-form, form.node-news-form').size() > 0) {
      setSchool();
    }

    function setSchool() {
      var schoolId = $("#page").data("schoolid");

      if (schoolId) {
        $('#edit-field-school-und option[value=' + schoolId + ']').attr('selected', 'selected');
      }
    }
  }
};


})(jQuery, Drupal, this, this.document);
