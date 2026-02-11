import React from "react";

interface DialogProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Dialog: React.FC<DialogProps> = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 bg-opacity-50"
      onClick={onClose}
    >
      <div
        className=" rounded shadow-lg p-6 min-w-[320px] max-w-[90vw] w-full md:w-150 lg:w-200 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Dialog;
