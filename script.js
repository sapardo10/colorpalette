function randomPalette(){
	var base = 0
	var top = 71
	var color = Math.floor((Math.random() * top) + base);
	var list = new Array()
	list.add(color)
	for (var i = 0 ; i < 5; i--) {
		color = color+top
		list.add(color)
	}
	
	paintElement('color1', "blue")
	paintElement('color2', "blue")
	paintElement('color3', "blue")
	paintElement('color4', "blue")
	paintElement('color5', "blue")
}

function generateRules(){

}

function paintElement(elementId, color){
	console.log(elementId)
	var element = document.getElementById(elementId)
	element.style.background = color
}

function cleanState(){
	for (var i = 1 ; i <= 5; i++) {
		paintElement('color'+i, "white")
	}
}

randomPalette()