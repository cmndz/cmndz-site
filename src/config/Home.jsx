import TempHome from "../components/pages/TempHome.jsx";
import CV from "../static/docs/CV-202210.pdf";

const CONTROLMUSIC_CANTELEMENTS = 180;
const TEXTBOXWBUTTONS_TEXT = ["KORE", "( Carlos Méndez )", "Desarrollador Web Front End"];
const TEXTBOXWBUTTONS_LINKS = ["Contact", CV];

export default function Home({ play, setPlay }) {
	return (
		<TempHome
			constrolmusic_cantelements={CONTROLMUSIC_CANTELEMENTS}
			textboxwbuttons_text={TEXTBOXWBUTTONS_TEXT}
			textboxwbuttons_links={TEXTBOXWBUTTONS_LINKS}
			play={play}
			setPlay={setPlay}
		/>
	);
}
