import { create } from "zustand";

interface PaymentStore {
  premium: boolean;

  activate: () => void;

  deactivate: () => void;
}

export const usePaymentStore =
  create<PaymentStore>((set) => ({
    premium: false,

    activate: () =>
      set({
        premium: true,
      }),

    deactivate: () =>
      set({
        premium: false,
      }),
  }));