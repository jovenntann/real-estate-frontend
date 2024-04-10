  <script lang="ts" setup>
  import { Archive, ArchiveX, Clock, Forward, MoreVertical, Reply, ReplyAll, Trash2 } from 'lucide-vue-next'
  import { computed } from 'vue'
  import addDays from 'date-fns/addDays'
  import addHours from 'date-fns/addHours'
  import format from 'date-fns/format'
  import nextSaturday from 'date-fns/nextSaturday'
  import type { Mail } from './data/mails'

  interface MailDisplayProps {
    mail: Mail | undefined,
  }

  const props = defineProps<MailDisplayProps>()

  const mailFallbackName = computed(() => {
    return props.mail?.name
      .split(' ')
      .map(chunk => chunk[0])
      .join('')
  })

  const today = new Date()

  import { cn } from '@/lib/utils'

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
  const chatsStore = useChatsStore()
  const { setChats, addChatToList, removeChatFromList } = chatsStore
  const { chatsList } = storeToRefs(chatsStore)

  </script>

  <template>
    <div class="flex h-full flex-col">
      <div class="flex items-center p-2">
        <div class="flex items-center gap-2">
          <Tooltip>
            <TooltipTrigger as-child>
              <Button variant="ghost" size="icon" :disabled="!mail">
                <Archive class="size-4" />
                <span class="sr-only">Archive</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Archive</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger as-child>
              <Button variant="ghost" size="icon" :disabled="!mail">
                <ArchiveX class="size-4" />
                <span class="sr-only">Move to junk</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Move to junk</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger as-child>
              <Button variant="ghost" size="icon" :disabled="!mail">
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
                  <Button variant="ghost" size="icon" :disabled="!mail">
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
              <Button variant="ghost" size="icon" :disabled="!mail">
                <Reply class="size-4" />
                <span class="sr-only">Reply</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Reply</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger as-child>
              <Button variant="ghost" size="icon" :disabled="!mail">
                <ReplyAll class="size-4" />
                <span class="sr-only">Reply all</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Reply all</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger as-child>
              <Button variant="ghost" size="icon" :disabled="!mail">
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
            <Button variant="ghost" size="icon" :disabled="!mail">
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

      <div v-if="mail" class="flex flex-1 flex-col">
        <div class="flex items-start p-4">
          <div class="flex items-start gap-4 text-sm">
            <Avatar>
              <AvatarFallback>
                {{ mailFallbackName }}
              </AvatarFallback>
            </Avatar>
            <div class="grid gap-1">
              <div class="font-semibold">
                {{ mail.name }}
              </div>
              <div class="line-clamp-1 text-xs">
                {{ mail.subject }}
              </div>
              <div class="line-clamp-1 text-xs">
                <span class="font-medium">Reply-To:</span> {{ mail.email }}
              </div>
            </div>
          </div>
          <div v-if="mail.date" class="ml-auto text-xs text-muted-foreground">
            {{ format(new Date(mail.date), "PPpp") }}
          </div>
        </div>
        <Separator />
      
        <!-- TODO: This need to be browser side compatible -->
        <ScrollArea class="h-screen flex max-h-[70vh]">
          <div class="flex-1 flex flex-col gap-2 m-4">
            <div
            v-for="(message, index) in chatsList"
            :key="index"
            :class="cn(
                'flex w-auto max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm text-white',
                message.sender === 'page' ? 'ml-auto bg-primary' : 'bg-muted',
                message.source === 'messenger' ? 'bg-blue-500' : 'bg-green-500',
            )"
            >
            <div class="whitespace-pre-line max-w-full">{{ message.message }}</div>
            </div>
          </div>
        </ScrollArea>

        <Separator class="mt-auto" />
        <div class="p-4">
          <form>
            <div class="grid gap-4">
              <Textarea
                class="p-4"
                :placeholder="`Reply ${mail.name}...`"
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
                  type="button"
                  size="sm"
                  class="ml-auto"
                >
                  Send
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