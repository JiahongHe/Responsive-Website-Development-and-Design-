function navigate(direction) {
	var direct = 0;
	if (direction === "left") {
		direct = -1;
	}
	if (direction === "right") {
		direct = 1;
	}
	var position = $('#bigImage').attr('position');
	postion += direct;
	if (position > 3) {
		position -= 4;
	}
	if (position < 0) {
		postion += 4;
	}
	switch(position) {
		case 0:
		    $('#bigImage').attr('src', 'pics/img_6.jpg');
		    break;
		case 1:
		    $('#bigImage').attr('src', 'pics/img_7.jpg');
		    break;
		case 2:
		    $('#bigImage').attr('src', 'pics/img_8.jpg');
		    break;
		case 3:
		    $('#bigImage').attr('src', 'pics/img_9.jpg');
		    break;
		default:
		    break;
	}

}

function mas() {
	alert("not yet developed function");
}