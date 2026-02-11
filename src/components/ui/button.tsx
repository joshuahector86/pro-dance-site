const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="border border-highlight rounded px-5 py-2 font-semibold hover:bg-highlight hover:text-black transition text-white">
      {children}
    </button>
  );
};

export default Button;
