const ButtonBackgroundShine = ({ text }: { text: string }) => {
  return (
    <button className="z-10 inline-flex h-10 animate-background-shine items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#141416,45%,#5b595d,55%,#141416)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none ">
      {text}
    </button>
  );
};

export default ButtonBackgroundShine;
