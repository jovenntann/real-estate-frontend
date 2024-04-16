<script setup lang="ts">
import { UserButton } from 'vue-clerk'
// Clerk Guard
const { data: user } = await useFetch('/api/protected', {
  headers: useRequestHeaders(),
})
if (!user.value)
  navigateTo('/sign-in')

// Pusher Store Events
import { usePusherEventsStore } from '~/store/pusherEvents';
usePusherEventsStore();

import { CircleUser, Menu, Package2, Search, Users } from 'lucide-vue-next';
import { Bell, Home, Mail, Package, LineChart } from 'lucide-vue-next'
import { Icon } from '@iconify/vue'
const colorMode = useColorMode()

</script>

<template>
  <div class="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
    <div class="hidden border-r bg-muted/40 md:block">
      <div class="flex h-full max-h-screen flex-col gap-2">
        <div class="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <a href="/" class="flex items-center gap-2 font-semibold">
            <Package2 class="h-6 w-6" />  
            <span class="">Tappy Inc.</span>
          </a>
          <Button variant="outline" size="icon" class="ml-auto h-8 w-8">
            <Bell class="h-4 w-4" />
            <span class="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div class="flex-1">
          <nav class="grid items-start px-2 text-sm font-medium lg:px-4">
            <NuxtLink
                to="/dashboard"
                activeClass="text-foreground bg-muted"
                class="flex items-center gap-3 rounded-lg px-3 py-2 mt-1 mb-1 text-muted-foreground transition-all hover:text-primary"
                >
                <Home class="h-4 w-4" />
                Dashboard
            </NuxtLink>
            <!-- <div class="mt-4 mb-2 px-2 text-xs font-medium lg:px-4">
              <span class="text-xs text-gray-500">LEAD MANAGEMENT</span>
            </div> -->
            <NuxtLink
              to="/leads"
              activeClass="text-foreground bg-muted"
              class="flex items-center gap-3 rounded-lg px-3 py-2 mt-1 mb-1 text-muted-foreground transition-all hover:text-primary"
            >
              <Users class="h-4 w-4" />
              Leads
            </NuxtLink>
            <NuxtLink
              to="/messages"
              activeClass="text-foreground bg-muted"
              class="flex items-center gap-3 rounded-lg px-3 py-2  mt-1 mb-1 text-muted-foreground transition-all hover:text-primary"
            >
              <Mail class="h-4 w-4" />
              Messages
              <Badge class="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                6
              </Badge>
            </NuxtLink>
            <NuxtLink
              to="/products"
              activeClass="text-foreground bg-muted"
              class="flex items-center gap-3 rounded-lg px-3 py-2 mt-1 mb-1  text-muted-foreground transition-all hover:text-primary"
            >
              <Package class="h-4 w-4" />
              Products
            </NuxtLink>
            <NuxtLink
              to="/analytics"
              activeClass="text-foreground bg-muted"
              class="flex items-center gap-3 rounded-lg px-3 py-2 mt-1 mb-1  text-muted-foreground transition-all hover:text-primary"
            >
              <LineChart class="h-4 w-4" />
              Analytics
            </NuxtLink>
          </nav>
        </div>
        <div class="mt-auto p-4">
          <Card>
            <CardHeader class="p-2 pt-0 md:p-4">
              <CardTitle>Upgrade to Pro</CardTitle>
              <CardDescription>
                Unlock all features and get unlimited access to our support
                team.
              </CardDescription>
            </CardHeader>
            <CardContent class="p-2 pt-0 md:p-4 md:pt-0">
              <Button size="sm" class="w-full">
                Upgrade
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    <div class="flex flex-col">
      <header class="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
        <Sheet>
          <SheetTrigger as-child>
            <Button
              variant="outline"
              size="icon"
              class="shrink-0 md:hidden"
            >
              <Menu class="h-5 w-5" />
              <span class="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" class="flex flex-col">
            <nav class="grid gap-2 text-lg font-medium">
              <NuxtLink
                to="/"
                class="flex items-center gap-2 text-lg font-semibold"
              >
                <Package2 class="h-6 w-6" />
                <span class="sr-only">Acme Inc</span>
              </NuxtLink>
              <NuxtLink
                to="/dashboard"
                activeClass="text-foreground bg-muted"
                class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <Home class="h-5 w-5" />
                Dashboard
              </NuxtLink>
              <NuxtLink
                to="/leads"
                activeClass="text-foreground bg-muted"
                class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <Users class="h-5 w-5" />
                Leads
              </NuxtLink>
              <NuxtLink
                to="/messages"
                activeClass="text-foreground bg-muted"
                class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <Mail class="h-5 w-5" />
                Messages
                <Badge class="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  6
                </Badge>
              </NuxtLink>
              <NuxtLink
                to="/products"
                activeClass="text-foreground bg-muted"
                class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <Package class="h-5 w-5" />
                Products
              </NuxtLink>
              <NuxtLink
                to="/analytics"
                activeClass="text-foreground bg-muted"
                class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <LineChart class="h-5 w-5" />
                Analytics
              </NuxtLink>
            </nav>
            <div class="mt-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Upgrade to Pro</CardTitle>
                  <CardDescription>
                    Unlock all features and get unlimited access to our
                    support team.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button size="sm" class="w-full">
                    Upgrade
                  </Button>
                </CardContent>
              </Card>
            </div>
          </SheetContent>
        </Sheet>
        <div class="w-full flex-1">
          <form>
            <div class="relative">
              <Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                class="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
              />
            </div>
          </form>
        </div>
        <!-- <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button variant="secondary" size="icon" class="rounded-full">
              <CircleUser class="h-5 w-5" />
              <span class="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem> 
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu> -->

        <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="outline">
            <Icon icon="radix-icons:moon" class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Icon icon="radix-icons:sun" class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span class="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem @click="colorMode.preference = 'light'">
            Light
          </DropdownMenuItem>
          <DropdownMenuItem @click="colorMode.preference = 'dark'">
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem @click="colorMode.preference = 'system'">
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <UserButton after-sign-out-url="/sign-in" />
      
      </header>

        <!-- Main Section  -->
        <slot/>
        <!-- End of Main Section -->

    </div>
  </div>
</template>

