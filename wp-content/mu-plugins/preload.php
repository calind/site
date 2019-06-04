<?php

add_action( 'send_headers', 'my_headers' );
function my_headers() {
/*
	$style = get_stylesheet_uri();
	header("Link: <$style>; as=style; rel=preload");
*/
//	header("Link: <https://calin.plcdn.com>; rel=preconnect; crossorigin");
}
