<!--.page -->
<div role="document" class="page">
  <!--.page-header region -->
  <header role="banner" class="page-header">
      <!--.page-header-region -->
      <section class="row">
        <div class="large-12 columns page-header--inner">
          <div class="page-header--left">
          <a class="logo" href="<?php print base_path(); ?>">
            <img src="<?php print base_path() . drupal_get_path("theme", "STARTER")?>/images/logo.svg" />
          </a>
          </div>
          <div class="page-header--right text-right">
          <?php if (!empty($page['header'])): ?>
          <?php print render($page['header']); ?>
          <?php endif; ?>
          <div class="nav-toggle hide-for-large-up js__nav-toggle">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          </div>
        </div>
      </section>
      <?php if ($top_bar): ?>
      <!--.top-bar -->
      <?php if ($top_bar_classes): ?>
        <div class="<?php print $top_bar_classes; ?>">
      <?php endif; ?>
      <nav class="top-bar" data-topbar <?php print $top_bar_options; ?>>
        <ul class="title-area">
          <li class="name"><h1><?php print $linked_site_name; ?></h1></li>
          <li class="toggle-topbar menu-icon">
            <a href="#"><span><?php print $top_bar_menu_text; ?></span></a></li>
        </ul>
        <section class="top-bar-section">
          <?php if ($top_bar_main_menu) : ?>
            <?php print $top_bar_main_menu; ?>
          <?php endif; ?>
          <?php if ($top_bar_secondary_menu) : ?>
            <?php print $top_bar_secondary_menu; ?>
          <?php endif; ?>
        </section>
      </nav>
      <?php if ($top_bar_classes): ?>
        </div>
      <?php endif; ?>
      <!--/.top-bar -->
    <?php endif; ?>
  </header>  <?php if (!empty($page['off_canvas'])): ?>
  <div class="off-canvas">
    <?php print render($page['off_canvas']); ?>
  </div>
  <?php endif; ?>
  <?php if (!empty($page['full_bleed'])): ?>
    <!--/.featured -->
    <section class="page-full-bleed row">
      <div class="large-12 columns">
        <?php print render($page['full_bleed']); ?>
      </div>
    </section>
    <!--/.page-featured -->
  <?php endif; ?>

  <?php if ($messages && !$zurb_foundation_messages_modal): ?>
    <!--/.page-messages -->
    <section class="page-messages row">
      <div class="large-12 columns">
        <?php if ($messages): print $messages; endif; ?>
      </div>
    </section>
    <!--/.page-messages -->
  <?php endif; ?>

  <main role="main" class="row page-content">
    <div class="<?php print $main_grid; ?> main columns">
      <a id="main-content"></a>

      <?php if ($breadcrumb): print $breadcrumb; endif; ?>

      <?php if ($title && !$is_front): ?>
        <?php print render($title_prefix); ?>
        <h1 id="page-title" class="title"><?php print $title; ?></h1>
        <?php print render($title_suffix); ?>
      <?php endif; ?>

      <?php if (!empty($tabs)): ?>
        <?php print render($tabs); ?>
        <?php if (!empty($tabs2)): print render($tabs2); endif; ?>
      <?php endif; ?>

      <?php if ($action_links): ?>
        <ul class="action-links">
          <?php print render($action_links); ?>
        </ul>
      <?php endif; ?>

      <?php print render($page['content']); ?>
    </div>
    <!--/.main region -->

    <?php if (!empty($page['sidebar_first'])): ?>
      <aside role="complementary" class="<?php print $sidebar_first_grid; ?> sidebar-first columns sidebar">
        <?php print render($page['sidebar_first']); ?>
      </aside>
    <?php endif; ?>

    <?php if (!empty($page['sidebar_second'])): ?>
      <aside role="complementary" class="<?php print $sidebar_sec_grid; ?> sidebar-second columns sidebar">
        <?php print render($page['sidebar_second']); ?>
      </aside>
    <?php endif; ?>
  </main>
  <!--/.page-content-->
  <!--.page-footer-->
  <footer class="page-footer panel row" role="contentinfo">
    <?php if (!empty($page['footer'])): ?>
      <div class="footer large-12 columns">
        <?php print render($page['footer']); ?>
      </div>
    <?php endif; ?>

    <?php if ($site_name) :?>
      <div class="copyright large-12 columns">
        &copy; <?php print date('Y') . ' ' . check_plain($site_name) . ' ' . t('All rights reserved.'); ?>
      </div>
    <?php endif; ?>
  </footer>
  <!--/.footer-->

  <?php if ($messages && $zurb_foundation_messages_modal): print $messages; endif; ?>
</div>
<!--/.page -->
