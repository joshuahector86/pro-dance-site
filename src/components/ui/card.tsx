import type { KeyboardEvent } from "react";

const Card = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!onClick) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <div
      className={`border border-border rounded-2xl overflow-hidden flex flex-col bg-surface/70  ${className}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={handleKeyDown}
    >
      {children}
    </div>
  );
};

const CardHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2 className={`text-lg font-semibold flex-1 ${className}`}>{children}</h2>
  );
};

const CardBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`text-foreground p-4 bg-surface/60 ${className}`}>
      {children}
    </div>
  );
};

const CardFooter = ({ children }: { children: React.ReactNode }) => {
  return <div className="mt-auto border-t-2 pt-2">{children}</div>;
};

const CardImage = ({ src, alt }: { src: string; alt: string }) => {
  return <img src={src} alt={alt} className="w-full h-48 object-cover" />;
};

export { Card, CardHeader, CardBody, CardFooter, CardImage };
