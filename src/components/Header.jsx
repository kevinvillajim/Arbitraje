function Header() {
	return (
		<>
			<div className="p-[1rem] bg-[gray]">
				<div className="w-[screen] flex justify-between">
					<div className="w-[50px] h-[auto]">
						<img src="logo.png" className="w-[100%] h-[100%]" />
					</div>
					<div className="flex items-center">
						<ul className="flex gap-10 cursor-pointer text-[white] text-[20px]">
							<li className="flex items-center">Inicio</li>
							<li className="flex items-center">Cursos</li>
							<li className="flex items-center">Contacto</li>
							<li className="flex items-center">Sobre Nosotros</li>
							<li className="py-[0.5rem] px-[1.5rem] bg-[blue] rounded-xl">
								Ingresar
							</li>
							<li className="p-[0.5rem] px-[1.5rem] bg-[black] rounded-xl">
								Registrarse
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}

export default Header;
