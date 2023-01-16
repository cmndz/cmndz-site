import styled from "styled-components";
import imgHTML from "./../../resources/know-html.svg";
import imgCSS from "./../../resources/know-css.svg";
import imgJs from "./../../resources/know-js.svg";
import imgReact from "./../../resources/know-react.svg";
import imgSass from "./../../resources/know-sass.svg";
import imgC from "./../../resources/know-c.svg";
import imgPython from "./../../resources/know-python.svg";
import imgVB from "./../../resources/know-vb.svg";
import imgSQL from "./../../resources/know-sqlserver.svg";
import imgGit from "./../../resources/know-git.svg";
import imgVB6 from "./../../resources/know-vbS.svg";
import imgVS from "./../../resources/know-vs.svg";
import imgVSCode from "./../../resources/know-vscode.svg";
import imgIllustrator from "./../../resources/know-ai.svg";
import imgPhotoshop from "./../../resources/know-ps.svg";
import imgFigma from "./../../resources/know-figma.svg";
import imgWord from "./../../resources/know-doc.svg";
import imgExcel from "./../../resources/know-xls.svg";
import imgWork from "./../../resources/work.svg";
import imgEduc from "./../../resources/education.svg";
import imgLocat from "./../../resources/location.svg";
import imgClose from "./../../resources/menu-expand.svg";
import imgCollapse from "./../../resources/menu-collapse.svg";
import imgLoader from "./../../resources/loader.svg";
import imgLogo from "./../../resources/logo.svg";
import imgLogoW from "./../../resources/logo-w.svg";

import imgLinkedin from "./../../resources/social-linkedin.svg";
import imgGithub from "./../../resources/social-github.svg";

const Wrapper = styled.img`
	&.min {
		max-width: 25px;
		max-height: 25px;
		width: 25px;
	}
	&.med {
		max-width: 45px;
		max-height: 45px;
		width: 45px;
	}
	&.max {
		max-width: 100px;
		max-height: 100px;
		width: 100px;
	}
	&.maxmax {
		max-width: 150px;
		max-height: 150px;
		width: 150px;
	}
`;

export default function Icon({ type, size = "min", alt = "" }) {
	let src;
	switch (type) {
		case "HTML":
			src = imgHTML;
			break;
		case "CSS":
			src = imgCSS;
			break;
		case "JS":
			src = imgJs;
			break;
		case "REACT":
			src = imgReact;
			break;
		case "SASS":
			src = imgSass;
			break;
		case "C":
			src = imgC;
			break;
		case "PYTHON":
			src = imgPython;
			break;
		case "VB":
			src = imgVB;
			break;
		case "TSQL":
			src = imgSQL;
			break;
		case "GIT":
			src = imgGit;
			break;
		case "VB6":
			src = imgVB6;
			break;
		case "VS":
			src = imgVS;
			break;
		case "VSC":
			src = imgVSCode;
			break;
		case "SQLS":
			src = imgSQL;
			break;
		case "ILLUS":
			src = imgIllustrator;
			break;
		case "PHOTO":
			src = imgPhotoshop;
			break;
		case "FIGMA":
			src = imgFigma;
			break;
		case "WORD":
			src = imgWord;
			break;
		case "EXCEL":
			src = imgExcel;
			break;
		case "WORK":
			src = imgWork;
			break;
		case "EDUC":
			src = imgEduc;
			break;
		case "LOCAT":
			src = imgLocat;
			break;
		case "CLOSE":
			src = imgClose;
			break;
		case "COLLAP":
			src = imgCollapse;
			break;
		case "LOAD":
			src = imgLoader;
			break;
		case "LOGOB":
			src = imgLogo;
			break;
		case "LOGOW":
			src = imgLogoW;
			break;
		case "SLINKEDIN":
			src = imgLinkedin;
			break;
		case "SGITHUB":
			src = imgGithub;
			break;
		default:
	}

	return <Wrapper className={`icon ${size}`} src={src} alt={alt}></Wrapper>;
}
