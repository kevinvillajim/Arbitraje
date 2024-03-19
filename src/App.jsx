import "./App.css";
import Header from "./components/Header.jsx";
import Carrusel from "./components/Carrusel.jsx";
import Card from "./components/Card.jsx";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

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
            <button className="bg-[black] text-[white] rounded-full py-[1rem] px-[30%]">
              Inscribete
            </button>
          </div>
        </div>
        <div className="w-[400px]">
          <img
            src="img1.png"
            className="w-[100%] h-[100%]"
          />
        </div>
      </div>
      <div className="bg-[#F1F1F1] px-[3rem] py-[3rem]">
        <h1 className="text-[25px] py-[1rem]">Cursos Disponibles</h1>
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
      <div className="bg-[#E6E6E6] p-[3rem]">
        <div>
          <h1>Contáctanos</h1>
          <div className="flex py-[2rem] px-[4rem] flex-col bg-[white] rounded-2xl">
            <div className="flex py-[2rem] flex-row justify-center">
              <div className="flex gap-6 justify-center bg-[#E6E6E6] rounded-full w-[40%]">
                <div>
                  <a
                    id="whatsapp-link"
                    href="https://api.whatsapp.com/send?phone=593983583620&text=Buenas%20tardes, me contacto desde tu pagina web"
                    target="_blank"
                  >
                    <div id="whatsapp-btn">
                      <WhatsAppIcon
                        sx={{ width: "45px", height: "45px", color: "#fff" }}
                      />
                    </div>
                  </a>
                </div>

                <div>
                  <a
                    id="facebook-link"
                    href="https://www.facebook.com/davidalejandro.guevaraverduga"
                    target="_blank"
                  >
                    <div id="facebook-btn">
                      <FacebookIcon
                        sx={{ width: "45px", height: "45px", color: "#fff" }}
                      />
                    </div>
                  </a>
                </div>
                <div>
                  <a
                    id="instagram-link"
                    href="https://www.instagram.com/"
                    target="_blank"
                  >
                    <div id="instagram-btn">
                      <InstagramIcon
                        sx={{ width: "45px", height: "45px", color: "#fff" }}
                      />
                    </div>
                  </a>
                </div>
                <div>
                  <a
                    id="tiktok-link"
                    href="https://www.instagram.com/"
                    target="_blank"
                  >
                    <div id="tiktok-btn">
                      <img
                        src="/tiktok.webp"
                        className="w-[45px]"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="px-[3rem]">
              <form>
                <div className="flex justify-between">
                  <div className="flex gap-3">
                    <label htmlFor="nombre">Nombre Completo</label>
                    <input
                      className="border-2 w-[25rem]"
                      type="text"
                      id="nombre"
                      name="nombre"
                    />
                  </div>
                  <div className="flex gap-3">
                    <label htmlFor="email">Email</label>
                    <input
                      className="border-2 w-[15rem]"
                      type="email"
                      id="email"
                      name="email"
                    />
                  </div>
                  <div className="flex gap-3">
                    <label htmlFor="telefono">Whatsapp</label>
                    <input
                      className="border-2"
                      type="phone"
                      id="telefono"
                      name="telefono"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="mensaje">Mensaje</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    className="h-[10rem] w-full border-2"
                  ></textarea>
                </div>
                <div>
                  <input
                    className="px-[4rem] py-[1rem] bg-black rounded-full text-[white]"
                    type="submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
