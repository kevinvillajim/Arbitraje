function About() {
	return (
		<>
			<div className="flex">
				<div className="flex w-[100%] bg-[gray] px-[5rem] items-center">
					<div className="w-[2000px]">
						<img src="team.jpeg"></img>
					</div>
					<div className=" p-[5rem] flex flex-col gap-3">
						<h1 className="text-[3rem]">BLADGET</h1>
						<div>
							<p>
								Somos un equipo de ingenieros especializados en el arbitraje
								deportivo, nos centramos en ofertar cursos que permiten a los
								participantes generar ingresos por un metodo inteligente,
								sofisticado y simple, Nuestro objetivo como equipo es permitirte
								dar un paso importante en tu independencia fincanciera.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default About;
