=== Gutenberg ===
Contributors: matveb, joen, karmatosed
Requires at least: 5.0.0
Tested up to: 5.2
Stable tag: 5.7.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

A new editing experience for WordPress is in the works, with the goal of making it easier than ever to make your words, pictures, and layout look just right. This is the beta plugin for the project.

== Description ==

Gutenberg is more than an editor. While the editor is the focus right now, the project will ultimately impact the entire publishing experience including customization (the next focus area).

<a href="https://wordpress.org/gutenberg">Discover more about the project</a>.

= Editing focus =

> The editor will create a new page- and post-building experience that makes writing rich posts effortless, and has “blocks” to make it easy what today might take shortcodes, custom HTML, or “mystery meat” embed discovery. — Matt Mullenweg

One thing that sets WordPress apart from other systems is that it allows you to create as rich a post layout as you can imagine -- but only if you know HTML and CSS and build your own custom theme. By thinking of the editor as a tool to let you write rich posts and create beautiful layouts, we can transform WordPress into something users _love_ WordPress, as opposed something they pick it because it's what everyone else uses.

Gutenberg looks at the editor as more than a content field, revisiting a layout that has been largely unchanged for almost a decade.This allows us to holistically design a modern editing experience and build a foundation for things to come.

Here's why we're looking at the whole editing screen, as opposed to just the content field:

1. The block unifies multiple interfaces. If we add that on top of the existing interface, it would _add_ complexity, as opposed to remove it.
2. By revisiting the interface, we can modernize the writing, editing, and publishing experience, with usability and simplicity in mind, benefitting both new and casual users.
3. When singular block interface takes center stage, it demonstrates a clear path forward for developers to create premium blocks, superior to both shortcodes and widgets.
4. Considering the whole interface lays a solid foundation for the next focus, full site customization.
5. Looking at the full editor screen also gives us the opportunity to drastically modernize the foundation, and take steps towards a more fluid and JavaScript powered future that fully leverages the WordPress REST API.

= Blocks =

Blocks are the unifying evolution of what is now covered, in different ways, by shortcodes, embeds, widgets, post formats, custom post types, theme options, meta-boxes, and other formatting elements. They embrace the breadth of functionality WordPress is capable of, with the clarity of a consistent user experience.

Imagine a custom “employee” block that a client can drag to an About page to automatically display a picture, name, and bio. A whole universe of plugins that all extend WordPress in the same way. Simplified menus and widgets. Users who can instantly understand and use WordPress  -- and 90% of plugins. This will allow you to easily compose beautiful posts like <a href="http://moc.co/sandbox/example-post/">this example</a>.

Check out the <a href="https://wordpress.org/gutenberg/handbook/reference/faq/">FAQ</a> for answers to the most common questions about the project.

= Compatibility =

Posts are backwards compatible, and shortcodes will still work. We are continuously exploring how highly-tailored metaboxes can be accommodated, and are looking at solutions ranging from a plugin to disable Gutenberg to automatically detecting whether to load Gutenberg or not. While we want to make sure the new editing experience from writing to publishing is user-friendly, we’re committed to finding  a good solution for highly-tailored existing sites.

= The stages of Gutenberg =

Gutenberg has three planned stages. The first, aimed for inclusion in WordPress 5.0, focuses on the post editing experience and the implementation of blocks. This initial phase focuses on a content-first approach. The use of blocks, as detailed above, allows you to focus on how your content will look without the distraction of other configuration options. This ultimately will help all users present their content in a way that is engaging, direct, and visual.

These foundational elements will pave the way for stages two and three, planned for the next year, to go beyond the post into page templates and ultimately, full site customization.

Gutenberg is a big change, and there will be ways to ensure that existing functionality (like shortcodes and meta-boxes) continue to work while allowing developers the time and paths to transition effectively. Ultimately, it will open new opportunities for plugin and theme developers to better serve users through a more engaging and visual experience that takes advantage of a toolset supported by core.

= Contributors =

Gutenberg is built by many contributors and volunteers. Please see the full list in <a href="https://github.com/WordPress/gutenberg/blob/master/CONTRIBUTORS.md">CONTRIBUTORS.md</a>.

== Frequently Asked Questions ==

= How can I send feedback or get help with a bug? =

We'd love to hear your bug reports, feature suggestions and any other feedback! Please head over to <a href="https://github.com/WordPress/gutenberg/issues">the GitHub issues page</a> to search for existing issues or open a new one. While we'll try to triage issues reported here on the plugin forum, you'll get a faster response (and reduce duplication of effort) by keeping everything centralized in the GitHub repository.

= How can I contribute? =

We’re calling this editor project "Gutenberg" because it's a big undertaking. We are working on it every day in GitHub, and we'd love your help building it.You’re also welcome to give feedback, the easiest is to join us in <a href="https://make.wordpress.org/chat/">our Slack channel</a>, `#core-editor`.

See also <a href="https://github.com/WordPress/gutenberg/blob/master/CONTRIBUTING.md">CONTRIBUTING.md</a>.

= Where can I read more about Gutenberg? =

- <a href="http://matiasventura.com/post/gutenberg-or-the-ship-of-theseus/">Gutenberg, or the Ship of Theseus</a>, with examples of what Gutenberg might do in the future
- <a href="https://make.wordpress.org/core/2017/01/17/editor-technical-overview/">Editor Technical Overview</a>
- <a href="https://wordpress.org/gutenberg/handbook/reference/design-principles/">Design Principles and block design best practices</a>
- <a href="https://github.com/Automattic/wp-post-grammar">WP Post Grammar Parser</a>
- <a href="https://make.wordpress.org/core/tag/gutenberg/">Development updates on make.wordpress.org</a>
- <a href="https://wordpress.org/gutenberg/handbook/">Documentation: Creating Blocks, Reference, and Guidelines</a>
- <a href="https://wordpress.org/gutenberg/handbook/reference/faq/">Additional frequently asked questions</a>


== Changelog ==

# Features

- Support changing the text color in the Heading block.
- Support reordering gallery images.
- Complete the initial version of the widgets screen POC
  - Add an experimental endpoint to fetch the block-based widget areas.
  - Connect the screen to the widget areas endpoint.
  - Load the widget scripts.
  - Load colors, font sizes and file upload settings in the widgets screen.
  - Render the block based widget areas in the frontend.

# Enhancements

- Clarify the label of the custom classname inspector panel.
- Update Calendar block icon for better alignment with the Archives block icon.
- Add width constraints to the Media & Text block.
- Allow dropping blocks into container blocks using the new block appender.
- Provide default margins for the Latest Posts block excerpts.

# Bug Fixes

- Support block style variations for container blocks.
- A11y
  - Use semantic markup for the document outline.
  - Fix the reading order of the keyboard shortcuts modal.
  - Add a visible help text to the tags input.
  - Update the icon of the Heading block.
  - Move the View Posts anchor out of the toolbar section in the header.
  - Close the block settings menu after removing the block.
- Fix the blurriness of the disabled block switcher icons.
- Fix missing template validation warning.
- Fix several content spitting issues and make the onSplit prop stable.
- Allow the Shortcode block field to expand automatically.
- Left pad the DateTimePicker minutes input.
- Fix the frontend classname used for the Latest Posts block excerpts.
- Fix error happening when deleting the last block if the paragraph block is unregistered.
- Fix focus jumps when typing in meta block fields.

# Documentation

- Improve the Slot/Fill documentation.
- Document the Github teams used in the repository.
- Document the icon prop for the MediaPlaceholder component.
- Update the changelogs maintenance documentation.
- Clarify the save function documentation to discourage side effects.
- Clarify the block attributes documentation.
- Replace @link with @see in JSDocs.
- Fixes and tweaks to the API docs generation tool.
- Typos and tweaks: 1, 2, 3, 4, 5, 6, 7, 8.

# Various

- Add a new editor setting to allow disabling the code editor.
- Add a new @wordpress/data-controls package.
- Add an automation tool to simplify the Gutenberg release process.
- Support the all hook in non-production environments.
- Expose hasResolver property on the data module selectors.
- Support multiple pattern replacement for the custom-templated-path-webpack-plugin package.
- Update node-sass dependency to support the latest Node.js version. 
- Fix React warning showing when loading the editor (Fill component).
- Fix React warning message when using the Image block.
- Refactor the popover component using React Hooks.
- Remove WebpackRTLPlugin usage.
- Remove an outdated chrome fix for iframes drag and drop.
- Skip Chromium download in Travis by default.
- Rewrite Node.js packages to use CommonJS exports.
- Speed up Docker and e2e tests setup Travis.
- Extracted the deprecated block version declarations to their own files.
- Add missing file from the published @wordpress/dependency-extraction-webpack-plugin-files package. 
- Upgrade package dependencies: Lerna and Webpack Bundle Analyzer. 

# Mobile

- Add the Quote block.
- Make the Video block publicly available.
- Fix bug when merging blocks.
- Improve the UI/UX of the different media blocks.
- Support nested lists.
- Fix Image block with an undefined url.
- Support rich captions in the Image block.
- Improve screen reader support on BottomSheet’s cells.
- Fix several focus related bugs.
- Fix undo related issue.
- Update onSplit method on the native RichText component to the latest version.
- Move the BottomSheet component to the @wordpress/components package.
- Handle the iOS z-gesture to exit modals and block selection.
- Implement the invalid block content UI.

