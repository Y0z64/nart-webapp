import VerticalText from "@/components/atoms/TextColumn";

export default function AboutUs() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center" id="nosotros">
      <div className="flex flex-col md:flex-row h-fit w-full px-5 md:w-10/12 items-center justify-center md:space-x-10">
        <VerticalText text="NOSOTROS"/>
        <h1 className="text-[3rem] font-bold tracking-widest flex md:hidden mb-2">NOSOTROS</h1>
        <span className=" w-full text-[1.5rem] md:text-[2.45rem] xl:text-[3rem] 2xl:text-[4.0625rem]">
          Nart es una empresa dedicada al desarrollo artísticas inmersivas y
          personalizadas, adaptadas a las necesidades de cada cliente.
          Utilizamos tecnologías avanzadas y diversos datasets (EEG,
          biométricos, ambientales) para ofrecer experiencias multisensoriales
          únicas en VR, iluminación, videomapping, artes plásticas, AR y videos
          360.
        </span>
      </div>
    </div>
  );
}