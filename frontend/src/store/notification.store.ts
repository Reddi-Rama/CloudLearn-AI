import { create } from "zustand";

interface NotificationStore {
  unread: number;

  setUnread: (count: number) => void;
}

export const useNotificationStore =
  create<NotificationStore>((set) => ({
    unread: 0,

    setUnread: (count) =>
      set({
        unread: count,
      }),
  }));