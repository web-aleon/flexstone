function wbh_adaptive_section(){
	let section = document.getElementById('home');
	let elemWidth = section.clientWidth;
	let elemHeight = elemWidth / 2;

	
	if (elemWidth > 752) {section.style.height = elemHeight + 'px';}
}
wbh_adaptive_section();
window.onresize = wbh_adaptive_section;