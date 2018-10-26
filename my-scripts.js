// set count
if(localStorage.getItem("count") == null) {
	localStorage.setItem("count", 0)
}

// update count
function update() {
	document.getElementById("count").innerHTML = localStorage.getItem("count");
}

update();

// increment count
function plusOne() {
	localStorage.setItem("count", Number(localStorage.getItem("count")) + 1);
	update();
}

// reset count
function reset() {
	if (confirm("Reset the counter?")) {
		localStorage.setItem("count", 0);
		update();
	}
}