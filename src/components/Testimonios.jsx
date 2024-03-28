import CarrouselMUI from "./CorrouselMUI";
function Testimonios() {
	return (
		<>
			<div className="flex justify-center items-center h-screen">
				<div className="p-[5rem]">
					<h1 className="text-[30px]">Testimonios</h1>
					<div className="flex justify-center">
						<CarrouselMUI />
					</div>
				</div>
			</div>
		</>
	);
}

export default Testimonios;
