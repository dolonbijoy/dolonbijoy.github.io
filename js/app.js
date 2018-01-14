jQuery(document).ready(function($) {

	$(window).load(function() {
		$('.loader').fadeOut(600);
	});


	// Heart Animations
	var love = setInterval(function() {

		var r_num = Math.floor(Math.random() * 40) + 1;
		var r_size = Math.floor(Math.random() * 65) + 10;
		var r_left = Math.floor(Math.random() * 100) + 1;
		var r_bg = Math.floor(Math.random() * 25) + 100;
		var r_time = Math.floor(Math.random() * 20) + 5;

		$('.bg_heart').append("<div class='heart' style='width:" + r_size + "px;height:" + r_size + "px;left:" + r_left + "%;background:rgba(255," + (r_bg - 25) + "," + r_bg + ",1);-webkit-animation:love " + r_time + "s ease;-moz-animation:love " + r_time + "s ease;-ms-animation:love " + r_time + "s ease;animation:love " + r_time + "s ease'></div>");

		$('.bg_heart').append("<div class='heart' style='width:" + (r_size - 10) + "px;height:" + (r_size - 10) + "px;left:" + (r_left + r_num) + "%;background:rgba(255," + (r_bg - 25) + "," + (r_bg + 25) + ",1);-webkit-animation:love " + (r_time + 5) + "s ease;-moz-animation:love " + (r_time + 5) + "s ease;-ms-animation:love " + (r_time + 5) + "s ease;animation:love " + (r_time + 5) + "s ease'></div>");

		$('.heart').each(function() {
			var top = $(this).css("top").replace(/[^-\d\.]/g, '');
			var width = $(this).css("width").replace(/[^-\d\.]/g, '');
			if (top <= -100 || width >= 150) {
				$(this).detach();
			}
		});

	}, 500);


	// Audio Play In Background
	$("#jquery_jplayer_1").jPlayer( {
		ready: function() { // The $.jPlayer.event.ready event
			$(this).jPlayer("setMedia", { // Set the media
				// title: "Bubble",
				mp3: "audio/music.mp3"
			}).jPlayer("play"); // Attempt to auto play the media
		},
		ended: function() { // The $.jPlayer.event.ended event
			$(this).jPlayer("play"); // Repeat the media
		},
		swfPath: "../../dist/jplayer",
		supplied: "mp3",
		wmode: "window",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true,
		remainingDuration: true,
		toggleDuration: true
	});


	var note = $('#note'),
		ts = new Date(2018, 1, 1).getTime()+(23*60*60*1000),
		newYear = true;
	
	if((new Date()) > ts){
		// The new year is here! Count towards something else.
		// Notice the *1000 at the end - time must be in milliseconds
		ts = (new Date()).getTime() + 23*60*60*1000;
		newYear = false;
	}
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			message += days + " day" + ( days==1 ? '':'s' ) + ", ";
			message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
			message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
			message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
			
			// if(newYear){
			// 	message += "left until the new year!";
			// }
			// else {
			// 	message += "left to 10 days from now!";
			// }
			
			note.html(message);
		}
	});

});