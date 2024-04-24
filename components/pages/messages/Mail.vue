<script lang="ts" setup>
import {
  Search,
  ListFilter
} from 'lucide-vue-next'

import { computed, ref } from 'vue'
import { refDebounced } from '@vueuse/core'
import type { Mail } from './data/mails'
import MailList from './MailList.vue'
import MailDisplay from './MailDisplay.vue'
import MailDetail from './MailDetail.vue'
import CardChat from './CardChat.vue'

const { public: { apiEndpoint } } = useRuntimeConfig();

// Company
import { useCompanyStore } from '~/store/company';
const companyStore = useCompanyStore()
const { company } = storeToRefs(companyStore)

// Lead Messages
import { useLeadMessagesStore } from '~/store/leadMessages'
import type { LeadMessagesResponse, LeadMessage } from '~/store/leadMessages'
const leadMessagesStore = useLeadMessagesStore()
const { setLeadMessages, addLeadMessageToList, removeLeadMessageFromList, setSelectedLeadMessageId, setSelectedLead, setSelectedLeadStatus, setSelectedLeadNextAction } = leadMessagesStore
const { leadMessagesList, selectedLeadMessageId, selectedLeadNextAction, selectedLeadStatus } = storeToRefs(leadMessagesStore)

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

interface MailProps {
  accounts: {
    label: string
    email: string
    icon: string
  }[]
  mails: Mail[]
  defaultLayout?: number[]
  defaultCollapsed?: boolean
  navCollapsedSize: number
}

const props = withDefaults(defineProps<MailProps>(), {
  defaultCollapsed: false,
  defaultLayout: () => [20, 60, 20],
})  

const isCollapsed = ref(props.defaultCollapsed)
const selectedMail = ref<string | undefined>(props.mails[0].id)

const searchValue = ref('')
const debouncedSearch = refDebounced(searchValue, 250)

const filteredMailList = computed(() => {
  let output: Mail[] = []
  const searchValue = debouncedSearch.value?.trim()
  if (!searchValue) {
    output = props.mails
  }

  else {
    output = props.mails.filter((item) => {
      return item.name.includes(debouncedSearch.value)
        || item.email.includes(debouncedSearch.value)
        || item.name.includes(debouncedSearch.value)
        || item.subject.includes(debouncedSearch.value)
        || item.text.includes(debouncedSearch.value)
    })
  }

  return output
})

const unreadMailList = computed(() => filteredMailList.value.filter(item => !item.read))

const selectedMailData = computed(() => {
  const mailData = props.mails.find(item => item.id === selectedMail.value);
  console.log(`Selected Mail Value: ${selectedMail.value}`);
  return mailData;
})

function onCollapse() {
  isCollapsed.value = true
}

function onExpand() {
  isCollapsed.value = false
}


async function updateLeadStatusAndAction(selectedLeadStatus: string, selectedLeadNextAction: string) {
  const leadMessages = await $fetch(`${apiEndpoint}/agent/leads/messages?status__status=${selectedLeadStatus}&next_action__action=${selectedLeadNextAction}`);
  console.log(leadMessages)
  if (leadMessages) {
    // Set Lead Messages
    setLeadMessages(leadMessages.results);
    // Let us set the first value from results
    setSelectedLeadMessageId(leadMessages.results[0].id)
    fetchLeadRecord(leadMessages.results[0].id);
    // Set Selected Lead for Lead Details
    setSelectedLead(leadMessages.results[0])
  }
}


const localSelectedLeadStatus = ref<string | undefined>('')
const localSelectedLeadNextAction = ref<string | undefined>('')

watch(localSelectedLeadStatus, async (newValue, oldValue) => {
  setSelectedLeadStatus(newValue)
  await updateLeadStatusAndAction(newValue, localSelectedLeadNextAction.value);
});

watch(localSelectedLeadNextAction, async (newValue, oldValue) => {
  setSelectedLeadNextAction(newValue)
  await updateLeadStatusAndAction(localSelectedLeadStatus.value, newValue);
});


</script>

<template>  
  <TooltipProvider :delay-duration="0">
    <ResizablePanelGroup
      id="resize-panel-group-1"
      direction="horizontal"
      class="h-full items-stretch" :style="{ maxHeight: 'calc(100vh - 70px)' }"
    >
      <ResizablePanel id="resize-panel-1" :default-size="defaultLayout[0]" :min-size="10" :max-size="30">
        <Tabs default-value="all">
          <div class="flex items-center px-4 py-2">
            <h1 class="text-xl font-bold">
              Messages
            </h1>
            <TabsList class="ml-auto">
              <TabsTrigger value="all" class="text-zinc-600 dark:text-zinc-200">  
                All messages
              </TabsTrigger>
              <TabsTrigger value="unread" class="text-zinc-600 dark:text-zinc-200">
                Unread
              </TabsTrigger>
            </TabsList>
          </div>
          <Separator />
          <div class="bg-background/95 p-2 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <form>
              <div class="relative">
                <Search class="absolute left-2 top-2.5 size-4 text-muted-foreground" />
                <Input v-model="searchValue" placeholder="Search" class="pl-8" />
              </div>
            </form>
            <div class="flex mt-2 space-x-1">
              <Select v-model="localSelectedLeadStatus">
                <SelectTrigger>
                  <SelectValue placeholder="Select Lead Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem 
                      v-for="status in company.lead_statuses" 
                      :value="status.status">
                      {{ status.status }}
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select  v-model="localSelectedLeadNextAction">
                <SelectTrigger>
                  <SelectValue placeholder="Select Next Action" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem 
                      v-for="action in company.lead_next_actions" 
                      :value="action.action">
                      {{ action.action }}
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
          </div>
          </div>
          <Separator />
          <TabsContent value="all" class="mt-2">
            <MailList 
              v-model:selected-mail="selectedMail" 
              :items="filteredMailList" 
            />
          </TabsContent>
          <!-- <TabsContent value="unread" class="m-0">
            <MailList v-model:selected-mail="selectedMail" :items="unreadMailList" />
          </TabsContent> -->
        </Tabs>
      </ResizablePanel>
      <ResizableHandle id="resize-handle-1" with-handle />
      <ResizablePanel id="resize-panel-2" :default-size="defaultLayout[1]">
        <MailDisplay :mail="selectedMailData" />
      </ResizablePanel>
      <ResizableHandle id="resize-handle-2" with-handle />
      <ResizablePanel id="resize-panel-3" :default-size="defaultLayout[2]" :min-size="20" :max-size="30">
        <MailDetail />
      </ResizablePanel>
    </ResizablePanelGroup>
  </TooltipProvider>
</template>