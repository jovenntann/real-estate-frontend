import { defineStore } from 'pinia';

export interface Page {
  id: number;
  page_name: string;
  page_id: string;
}

export interface Lead {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  company: number;
  status: number;
  facebook_id: string;
}

export interface Chat {
  id: number;
  page: Page;
  lead: Lead;
  source: string;
  sender: string;
  messenger_id: string;
  message: string;
  timestamp: string;
}

export const useChatsStore = defineStore('chatsStore', () => {
  const chatsList = ref<Chat[]>([]);

  function setChats(chats: Chat[]) {
    chatsList.value = chats;
  }
  
  function addChatToList(chat: Chat) {
    chatsList.value.push(chat);
  }

  function removeChatFromList(chat: Chat) {
    const index = chatsList.value.findIndex(c => c.id === chat.id);
    if (index > -1) {
      chatsList.value.splice(index, 1);
    }
  }

  return { setChats, addChatToList, removeChatFromList, chatsList };
});

