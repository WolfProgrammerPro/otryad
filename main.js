const joinButton = document.getElementById("join")
const infoButton = document.getElementById("info")
const tiktokButton = document.getElementById("tiktok")
joinButton.onclick = function () {
	CreateButton("https://discord.gg/B4aA9qCv6a", true)
}
infoButton.onclick = function () {
	CreateButton("info.html", false)
}
tiktokButton.onclick = function () {
	CreateButton("https://www.tiktok.com/@za1ha2285", true)
}


function CreateButton(link, onNewWindow){
	const a = document.createElement("a")
	a.setAttribute("href", link)
	if (onNewWindow)
	a.setAttribute("target", "_blank")
	a.click()
}
