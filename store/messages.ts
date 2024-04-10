import { defineStore } from 'pinia';

export interface Page {
  id: number;
  page_name: string;
  page_id: string;
  access_token: string;
}

export interface Lead {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  company: number;
  status: number;
}

export interface Message {
  id: number;
  page: Page;
  lead: Lead;
  source: string;
  sender: string;
  messenger_id: string;
  message: string;
  timestamp: string;
}

export const useMessagesStore = defineStore('messagesStore', () => {
  const messagesList = ref<Message[]>([]);

  function setMessages(messages: Message[]) {
    messagesList.value = messages;
  }
  
  function addMessageToList(message: Message) {
    messagesList.value.push(message);
  }

  function removeMessageFromList(message: Message) {
    const index = messagesList.value.findIndex(m => m.id === message.id);
    if (index > -1) {
      messagesList.value.splice(index, 1);
    }
  }

  return { setMessages, addMessageToList, removeMessageFromList, messagesList };
});
