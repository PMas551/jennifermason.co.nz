// main pop-up
	function mainWin(url) {
		var x = screen.width;
		var y = screen.height;
		var width = 780;
		var height = 500;
		var top = parseInt( ( y - height ) / 2 ) ;
		var left = parseInt( ( x - width  ) / 2 ) ;
		var  props = "toolbars=yes,location=no,status=no,scrollbars=auto,resizable=yes,width=" + width + ",height=" + height + ",left=" + left + ",top=" + top;
		window.open(url,'newWin',props);
	}

// pop-up
	function portfolioWinV(url) {
		var x = screen.width;
		var y = screen.height;
		var width = 375;
		var height = 480;
		var top = parseInt( ( y - height ) / 2 ) ;
		var left = parseInt( ( x - width  ) / 2 ) ;
		var  props = "toolbars=yes,location=no,status=no,scrollbars=auto,resizable=yes,width=" + width + ",height=" + height + ",left=" + left + ",top=" + top;
		window.open(url,'newWin2',props);
	}

// pop-up
	function portfolioWinH(url) {
		var x = screen.width;
		var y = screen.height;
		var width = 600;
		var height = 450;
		var top = parseInt( ( y - height ) / 2 ) ;
		var left = parseInt( ( x - width  ) / 2 ) ;
		var  props = "toolbars=yes,location=no,status=no,scrollbars=auto,resizable=yes,width=" + width + ",height=" + height + ",left=" + left + ",top=" + top;
		window.open(url,'newWin2',props);
	}


// pop-up
	function portfolioWinFull(url) {
		var x = screen.width;
		var y = screen.height;
		var  props = "toolbars=yes,location=no,status=no,scrollbars=auto,resizable=yes,width=" + x + ",height=" + y + ",left=" + 0 + ",top=" + 0;
		window.open(url,'newWin3',props);
	}


