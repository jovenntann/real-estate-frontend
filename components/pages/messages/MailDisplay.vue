  <script lang="ts" setup>
  import { storeToRefs } from 'pinia'

  import { Archive, ArchiveX, Clock, Forward, MoreVertical, Reply, ReplyAll, Trash2, Loader2 } from 'lucide-vue-next'
  import { computed, watchEffect, ref, nextTick } from 'vue'
  import addDays from 'date-fns/addDays'
  import addHours from 'date-fns/addHours'
  import format from 'date-fns/format'
  import nextSaturday from 'date-fns/nextSaturday'

  const today = new Date()

  import { cn } from '@/lib/utils'
  
  // Lead Messages
  import { useLeadMessagesStore } from '~/store/leadMessages'
  const leadMessagesStore = useLeadMessagesStore()
  const { selectedLeadMessageId, selectedLead } = storeToRefs(leadMessagesStore)

  // Messages
  import { useMessagesStore } from '~/store/messages' 
  import type { MessagesResponse, Message } from '~/store/messages'
  const messagesStore = useMessagesStore()
  const { setMessages, addMessageToList, removeMessageFromList } = messagesStore
  const { messagesList } = storeToRefs(messagesStore)

  const scrollContainer: Ref<HTMLElement | null> = ref(null);

  onMounted(() => {
    scrollContainer.value = document.querySelector('.scroll-container')
  })

  watchEffect(() => {
    const fetchMessages = async () => {
      if (selectedLeadMessageId.value) {
        const { data: messages } = await useFetch<MessagesResponse>(`http://localhost:8000/agent/leads/${selectedLeadMessageId.value}/messages`)
        if (messages.value) {
          setMessages(messages.value.results);
          // Scroll to last massage
          await nextTick();
          if (messages.value && messages.value.results && messages.value.results.length > 0) {
            const el = document.querySelector(`.message-id-${messages.value.results[messages.value.results.length - 1].id}`);
            if (el) {
              el.scrollIntoView();
            }
          }
        } 
      }
    };
    fetchMessages();
  });

  // Sending Message
  const message = ref(''); 
  const isLoading = ref(false)
  const sendMessage = async () => {
    isLoading.value = true
    const payload = {
      page: 1,
      source: "messenger",
      sender: "page",
      message: message.value
    };

    const { data: response } = await useFetch<Message>(`http://localhost:8000/agent/leads/${selectedLeadMessageId.value}/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (response.value) {
      isLoading.value = false
      addMessageToList(response.value);
      // Scroll to last message
      await nextTick();
      const el = document.querySelector(`.message-id-${response.value.id}`);
      if (el) {
        el.scrollIntoView();  
      }
      // Clear message after sending
      message.value = '';
      // Set focus on Textarea
      const textarea = document.querySelector('textarea');
      if (textarea) {
        textarea.focus();
      }
    }
  };

  </script>

  <template>
    <div class="flex h-full flex-col">
      <div class="flex items-center p-2">
        <div class="flex items-center gap-2">
          <Tooltip>
            <TooltipTrigger as-child>
              <Button variant="ghost" size="icon" :disabled="!selectedLeadMessageId">
                <Archive class="size-4" />
                <span class="sr-only">Archive</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Archive</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger as-child>
              <Button variant="ghost" size="icon" :disabled="!selectedLeadMessageId">
                <ArchiveX class="size-4" />
                <span class="sr-only">Move to junk</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Move to junk</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger as-child>
              <Button variant="ghost" size="icon" :disabled="!selectedLeadMessageId">
                <Trash2 class="size-4" />
                <span class="sr-only">Move to trash</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Move to trash</TooltipContent>
          </Tooltip>
          <Separator orientation="vertical" class="mx-1 h-6" />
          <Tooltip>
            <Popover>
              <PopoverTrigger as-child>
                <TooltipTrigger as-child>
                  <Button variant="ghost" size="icon" :disabled="!selectedLeadMessageId">
                    <Clock class="size-4" />
                    <span class="sr-only">Snooze</span>
                  </Button>
                </TooltipTrigger>
              </PopoverTrigger>
              <PopoverContent class="flex w-[535px] p-0">
                <div class="flex flex-col gap-2 border-r px-2 py-4">
                  <div class="px-4 text-sm font-medium">
                    Snooze until
                  </div>
                  <div class="grid min-w-[250px] gap-1">
                    <Button
                      variant="ghost"
                      class="justify-start font-normal"
                    >
                      Later today
                      <span class="ml-auto text-muted-foreground">
                        {{ format(addHours(today, 4), "E, h:m b") }}
                      </span>
                    </Button>
                    <Button
                      variant="ghost"
                      class="justify-start font-normal"
                    >
                      Tomorrow
                      <span class="ml-auto text-muted-foreground">
                        {{ format(addDays(today, 1), "E, h:m b") }}
                      </span>
                    </Button>
                    <Button
                      variant="ghost"
                      class="justify-start font-normal"
                    >
                      This weekend
                      <span class="ml-auto text-muted-foreground">
                        {{ format(nextSaturday(today), "E, h:m b") }}
                      </span>
                    </Button>
                    <Button
                      variant="ghost"
                      class="justify-start font-normal"
                    >
                      Next week
                      <span class="ml-auto text-muted-foreground">
                        {{ format(addDays(today, 7), "E, h:m b") }}
                      </span>
                    </Button>
                  </div>
                </div>
                <div class="p-2">
                  <Calendar />
                </div>
              </PopoverContent>
            </Popover>
            <TooltipContent>Snooze</TooltipContent>
          </Tooltip>
        </div>
        <div class="ml-auto flex items-center gap-2">
          <Tooltip>
            <TooltipTrigger as-child>
              <Button variant="ghost" size="icon" :disabled="!selectedLeadMessageId">
                <Reply class="size-4" />
                <span class="sr-only">Reply</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Reply</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger as-child>
              <Button variant="ghost" size="icon" :disabled="!selectedLeadMessageId">
                <ReplyAll class="size-4" />
                <span class="sr-only">Reply all</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Reply all</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger as-child>
              <Button variant="ghost" size="icon" :disabled="!selectedLeadMessageId">
                <Forward class="size-4" />
                <span class="sr-only">Forward</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Forward</TooltipContent>
          </Tooltip>
        </div>
        <Separator orientation="vertical" class="mx-2 h-6" />
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button variant="ghost" size="icon" :disabled="!selectedLeadMessageId">
              <MoreVertical class="size-4" />
              <span class="sr-only">More</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Mark as unread</DropdownMenuItem>
            <DropdownMenuItem>Star thread</DropdownMenuItem>
            <DropdownMenuItem>Add label</DropdownMenuItem>
            <DropdownMenuItem>Mute thread</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Separator />

      <div v-if="selectedLeadMessageId" class="flex flex-1 flex-col">
        <div class="flex items-start p-4">
          <div class="flex items-start gap-4 text-sm">
            <Avatar>
              <AvatarImage :src="selectedLead?.facebook_profile_pic || 'default_image_url'" alt="@radix-vue" />
              <AvatarFallback>
                
              </AvatarFallback>
            </Avatar>
            <div class="grid gap-1">
              <div class="font-semibold">
                {{ selectedLead?.first_name }}
              </div>
              <div class="line-clamp-1 text-xs">
                {{ selectedLead?.facebook_id }}
              </div>
              <div class="line-clamp-1 text-xs">
                <span class="font-medium">Reply-To:</span> {{ selectedLead?.email }}
              </div>
            </div>
          </div>
          <div v-if="selectedLead?.last_message_at" class="ml-auto text-xs text-muted-foreground">
            {{ format(new Date(selectedLead?.last_message_at || Date.now()), "PPpp") }}
          </div>
        </div>
        <Separator />
      
        <!-- TODO: This need to be browser side compatible -->
        <ScrollArea class="h-screen flex max-h-[70vh]">
          <div class="flex-1 flex flex-col gap-2 m-4">
            <div
            v-for="(message, index) in messagesList"
            :key="index"
            :class="cn(
                `message-id-${message.id}`,
                'flex w-auto max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm text-white',
                message.sender === 'page' ? 'ml-auto bg-primary' : 'bg-muted',  
                (message.source === 'messenger' && message.sender === 'page') ? 'bg-blue-500 text-white' : (message.source === 'messenger' && message.sender === 'lead') ? 'bg-gray-200 text-black' : 'bg-green-500 text-white',
            )"
            >
            <div class="whitespace-pre-line max-w-full">{{ message.message }}</div>
            <div v-if="message.messenger_attachments">
              <div v-for="(attachment, index) in message.messenger_attachments.data" :key="index">
                <img v-if="attachment.image_data" :src="attachment.image_data.url" class="rounded-lg" style="max-width: 200px; max-height: 200px;" />
                <video v-else-if="attachment.video_data" :src="attachment.video_data.url" class="rounded-lg" controls style="max-width: 200px; max-height: 200px;"></video>
                <div v-else-if="attachment.generic_template">
                  <h3>{{ attachment.generic_template.title }}</h3>
                  <p>{{ attachment.generic_template.subtitle }}</p>
                  <img :src="attachment.generic_template.media_url" class="rounded-lg" style="max-width: 200px; max-height: 200px;" />
                </div>
              </div>
            </div>
            </div>
          </div>
        </ScrollArea>

        <Separator class="mt-auto" />
        <div class="p-4">
          <form @submit.prevent="sendMessage()">
            <div class="grid gap-4">  
              <Textarea
                class="p-4"
                v-model="message"
                :placeholder="`Reply ${selectedLead?.first_name}...`"
                :disabled="isLoading"
                @keydown.enter.prevent="sendMessage"
              />
              <div class="flex items-center">
                <Label
                  html-for="mute"
                  class="flex items-center gap-2 text-xs font-normal"
                >
                  <Switch id="mute" aria-label="Mute thread" /> Mute this
                  thread
                </Label>
                <Button
                  type="submit"
                  size="sm"
                  class="ml-auto"
                  :disabled="isLoading"
                  @click="sendMessage"
                >
                  <Loader2 v-if="isLoading" class="w-4 h-4 mr-2 animate-spin" />  
                  <span v-if="!isLoading">Send</span>
                  <span v-else>Sending</span>
                </Button>
              </div>
            </div>
          </form>
        </div>  
      </div>


      <div v-else class="p-8 text-center text-muted-foreground">
        No message selected
      </div>


    </div>
  </template>