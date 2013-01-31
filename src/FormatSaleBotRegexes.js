/**
 * Format Salebot regexes on [[w:User:Salebot/Config]]
 * @author: [[User:Helder.wiki]]
 * @tracking: [[Special:GlobalUsage/User:Helder.wiki/Tools/FormatSaleBotRegexes.js]] ([[File:User:Helder.wiki/Tools/FormatSaleBotRegexes.js]])
 */
/*jslint browser: true, white: true, regexp: true */
/*global mediaWiki, jQuery*/
( function ( mw, $ ) {
'use strict';

function formatSaleBotRegexes(){
	var color = {
			0 : 'transparent',
			5 : '#CFC',
			10 : '#6F6',
			15 : '#FFC',
			20 : '#FCA',
			25 : '#F99',
			30 : '#F66'
		};
	$('#mw-content-text').find('pre').each(function(){
		var $pre = $( this );
		$pre.html(
			$pre.html().replace(
				// Ver linha 137 de [https://fisheye.toolserver.org/browse/gribeco/salebot2/branches/utf8/vandalism.pl?r=152]
				/\s*([\-+#]?\d+)\s*(\/.+\/) *(#.+)?/g,
				function( match, p1 /* , p2, p3 */ ){
					var level = parseInt( p1, 10 );
					if ( isNaN(level) ) {
						return match;
					}
					level = Math.abs( level );
					level = level - (level % 5);
					return '<span style="background-color:' +
						color[ level ] + ';">' +
						match + '</span>';
				}
			)
		);
	});
}

if ( mw.config.get( 'wgTitle' ) === 'Salebot/Config' && mw.config.get( 'wgAction' ) === 'view') {
	$(formatSaleBotRegexes);
}

}( mediaWiki, jQuery ) );