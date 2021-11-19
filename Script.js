const burger = document.getElementById("img-burger");
const topMenu = document.getElementById("top-menu");
const backDrop = document.getElementById("backdrop");

burger.addEventListener("click", () => {
	source = burger.className;
	if (source === "burger") {
		burger.src = "images/icon-close.svg";
	} else {
		burger.src = "images/icon-hamburger.svg";
	}
	topMenu.classList.toggle("hide");
	backDrop.classList.toggle("hide");
	burger.classList.toggle("burger");
});
