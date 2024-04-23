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


const selectedLeadStatus = ref<string | undefined>('')

watch(selectedLeadStatus, (newValue, oldValue) => {
  alert(`The selected lead status has been changed from ${oldValue} to ${newValue}`);
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
              <Select v-model="selectedLeadStatus">
                <SelectTrigger>
                  <SelectValue placeholder="Select Lead Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="0">
                      All
                    </SelectItem>
                    <SelectItem value="1">
                      Interested
                    </SelectItem>
                    <SelectItem value="2">
                      Qualified
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Next Action" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="all">
                      All
                    </SelectItem>
                    <SelectItem value="apple">
                      Follow-up
                    </SelectItem>
                    <SelectItem value="waiting">
                      Waiting
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