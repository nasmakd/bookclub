$(window).on('mousewheel DOMMouseScroll', function (e) {
	var delta = 0;
	if(!$('#menu').hasClass('on')){
		if (window.event.wheelDelta) {
			delta = window.event.wheelDelta / 120; 
			if (window.opera) {
				delta = -delta;
			}
		} else if (window.event.detail) {
			delta = -window.event.detail / 3; 
		}
		
		if (delta < 0) {
			$('#dock_bar').css({"transform": "translate(-50%, 0)"});
		} else {
			$('#dock_bar').css({"transform": "translate(-50%, 100%)"});
		}
	}
});

window.addEventListener('scroll', ()=>{
	let scrlY = window.scrollY;
	if(scrlY === 0){
		$('#dock_bar').removeClass("on");

	}else{
		$('#dock_bar').addClass("on");
	}
})


$('.menu_btn').click(function(){
	$('#menu').addClass('on');
	$('body').css({'overflow': 'hidden'});
	$('#dock_bar').css({'z-index': -1})

});
$('.close_btn').click(function(){
	$('#menu').removeClass('on');
	$('body').css({'overflow': 'auto'});
	$('#dock_bar').css({'z-index': 100})
})