const Footer = () => {
  return (
    <footer className="w-full mt-12 border-t border-highlight py-6 flex flex-col md:flex-row items-center justify-between px-8 text-sm bg-black text-white">
      <div className="mb-2 md:mb-0">
        &copy; {new Date().getFullYear()} <span>Dimitri Hector</span>. All
        rights reserved.
      </div>
      <div className="flex gap-4">
        <a
          href="#privacy"
          className="hover:text-highlight transition text-white"
        >
          Privacy Policy
        </a>
        <a href="#terms" className="hover:text-highlight transition text-white">
          Terms of Service
        </a>
      </div>
    </footer>
  );
};

export default Footer;
