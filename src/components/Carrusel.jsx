function Carrusel() {
  return (
    <>
      <div className="flex items-center justify-between p-[1rem] bg-[#CDCDCD] w-[screen] h-[36rem]">
        <div className="bg-[black] bg-opacity-60 rounded-full w-[50px] h-[50px] border border-[4px] border-white flex justify-center items-center">
          <span
            className="material-symbols-outlined text-[white] flex cursor-pointer"
            style={{ marginLeft: "calc(50% - 12px)" }}
          >
            arrow_back_ios
          </span>
        </div>

        <div className="bg-[black] bg-opacity-60 rounded-full w-[50px] h-[50px] border border-[4px] border-white flex justify-center items-center">
          <span className="material-symbols-outlined text-[white] flex cursor-pointer">
            arrow_forward_ios
          </span>
        </div>
      </div>
    </>
  );
}

export default Carrusel;
