function wbh_adaptive_section(){
	let section = document.getElementById('home');
	let elemWidth = section.clientWidth;
	let elemHeight = elemWidth / 2;

	
	if (elemWidth > 752) {section.style.height = elemHeight + 'px';}
}
wbh_adaptive_section();
window.onresize = wbh_adaptive_section;

function modalThanks(){
	var modalThanks = $('#modalthanks');

	modalThanks.show(200, function(){
		modalThanks.delay(2000).hide(600);
	});
}

$(document).ready(function() {

    $(".formsend").submit(function(){
        $.ajax({
            type: "POST",
            url: "../send.php",
            data: $(this).serialize()
        }).done(function(){
        	$("input").val("");
            modalThanks();
        });
        return false;
    });
});