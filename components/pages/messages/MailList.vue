<script lang="ts" setup>
import { formatDistanceToNow } from 'date-fns'
import type { Mail } from './data/mails'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

interface MailListProps {
  items: Mail[]
}

defineProps<MailListProps>()

const selectedMail = defineModel<string>('selectedMail', { required: false })


import { storeToRefs } from 'pinia'

// Lead Messages
import { useLeadMessagesStore } from '~/store/leadMessages'
import type { LeadMessagesResponse } from '~/store/leadMessages'
const leadMessagesStore = useLeadMessagesStore()
const { setLeadMessages, addLeadMessageToList, removeLeadMessageFromList, setSelectedLeadMessageId } = leadMessagesStore
const { leadMessagesList, selectedLeadMessageId } = storeToRefs(leadMessagesStore)

const { pending, data: leadMessages } = await useFetch<LeadMessagesResponse>("http://localhost:8000/agent/messages")
if (leadMessages.value) {
  setLeadMessages(leadMessages.value.results);
  // Let us set the first value from results
  setSelectedLeadMessageId(leadMessages.value.results[0].lead.id)
} 

const handleButtonClick = async (leadMessageId: number) => {
  setSelectedLeadMessageId(leadMessageId)
}
</script>

<template>
  <!-- TODO: This need to be browser side compatible -->
  <ScrollArea class="h-screen flex max-h-[85vh]">
    <div class="flex-1 flex flex-col gap-2 p-4 pt-0">
      <TransitionGroup name="list" appear>
        <button
          v-for="leadMessage of leadMessagesList"
          :key="leadMessage.id"
          :class="cn(
            'flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent',
            selectedMail === leadMessage.id.toString() && 'bg-muted',
          )"
          @click="handleButtonClick(leadMessage.lead.id)"
        >
          <div class="flex w-full flex-col gap-1">
            <div class="flex items-center">
              <div class="flex items-center gap-2">
                <div class="font-semibold">
                  {{ leadMessage.lead.first_name }} {{ leadMessage.lead.last_name }}
                </div>
                <!-- <span v-if="!message.read" class="flex h-2 w-2 rounded-full bg-blue-600" /> -->
              </div>
              <div
                :class="cn(
                  'ml-auto text-xs',
                  selectedMail === leadMessage.id.toString()
                    ? 'text-foreground'
                    : 'text-muted-foreground',
                )"
              >
                {{ formatDistanceToNow(new Date(leadMessage.timestamp), { addSuffix: true }) }}
              </div>
            </div>

            <div class="text-xs font-medium">
              {{ leadMessage.lead.email }}
            </div>
          </div>
          <div class="line-clamp-2 text-xs text-muted-foreground">
            {{ leadMessage.message.substring(0, 150) }}
          </div>
          <div class="flex items-center gap-2">
            <!-- <Badge v-for="label of message.labels" :key="label" :variant="getBadgeVariantFromLabel(label)">
              {{ label }}
            </Badge> -->
          </div>
        </button>
      </TransitionGroup>
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
</style>~/store/leadMessages~/store/leadMessages