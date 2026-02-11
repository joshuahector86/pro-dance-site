import { create } from "zustand";

interface ContactDialogState {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const useContactDialogStore = create<ContactDialogState>((set) => ({
  open: false,
  setOpen: (open) => set({ open }),
}));
