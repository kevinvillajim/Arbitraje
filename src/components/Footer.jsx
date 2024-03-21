function Footer() {
	return (
		<>
			<div className="flex bg-white w-[100%] py-[2rem] px-[5rem] items-center justify-between">
				<div>
					<img src="logo.png" className="w-[10rem]" />
				</div>
				<div className="flex gap-7 flex-col">
					<div className="flex items-center">
						<ul className="flex gap-10 cursor-pointer text-[black] text-[20px]">
							<li className="flex items-center">Inicio</li>
							<li className="flex items-center">Cursos</li>
							<li className="flex items-center">Contacto</li>
							<li className="flex items-center">Sobre Nosotros</li>
						</ul>
					</div>
					<div className="flex justify-center">
						<h3 className="text-[20px]">Terminos y Condiciones</h3>
					</div>
				</div>
				<div className="flex flex-col justify-center gap-5 w-[20%]">
					<h2 className="text-[18px] text-center font-bold">
						Da el paso decisivo hacia la libertad financiera!
					</h2>
					<button className="p-[0.5rem] px-[1.5rem] bg-[black] rounded-full text-[white]">
						Registrate Ahora!
					</button>
				</div>
			</div>
		</>
	);
}

export default Footer;
