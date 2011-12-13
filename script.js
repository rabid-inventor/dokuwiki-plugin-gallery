//<!-- Add jQuery library -->
//<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js"></script>

//<!-- Optionaly include easing and/or mousewheel plugins -->
//<script type="text/javascript" src="/fancybox/jquery.easing-1.3.pack.js"></script>
/* DOKUWIKI:include_once _fancybox/jquery.easing-1.3.pack.js */
//<script type="text/javascript" src="/fancybox/jquery.mousewheel-3.0.6.pack.js"></script>
/* DOKUWIKI:include_once _fancybox/query.mousewheel-3.0.6.pack.js */

//<!-- Add fancyBox -->
//<link rel="stylesheet" href="/fancybox/jquery.fancybox.css?v=2.0.3" type="text/css" media="screen" />
//<script type="text/javascript" src="/fancybox/jquery.fancybox.pack.js?v=2.0.3"></script>
/* DOKUWIKI:include_once fancybox/jquery.fancybox.pack.js */

//<!-- Optionaly include button and/or thumbnail helpers -->
//<link rel="stylesheet" href="/fancybox/helpers/jquery.fancybox-buttons.css?v=2.0.3" type="text/css" media="screen" />
//<script type="text/javascript" src="/fancybox/helpers/jquery.fancybox-buttons.js?v=2.0.3"></script>
/* DOKUWIKI:include_once _fancybox/jquery.fancybox-buttons.js */

//<link rel="stylesheet" href="/fancybox/helpers/jquery.fancybox-thumbs.css?v=2.0.3" type="text/css" media="screen" />
//<script type="text/javascript" src="/fancybox/helpers/jquery.fancybox-thumbs.js?v=2.0.3"></script>
/* DOKUWIKI:include_once _fancybox/jquery.fancybox-thumbs.js */

/* DOKUWIKI:include_once jquery.cycle.all.js */

/* DOKUWIKI:include_once lightbox.js */


jQuery(document).ready(function() {
		jQuery(".fancybox").fancybox();
		jQuery(".fancyslideshow").fancybox({autoPlay:true, fitToView:true});
		jQuery(".cyclepics").cycle({ fx:'fade', speed:  2500  });		
	});



