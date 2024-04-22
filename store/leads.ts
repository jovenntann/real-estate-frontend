import { defineStore } from 'pinia';

export interface Company {
  id: number;
  company_name: string;
  address: string;
  phone_number: string;
  company_size: number;
  industry: string;
}

export interface Status {
  id: number;
  status: string;
  color: "default" | "secondary" | "destructive" | "outline";
  description: string | null;
}

export interface NextAction {
  id: number;
  action: string;
  color: "default" | "secondary" | "destructive" | "outline";
  description: string | null;
}

export interface LastMessage {
  id: number;
  source: string;
  sender: string;
  message: string;
  is_read: boolean;
  timestamp: string;
}

export interface Lead {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string | null;
  company: Company;
  status: Status;
  next_action: NextAction;
  facebook_id: string,
  facebook_profile_pic: string,
  last_message_at: string,
  last_message: LastMessage;
}

export interface LeadResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Lead[];
}

export const useLeadsStore = defineStore('leadsStore', () => {
  const leadsList = ref<Lead[]>([]);
  const lead = ref<Lead | null>(null);

  function addLeadToList(lead: Lead) {
    leadsList.value.push(lead);
  }

  function removeLeadFromList(lead: Lead) {
    const index = leadsList.value.findIndex(l => l.id === lead.id);
    if (index > -1) {
      leadsList.value.splice(index, 1);
    }
  }

  function addLead(newLead: Lead) {
    lead.value = newLead;
  }

  function setLead(newLead: Lead) {
    lead.value = newLead;
  }

  function getLead(id: number) {
    const foundLead = leadsList.value.find(l => l.id === id);
    if (foundLead) {
      lead.value = foundLead;
    }
  }

  return { addLeadToList, removeLeadFromList, leadsList, lead, addLead, getLead, setLead };
});
