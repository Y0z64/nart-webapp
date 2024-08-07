const VerticalText = ({text}:{text: string}) => {
  return (
    <div className="hidden md:flex flex-col items-center mr-56">
      {text.split("").map((letter, index) => (
        <span key={index} className="my-1 text-[2rem] md:text-[2.6em] xl:text-[3rem] 2xl:text-[4rem] font-bold">
          {letter}
        </span>
      ))}
    </div>
  );
};

export default VerticalText;
