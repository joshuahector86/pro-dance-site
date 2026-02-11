const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`border border-highlight rounded p-4 max-w-sm flex flex-col ${className}`}
    >
      {children}
    </div>
  );
};

const CardHeader = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="text-xl font-bold mb-2 flex-1">{children}</h2>;
};

const CardBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={`text-gray-300 p-4  ${className}`}>{children}</div>;
};

const CardFooter = ({ children }: { children: React.ReactNode }) => {
  return <div className="mt-auto border-t-2 pt-2">{children}</div>;
};

const CardImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="w-[50%] mx-auto h-auto rounded flex-1"
    />
  );
};

export { Card, CardHeader, CardBody, CardFooter, CardImage };
