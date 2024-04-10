import { defineStore } from 'pinia';

interface Page {
  id: number;
  page_name: string;
  page_id: string;
  access_token: string;
}

interface Lead {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  company: number;
  status: number;
}

interface LeadData {
  id: number;
  page: Page;
  lead: Lead;
}

export const useLeadsStore = defineStore('leadsStore', () => {
  const leadsList = ref<LeadData[]>([]);

  function addLeadToList(lead: LeadData) {
    leadsList.value.push(lead);
  }

  function removeLeadFromList(lead: LeadData) {
    const index = leadsList.value.findIndex(l => l.id === lead.id);
    if (index > -1) {
      leadsList.value.splice(index, 1);
    }
  }

  return { addLeadToList, removeLeadFromList, leadsList };
});
