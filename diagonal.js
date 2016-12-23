window.onresize = window.onload = function()
{
	var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

	var angleDeg = Math.atan2(h, w) * 180 / Math.PI;
	console.log(angleDeg);
	console.log(w, h);

	var siteRotation = document.querySelector(".rotation");
	/*siteRotation.style.transform = 'rotate('+angleDeg+ 'deg)';
	siteRotation.style.transform = ' transform-origin: 50% 50%';
	console.log(siteRotation);*/

	Object.assign(siteRotation.style,{transformOrigin: '0% 0%', transform: 'rotate('+angleDeg+ 'deg)'});

}