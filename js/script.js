var stuff = [];

function enterMessage() {
	var yourName = document.getElementById("name").value,
		yourMessage =document.getElementById("message").value,
		h2 = document.createElement("h2"),
		p = document.createElement("p");
	h2.innerHTML = yourName;
	p.innerHTML = yourMessage;
	document.getElementById("division").appendChild(h2)
	document.getElementById("division").appendChild(p)
}
