<script setup lang="ts">
import { CheckIcon, PaperPlaneIcon, PlusIcon } from '@radix-icons/vue'
import { computed, ref } from 'vue'
import { cn } from '@/lib/utils'

const input = ref('')
const inputLength = computed(() => input.value.trim().length)
const users = ref([
  {
    name: 'Olivia Martin',
    email: 'm@example.com',
    avatar: '/avatars/01.png',
  },
  {
    name: 'Isabella Nguyen',
    email: 'isabella.nguyen@email.com',
    avatar: '/avatars/03.png',
  },
  {
    name: 'Emma Wilson',
    email: 'emma@example.com',
    avatar: '/avatars/05.png',
  },
  {
    name: 'Jackson Lee',
    email: 'lee@example.com',
    avatar: '/avatars/02.png',
  },
  {
    name: 'William Kim',
    email: 'will@email.com',
    avatar: '/avatars/04.png',
  },
])

type User = (typeof users.value)[number]

const messages = ref([
  { role: 'agent', content: 'Hi, how can I help you today?' },
  { role: 'user', content: 'Hey, I\'m having trouble with my account.' },
  { role: 'agent', content: 'What seems to be the problem?' },
  { role: 'user', content: 'I can\'t log in.' },
])

const open = ref(false)
const selectedUsers = ref<User[]>([])
</script>

<template>
<ScrollArea class="h-screen flex">
    <div class="flex-1 flex flex-col gap-2 p-4 pt-0">
    <Card>
        <CardHeader class="flex flex-row items-center justify-between">
        <div class="flex items-center space-x-4">
            <Avatar>
            <AvatarImage src="/avatars/01.png" alt="Image" />
            <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div>
            <p class="text-sm font-medium leading-none">
                Sofia Davis
            </p>
            <p class="text-sm text-muted-foreground">
                m@example.com
            </p>
            </div>
        </div>
        <TooltipProvider>
            <Tooltip :delay-duration="200">
            <TooltipTrigger as-child>
                <Button
                variant="outline"
                class="rounded-full p-2.5 flex items-center justify-center"
                @click="open = true"
                >
                <PlusIcon class="w-4 h-4" />
                </Button>
            </TooltipTrigger>
            <TooltipContent :side-offset="10">
                New message
            </TooltipContent>
            </Tooltip>
        </TooltipProvider>
        </CardHeader>
        <CardContent>
        <div class="space-y-4">
            <div
            v-for="(message, index) in messages"
            :key="index"
            :class="cn(
                'flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm',
                message.role === 'user' ? 'ml-auto bg-primary text-primary-foreground' : 'bg-muted',
            )"
            >
            {{ message.content }}
            </div>
        </div>
        </CardContent>
        <CardFooter>
        <form
            class="flex w-full items-center space-x-2"
            @submit.prevent="() => {
            if (inputLength === 0) return
            messages.push({
                role: 'user',
                content: input,
            })
            }"
        >
            <Input v-model="input" placeholder="Type a message..." class="flex-1" />
            <Button class="p-2.5 flex items-center justify-center" :disabled="inputLength === 0">
            <PaperPlaneIcon class="w-4 h-4" />
            <span class="sr-only">Send</span>
            </Button>
        </form>
        </CardFooter>
    </Card>
    </div>
</ScrollArea>S
</template>