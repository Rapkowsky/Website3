document.addEventListener("DOMContentLoaded", function () {
	const navElement = document.querySelector(".navbar");
	const allNavItems = document.querySelectorAll(".nav-link");
	const navListCollapse = document.querySelector(".navbar-collapse");

	function addShadow() {
		if (window.scrollY >= 10) {
			navElement.classList.add("shadow-bg");
		} else navElement.classList.remove("shadow-bg");
	}

	allNavItems.forEach((item) =>
		item.addEventListener("click", () => {
			navListCollapse.classList.remove("show");
		})
	);

	window.addEventListener("scroll", addShadow);


});
