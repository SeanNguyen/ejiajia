var filterMaxHeight = 1000;
var filterMinHeight = 40;

var TEXT_EXPAND = '与 4 个筛选...';
var TEXT_COLLAPSE = '隐藏';

var phoneMaxWidth = 480;

function toggleFilter() {
	if($( '.selectedItemContainer' ).height() <= filterMinHeight) {
		$( '.selectedItemContainer' ).css({ "max-height": filterMaxHeight + 'px' });
		$( '#expandButton' ).text(TEXT_COLLAPSE);
	} else {
		if($( document ).width() <= phoneMaxWidth) {
			$( '.selectedItemContainer' ).css({ "max-height": 0 });
		} else {
			$( '.selectedItemContainer' ).css({ "max-height": filterMinHeight + 'px' });
		}
		$( '#expandButton' ).text(TEXT_EXPAND);	
	}
}