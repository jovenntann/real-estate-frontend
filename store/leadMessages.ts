import { defineStore } from 'pinia';


export interface LeadMessageCompany {
  id: number;
  company_name: string;
  address: string;
  phone_number: string;
  company_size: number;
  industry: string;
}

export interface LeadMessageStatus {
  id: number;
  status: string;
  color: "default" | "secondary" | "destructive" | "outline";
  description: string | null;
}

export interface LeadMessageNextAction {
  id: number;
  action: string;
  color: "default" | "secondary" | "destructive" | "outline";
  description: string | null;
}

export interface LeadMessageMessage {
  id: number;
  source: string;
  sender: string;
  message: string;
  is_read: boolean;
  timestamp: string;
}

export interface LeadMessage {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string | null;
  company: LeadMessageCompany;
  status: LeadMessageStatus;
  next_action: LeadMessageNextAction;
  facebook_id: string,
  facebook_profile_pic: string,
  last_message_at: string,
  last_message: LeadMessageMessage;
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
  const selectedLead = ref<LeadMessage | null>(null);

  function setLeadMessages(leadMessages: LeadMessage[]) {
    leadMessagesList.value = leadMessages;
  }
  
  function addLeadMessageToList(leadMessage: LeadMessage) {
    leadMessagesList.value.push(leadMessage);
  }

  /**
   * This function is used to update a specific lead message in the leadMessagesList.
   * It first finds the index of the lead message to be updated in the leadMessagesList.
   * If the lead message is found (i.e., the index is not -1), it updates the lead message at that index.
   * The update is done by merging the existing lead message with the updated lead message.
   * The spread operator (...) is used to create a new object that contains properties of both the existing and updated lead messages.
   * In case of a conflict, the properties of the updated lead message will overwrite those of the existing lead message.
   * 
   * @param updatedLeadMessage - The updated lead message object.
   */
  function updateLeadMessageInList(updatedLeadMessage: LeadMessage) {
    const index = leadMessagesList.value.findIndex(m => m.id === updatedLeadMessage.id);
    if (index > -1) {
      leadMessagesList.value[index] = { ...leadMessagesList.value[index], ...updatedLeadMessage };
    }
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

  function setSelectedLead(leadMessage: LeadMessage) {
    selectedLead.value = leadMessage;
  }

  function upsertLeadMessage(leadMessage: LeadMessage) {
    const index = leadMessagesList.value.findIndex(m => m.id === leadMessage.id);
    if (index > -1) {
      leadMessagesList.value[index] = leadMessage;
    } else {
      leadMessagesList.value.unshift(leadMessage);
    }
  }

  return { 
    setLeadMessages, 
    addLeadMessageToList, 
    removeLeadMessageFromList,
    updateLeadMessageInList,
    leadMessagesList,
    upsertLeadMessage,
    
    selectedLeadMessageId,
    setSelectedLeadMessageId,
    removeSelectedLeadMessageId,

    selectedLead,
    setSelectedLead
  };
});
