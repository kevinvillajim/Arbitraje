import "./App.css";
import Header from "./components/Header.jsx";
import Carrusel from "./components/Carrusel.jsx";
import Card from "./components/Card.jsx";

function App() {
	return (
		<>
			<Header />
			<div>
				<Carrusel />
			</div>
			<div className="flex justify-between items-center bg-[#E6E6E6] px-[3rem]">
				<div className="w-[50%]">
					<h1 className="text-[50px]">SureBets, Arbitraje deportivo?</h1>
					<p className="text-[30px]">
						La manera específica de siempre percibir un ingreso cubriendo todos
						los posibles resultados entre dos casas de apuestas en cualquer
						deporte.
					</p>
					<p className="text-[15px] my-[1rem]">
						Conviertete en una maquina de hacer dinero
					</p>
					<div className="flex justify-center">
						<button className="bg-[black] text-[white] rounded-xl py-[1rem] px-[30%]">
							Inscribete
						</button>
					</div>
				</div>
				<div className="w-[400px]">
					<img src="img1.png" className="w-[100%] h-[100%]" />
				</div>
			</div>
			<div className="bg-[#F1F1F1] px-[3rem] py-[2rem]">
				<h1 className="text-[25px]">Cursos Disponibles</h1>
				<div className="flex justify-evenly">
					<Card
						title="Arbitraje Deportivo"
						img="course1.png"
						description="Descripción del curso.... Rentabiliza con lo que más te apasiona, los deportes y aprende a ganarle a las casas de apuestas con las SUREBETS."
					/>
					<Card
						title="Curso 2"
						img="course1.png"
						description="Descripción del curso.... Rentabiliza con lo que más te apasiona, los deportes y aprende a ganarle a las casas de apuestas con las SUREBETS."
					/>
					<Card
						title="Curso 3"
						img="course1.png"
						description="Descripción del curso.... Rentabiliza con lo que más te apasiona, los deportes y aprende a ganarle a las casas de apuestas con las SUREBETS."
					/>
				</div>
			</div>
		</>
	);
}

export default App;
