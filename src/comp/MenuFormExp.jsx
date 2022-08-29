import imgWork from "./../resources/work.svg";
import imgEduc from "./../resources/education.svg";

function MenuFormExp() {
	return (
		<div id="menuformexp">
			<div className="menuformexp__title">
				<h1>FORMACIÓN Y EXPERIENCIA</h1>
			</div>
			<div className="menuformexp__container">
				<div className="menuformexp__listitem">
					<div className="menuformexp__listicon">
						<img className="menuformexp__listimg" src={imgEduc} alt="" />
					</div>
					<div className="menuformexp__listheader">
						<h3>BRISTOL, INSTITUTO DE CULTURA INGLESA</h3>
						<h4>Marzo 2022 - Actualidad</h4>
					</div>
					<div className="menuformexp__listdetail">
						<p>Llevo a cabo mis estudios en el idioma Ingles.</p>
					</div>
					<div className="menuformexp__listtags">
						<span className="menuformexp__listtagsitem">Idioma Ingles</span>
					</div>
				</div>

				<div className="menuformexp__listitem">
					<div className="menuformexp__listicon">
						<img className="menuformexp__listimg" src={imgWork} alt="" />
					</div>
					<div className="menuformexp__listheader">
						<h3>X-PROJECT S.A.</h3>
						<h4>Marzo 2017 - Actualidad</h4>
					</div>
					<div className="menuformexp__listdetail">
						<p>Desempeño tareas tales como:</p>
						<ul>
							<li>Brindar soporte tecnico a clientes;</li>
							<li>Desarrollar parches de actualización;</li>
							<li>Administrar base de datos;</li>
							<li>Documentar y elaborar instructivos de uso de los aplicativos.</li>
						</ul>
					</div>
					<div className="menuformexp__listtags">
						<span className="menuformexp__listtagsitem">Visual Basic</span>
						<span className="menuformexp__listtagsitem">VB6</span>
						<span className="menuformexp__listtagsitem">Visual Studio</span>
						<span className="menuformexp__listtagsitem">C#</span>
						<span className="menuformexp__listtagsitem">.NET</span>
						<span className="menuformexp__listtagsitem">.NET CORE</span>
						<span className="menuformexp__listtagsitem">BaseDeDatos</span>
						<span className="menuformexp__listtagsitem">SQL</span>
						<span className="menuformexp__listtagsitem">TSQL</span>
						<span className="menuformexp__listtagsitem">Git</span>
						<span className="menuformexp__listtagsitem">GitHub</span>
						<span className="menuformexp__listtagsitem">Excel</span>
						<span className="menuformexp__listtagsitem">Word</span>
					</div>
				</div>
				<div className="menuformexp__listitem">
					<div className="menuformexp__listicon">
						<img className="menuformexp__listimg" src={imgEduc} alt="" />
					</div>
					<div className="menuformexp__listheader">
						<h3>EDUCACION IT - CENTRO DE FORMACION PROFESIONAL</h3>
						<h4>Marzo 2021 - Agosto 2021</h4>
					</div>
					<div className="menuformexp__listdetail">
						<p>Realice los siguientes cursos:</p>
						<ul>
							<li>Desarrollo Web con HTML</li>
							<li>Introduccion al Paradigma de Objetos</li>
							<li>Javascript desde Cero</li>
							<li>Javascript Desarrollador Avanzado</li>
							<li>Maquetacion Web: HTML5 y CSS</li>
							<li>Maquetado Avanzado: SASS y LESS</li>
							<li>Git: Desarrollo Colaborativo</li>
							<li>Javascript AWS (Aplicaciones Web Progresivas)</li>
							<li>Responsive Web Design y Bootstrap</li>
							<li>ReactJS Developer</li>
							<li>ReactJS Avanzado</li>
							<li>Introduccion a UX</li>
							<li>UI: Interfaz de Usuario</li>
							<li>Presupuesto Web</li>
						</ul>
					</div>
					<div className="menuformexp__listtags">
						<span className="menuformexp__listtagsitem">HTML</span>
						<span className="menuformexp__listtagsitem">CSS</span>
						<span className="menuformexp__listtagsitem">JavaScript</span>
						<span className="menuformexp__listtagsitem">ReactJs</span>
						<span className="menuformexp__listtagsitem">Git</span>
						<span className="menuformexp__listtagsitem">SASS</span>
						<span className="menuformexp__listtagsitem">UI</span>
						<span className="menuformexp__listtagsitem">UX</span>
					</div>
				</div>

				<div className="menuformexp__listitem">
					<div className="menuformexp__listicon">
						<img className="menuformexp__listimg" src={imgEduc} alt="" />
					</div>
					<div className="menuformexp__listheader">
						<h3>UNIVERSIDAD DE BUENOS AIRES</h3>
						<h4>Marzo 2016 - Actualidad</h4>
					</div>
					<div className="menuformexp__listdetail">
						<p>
							En la carrera de&nbsp;<strong>Ingenieria en Informatica</strong> de la&nbsp;
							<strong>Facultad de Ingenieria</strong>, hasta el momento, aprove las siguientes materias:
						</p>
						<ul>
							<li>Algoritmos y Programacion I</li>
							<li>Algoritmos y Programacion II</li>
							<li>CBC - Analisis Matematico</li>
							<li>CBC - Algebra</li>
							<li>CBC - Fisica</li>
							<li>CBC - Quimica</li>
							<li>CBC - Introducción al Pensamiento Científico</li>
							<li>CBC - Introducción al Conocimiento de la Sociedad y el Estado</li>
						</ul>
					</div>
					<div className="menuformexp__listtags">
						<span className="menuformexp__listtagsitem">C</span>
						<span className="menuformexp__listtagsitem">PYTHON</span>
						<span className="menuformexp__listtagsitem">Algoritmos</span>
						<span className="menuformexp__listtagsitem">TDA</span>
					</div>
				</div>

				<div className="menuformexp__listitem">
					<div className="menuformexp__listicon">
						<img className="menuformexp__listimg" src={imgEduc} alt="" />
					</div>
					<div className="menuformexp__listheader">
						<h3>UNIVERSIDAD NACIONAL DE LA PLATA</h3>
						<h4>Marzo 2014 - Diciembre 2015</h4>
					</div>
					<div className="menuformexp__listdetail">
						<p>
							En la carrera de&nbsp;<strong>Licenciatura en Diseño Multimedial</strong> de la&nbsp;
							<strong>Facultad de Artes</strong>, hasta el momento, aprove las siguientes materias:
						</p>
						<ul>
							<li>Taller de Diseño Multimedial I</li>
							<li>Taller de Diseño Multimedial II</li>
							<li>Tecnologia Multimedial I</li>
							<li>Tecnologia Multimedial II</li>
							<li>Lenguaje Multimedial I</li>
							<li>Historia Social General</li>
							<li>Produccion de Textos</li>
							<li>Arte Contemporaneo</li>
						</ul>
					</div>
					<div className="menuformexp__listtags">
						<span className="menuformexp__listtagsitem">HTML</span>
						<span className="menuformexp__listtagsitem">CSS</span>
						<span className="menuformexp__listtagsitem">Diseño</span>
						<span className="menuformexp__listtagsitem">Illustrator</span>
						<span className="menuformexp__listtagsitem">Photoshop</span>
						<span className="menuformexp__listtagsitem">UI</span>
						<span className="menuformexp__listtagsitem">UX</span>
					</div>
				</div>

				<div className="menuformexp__listitem">
					<div className="menuformexp__listicon">
						<img className="menuformexp__listimg" src={imgEduc} alt="" />
					</div>
					<div className="menuformexp__listheader">
						<h3>UNIVERSIDAD NACIONAL DE LA PLATA</h3>
						<h4>Marzo 2013 - Diciembre 2013</h4>
					</div>
					<div className="menuformexp__listdetail">
						<p>
							En la carrera de&nbsp;<strong>Licenciatura en Diseño en Comunicacion Visual</strong> de
							la&nbsp;
							<strong>Facultad de Artes</strong>, curse las siguientes materias:
						</p>
						<ul>
							<li>Diseño en Comunicación Visual I</li>
							<li>Lenguaje Visual I</li>
							<li>Dibujo I</li>
						</ul>
					</div>
					<div className="menuformexp__listtags"></div>
				</div>

				<div className="menuformexp__listitem">
					<div className="menuformexp__listicon">
						<img className="menuformexp__listimg" src={imgEduc} alt="" />
					</div>
					<div className="menuformexp__listheader">
						<h3>INSTITUTO NUESTRA SEÑORA DEL PERPETUO SOCORRO</h3>
						<h4>Marzo 2010 - Diciembre 2012</h4>
					</div>
					<div className="menuformexp__listdetail">
						<p>
							Complete mis estudios secundarios con el titulo de&nbsp;
							<strong>Bachiller con orientación en Economia y Adminsitracion</strong>.
						</p>
					</div>
					<div className="menuformexp__listtags"></div>
				</div>

				<div className="menuformexp__listitem">
					<div className="menuformexp__listicon">
						<img className="menuformexp__listimg" src={imgEduc} alt="" />
					</div>
					<div className="menuformexp__listheader">
						<h3>CENTRO DE FORMACIÓN PROFESIONAL N°406</h3>
						<h4>Marzo 2011 - Diciembre 2011</h4>
					</div>
					<div className="menuformexp__listdetail">
						<p>Realice los siguientes cursos:</p>
						<ul>
							<li>Operador de PC bajo entorno grafico</li>
							<li>Diseño Grafico de Sistema Informaticos</li>
							<li>Diseño de Web</li>
						</ul>
					</div>
					<div className="menuformexp__listtags">
						<span className="menuformexp__listtagsitem">Photoshop</span>
						<span className="menuformexp__listtagsitem">CorelDraw</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MenuFormExp;
