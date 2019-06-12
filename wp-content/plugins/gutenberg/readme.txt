=== Gutenberg ===
Contributors: matveb, joen, karmatosed
Requires at least: 5.1.0
Tested up to: 5.2
Stable tag: 5.8.0
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

### Features

*   Allow [grouping/ungrouping blocks](https://github.com/WordPress/gutenberg/pull/14908) using the Group block.

### Enhancements

*   Improve the selection of inner blocks: [Clickthrough selection](https://github.com/WordPress/gutenberg/pull/15537).
*   Introduce the [snackbar notices](https://github.com/WordPress/gutenberg/pull/15594) and use them for the save success notices.
*   Use [consistent colors in the different menus](https://github.com/WordPress/gutenberg/pull/15531) items.
*   [Consolidate the different dropdown menus](https://github.com/WordPress/gutenberg/pull/14843) to use the DropdownMenu component.
*   Expand the [**prefered-reduced-motion** support](https://github.com/WordPress/gutenberg/pull/15850) to all the animations.
*   Add a subtle [animation to the snackbar](https://github.com/WordPress/gutenberg/pull/15908) notices and provide new React hooks for media queries.
*   Redesign the [Table block placeholder](https://github.com/WordPress/gutenberg/pull/15903).
*   [Always show the side inserter](https://github.com/WordPress/gutenberg/pull/15864) on the last empty paragraph block.
*   Widgets Screen:
    *   Add the [in progress state](https://github.com/WordPress/gutenberg/pull/16019) to the save button.
    *   Add the RichText [Format Library](https://github.com/WordPress/gutenberg/pull/15948).
*   Improve the [Group and Ungroup icons](https://github.com/WordPress/gutenberg/pull/16001).
*   The [Spacer block clears all](https://github.com/WordPress/gutenberg/pull/15874) the previous floated blocks.

### Bug Fixes

*   [Focus the Button block’s input](https://github.com/WordPress/gutenberg/pull/15951) upon creation.
*   Prevent [Embed block crashes](https://github.com/WordPress/gutenberg/pull/15866) when used inside locked containers.
*   Properly [center the default appender placeholder](https://github.com/WordPress/gutenberg/pull/15868).
*   Correct [default appender icon transition jump](https://github.com/WordPress/gutenberg/pull/15892) in Safari.
*   Only apply [appender margins](https://github.com/WordPress/gutenberg/pull/15888) when the appender is inside of a block.
*   Avoid loading [reusable blocks editor styles](https://github.com/WordPress/gutenberg/pull/14607) in the frontend.
*   Correct [position of the "Remove Featured Image" button](https://github.com/WordPress/gutenberg/pull/15928) on small screens.
*   Allow the [legacy widget block to render core widgets](https://github.com/WordPress/gutenberg/pull/15396).
*   A11y:
    *   Fix [wrong tab order in the data picker](https://github.com/WordPress/gutenberg/pull/15936) component.
    *   Remove the [access keyboard shortcuts](https://github.com/WordPress/gutenberg/pull/15191) from the Format Library.
*   Bail early in [createUpgradedEmbedBlock](https://github.com/WordPress/gutenberg/pull/15885) for invalid block types.
*   Fix [DateTimePicker styles](https://github.com/WordPress/gutenberg/pull/15389) when used outside the WordPress context.
*   Prevent the [Spacer block from being deselected](https://github.com/WordPress/gutenberg/pull/15884) when resized.
*   Remove the [word breaking from the Media & Text](https://github.com/WordPress/gutenberg/pull/15871) block.
*   [Keep the seconds value untouched](https://github.com/WordPress/gutenberg/pull/15495) when editing dates using the DateTimePicker component.
*   Fix [tooltips styles](https://github.com/WordPress/gutenberg/pull/16043) specificity.
*   Fix php errors happening when [calling get_current_screen](https://github.com/WordPress/gutenberg/pull/15983).

### Various

*   Introduce [useSelect](https://github.com/WordPress/gutenberg/pull/15737) and [useDispatch](https://github.com/WordPress/gutenberg/pull/15896) hooks to the data module.
*   Adding embedded [performance tests](https://github.com/WordPress/gutenberg/pull/14506) to the repository.
*   Support the [full plugin release process](https://github.com/WordPress/gutenberg/pull/15848) in the automated release tool.
*   Speed up the [packages build](https://github.com/WordPress/gutenberg/pull/15230) [tool](https://github.com/WordPress/gutenberg/pull/15920) script and the [Gutenberg plugin build](https://github.com/WordPress/gutenberg/pull/15226) config.
*   Extract media upload logic part into a new [@wordpress/media-utils package](https://github.com/WordPress/gutenberg/pull/15521).
*   Introduce [**Milestone-It** Github Action](https://github.com/WordPress/gutenberg/pull/15826) to auto-assign milestones to merged PRs.
*   Move the [transformStyles function](https://github.com/WordPress/gutenberg/pull/15572) to the block-editor package to use in the widgets screen.
*   Allow plugin authors to [override the default anchor attribute](https://github.com/WordPress/gutenberg/pull/15959) definition.
*   Add [overlayColor classname to cover blocks](https://github.com/WordPress/gutenberg/pull/15939) editor markup.
*   [Skip downloading chromium](https://github.com/WordPress/gutenberg/pull/15886) when building the plugin zip.
*   Add an [e2e test to check the heading colors](https://github.com/WordPress/gutenberg/pull/15784) [feature](https://github.com/WordPress/gutenberg/pull/15917).
*   [Lint the ESlint config file](https://github.com/WordPress/gutenberg/pull/15887) (meta).
*   Fix [i18n ESlint rules](https://github.com/WordPress/gutenberg/pull/15839) and use them in the [Gutenberg setup](https://github.com/WordPress/gutenberg/pull/15877).
*   Fix error in the [plugin release tool](https://github.com/WordPress/gutenberg/pull/15840) when switching branches.
*   Remove [unused stylesheet file](https://github.com/WordPress/gutenberg/pull/15845).
*   Improve the setup of the WordPress packages [package.json files](https://github.com/WordPress/gutenberg/pull/15879).
*   Remove the use of [popular plugins in e2e tests](https://github.com/WordPress/gutenberg/pull/15940).
*   Ignore [linting files located in build](https://github.com/WordPress/gutenberg/pull/15977) folders by default.
*   Add [default file patterns for the lint command](https://github.com/WordPress/gutenberg/pull/15890) of @wordpress/scripts.
*   Extract the [ServerSideRender](https://github.com/WordPress/gutenberg/pull/15635) component to an independent package.
*   Refactor the [HoverArea component as a React Hook](https://github.com/WordPress/gutenberg/pull/15038) instead.
*   Remove [useless dependency](https://github.com/WordPress/gutenberg/pull/16034) from the @wordpress/edit-post package.
*   [Deprecate components/selectors and actions](https://github.com/WordPress/gutenberg/pull/15770) moved to the editor package.
*   Update [browserslist](https://github.com/WordPress/gutenberg/pull/16066) dependency.

### Documentation

*   Document the [remaining APIs](https://github.com/WordPress/gutenberg/pull/15176) of the data module.
*   Add an [ESNext example](https://github.com/WordPress/gutenberg/pull/15828) to the i18n docs.
*   Fix inline docs and add tests for [color utils](https://github.com/WordPress/gutenberg/pull/15861).
*   Document missing [MenuItem prop](https://github.com/WordPress/gutenberg/pull/16061).
*   Typos and tweaks: [1](https://github.com/WordPress/gutenberg/pull/15835), [2](https://github.com/WordPress/gutenberg/pull/15836), [3](https://github.com/WordPress/gutenberg/pull/15831), [4](https://github.com/WordPress/gutenberg/pull/15697), [5](https://github.com/WordPress/gutenberg/pull/14841), [6](https://github.com/WordPress/gutenberg/pull/15717), [7](https://github.com/WordPress/gutenberg/pull/15942), [8](https://github.com/WordPress/gutenberg/pull/15950), [9](https://github.com/WordPress/gutenberg/pull/16059).

### Mobile

*   Fix [caret position](https://github.com/WordPress/gutenberg/pull/15833) when splitting text blocks.
*   Fix the initial value of the [“Open in New Tab” toggle](https://github.com/WordPress/gutenberg/pull/15812).
*   Fix [Video block crash](https://github.com/WordPress/gutenberg/pull/15857) on drawing on Android.
*   Fix caret position after [inline paste](https://github.com/WordPress/gutenberg/pull/15701).
*   [Focus the RichText component](https://github.com/WordPress/gutenberg/pull/15878) on block mount.
*   Port [KeyboardAvoidingView, KeyboardAwareFlatList and ReadableContentView](https://github.com/WordPress/gutenberg/pull/15913) to the @wordpress/components package.
*   Fix [press of Enter on post title](https://github.com/WordPress/gutenberg/pull/15944).
*   Move the [native unit tests](https://github.com/WordPress/gutenberg/pull/15589) to the Gutenberg repository.
*   Improve the [styling of the Quote block](https://github.com/WordPress/gutenberg/pull/15990).
*   Share [RichText line separator logic](https://github.com/WordPress/gutenberg/pull/15946) between web and native implementations.
*   Fix [Video block showing a black background](https://github.com/WordPress/gutenberg/pull/15991) when upload is in progress or upload has failed.
*   Allow passing a [style prop to the Icon](https://github.com/WordPress/gutenberg/pull/15778) component.
*   Enable [sound on the Video block](https://github.com/WordPress/gutenberg/pull/15997).
*   [Start playback immediately](https://github.com/WordPress/gutenberg/pull/15998) after video goes full screen.
*   Fix [mobile quotes](https://github.com/WordPress/gutenberg/pull/16013) insertion and removal of empty lines.
*   Move [unselected block accessibility handling](https://github.com/WordPress/gutenberg/pull/15225) to block-holder.
*   Make the [More block ready-only](https://github.com/WordPress/gutenberg/pull/16005).
*   Fix crash when [deleting all content of RichText](https://github.com/WordPress/gutenberg/pull/16018) based block.
*   Fix for [extra BR tag on Title field](https://github.com/WordPress/gutenberg/pull/16021) on Android.
*   Open [Video, Quote and More blocks](https://github.com/WordPress/gutenberg/pull/16031) to public.

