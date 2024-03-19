function Card({ title, img, description }) {
  return (
    <>
      <div className="flex justify-center flex-col p-[1rem] bg-[#CDCDCD] w-[20rem] rounded-lg">
        <h1 className="text-[25px] flex justify-center">{title}</h1>
        <img src={img} />
        <p>{description}</p>
        <button className="bg-[black] px-3rem py-[1rem] rounded-full text-white mt-[1rem]">
          Conocer más
        </button>
      </div>
    </>
  );
}

export default Card;
