//changing color to the picked color from colorPicker
function changeColor() {
	const color = document.getElementById("colorPicker").value;
	this.style.background = color;
}


// When size is submitted by the user, call makeGrid()
function makeGrid() {


	const gridHeight = document.getElementById("input_height").value;
	const gridWidth = document.getElementById("input_width").value;
	const pixelCanvas = document.getElementById("pixel_canvas");
	pixelCanvas.innerText="";
	
	for(let height=0; height<gridHeight; height++) {
		const row = pixelCanvas.insertRow();
		for(let width=0; width<gridWidth; width++)
		{
			
			const cell = row.insertCell();
			cell.onclick = changeColor;
		}
		
	}

	event.preventDefault();
}


