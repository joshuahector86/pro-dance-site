import { socialLinks } from "../../utils/site-links";

const Footer = () => {
  const footerLinks = [
    {
      name: "Instagram",
      href: socialLinks.find((link) => link.name === "Instagram")?.href || "#",
    },
    {
      name: "Youtube",
      href: socialLinks.find((link) => link.name === "Youtube")?.href || "#",
    },
    { name: "Contact Dimitri", href: "/contact" },
  ];
  return (
    <footer className="w-full  border-t border-highlight py-6 flex flex-col md:flex-row items-center justify-between bg-background px-10">
      <div className="mb-2 md:mb-0">
        &copy; {new Date().getFullYear()} <span>Dimitri Hector</span>. All
        rights reserved.
      </div>
      <div className="flex gap-4 items-center">
        {footerLinks.map((link) => (
          <a
            target={link.href !== "/contact" ? "_blank" : ""}
            key={link.name}
            href={link.href}
            className="hover:text-accent-warm transition  px-3 py-2 rounded hover:surface/20"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
