import { topbarLinks } from "../../utils/site-links";
import { useLocation } from "react-router-dom";
import { useContactDialogStore } from "../../store/contactDialogStore";
import Dialog from "../ui/dialog";
import ContactForm from "../../pages/contact/ContactForm";

const Topbar = () => {
  const location = useLocation();
  const open = useContactDialogStore((state) => state.open);
  const setOpen = useContactDialogStore((state) => state.setOpen);
  return (
    <>
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
          <button
            className="border border-highlight rounded px-4 py-1 font-semibold hover:bg-highlight hover:text-black transition"
            onClick={() => setOpen(true)}
          >
            Contact Me!
          </button>
        </div>
      </header>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <ContactForm />
      </Dialog>
    </>
  );
};

export default Topbar;
