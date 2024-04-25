const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener("click", ()=> {
	list.classList.toggle("active");
	if(!list.classList.contains("active")) {
		button.setAttribute("aria-expanded", "false");
		list.setAttribute("inert", "");
	} else {
		button.setAttribute("aria-expanded", "true");
		list.removeAttribute("inert");
	}
})
