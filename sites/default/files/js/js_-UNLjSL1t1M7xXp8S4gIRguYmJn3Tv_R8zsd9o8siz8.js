Drupal.locale = { 'pluralFormula': function ($n) { return Number((((($n%10)==1)&&(($n%100)!=11))?(0):((((($n%10)>=2)&&(($n%10)<=4))&&((($n%100)<10)||(($n%100)>=20)))?(1):2))); }, 'strings': {"":{"An AJAX HTTP error occurred.":"\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 AJAX HTTP \u043e\u0448\u0438\u0431\u043a\u0430.","HTTP Result Code: !status":"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0439 \u043a\u043e\u0434 HTTP: !status","An AJAX HTTP request terminated abnormally.":"HTTP \u0437\u0430\u043f\u0440\u043e\u0441 AJAX \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e.","Debugging information follows.":"\u0421\u043b\u0435\u0434\u0443\u0435\u0442 \u043e\u0442\u043b\u0430\u0434\u043e\u0447\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f.","Path: !uri":"\u041f\u0443\u0442\u044c: !uri","StatusText: !statusText":"\u0422\u0435\u043a\u0441\u0442 \u0421\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f: !statusText","ResponseText: !responseText":"\u0422\u0435\u043a\u0441\u0442 \u041e\u0442\u0432\u0435\u0442\u0430: !responseText","ReadyState: !readyState":"ReadyState: !readyState","Disabled":"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u043e","Enabled":"\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u043e","Edit":"\u041f\u0440\u0430\u0432\u043a\u0430","Add":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c","Configure":"\u041d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c","Show":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c","Select all rows in this table":"\u041e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u0432\u0441\u0435 \u0441\u0442\u0440\u043e\u043a\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b","Deselect all rows in this table":"\u0421\u043d\u044f\u0442\u044c \u043e\u0442\u043c\u0435\u0442\u043a\u0443 \u0441\u043e \u0432\u0441\u0435\u0445 \u043a\u043e\u043b\u043e\u043d\u043e\u043a \u0442\u0430\u0431\u043b\u0438\u0446\u044b","Not published":"\u041d\u0435 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043e","Hide":"\u0421\u043a\u0440\u044b\u0442\u044c","Loading":"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430","By @name on @date":"@name, @date","By @name":"@name","Not in menu":"\u041d\u0435 \u0432 \u043c\u0435\u043d\u044e","Alias: @alias":"\u0421\u0438\u043d\u043e\u043d\u0438\u043c: @alias","No alias":"\u0421\u0438\u043d\u043e\u043d\u0438\u043c \u043d\u0435 \u0437\u0430\u0434\u0430\u043d","New revision":"\u041d\u043e\u0432\u0430\u044f \u0440\u0435\u0434\u0430\u043a\u0446\u0438\u044f","Drag to re-order":"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u043e\u0440\u044f\u0434\u043e\u043a \u043c\u043e\u0436\u043d\u043e, \u043f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0432 \u043f\u0443\u043d\u043a\u0442 \u043c\u044b\u0448\u043a\u043e\u0439.","Changes made in this table will not be saved until the form is submitted.":"\u0421\u0434\u0435\u043b\u0430\u043d\u043d\u044b\u0435 \u0432 \u0441\u043f\u0438\u0441\u043a\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043d\u0435 \u0432\u0441\u0442\u0443\u043f\u044f\u0442 \u0432 \u0441\u0438\u043b\u0443, \u043f\u043e\u043a\u0430 \u0432\u044b \u043d\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u0435 \u0438\u0445.","This permission is inherited from the authenticated user role.":"\u042d\u0442\u043e \u043f\u0440\u0430\u0432\u043e \u043d\u0430\u0441\u043b\u0435\u0434\u0443\u0435\u0442\u0441\u044f \u043e\u0442 \u0440\u043e\u043b\u0438 \u00ab\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u00bb.","No revision":"\u041d\u0435\u0442 \u0440\u0435\u0434\u0430\u043a\u0446\u0438\u0438","@number comments per page":"@number \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443","Requires a title":"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a","(active tab)":"(\u0430\u043a\u0442\u0438\u0432\u043d\u0430\u044f \u0432\u043a\u043b\u0430\u0434\u043a\u0430)","Hide summary":"\u0421\u043a\u0440\u044b\u0442\u044c \u0430\u043d\u043e\u043d\u0441","Edit summary":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0430\u043d\u043e\u043d\u0441","Don\u0027t display post information":"\u041d\u0435 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0430","@title dialog":"\u0414\u0438\u0430\u043b\u043e\u0433 @title","The selected file %filename cannot be uploaded. Only files with the following extensions are allowed: %extensions.":"\u0412\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b %filename \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0444\u0430\u0439\u043b\u043e\u0432 \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u043e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c\u0438 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f\u043c\u0438: %extensions.","Re-order rows by numerical weight instead of dragging.":"\u0423\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0438\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u0438 \u043f\u043e \u0432\u0435\u0441\u0443 \u0432\u043c\u0435\u0441\u0442\u043e \u043f\u0435\u0440\u0435\u0442\u0430\u0441\u043a\u0438\u0432\u0430\u043d\u0438\u044f.","Show row weights":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0435\u0441 \u0441\u0442\u0440\u043e\u043a","Hide row weights":"\u0421\u043a\u0440\u044b\u0442\u044c \u0432\u0435\u0441 \u0441\u0442\u0440\u043e\u043a","Autocomplete popup":"\u0412\u0441\u043f\u043b\u044b\u0432\u0430\u044e\u0449\u0435\u0435 \u0430\u0432\u0442\u043e\u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435","Searching for matches...":"\u041f\u043e\u0438\u0441\u043a \u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0439...","Also allow !name role to !permission?":"\u0422\u0430\u043a\u0436\u0435 \u043f\u0440\u0438\u0441\u0432\u043e\u0438\u0442\u044c \u0440\u043e\u043b\u0438 !name \u043f\u0440\u0430\u0432\u0430 !permission?","Please wait...":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435...","Remove group":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0443\u0441\u043b\u043e\u0432\u0438\u0435","Apply (all displays)":"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c (\u0432\u0441\u0435 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f)","Apply (this display)":"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c (\u044d\u0442\u043e \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435)","Revert to default":"\u0412\u0435\u0440\u043d\u0443\u0442\u044c \u043a \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u043c \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e","Available tokens":"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0435 \u0442\u043e\u043a\u0435\u043d\u044b","Insert this token into your form":"\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u044d\u0442\u043e\u0442 \u0442\u043e\u043a\u0435\u043d \u0432 \u0432\u0430\u0448\u0443 \u0444\u043e\u0440\u043c\u0443","First click a text field to insert your tokens into.":"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u043a\u043b\u0438\u043a\u043d\u0438\u0442\u0435 \u0432 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0435 \u043f\u043e\u043b\u0435, \u0447\u0442\u043e\u0431\u044b \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044c\u0442\u043e\u043a\u0435\u043d\u044b.","Loading token browser...":"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 \u0442\u043e\u043a\u0435\u043d\u043e\u0432...","Automatic alias":"\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0441\u0438\u043d\u043e\u043d\u0438\u043c","Select None":"\u0421\u043d\u044f\u0442\u044c \u0432\u044b\u0431\u043e\u0440","Select All":"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0432\u0441\u0435","Recent":"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439","No results":"\u041d\u0435\u0442 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432","clear":"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c","Weight: !weight":"\u041c\u0430\u0441\u0441\u0430: !weight","Range: !range":"\u0414\u0438\u0430\u043f\u0430\u0437\u043e\u043d: !range","Default: !default":"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: !default"}} };;
(function ($) {

/**
 * Attach the machine-readable name form element behavior.
 */
Drupal.behaviors.machineName = {
  /**
   * Attaches the behavior.
   *
   * @param settings.machineName
   *   A list of elements to process, keyed by the HTML ID of the form element
   *   containing the human-readable value. Each element is an object defining
   *   the following properties:
   *   - target: The HTML ID of the machine name form element.
   *   - suffix: The HTML ID of a container to show the machine name preview in
   *     (usually a field suffix after the human-readable name form element).
   *   - label: The label to show for the machine name preview.
   *   - replace_pattern: A regular expression (without modifiers) matching
   *     disallowed characters in the machine name; e.g., '[^a-z0-9]+'.
   *   - replace: A character to replace disallowed characters with; e.g., '_'
   *     or '-'.
   *   - standalone: Whether the preview should stay in its own element rather
   *     than the suffix of the source element.
   *   - field_prefix: The #field_prefix of the form element.
   *   - field_suffix: The #field_suffix of the form element.
   */
  attach: function (context, settings) {
    var self = this;
    $.each(settings.machineName, function (source_id, options) {
      var $source = $(source_id, context).addClass('machine-name-source');
      var $target = $(options.target, context).addClass('machine-name-target');
      var $suffix = $(options.suffix, context);
      var $wrapper = $target.closest('.form-item');
      // All elements have to exist.
      if (!$source.length || !$target.length || !$suffix.length || !$wrapper.length) {
        return;
      }
      // Skip processing upon a form validation error on the machine name.
      if ($target.hasClass('error')) {
        return;
      }
      // Figure out the maximum length for the machine name.
      options.maxlength = $target.attr('maxlength');
      // Hide the form item container of the machine name form element.
      $wrapper.hide();
      // Determine the initial machine name value. Unless the machine name form
      // element is disabled or not empty, the initial default value is based on
      // the human-readable form element value.
      if ($target.is(':disabled') || $target.val() != '') {
        var machine = $target.val();
      }
      else {
        var machine = self.transliterate($source.val(), options);
      }
      // Append the machine name preview to the source field.
      var $preview = $('<span class="machine-name-value">' + options.field_prefix + Drupal.checkPlain(machine) + options.field_suffix + '</span>');
      $suffix.empty();
      if (options.label) {
        $suffix.append(' ').append('<span class="machine-name-label">' + options.label + ':</span>');
      }
      $suffix.append(' ').append($preview);

      // If the machine name cannot be edited, stop further processing.
      if ($target.is(':disabled')) {
        return;
      }

      // If it is editable, append an edit link.
      var $link = $('<span class="admin-link"><a href="#">' + Drupal.t('Edit') + '</a></span>')
        .click(function () {
          $wrapper.show();
          $target.focus();
          $suffix.hide();
          $source.unbind('.machineName');
          return false;
        });
      $suffix.append(' ').append($link);

      // Preview the machine name in realtime when the human-readable name
      // changes, but only if there is no machine name yet; i.e., only upon
      // initial creation, not when editing.
      if ($target.val() == '') {
        $source.bind('keyup.machineName change.machineName input.machineName', function () {
          machine = self.transliterate($(this).val(), options);
          // Set the machine name to the transliterated value.
          if (machine != '') {
            if (machine != options.replace) {
              $target.val(machine);
              $preview.html(options.field_prefix + Drupal.checkPlain(machine) + options.field_suffix);
            }
            $suffix.show();
          }
          else {
            $suffix.hide();
            $target.val(machine);
            $preview.empty();
          }
        });
        // Initialize machine name preview.
        $source.keyup();
      }
    });
  },

  /**
   * Transliterate a human-readable name to a machine name.
   *
   * @param source
   *   A string to transliterate.
   * @param settings
   *   The machine name settings for the corresponding field, containing:
   *   - replace_pattern: A regular expression (without modifiers) matching
   *     disallowed characters in the machine name; e.g., '[^a-z0-9]+'.
   *   - replace: A character to replace disallowed characters with; e.g., '_'
   *     or '-'.
   *   - maxlength: The maximum length of the machine name.
   *
   * @return
   *   The transliterated source string.
   */
  transliterate: function (source, settings) {
    var rx = new RegExp(settings.replace_pattern, 'g');
    return source.toLowerCase().replace(rx, settings.replace).substr(0, settings.maxlength);
  }
};

})(jQuery);
;
(function ($) {

Drupal.behaviors.textarea = {
  attach: function (context, settings) {
    $('.form-textarea-wrapper.resizable', context).once('textarea', function () {
      var staticOffset = null;
      var textarea = $(this).addClass('resizable-textarea').find('textarea');
      var grippie = $('<div class="grippie"></div>').mousedown(startDrag);

      grippie.insertAfter(textarea);

      function startDrag(e) {
        staticOffset = textarea.height() - e.pageY;
        textarea.css('opacity', 0.25);
        $(document).mousemove(performDrag).mouseup(endDrag);
        return false;
      }

      function performDrag(e) {
        textarea.height(Math.max(32, staticOffset + e.pageY) + 'px');
        return false;
      }

      function endDrag(e) {
        $(document).unbind('mousemove', performDrag).unbind('mouseup', endDrag);
        textarea.css('opacity', 1);
      }
    });
  }
};

})(jQuery);
;
(function ($) {

/**
 * Toggle the visibility of a fieldset using smooth animations.
 */
Drupal.toggleFieldset = function (fieldset) {
  var $fieldset = $(fieldset);
  if ($fieldset.is('.collapsed')) {
    var $content = $('> .fieldset-wrapper', fieldset).hide();
    $fieldset
      .removeClass('collapsed')
      .trigger({ type: 'collapsed', value: false })
      .find('> legend span.fieldset-legend-prefix').html(Drupal.t('Hide'));
    $content.slideDown({
      duration: 'fast',
      easing: 'linear',
      complete: function () {
        Drupal.collapseScrollIntoView(fieldset);
        fieldset.animating = false;
      },
      step: function () {
        // Scroll the fieldset into view.
        Drupal.collapseScrollIntoView(fieldset);
      }
    });
  }
  else {
    $fieldset.trigger({ type: 'collapsed', value: true });
    $('> .fieldset-wrapper', fieldset).slideUp('fast', function () {
      $fieldset
        .addClass('collapsed')
        .find('> legend span.fieldset-legend-prefix').html(Drupal.t('Show'));
      fieldset.animating = false;
    });
  }
};

/**
 * Scroll a given fieldset into view as much as possible.
 */
Drupal.collapseScrollIntoView = function (node) {
  var h = document.documentElement.clientHeight || document.body.clientHeight || 0;
  var offset = document.documentElement.scrollTop || document.body.scrollTop || 0;
  var posY = $(node).offset().top;
  var fudge = 55;
  if (posY + node.offsetHeight + fudge > h + offset) {
    if (node.offsetHeight > h) {
      window.scrollTo(0, posY);
    }
    else {
      window.scrollTo(0, posY + node.offsetHeight - h + fudge);
    }
  }
};

Drupal.behaviors.collapse = {
  attach: function (context, settings) {
    $('fieldset.collapsible', context).once('collapse', function () {
      var $fieldset = $(this);
      // Expand fieldset if there are errors inside, or if it contains an
      // element that is targeted by the URI fragment identifier.
      var anchor = location.hash && location.hash != '#' ? ', ' + location.hash : '';
      if ($fieldset.find('.error' + anchor).length) {
        $fieldset.removeClass('collapsed');
      }

      var summary = $('<span class="summary"></span>');
      $fieldset.
        bind('summaryUpdated', function () {
          var text = $.trim($fieldset.drupalGetSummary());
          summary.html(text ? ' (' + text + ')' : '');
        })
        .trigger('summaryUpdated');

      // Turn the legend into a clickable link, but retain span.fieldset-legend
      // for CSS positioning.
      var $legend = $('> legend .fieldset-legend', this);

      $('<span class="fieldset-legend-prefix element-invisible"></span>')
        .append($fieldset.hasClass('collapsed') ? Drupal.t('Show') : Drupal.t('Hide'))
        .prependTo($legend)
        .after(' ');

      // .wrapInner() does not retain bound events.
      var $link = $('<a class="fieldset-title" href="#"></a>')
        .prepend($legend.contents())
        .appendTo($legend)
        .click(function () {
          var fieldset = $fieldset.get(0);
          // Don't animate multiple times.
          if (!fieldset.animating) {
            fieldset.animating = true;
            Drupal.toggleFieldset(fieldset);
          }
          return false;
        });

      $legend.append(summary);
    });
  }
};

})(jQuery);
;

(function ($) {

Drupal.behaviors.commentFieldsetSummaries = {
  attach: function (context) {
    $('fieldset.comment-node-settings-form', context).drupalSetSummary(function (context) {
      return Drupal.checkPlain($('.form-item-comment input:checked', context).next('label').text());
    });

    // Provide the summary for the node type form.
    $('fieldset.comment-node-type-settings-form', context).drupalSetSummary(function(context) {
      var vals = [];

      // Default comment setting.
      vals.push($(".form-item-comment select option:selected", context).text());

      // Threading.
      var threading = $(".form-item-comment-default-mode input:checked", context).next('label').text();
      if (threading) {
        vals.push(threading);
      }

      // Comments per page.
      var number = $(".form-item-comment-default-per-page select option:selected", context).val();
      vals.push(Drupal.t('@number comments per page', {'@number': number}));

      return Drupal.checkPlain(vals.join(', '));
    });
  }
};

})(jQuery);
;
(function ($) {

Drupal.behaviors.menuChangeParentItems = {
  attach: function (context, settings) {
    $('fieldset#edit-menu input').each(function () {
      $(this).change(function () {
        // Update list of available parent menu items.
        Drupal.menu_update_parent_list();
      });
    });
  }
};

/**
 * Function to set the options of the menu parent item dropdown.
 */
Drupal.menu_update_parent_list = function () {
  var values = [];

  $('input:checked', $('fieldset#edit-menu')).each(function () {
    // Get the names of all checked menus.
    values.push(Drupal.checkPlain($.trim($(this).val())));
  });

  var url = Drupal.settings.basePath + 'admin/structure/menu/parents';
  $.ajax({
    url: location.protocol + '//' + location.host + url,
    type: 'POST',
    data: {'menus[]' : values},
    dataType: 'json',
    success: function (options) {
      // Save key of last selected element.
      var selected = $('fieldset#edit-menu #edit-menu-parent :selected').val();
      // Remove all exisiting options from dropdown.
      $('fieldset#edit-menu #edit-menu-parent').children().remove();
      // Add new options to dropdown.
      jQuery.each(options, function(index, value) {
        $('fieldset#edit-menu #edit-menu-parent').append(
          $('<option ' + (index == selected ? ' selected="selected"' : '') + '></option>').val(index).text(value)
        );
      });
    }
  });
};

})(jQuery);
;
(function ($) {

/**
 * A progressbar object. Initialized with the given id. Must be inserted into
 * the DOM afterwards through progressBar.element.
 *
 * method is the function which will perform the HTTP request to get the
 * progress bar state. Either "GET" or "POST".
 *
 * e.g. pb = new progressBar('myProgressBar');
 *      some_element.appendChild(pb.element);
 */
Drupal.progressBar = function (id, updateCallback, method, errorCallback) {
  var pb = this;
  this.id = id;
  this.method = method || 'GET';
  this.updateCallback = updateCallback;
  this.errorCallback = errorCallback;

  // The WAI-ARIA setting aria-live="polite" will announce changes after users
  // have completed their current activity and not interrupt the screen reader.
  this.element = $('<div class="progress" aria-live="polite"></div>').attr('id', id);
  this.element.html('<div class="bar"><div class="filled"></div></div>' +
                    '<div class="percentage"></div>' +
                    '<div class="message">&nbsp;</div>');
};

/**
 * Set the percentage and status message for the progressbar.
 */
Drupal.progressBar.prototype.setProgress = function (percentage, message) {
  if (percentage >= 0 && percentage <= 100) {
    $('div.filled', this.element).css('width', percentage + '%');
    $('div.percentage', this.element).html(percentage + '%');
  }
  $('div.message', this.element).html(message);
  if (this.updateCallback) {
    this.updateCallback(percentage, message, this);
  }
};

/**
 * Start monitoring progress via Ajax.
 */
Drupal.progressBar.prototype.startMonitoring = function (uri, delay) {
  this.delay = delay;
  this.uri = uri;
  this.sendPing();
};

/**
 * Stop monitoring progress via Ajax.
 */
Drupal.progressBar.prototype.stopMonitoring = function () {
  clearTimeout(this.timer);
  // This allows monitoring to be stopped from within the callback.
  this.uri = null;
};

/**
 * Request progress data from server.
 */
Drupal.progressBar.prototype.sendPing = function () {
  if (this.timer) {
    clearTimeout(this.timer);
  }
  if (this.uri) {
    var pb = this;
    // When doing a post request, you need non-null data. Otherwise a
    // HTTP 411 or HTTP 406 (with Apache mod_security) error may result.
    $.ajax({
      type: this.method,
      url: this.uri,
      data: '',
      dataType: 'json',
      success: function (progress) {
        // Display errors.
        if (progress.status == 0) {
          pb.displayError(progress.data);
          return;
        }
        // Update display.
        pb.setProgress(progress.percentage, progress.message);
        // Schedule next timer.
        pb.timer = setTimeout(function () { pb.sendPing(); }, pb.delay);
      },
      error: function (xmlhttp) {
        pb.displayError(Drupal.ajaxError(xmlhttp, pb.uri));
      }
    });
  }
};

/**
 * Display errors on the page.
 */
Drupal.progressBar.prototype.displayError = function (string) {
  var error = $('<div class="messages error"></div>').html(string);
  $(this.element).before(error).hide();

  if (this.errorCallback) {
    this.errorCallback(this);
  }
};

})(jQuery);
;
(function ($) {

Drupal.behaviors.contentTypes = {
  attach: function (context) {
    // Provide the vertical tab summaries.
    $('fieldset#edit-submission', context).drupalSetSummary(function(context) {
      var vals = [];
      vals.push(Drupal.checkPlain($('#edit-title-label', context).val()) || Drupal.t('Requires a title'));
      return vals.join(', ');
    });
    $('fieldset#edit-workflow', context).drupalSetSummary(function(context) {
      var vals = [];
      $("input[name^='node_options']:checked", context).parent().each(function() {
        vals.push(Drupal.checkPlain($(this).text()));
      });
      if (!$('#edit-node-options-status', context).is(':checked')) {
        vals.unshift(Drupal.t('Not published'));
      }
      return vals.join(', ');
    });
    $('fieldset#edit-display', context).drupalSetSummary(function(context) {
      var vals = [];
      $('input:checked', context).next('label').each(function() {
        vals.push(Drupal.checkPlain($(this).text()));
      });
      if (!$('#edit-node-submitted', context).is(':checked')) {
        vals.unshift(Drupal.t("Don't display post information"));
      }
      return vals.join(', ');
    });
  }
};

})(jQuery);
;
(function ($) {

Drupal.behaviors.weight = {
  attach: function (context) {
    // Provide the vertical tab summaries.
    $('fieldset#edit-weight-settings', context).drupalSetSummary(function(context) {
      //var vals = [];
      var enabled, vals = [];
      enabled = $('input:radio[name="weight_enabled"]:checked').val();
      vals.push(enabled == 1 ? Drupal.t('Enabled') : Drupal.t('Disabled'));
      if (enabled == 1) {
        vals.push(Drupal.t('Range: !range', {'!range' : $('input:radio[name="weight_range"]:checked').val()}));
        vals.push(Drupal.t('Default: !default', {'!default' : $('#edit-weight-default option:selected').val()}));
      }
      return vals.join(', ');
    });
    $('fieldset#edit-weight', context).drupalSetSummary(function(context) {
      return Drupal.t('Weight: !weight', {'!weight' : $('#edit-weight-weight option:selected').val()});
    });

    // Force range to 50 when menu weight is selected.
    if ($('input:radio[name="weight_menu"]:checked').val() == 1) {
      $('#edit-weight-range-50').click();
      $('input:radio[name="weight_range"]').attr('disabled', 'disabled');
    }

    $('input:radio[name="weight_menu"]').change(function() {
      if ($(this).val() == 1) {
        $('#edit-weight-range-50').click();
        $('input:radio[name="weight_range"]').attr('disabled', 'disabled');
      }
      else {
        $('input:radio[name="weight_range"]').removeAttr('disabled');
      }
    });
  }
};

})(jQuery);
;
