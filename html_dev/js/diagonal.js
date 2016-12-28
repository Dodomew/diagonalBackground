window.onresize = window.onload = function()
{
	var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	var angleDeg = Math.atan2(h, w) * 180 / Math.PI;
	var siteRotation = document.querySelector(".rotation");
	var minusRotation = document.querySelectorAll(".minusRotation");

	Object.assign(siteRotation.style,{transformOrigin: '0% 0%', transform: 'rotate('+angleDeg+ 'deg)'});

	var i = minusRotation.length;
	while (i--) 
	{
    	//minusRotation[i].setAttribute("style", "transformOrigin: '0% 0%', transform: 'rotate('+(angleDeg * -1)+ 'deg)'}");
    	//minusRotation[i].style,{transformOrigin: '0% 0%', transform: 'rotate('+(angleDeg * -1)+ 'deg)'};
    	minusRotation[i].style.transform = 'rotate('+(angleDeg * -1)+ 'deg)';
	}
}