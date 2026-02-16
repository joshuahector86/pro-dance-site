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
        className="rounded shadow-lg p-6 min-w-[320px] max-w-[90vw] w-full md:w-150 lg:w-200 relative bg-surface text-foreground border border-border"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute right-4 top-4 rounded-full p-2 text-muted hover:text-foreground hover:bg-background/60 transition font-semibold text-2xl"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Dialog;
