import { defineStore } from 'pinia';

export interface ToastMessage {
  title: string;
  description: string;
}

export const useLayoutStore = defineStore('layoutStore', () => {
  const toastMessage = ref<ToastMessage | null>(null);

  function setToastMessage(newToastMessage: ToastMessage) {
    toastMessage.value = newToastMessage;
  }

  return { setToastMessage, toastMessage };
});
