const Footer = () => {
  return (
    <footer className="w-full mt-12 border-t py-6 flex flex-col md:flex-row items-center justify-between px-8 text-sm">
      <div className="mb-2 md:mb-0">
        &copy; {new Date().getFullYear()} Dimitri Hector. All rights reserved.
      </div>
      <div className="flex gap-4">
        <a href="#privacy" className="hover:underline transition">
          Privacy Policy
        </a>
        <a href="#terms" className="hover:underline transition">
          Terms of Service
        </a>
      </div>
    </footer>
  );
};

export default Footer;
