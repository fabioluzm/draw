const svg = d3.select('#svg');
let drawing = false;

let stroke_color = document.querySelector("#stroke_color");

let color = stroke_color.value;
console.log('Starter color: ', color);

stroke_color.onchange = (evt) => {
	color = evt.target.value;
	console.log('Current color: ', color);
}

let stroke_size = document.querySelector("#stroke_size");

let size = stroke_size.value;
console.log('Starter stroke: ', size);

stroke_size.onchange = (evt) => {
	size = evt.target.value;
	console.log('Current stroke: ', size);
}


function draw_point() {
	if (!drawing)
		return;

	const coordinates = d3.mouse(this);

	svg.append('circle')
		.attr('cx', coordinates[0])
		.attr('cy', coordinates[1])
		.attr('r', `${size}`)
		.style('fill', `${color}`);
}

svg.on('mousedown', () => {
	drawing = true;
});

svg.on('mouseup', () => {
	drawing = false;
});

svg.on('mousemove', draw_point);