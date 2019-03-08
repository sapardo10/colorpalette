function randomPalette(){
	var base = 0
	var top = 71
	var color = Math.floor((Math.random() * top) + base);
	var list = new Array()
	list.push(hsvToRgb(color/359,1,1))
	for (var i = 0 ; i < 4; i++) {
		color = color+top	
		list.push(hsvToRgb(color/359,1,1))
	}
	paintCssRules(list)
	for (var i = 1; i <= list.length; i++) {
		var aux = i-1
		paintElement('color'+i, 'rgb(' + list[aux][0] + ',' + list[aux][1] + ',' + list[aux][2] + ')')
	}
}

function paintElement(elementId, color){
	var element = document.getElementById(elementId)
	element.style.background = color
}

function cleanState(){
	for (var i = 1 ; i <= 5; i++) {
		paintElement('color'+i, "white")
	}
	paintDefaultTextArea()
}

function paintCssRules(list){
	 var background = ".website-background{ color: #"+fullColorHex(Math.floor(list[0][0]),Math.floor(list[0][1]),Math.floor(list[0][2]))+";}"
	 var text = ".element-text{ color: #"+fullColorHex(Math.floor(list[1][0]),Math.floor(list[1][1]),Math.floor(list[1][2]))+";}"
	 var border = ".element-border{ border-color: #"+fullColorHex(Math.floor(list[2][0]),Math.floor(list[2][1]),Math.floor(list[2][2]))+";}"
	 var elementBackground = ".element-background{ background-color: #"+fullColorHex(Math.floor(list[3][0]),Math.floor(list[3][1]),Math.floor(list[3][2]))+";}"
	 var header = ".header{ color: #"+fullColorHex(Math.floor(list[4][0]),Math.floor(list[4][1]),Math.floor(list[4][2]))+";}"
	 var final = "\n" + background + "\n \n" + text + "\n \n" + border + "\n \n" + elementBackground + "\n \n" + header + "\n \n"
	 var textArea = document.getElementById('css-rules')
	 textArea.value = final
}

function paintDefaultTextArea(){
	var background = ".website-background{ color: #FFFFFF;}"
	 var text = ".element-text{ color: #FFFFFF;}"
	 var border = ".element-border{ border-color: #FFFFFF;}"
	 var elementBackground = ".element-background{ background-color: #FFFFFF;}"
	 var header = ".header{ color: #FFFFFF;}"
	 var final = "\n" + background + "\n \n" + text + "\n \n" + border + "\n \n" + elementBackground + "\n \n" + header + "\n \n"
	var textArea = document.getElementById('css-rules')
	 textArea.value = final

}

//Sacado de https://campushippo.com/lessons/how-to-convert-rgb-colors-to-hexadecimal-with-javascript-78219fdb
function rgbToHex (rgb) { 
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
}

function fullColorHex(r,g,b) {   
  var red = rgbToHex(r);
  var green = rgbToHex(g);
  var blue = rgbToHex(b);
  return red+green+blue;
}