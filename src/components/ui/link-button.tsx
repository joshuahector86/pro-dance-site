const LinkButton = ({
  children,
  href,
  target,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
  target?: string;
}) => {
  return (
    <a href={href} target={target} rel="noopener noreferrer">
      <button
        className={`border border-accent-warm rounded px-5 py-2 font-semibold hover:bg-secondary hover:text-primary transition text-foreground ${className}`}
      >
        {children}
      </button>
    </a>
  );
};

export default LinkButton;
