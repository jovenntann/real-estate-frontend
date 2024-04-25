<script lang="ts" setup>
import { Loader2 } from 'lucide-vue-next'
import { formatDistanceToNow } from 'date-fns'
import type { Mail } from './data/mails'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { onMounted, ref, nextTick } from 'vue'

interface MailListProps {
  items: Mail[]
}

defineProps<MailListProps>()

const selectedMail = defineModel<string>('selectedMail', { required: false })

import { storeToRefs } from 'pinia'
const { public: { apiEndpoint } } = useRuntimeConfig();
  
// Lead Messages
import { useLeadMessagesStore } from '~/store/leadMessages'
import type { LeadMessagesResponse, LeadMessage } from '~/store/leadMessages'
const leadMessagesStore = useLeadMessagesStore()
const { setLeadMessages, addLeadMessageToList, removeLeadMessageFromList, setSelectedLeadMessageId, setSelectedLead, setSelectedLeadStatus, setSelectedLeadNextAction, setNextPage } = leadMessagesStore
const { leadMessagesList, selectedLeadMessageId, selectedLeadNextAction, selectedLeadStatus, nextPage } = storeToRefs(leadMessagesStore)

// Lead 
import { useLeadsStore } from '~/store/leads'
const leadStore = useLeadsStore()
const { lead } = storeToRefs(leadStore)
const { addLead, getLead } = leadStore

const fetchLeadRecord = async (leadId: number) => {
  const leadRecord = await $fetch(`${apiEndpoint}/agent/leads/${leadId}`)
  if (leadRecord) {
    addLead(leadRecord);
  }
}

// Onload: fetch Company data for this Agent
import { useCompanyStore } from '~/store/company';
const companyStore = useCompanyStore()
const { company } = storeToRefs(companyStore)
const { setCompany } = companyStore;

const { data: companyData } = await useFetch(`${apiEndpoint}/agent/system/company`)
if (companyData.value) {
  setCompany(companyData.value);
}

// Onload: fetch Messages
const { data: leadMessages } = await useFetch<LeadMessagesResponse>(`${apiEndpoint}/agent/leads/messages`)
if (leadMessages.value) {
  // Set Lead Messages
  setLeadMessages(leadMessages.value.results);
  // Let us set the first value from results
  setSelectedLeadMessageId(leadMessages.value.results[0].id)
  fetchLeadRecord(leadMessages.value.results[0].id);
  // Set Selected Lead for Lead Details
  setSelectedLead(leadMessages.value.results[0])
}

// Events
const handleButtonClick = async (leadMessageId: number, leadMessage: LeadMessage) => {
  setSelectedLeadMessageId(leadMessageId)
  setSelectedLead(leadMessage)
  fetchLeadRecord(leadMessageId);
}

// Infinite Scroll
const loadMoreRef = ref(null);
const isLoadingMoreMessages = ref(false)

const loadMoreLeadMessages = async () => {
  if (isLoadingMoreMessages.value) return;
  isLoadingMoreMessages.value = true;
  try {
    // Fetch more lead messages from the server
    const moreLeadMessages = await $fetch(`${apiEndpoint}/agent/leads/messages?page=${nextPage.value}&status__status=${selectedLeadStatus.value ? selectedLeadStatus.value : ''}&next_action__action=${selectedLeadNextAction.value ? selectedLeadNextAction.value : ''}`);
    if (moreLeadMessages) {
      // Append the new lead messages to the existing list
      setLeadMessages([...leadMessagesList.value, ...moreLeadMessages.results]);
      nextPage.value++; // Increment nextPage for the next load
    }
  } catch (error: any) {
    if (error.response) {
      // Stop loading more lead messages when a 404 status code is returned
      isLoadingMoreMessages.value = false;
    }
  } finally {
    isLoadingMoreMessages.value = false;
  }
}

onMounted(() => {
  // Reset Pagination and Filter on Page load
  setNextPage(2)
  setSelectedLeadStatus(null)
  setSelectedLeadNextAction(null)
  // alert("Browser Alert: The page has been loaded successfully!");
  const observer = new IntersectionObserver(async ([entry]) => {
    if (entry.isIntersecting) {
      await loadMoreLeadMessages();
    }
  });

  if (loadMoreRef.value) {
    observer.observe(loadMoreRef.value);
  }
});
</script>

<template>
  <!-- TODO: This need to be browser side compatible -->
  <ScrollArea class="h-screen flex max-h-[85vh]">
    <div class="flex-1 flex flex-col gap-2 p-4 pt-0">
      <TransitionGroup name="list" appear>
        <button v-for="leadMessage of leadMessagesList" :key="leadMessage.id" :class="cn(
          'flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent',
          selectedLeadMessageId === leadMessage.id && 'bg-muted',
        )" @click="handleButtonClick(leadMessage.id, leadMessage)">
          <div class="flex w-full flex-col gap-1">
            <div class="flex items-center">
              <div class="flex items-center gap-2">
                <img :src="leadMessage.facebook_profile_pic" alt="Profile Picture" class="rounded-full h-10 w-10">
                <div class="font-semibold">
                  {{ leadMessage.first_name }} {{ leadMessage.last_name }}
                </div>
                <span v-if="!leadMessage.last_message.is_read" class="flex h-2 w-2 rounded-full bg-blue-600" />
              </div>
              <div :class="cn(
                  'ml-auto text-xs',
                  selectedLeadMessageId === leadMessage.id
                    ? 'text-foreground'
                    : 'text-muted-foreground',
                )">
                {{ formatDistanceToNow(new Date(leadMessage.last_message_at), { addSuffix: true }) }}
              </div>  
            </div>
            <div class="text-xs font-medium">
              {{ leadMessage.email }}
            </div>
          </div>
          <div class="line-clamp-2 text-xs text-muted-foreground">
            <div v-if="leadMessage.last_message.sender === 'page'">
              You: {{ leadMessage.last_message.message.substring(0, 100) || 'Attachments' }}
            </div>
            <div v-else>
              {{ leadMessage.last_message.message.substring(0, 100) || 'Attachments' }}
            </div>
          </div>
          <div class="flex items-center gap-2">
            <div v-if="leadMessage.status !== null && leadMessage.status.color">
              <Badge :class="leadMessage.status.color">
                {{ leadMessage.status.status }}
              </Badge>
            </div>
            <div v-if="leadMessage.next_action !== null && leadMessage.next_action.color && leadMessage.next_action.action !== 'None'">
              <Badge :class="leadMessage.next_action.color">
                {{ leadMessage.next_action.action }}
              </Badge>
            </div>
          </div>
        </button>
      </TransitionGroup>
      <div ref="loadMoreRef" class="text-center py-2">
        <Button class="w-full" :disabled="isLoadingMoreMessages" @click="loadMoreLeadMessages">
          <Loader2 v-if="isLoadingMoreMessages" class="w-4 h-4 mr-2 animate-spin" />
          <span v-if="!isLoadingMoreMessages">Load More</span>
          <span v-else>Loading...</span>  
        </Button>
      </div>
    </div>
  </ScrollArea>
</template>

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(15px);
}

.list-leave-active {
  position: absolute;
}
</style>
