<script lang="ts" setup>
import {
  Search,
} from 'lucide-vue-next'

import { computed, ref } from 'vue'
import { refDebounced } from '@vueuse/core'
import type { Mail } from './data/mails'
import MailList from './MailList.vue'
import MailDisplay from './MailDisplay.vue'

import CardChat from './CardChat.vue'

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
  defaultLayout: () => [ 265, 655],
})  

const isCollapsed = ref(props.defaultCollapsed)
const selectedMail = ref<string | undefined>(props.mails[0].id)
const selectedLead = ref<string | undefined>('80')

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

const selectedLeadData = computed(() => {
  const newValue = selectedLead.value || '80'
  console.log(`Selected Lead Value: ${newValue}`);
  return newValue;
})

function onCollapse() {
  isCollapsed.value = true
}

function onExpand() {
  isCollapsed.value = false
}
</script>

<template>  
  <TooltipProvider :delay-duration="0">
    <ResizablePanelGroup
      id="resize-panel-group-1"
      direction="horizontal"
      class="h-full items-stretch" :style="{ maxHeight: 'calc(100vh - 120px)' }"
    >
      <ResizablePanel id="resize-panel-1" :default-size="defaultLayout[0]" :min-size="10" :max-size="30">
        <Tabs default-value="all">
          <div class="flex items-center px-4 py-2">fResizablePanel
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
          <div class="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <form>
              <div class="relative">
                <Search class="absolute left-2 top-2.5 size-4 text-muted-foreground" />
                <Input v-model="searchValue" placeholder="Search" class="pl-8" />
              </div>
            </form>
          </div>
          <TabsContent value="all" class="m-0">
            <MailList 
              v-model:selected-mail="selectedMail" 
              v-model:selected-lead="selectedLead" 
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
        <MailDisplay :mail="selectedMailData" :selectedLead="selectedLeadData" />
        <!-- <CardChat/> -->
      </ResizablePanel>
    </ResizablePanelGroup>
  </TooltipProvider>
</template>