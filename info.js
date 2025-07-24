const backButton = document.getElementById("back")
backButton.onclick = function () {
	CreateButton("index.html", false)
}

function CreateButton(link, onNewWindow){
	const a = document.createElement("a")
	a.setAttribute("href", link)
	if (onNewWindow)
	a.setAttribute("target", "_blank")
	a.click()
}