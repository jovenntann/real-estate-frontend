import { defineStore } from 'pinia';

export interface LeadMessagePage {
  id: number;
  page_name: string;
  page_id: string;
  access_token: string;
}

export interface LeadMessageLead {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  company: number;
  status: number;
}

export interface LeadMessage {
  id: number;
  page: LeadMessagePage;
  lead: LeadMessageLead;
  source: string;
  sender: string;
  messenger_id: string;
  message: string;
  timestamp: string;
}

export interface LeadMessagesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: LeadMessage[];
}

export const useLeadMessagesStore = defineStore('leadMessagesStore', () => {
  const leadMessagesList = ref<LeadMessage[]>([]);
  const selectedLeadMessageId = ref<number | null>(null);

  function setLeadMessages(leadMessages: LeadMessage[]) {
    leadMessagesList.value = leadMessages;
  }
  
  function addLeadMessageToList(leadMessage: LeadMessage) {
    leadMessagesList.value.push(leadMessage);
  }

  function removeLeadMessageFromList(leadMessage: LeadMessage) {
    const index = leadMessagesList.value.findIndex(m => m.id === leadMessage.id);
    if (index > -1) {
      leadMessagesList.value.splice(index, 1);
    }
  }

  function setSelectedLeadMessageId(leadMessageId: number) {
    selectedLeadMessageId.value = leadMessageId;
  }

  function removeSelectedLeadMessageId() {
    selectedLeadMessageId.value = null;
  }

  return { 
    setLeadMessages, 
    addLeadMessageToList, 
    removeLeadMessageFromList, 
    leadMessagesList, 
    
    selectedLeadMessageId,
    setSelectedLeadMessageId,
    removeSelectedLeadMessageId
  };
});
