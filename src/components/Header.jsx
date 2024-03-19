function Header() {
  return (
    <>
      <div className="py-[1rem] px-[2rem] bg-[white]">
        <div className="w-[screen] flex justify-between">
          <div className="w-[60px] h-[auto]">
            <img
              src="logo.png"
              className="w-[100%] h-[100%]"
            />
          </div>
          <div className="flex items-center">
            <ul className="flex gap-10 cursor-pointer text-[black] text-[20px]">
              <li className="flex items-center">Inicio</li>
              <li className="flex items-center">Cursos</li>
              <li className="flex items-center">Contacto</li>
              <li className="flex items-center">Sobre Nosotros</li>
              <li className="py-[0.5rem] px-[1.5rem] bg-[blue] rounded-full text-[white]">
                Ingresar
              </li>
              <li className="p-[0.5rem] px-[1.5rem] bg-[black] rounded-full text-[white]">
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
