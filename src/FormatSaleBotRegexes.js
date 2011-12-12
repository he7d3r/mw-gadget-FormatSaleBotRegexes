if ( mw.config.get( 'wgTitle' ) === 'Salebot/Config' && mw.config.get( 'wgAction' ) == 'view') {
    $(function(){
		var color = {
			0 : 'transparent',
			5 : '#CFC',
			10 : '#6F6',
			15 : '#FFC',
			20 : '#FCA',
			25 : '#F99',
			30 : '#F66'
		};
		$('#bodyContent').find('pre').html(function(i,html){
			return html.replace(
				// Ver linha 137 de [https://fisheye.toolserver.org/browse/gribeco/salebot2/branches/utf8/vandalism.pl?r=152]
				/\s*([\-+#]?\d+)\s*(\/.+\/) *(#.+)?/g,
				function(match, p1, p2, p3){
					var level = parseInt( p1, 10 );
					if ( isNaN(level) ) {
						return match;
					} else {
						level = Math.abs( level );
						level = level - (level % 5);
					}
					return '<span style="background-color:' + color[ level] + ';">'
						+ match + '</span>';
				}
			);
		});
	});
}
