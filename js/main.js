"use strict";

const main = () => {
	console.log("function [MAIN] executing...");
	console.log("function [MAIN] finished.");
	const mobileNavigationControl           = document.getElementById('mobile-navigation-control');
	const mobileNavigationControlLabel      = document.getElementById('mobile-navigation-control-label');
	const mobileNavigationControlLabelText  = document.getElementById('mobile-navigation-control-label-text');
	
	mobileNavigationControl.addEventListener("change", function () {
		if (this.checked === true) {
			mobileNavigationControlLabelText.innerHTML = "Close";
		} else {
			mobileNavigationControlLabelText.innerHTML = "Menu";
		}
	});
};
window.addEventListener('DOMContentLoaded', (event) => {
	console.log('DOM fully loaded and parsed.');
	console.log("about to call function [MAIN] : ");
	main();
});
