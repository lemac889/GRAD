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
    <div id="footer-centered-wrapper" class="centered">
    <?php print $content; ?>
    </div><!-- End footer-centered-wrapper -->
  </footer>
<?php endif; ?>
