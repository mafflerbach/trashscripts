



function timeToSec(timeStr) {
	var foo = timeStr.split(":").reverse();
	sec = parseInt(foo[0]);
	
	for (var i = 0; i < foo.length; i++) {
		if (i == 1) {
			minutes = parseInt(foo[1])*60;
			sec = sec + minutes;
		}
		
		if (i == 2) {
			hours = parseInt(foo[2])*60*60;
			sec = sec + hours;		
		}
	}
	
	return sec;
}

var start = 0;
lable = "";
$.each($('.tracklist-row'), function() {
	title = $(this).find('.name span').text();
	duration = $(this).find('.tracklist-duration span').text();
	durationSec = timeToSec(duration);
	end = start + durationSec;
	lable += start +"\t"+ end +"\t"+ title+"\n";
	start = end;
})

console.log(lable)


