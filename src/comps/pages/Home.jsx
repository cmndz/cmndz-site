import TempHome from "../templates/TempHome.jsx";
import CV from "../../resources/CV-202210.pdf";

const CONTROLMUSIC_CANTELEMENTS = 180;
const TEXTBOXWBUTTONS_TEXT = ["wwKORE", "(Carlos Méndez)", "Desarrollador Web Front End"];
const TEXTBOXWBUTTONS_LINKS = ["Contact", CV];

export default function Home() {
	return (
		<TempHome
			constrolmusic_cantelements={CONTROLMUSIC_CANTELEMENTS}
			textboxwbuttons_text={TEXTBOXWBUTTONS_TEXT}
			textboxwbuttons_links={TEXTBOXWBUTTONS_LINKS}
		/>
	);
}
