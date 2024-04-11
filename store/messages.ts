import { defineStore } from 'pinia';

export interface MessengerAttachmentGenericTemplate {
  title: string;
  subtitle: string;
  media_url: string;
}

export interface MessengerAttachmentImageData {
  url: string;
  width: number;
  height: number;
  max_width: number;
  max_height: number;
  preview_url: string;
  image_type: number;
  render_as_sticker: boolean;
}

export interface MessengerAttachmentVideoData {
  width: number;
  height: number;
  length: number;
  video_type: number;
  url: string;
  preview_url: string;
  rotation: number;
}

export interface MessengerAttachmentData {
  id: string;
  name: string;
  size: number;
  mime_type: string;
  image_data?: MessengerAttachmentImageData;
  video_data?: MessengerAttachmentVideoData;
  generic_template?: MessengerAttachmentGenericTemplate;
}

export interface MessengerAttachments {
  data: MessengerAttachmentData[];
}

export interface MessagePage {
  id: number;
  page_name: string;
  page_id: string;
}

export interface MessageLead {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  company: number;
  status: number;
  facebook_id: string;
}

export interface Message {
  id: number;
  page: MessagePage;
  lead: MessageLead;
  source: string;
  sender: string;
  messenger_id: string;
  message: string;
  messenger_attachments?: MessengerAttachments;
  is_read: boolean;
  timestamp: string;
}

export interface MessagesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Message[];
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
