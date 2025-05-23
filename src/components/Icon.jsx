const Icon = ({image, text}) => {
  return (
      <div className="flex flex-col items-center">
            <img
               src={image}
               alt="Juegos de mesa"
               className="w-[100px] h-[100px] object-cover"
            />
            <p className="mt-2 text-center text-lg font-medium">{text}</p>
      </div>
  );
};

export default Icon;