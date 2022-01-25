$(".team-carousel").slick({
	arrows: false,
	infinite: true,
	autoplay: true,
	autoplaySpeed: 1500,
	slidesToShow: 1,
	slidesToScroll: 1,
	mobileFirst: true,
	responsive: [
		{
			breakpoint: 767,
			settings: { slidesToShow: 2 },
		},
		{
			breakpoint: 992,
			settings: { slidesToShow: 3 },
		},
	],
});
