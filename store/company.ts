import { defineStore } from 'pinia';

export interface Company {
  id: number;
  company_name: string;
  address: string;
  phone_number: string;
  company_size: number;
  industry: string;
  lead_statuses: Status[];
  lead_message_statuses: MessageStatus[];
  lead_next_actions: NextAction[];
}

export interface Status {
  id: number;
  status: string;
  color: "default" | "secondary" | "destructive" | "outline";
  description: string | null;
}

export interface MessageStatus {
  id: number;
  status: string;
  description: string;
}

export interface NextAction {
  id: number;
  action: string;
  color: "default" | "secondary" | "destructive" | "outline";
  description: string | null;
}

export const useCompanyStore = defineStore('companyStore', () => {
  const company = ref<Company | null>(null);

  function setCompany(newCompany: Company) {
    company.value = newCompany;
  }

  return { company, setCompany };
});
