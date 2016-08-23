$(document).ready(function () {

	//word cloud - random colors and font-sizes	
	var cloudColors = ['#7f7f7f', '#72c2d1', '#0a8ca3', '#969696'];
	var cloudFsize = [ '1rem', '1.3rem', '1.6rem', '2rem'];
    var i = 0;
    var j = 0;
    $('.history span').each(function() {
    	i = (i + 1) % cloudColors.length;
		j = (j + 1) % cloudFsize.length;
        $(this).css('color', cloudColors[i]);
        $(this).css('font-size', cloudFsize[i]);
    });

}); 