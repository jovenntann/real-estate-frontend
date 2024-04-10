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
const selectedLead = defineModel<string>('selectedLead', { required: false })


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

interface Result {
  id: number;
  page: Page;
  lead: Lead;
  source: string;
  sender: string;
  messenger_id: string;
  message: string;
  timestamp: string;
}

interface MessagesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Result[];
}

import { storeToRefs } from 'pinia'

// Messages
import { useMessagesStore } from '~/store/messages'
import type { Message } from '~/store/messages'
const messagesStore = useMessagesStore()
const { setMessages, addMessageToList, removeMessageFromList } = messagesStore
const { messagesList } = storeToRefs(messagesStore)

const { pending, data: messages } = await useFetch<MessagesResponse>("http://localhost:8000/agent/leads/80/messages")
if (messages.value) {
  setMessages(messages.value.results);
} 


// Chats
interface ChatPage {
    id: number;
    page_name: string;
    page_id: string;
  }

  interface ChatLead {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    company: number;
    status: number;
    facebook_id: string;
  }

  interface ChatResult {
    id: number;
    page: ChatPage;
    lead: ChatLead;
    source: string;
    sender: string;
    messenger_id: string;
    message: string;
    timestamp: string;
  }

  interface ChatsResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: ChatResult[];
  }

import { useChatsStore } from '~/store/chats' 
import type { Chat } from '~/store/chats'
const chatsStore = useChatsStore()
const { setChats, addChatToList, removeChatFromList } = chatsStore
const { chatsList } = storeToRefs(chatsStore)
const { data: chats } = await useFetch<ChatsResponse>("http://localhost:8000/agent/leads/80/messages")
if (chats.value) {
  setChats(chats.value.results);
} 

</script>

<template>
  <!-- TODO: This need to be browser side compatible -->
  <ScrollArea class="h-screen flex max-h-[85vh]">
    <div class="flex-1 flex flex-col gap-2 p-4 pt-0">
      <TransitionGroup name="list" appear>
        <button
          v-for="message of messagesList"
          :key="message.id"
          :class="cn(
            'flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent',
            selectedMail === message.id.toString() && 'bg-muted',
          )"
          @click="selectedMail = message.id.toString(); selectedLead = message.lead.id.toString()"
        >
          <div class="flex w-full flex-col gap-1">
            <div class="flex items-center">
              <div class="flex items-center gap-2">
                <div class="font-semibold">
                  {{ message.lead.first_name }} {{ message.lead.last_name }}
                </div>
                <!-- <span v-if="!message.read" class="flex h-2 w-2 rounded-full bg-blue-600" /> -->
              </div>
              <div
                :class="cn(
                  'ml-auto text-xs',
                  selectedMail === message.id.toString()
                    ? 'text-foreground'
                    : 'text-muted-foreground',
                )"
              >
                {{ formatDistanceToNow(new Date(message.timestamp), { addSuffix: true }) }}
              </div>
            </div>

            <div class="text-xs font-medium">
              {{ message.lead.email }}
            </div>
          </div>
          <div class="line-clamp-2 text-xs text-muted-foreground">
            {{ message.message.substring(0, 150) }}
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
</style>