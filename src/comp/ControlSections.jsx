import arrowTop from "./../resources/arrow-top.svg";
import arrowPrev from "./../resources/arrow-prev.svg";
import arrowNext from "./../resources/arrow-next.svg";
import arrowBottom from "./../resources/arrow-bottom.svg";

window.onscroll = () => {
	const MenuHomePos = document.getElementById("menuhome").offsetTop;
	const MenuAboutPos = document.getElementById("menuabout").offsetTop;
	const MenuFormExpPos = document.getElementById("menuformexp").offsetTop;
	const MenuContactPos = document.getElementById("menucontact").offsetTop;
	const buttomTop = document.getElementById("controlsections__top");
	const buttomPrev = document.getElementById("controlsections__prev");
	const buttomNext = document.getElementById("controlsections__next");
	const buttomBottom = document.getElementById("controlsections__bottom");
	let WindowPos = window.scrollY;

	switch (true) {
		case WindowPos >= MenuHomePos && WindowPos < MenuAboutPos:
			buttomPrev.href = "#menuhome";
			buttomNext.href = "#menuabout";
			break;
		case WindowPos >= MenuAboutPos && WindowPos < MenuFormExpPos:
			buttomPrev.href = "#menuhome";
			buttomNext.href = "#menuformexp";
			break;
		case WindowPos >= MenuFormExpPos && WindowPos < MenuContactPos:
			buttomPrev.href = "#menuabout";
			buttomNext.href = "#menucontact";
			break;
		case WindowPos >= MenuContactPos:
			buttomPrev.href = "#menuformexp";
			buttomNext.href = "#menucontact";
			break;
		default:
			break;
	}

	switch (true) {
		case WindowPos >= MenuHomePos && WindowPos < MenuAboutPos * (1 / 4):
			buttomTop.classList.add("hidden");
			buttomPrev.classList.add("hidden");
			break;
		case WindowPos >= MenuAboutPos * (1 / 4) && WindowPos < MenuContactPos - MenuAboutPos * (1 / 4):
			buttomTop.classList.remove("hidden");
			buttomPrev.classList.remove("hidden");
			buttomNext.classList.remove("hidden");
			buttomBottom.classList.remove("hidden");
			break;
		case WindowPos >= MenuContactPos - MenuAboutPos * (1 / 4):
			buttomNext.classList.add("hidden");
			buttomBottom.classList.add("hidden");
			break;
		default:
			break;
	}
};

function ControlSections() {
	return (
		<div id="controlsections">
			<a id="controlsections__top" className="controlsections__item hidden" href="#menuhome">
				<img className="controlsections__img" src={arrowTop} alt="" />
			</a>
			<a id="controlsections__prev" className="controlsections__item hidden" href="#menuhome">
				<img className="controlsections__img" src={arrowPrev} alt="" />
			</a>
			<a id="controlsections__next" className="controlsections__item" href="#menuabout">
				<img className="controlsections__img" src={arrowNext} alt="" />
			</a>
			<a id="controlsections__bottom" className="controlsections__item" href="#menucontact">
				<img className="controlsections__img" src={arrowBottom} alt="" />
			</a>
		</div>
	);
}

export default ControlSections;
