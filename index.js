
function updateRangeValue(){
//get value of range input
	var rangeValue = document.getElementById("myRange").value;
//display rangeValue in rangeValue span
	document.getElementById("rangeValue").innerHTML = rangeValue;
	document.getElementById("myNum").value = rangeValue;
};
function updateTextValue(){
	//grab number input value
	var numValue = document.getElementById("myNum").value;
	//display number value on range input and span
	document.getElementById("rangeValue").innerHTML = numValue;
	document.getElementById("myRange").value = numValue;

};

/*document.getElementById("myNum").addEventListener("onInput", function(){


*/