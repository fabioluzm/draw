const svg = d3.select('#svg');
let drawing = false;

let stroke_color = document.querySelector("#stroke_color");

stroke_color.onchange = (evt) => {
	stroke_color = evt.target.value;
	console.log(stroke_color);
}

let stroke_size = document.querySelector("#stroke_size");

stroke_size.onchange = (evt) => {
	stroke_size = evt.target.value;
	console.log(stroke_size);
}
console.log(stroke_size.value);


function draw_point() {
	if (!drawing)
		return;

	const coordinates = d3.mouse(this);

	svg.append('circle')
		.attr('cx', coordinates[0])
		.attr('cy', coordinates[1])
		.attr('r', `${stroke_size}`)
		.style('fill', `${stroke_color}`);
}

svg.on('mousedown', () => {
	drawing = true;
});

svg.on('mouseup', () => {
	drawing = false;
});

svg.on('mousemove', draw_point);