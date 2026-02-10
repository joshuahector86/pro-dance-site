import { topbarLinks } from "../../utils/site-links";

const Topbar = () => {
  return (
    <header className="w-full shadow flex items-center justify-between px-8 py-4">
      <div className="flex items-center gap-2 font-bold text-xl tracking-wide">
        <span className="uppercase">Dimitri Hector</span>
      </div>

      {topbarLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="hover:underline transition"
        >
          {link.name}
        </a>
      ))}

      <div className="flex gap-2">
        <button className="border rounded px-4 py-1 font-semibold hover:scale-105 transition">
          Contact Me!
        </button>
      </div>
    </header>
  );
};

export default Topbar;
