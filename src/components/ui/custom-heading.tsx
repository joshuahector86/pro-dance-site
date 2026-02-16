const CustomHeading = ({
  title,
  subtitle,
  className,
  headerClass,
}: {
  title: string;
  subtitle?: string;
  className?: string;
  headerClass?: string;
}) => {
  return (
    <div className={` ${className} pb-2`}>
      <h1 className={`text-4xl text-accent-cool ${headerClass}`}>{title}</h1>
      <div className="border-2 max-w-20 text-accent-warm" />
      {subtitle && (
        <h2 className="italic font-semibold text-muted">{subtitle}</h2>
      )}
    </div>
  );
};

export default CustomHeading;
