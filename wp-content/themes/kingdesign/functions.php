<?php

define('THEME_VERSION', '0.78');

/*
=========================================
	Add Async & Defer to Scripts
=========================================
*/
function add_async_forscript($url) {
	if (strpos($url, '#asyncload')===false)
		return $url;
	else if (is_admin())
		return str_replace('#asyncload', '', $url);
	else
		return str_replace('#asyncload', '', $url)."' async='async";
}
function add_defer_forscript( $url ) {
	if ( strpos( $url, '#deferload' ) === false ){
		return $url;
	} elseif ( is_admin() ){
		return str_replace( '#deferload', '', $url );
	} else {
		return trim( str_replace( '#deferload', '', $url ) ) . "' defer='defer";
	}
}
add_filter('clean_url', 'add_async_forscript', 11, 1);
add_filter('clean_url', 'add_defer_forscript', 11, 1);


/*
 =========================================
 	Enqueue scripts and styles
 =========================================
 */

function kingdesign_scripts() {
	// global
    wp_enqueue_style( 'kingdesign-style', get_template_directory_uri() . '/assets/css/global.min.css?v=', array(), THEME_VERSION );
    wp_enqueue_script( 'jQuery', "https://code.jquery.com/jquery-3.6.1.min.js#asyncload" , array(), '', true );
	wp_enqueue_script( 'global', get_template_directory_uri() . '/assets/js/global.min.js#deferload' , array(), '', true );

    // Page Specific
	wp_register_script( 'slickMin', get_template_directory_uri() . '/assets/js/third-party/slickMin.js#deferload', array(), '', true );
    wp_register_script( 'homepageSlick', get_template_directory_uri() . '/assets/js/pages/homepageSlick.js#deferload', array(), '', true );
	wp_register_script( 'aboutResize', get_template_directory_uri() . '/assets/js/pages/aboutResize.js#deferload', array(), '', true );
	wp_register_script( 'team', get_template_directory_uri() . '/assets/js/pages/team.js#deferload', array(), '', true );
	wp_register_script( 'recognition', get_template_directory_uri() . '/assets/js/pages/recognition.js#deferload', array(), '', true );
	wp_register_script( 'project', get_template_directory_uri() . '/assets/js/pages/project.js#deferload', array(), '', true );
	wp_register_script( 'contact', get_template_directory_uri() . '/assets/js/pages/contact.js#deferload', array(), '', true );
	wp_register_script( 'portfolio', get_template_directory_uri() . '/assets/js/pages/portfolio.js#deferload', array(), '', true );
	wp_register_script( 'inProgress', get_template_directory_uri() . '/assets/js/pages/inProgress.js#deferload', array(), '', true );

	function viewportHeight(){
		?>
			<script>
				const appHeight = () => {
    				const doc = document.documentElement
    				doc.style.setProperty('--app-height', `${window.innerHeight}px`)
				}
				window.addEventListener('resize', appHeight);
				appHeight();
			</script>
		<?php
	};
	add_action( 'wp_head', 'viewportHeight' );

	function GATag() {
		?>
		<!-- Google tag (gtag.js) -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=G-950KX81R99"></script>
		<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());

		gtag('config', 'G-950KX81R99');
		</script>
		<?php
	}
	add_action( 'wp_head', 'GATag' );

	function introAnimation() {
        echo '
		<div id="intro-animation" style="display:none;">
			<video width="240" height="270" autoplay muted playsinline>
				<source 
					src="/wp-content/themes/kingdesign/assets/images/Asher_intro.mp4" 
					type=\'video/mp4; codecs="hvc1"\'>
				<source 
					src="/wp-content/themes/kingdesign/assets/images/Asher_intro.webm" 
					type="video/webm">
			</video>
			<div class="background"></div>
		</div>
		<script>
			var first_visit = document.cookie.indexOf("firstTimeVisit=true"),
				first_slide_delay = 0;

			if (first_visit == -1) {
				// show intro
				document.cookie = "firstTimeVisit=true; SameSite=None; Secure";
				document.getElementById("intro-animation").style.display = "block";
				first_slide_delay = 3800;
				document.addEventListener("DOMContentLoaded", () => {
					document.getElementById("homepage-logo").classList.add("fadeIn");
				});
			}
		</script>
		<style>
			@keyframes scale-down-mobile {
				0% {
					top:50%;
					left:50%;
					transform: scale(1) translate3d(-50%,-50%,0);
				}
				100% {
					top:50%;
					left:50%;
					transform: scale(1) translate3d(-50%,-50%,0);
				}
			}

			@keyframes scale-down-desktop {
				0% {
					top:50%;
					left:50%;
					transform: scale(1) translate3d(-50%,-50%,0);
				}
				100% {
					top:50%;
					left:50%;
					transform: scale(1) translate3d(-50%,-50%,0);
				}
			}

			@keyframes fade-out {
				0% {
					opacity:1;
				}
				100% {
					opacity:0;
				}
			}
	   
			#intro-animation {
				position:fixed;
				top:0;
				left:0;
				width:100%;
				height:100%;
				z-index:98;
				animation:fade-out 1s ease-out 5.5s both;
				pointer-events:none;
			}

			#intro-animation .background {
				position:absolute;
				top:0;
				left:0;
				width:100%;
				height:100%;
				background:#A4B6C4;
				animation:fade-out 2s ease-out 4s both;
			}

			#intro-animation video {
				display:block;
				position:absolute;
				z-index:100;
				width: 40%;
				max-width: 15rem;
				transform-origin:top left;
				top:50%;
				left:50%;
				transform: scale(1) translate3d(-50%,-50%,0);
				//animation:fade-out 1.5s ease-out 4.5s both;
			}
		</style>';
    }

	function contactForm(){
		?>
			<!-- Begin Constant Contact Active Forms -->
			<script> var _ctct_m = "78d97d6f2678a9ea0df89c61f0974621"; </script>
			<script id="signupScript" src="//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js" async defer></script>
			<!-- End Constant Contact Active Forms -->
		<?php
	};

    if ( is_page('homepage') ) {
		add_action( 'wp_head', 'introAnimation' );
		wp_enqueue_script( 'slickMin' );
        wp_enqueue_script( 'homepageSlick' );
	}

    if ( is_page('about') ) {
        wp_enqueue_script( 'aboutResize' );
	}
	
	if ( is_page('team') ) {
		wp_enqueue_script( 'team' );
	}

	if ( is_singular('projects') ) {
		wp_enqueue_script( 'project' );
	}

	if ( is_page('news') ) {
		wp_enqueue_script( 'slickMin' );
        wp_enqueue_script( 'recognition' );
	}

	if ( is_page('contact') ) {
		wp_enqueue_script( 'contact' );
	}	

	if ( is_page('portfolio') || is_page('portfolio-2') ) {
		wp_enqueue_script( 'portfolio' );
		wp_enqueue_script('custom-lazy-load', get_template_directory_uri() . '/assets/js/third-party/custom-lazy-load.js', array(), '1.0', true);
	}

	if ( is_page('in-progress') ) {
		wp_enqueue_script( 'inProgress' );
	}

	if ( is_page('contact') ) {
		add_action('wp_footer', 'contactForm');
	}

	wp_enqueue_script( 'instantPage', "https://instant.page/5.1.1#deferload", array(), '', true );
}
add_action( 'wp_enqueue_scripts', 'kingdesign_scripts' );


/*
=========================================
    Add specific styles to Admin Projects
=========================================
*/
function load_admin_style() {
    global $pagenow;

    if ( 'post.php' === $pagenow && isset($_GET['post']) && 'projects' === get_post_type( $_GET['post'] ) ) {
        wp_enqueue_style( 'admin_css', get_template_directory_uri() . '/assets/css/projectsAdmin.css', false, '0.0.3' );
    }
}
add_action( 'admin_enqueue_scripts', 'load_admin_style' );


/*
=========================================
    ALLOW SVG UPLOADS
=========================================
*/
function idea_mime_types($mimes) {
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}
add_filter('upload_mimes', 'idea_mime_types');


/*
=========================================
    Remove Default Posts from admin
=========================================
*/
function remove_menu_pages_all() {
    remove_menu_page('edit.php');
}
add_action('admin_menu', 'remove_menu_pages_all', 999);


/*
=========================================
	Add custom image sizes
=========================================
*/
add_theme_support( 'post-thumbnails' );
add_image_size( 'landscape-small', 450, 9999 );
add_image_size( 'landscape-medium', 650, 9999 );
add_image_size( 'landscape-large', 750, 9999 );
add_image_size( 'landscape-larger', 900, 9999 );
add_image_size( 'xl', 1200, 9999 );
add_image_size( 'xxl', 2000, 9999 );
add_image_size( 'xxxl', 3000, 9999 );
add_image_size( 'portrait-small', 9999, 450);
add_image_size( 'portrait-medium', 9999, 650);
add_image_size( 'portrait-large', 9999, 750);
add_image_size( 'portrait_larger', 9999, 900 );

function my_image_sizes($size_names) {
	$new_sizes = array(
		'landscape-small' => __( 'Landscape Small' ),
		'landscape-medium' => __( 'Landscape Medium' ),
		'landscape-large' => __( 'Landscape Large' ),
		'landscape-larger' => __( 'Landscape Larger' ),
		'xl' => __( 'Extra Large' ),
		'xxl' => __( '2x Extra Large' ),
		'xxxl' => __( '3x Extra Large' ),
		'portrait-small' => __( 'Portrait Small' ),
		'portrait-medium' => __( 'Portrait Medium' ),
		'portrait-large' => __( 'Portrait Large' ),
		'portrait-larger' => __( 'Portrait Larger' ),
	);
	return array_merge( $size_names, $new_sizes );
}
add_filter('image_size_names_choose', 'my_image_sizes');
function kingdesign_content_image_sizes_attr( $sizes, $size ) {
	$width = $size[0];

	$sizes = '(min-width: 75rem) 60rem,
	(min-width: 50rem) 40rem,
	(min-width: 40rem) calc(100vw - 10rem),
	100vw"';

	return $sizes;
}
//add_filter( 'wp_calculate_image_sizes', 'kingdesign_content_image_sizes_attr', 10, 2 );

/*
=========================================
	Disable the emoji's
=========================================
*/
function disable_emojis() {
	remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
	remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
	remove_action( 'wp_print_styles', 'print_emoji_styles' );
	remove_action( 'admin_print_styles', 'print_emoji_styles' );
	remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
	remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );
	remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
	add_filter( 'tiny_mce_plugins', 'disable_emojis_tinymce' );
	add_filter( 'wp_resource_hints', 'disable_emojis_remove_dns_prefetch', 10, 2 );
}
add_action( 'init', 'disable_emojis' );
// Filter function used to remove the tinymce emoji plugin.
function disable_emojis_tinymce( $plugins ) {
	if ( is_array( $plugins ) ) {
		return array_diff( $plugins, array( 'wpemoji' ) );
	} else {
		return array();
	}
}
//Remove emoji CDN hostname from DNS prefetching hints.
function disable_emojis_remove_dns_prefetch( $urls, $relation_type ) {
	if ( 'dns-prefetch' == $relation_type ) {
		/** This filter is documented in wp-includes/formatting.php */
		$emoji_svg_url = apply_filters( 'emoji_svg_url', 'https://s.w.org/images/core/emoji/2/svg/' );

		$urls = array_diff( $urls, array( $emoji_svg_url ) );
	}
return $urls;
}


/*
=========================================
	Add Page Slug to Body class
=========================================
*/
add_filter( 'body_class', 'body_class_for_pages' );
/**
 * Adds a css class to the body element
 *
 * @param  array $classes the current body classes
 * @return array $classes modified classes
 */
function body_class_for_pages( $classes ) {

	if ( is_singular( 'page' ) ) {
		global $post;
		$classes[] = 'page-' . $post->post_name;
	}

	return $classes;
}


/*
=========================================
	Disable WP Scaled Images
=========================================
*/
add_filter( 'big_image_size_threshold', '__return_false' );


/*
=========================================
	Save ACF
=========================================
*/
add_filter('acf/settings/save_json', 'my_acf_json_save_point');

function my_acf_json_save_point( $path ) {
	// update path
	$path = get_template_directory() . '/acf-json';
	// return
	return $path;
}


/*
=========================================
	Remove JQuery migrate
=========================================
*/
function dequeue_jquery_migrate( $scripts ) {
	if ( ! is_admin() && ! empty( $scripts->registered['jquery'] ) ) {
		$scripts->registered['jquery']->deps = array_diff(
			$scripts->registered['jquery']->deps,
			[ 'jquery-migrate' ]
		);
	}
}
add_action( 'wp_default_scripts', 'dequeue_jquery_migrate' );


/*
=========================================
	Add Reusable Blocks to Admin
=========================================
*/
function be_reusable_blocks_admin_menu() {
    add_menu_page( 'Reusable Blocks', 'Reusable Blocks', 'edit_posts', 'edit.php?post_type=wp_block', '', 'dashicons-editor-table', 22 );
}
add_action( 'admin_menu', 'be_reusable_blocks_admin_menu' );



add_filter( 'wp_calculate_image_srcset', 'my_custom_image_srcset', 10, 5);

function my_custom_image_srcset($sources, $size_array, $image_src, $image_meta, $attachment_id) {

	//remove unwanted sizes from $source array
	if ( is_page('homepage') ) {
		$remove = ['150', '300', '350', '450', '622', '650', '750', '768', '800', '900', '1024', '1156', '1200'];
		$sources = array_diff_key($sources, array_flip($remove));
	}
	
	return $sources;
}


/*
=========================================
	Remove Block Patterns from Backend
=========================================
*/
remove_theme_support( 'core-block-patterns' );

/*
=========================================
    allow iframes and SVGs in ACF fields
=========================================
*/
add_filter( 'wp_kses_allowed_html', 'acf_add_allowed_iframe_tag', 10, 2 );
function acf_add_allowed_iframe_tag( $tags, $context ) {
    if ( $context === 'acf' ) {
        $tags['iframe'] = array(
            'src'             => true,
            'height'          => true,
            'width'           => true,
            'frameborder'     => true,
            'allowfullscreen' => true,
        );
        $tags['svg']  = array(
            'xmlns'       => true,
            'fill'        => true,
            'viewbox'     => true,
            'role'        => true,
            'aria-hidden' => true,
            'focusable'   => true,
        );
        $tags['path'] = array(
            'd'    => true,
            'fill' => true,
        );
    }

    return $tags;
}
/*
=========================================
    allow display style attribute in ACF fields
=========================================
*/
add_filter( 'safe_style_css', 'add_display_to_safe_css', 10, 1 );
function add_display_to_safe_css( $css_attributes ) {
    $css_attributes[] = 'display';

    return $css_attributes;
}
/*
=========================================
	disable fetchpriority
=========================================
*/
add_filter('wp_img_tag_add_fetchpriority_attr', function($add_attr, $context, $attachment_id) {
	error_log('wp_img_tag_add_fetchpriority_attr filter is running');
	return false;
}, 10, 3);