import { topbarLinks } from "../../utils/site-links";
import { useLocation } from "react-router-dom";

const Topbar = () => {
  const location = useLocation();
  return (
    <header className="w-full shadow flex items-center justify-between px-8 py-4 bg-black text-white">
      <div className="flex items-center gap-2 font-bold text-xl tracking-wide">
        <span className="uppercase text-highlight">Dimitri Hector</span>
      </div>

      <nav className="flex gap-6 text-lg">
        {topbarLinks.map((link) => {
          const isActive = location.pathname === link.href;
          return (
            <a
              key={link.name}
              href={link.href}
              className={
                isActive
                  ? "text-highlight underline rounded px-3 py-1 font-semibold transition"
                  : "hover:text-highlight transition text-white px-3 py-1"
              }
            >
              {link.name}
            </a>
          );
        })}
      </nav>

      <div className="flex gap-2">
        <button className="border border-highlight rounded px-4 py-1 font-semibold hover:bg-highlight hover:text-black transition">
          Contact Me!
        </button>
      </div>
    </header>
  );
};

export default Topbar;
