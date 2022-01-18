document.addEventListener("DOMContentLoaded", function () {
	const navElement = document.querySelector(".navbar");


	function addShadow() {
		if (window.scrollY >= 150) {
			navElement.classList.add("shadow-bg");
		} else navElement.classList.remove("shadow-bg");
	}
	window.addEventListener("scroll", addShadow);
});
