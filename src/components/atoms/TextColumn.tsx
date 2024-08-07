const VerticalText = ({text}:{text: string}) => {
  return (
    <div className="flex flex-col items-center mr-56">
      {text.split("").map((letter, index) => (
        <span key={index} className="my-1 text-[5rem] font-bold">
          {letter}
        </span>
      ))}
    </div>
  );
};

export default VerticalText;
