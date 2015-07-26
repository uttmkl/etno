<?php
/**
 * @file
 * Returns the HTML for the footer region.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728140
 */
?>
<?php if ($content): ?>
  <footer id="footer" class="<?php print $classes; ?>">
      <div class="wrapper">
        <div class="line left"></div>
        <?php print $content; ?>
        <div class="line right"></div>
      </div>
  </footer>
<?php endif; ?>
