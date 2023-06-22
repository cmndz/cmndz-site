import styled from "styled-components";

import imgHTML from "./../../static/icons/tools/html.svg";
import imgCSS from "./../../static/icons/tools/css.svg";
import imgJs from "./../../static/icons/tools/js.svg";
import imgReact from "./../../static/icons/tools/react.svg";
import imgSass from "./../../static/icons/tools/sass.svg";
import imgC from "./../../static/icons/tools/c.svg";
import imgPython from "./../../static/icons/tools/python.svg";
import imgVB from "./../../static/icons/tools/vb.svg";
import imgSQL from "./../../static/icons/tools/sqlserver.svg";
import imgGit from "./../../static/icons/tools/git.svg";
import imgVB6 from "./../../static/icons/tools/vbS.svg";
import imgVS from "./../../static/icons/tools/vs.svg";
import imgVSCode from "./../../static/icons/tools/vscode.svg";
import imgIllustrator from "./../../static/icons/tools/ai.svg";
import imgPhotoshop from "./../../static/icons/tools/ps.svg";
import imgFigma from "./../../static/icons/tools/figma.svg";
import imgWord from "./../../static/icons/tools/doc.svg";
import imgExcel from "./../../static/icons/tools/xls.svg";

import imgWork from "./../../static/icons/other/work.svg";
import imgEduc from "./../../static/icons/other/education.svg";
import imgLocat from "./../../static/icons/other/location.svg";
import imgClose from "./../../static/icons/other/menu-expand.svg";
import imgCollapse from "./../../static/icons/other/menu-collapse.svg";
import imgLoader from "./../../static/icons/other/loader.svg";
import imgLinkedin from "./../../static/icons/other/linkedin.svg";
import imgGithub from "./../../static/icons/other/github.svg";

import imgAudioPlay from "./../../static/icons/other/audioPlay.svg";
import imgAudioPause from "./../../static/icons/other/audioPause.svg";
import imgAudioNext from "./../../static/icons/other/audioNext.svg";
import imgAudioPrev from "./../../static/icons/other/audioPrev.svg";

import imgLogo from "./../../static/icons/logo/logo-b.svg";
import imgLogoW from "./../../static/icons/logo/logo-w.svg";

const Wrapper = styled.img`
	&.min {
		max-width: 25px;
		max-height: 25px;
		width: 25px;
	}
	&.medmin {
		max-width: 35px;
		max-height: 35px;
		width: 35px;
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
		case "AUDIOPLAY":
			src = imgAudioPlay;
			break;
		case "AUDIOPAUSE":
			src = imgAudioPause;
			break;
		case "AUDIONEXT":
			src = imgAudioNext;
			break;
		case "AUDIOPREV":
			src = imgAudioPrev;
			break;
		default:
	}

	return <Wrapper className={`icon ${size}`} src={src} alt={alt}></Wrapper>;
}
