import { topbarLinks } from "../../utils/site-links";
import { useLocation } from "react-router-dom";
import { useContactDialogStore } from "../../store/contactDialogStore";
import Dialog from "../ui/dialog";
import ContactForm from "../../pages/contact/ContactForm";
import { useState } from "react";

const Topbar = () => {
  const location = useLocation();
  const open = useContactDialogStore((state) => state.open);
  const setOpen = useContactDialogStore((state) => state.setOpen);
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when clicking outside
  const handleMenuOverlayClick = () => setMenuOpen(false);

  return (
    <>
      <header className="w-full shadow flex items-center justify-between px-8 py-4 bg-black text-white relative">
        <div className="flex items-center gap-2 font-bold text-xl tracking-wide">
          <span className="uppercase text-highlight">Dimitri Hector</span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex gap-6 text-lg">
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

        {/* Hamburger for md and smaller */}
        <div>
          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 border border-highlight rounded bg-black text-highlight hover:bg-highlight hover:text-black transition"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-6 h-1 bg-highlight mb-1 rounded"></span>
            <span className="block w-6 h-1 bg-highlight mb-1 rounded"></span>
            <span className="block w-6 h-1 bg-highlight rounded"></span>
          </button>

          <div className="flex gap-2 lg:flex">
            <button
              className="hidden lg:block border border-highlight rounded px-4 py-1 font-semibold hover:bg-highlight hover:text-black transition"
              onClick={() => setOpen(true)}
            >
              Contact Me!
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 flex justify-end lg:hidden"
          onClick={handleMenuOverlayClick}
        >
          <div
            className="w-[70vw] max-w-xs max-h-96 rounded bg-linear-to-br from-black via-highlight to-black shadow-xl flex flex-col p-6 gap-4 animate-slide-in-right duration-700 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-highlight text-2xl font-bold"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              ×
            </button>
            <nav className="flex flex-col gap-4 mt-8">
              {topbarLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={
                      isActive
                        ? "text-highlight underline rounded px-3 py-2 font-semibold transition bg-black/30"
                        : "hover:text-highlight transition text-white px-3 py-2 rounded hover:bg-black/20"
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                );
              })}
              <button
                className="border border-highlight rounded px-4 py-2 font-semibold hover:bg-highlight hover:text-black transition mt-4 bg-black/30 text-white"
                onClick={() => {
                  setOpen(true);
                  setMenuOpen(false);
                }}
              >
                Contact Me!
              </button>
            </nav>
          </div>
        </div>
      )}

      <Dialog open={open} onClose={() => setOpen(false)}>
        <ContactForm />
      </Dialog>
    </>
  );
};

export default Topbar;
