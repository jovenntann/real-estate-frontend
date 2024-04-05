<script setup lang="ts">
import {
  Bell,
  CircleUser,
  Copy,
  CreditCard,
  Menu,
  File,
  Home,
  LineChart,
  ListFilter,
  MoreVertical,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Truck,
  Users,
} from 'lucide-vue-next'

import { Icon } from '@iconify/vue'
const colorMode = useColorMode()

interface Lead {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  company: number;
  status: number;
}

interface LeadsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Lead[];
}

// Loading effect before navigating to this Page
const { pending, data: leads } = useFetch("http://localhost:8000/agent/leads", {
  lazy: true
})

// SAMPLE RESPONSE: DO NOT REMOVE for CURSOR REFERENCE
// {
//   "count": 1,
//   "next": "http://localhost:8000/agent/leads?page=2",
//   "previous": null,
//   "results": [
//     {
//       "id": 1,
//       "first_name": "David",
//       "last_name": "Williams",
//       "email": "ariel62@example.com",
//       "phone_number": "(508)816-2220",
//       "company": 1,
//       "status": 1
//     },
//   ]
// }


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
              class="flex items-center gap-3 rounded-lg px-3 py-2 mt-4 mb-4 text-primary transition-all hover:text-primary"
            >
              <Home class="h-4 w-4" />
              Dashboard
            </NuxtLink>
            <div class="mt-4 mb-2 px-2 text-xs font-medium lg:px-4">
              <span class="text-xs text-gray-500">LEAD MANAGEMENT</span>
            </div>
            <NuxtLink
              to="#"
              class="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 mt-1 mb-1 text-primary transition-all hover:text-primary"
            >
              <Users class="h-4 w-4" />
              Leads
            </NuxtLink>
            <a
              href="#"
              class="flex items-center gap-3 rounded-lg px-3 py-2  mt-1 mb-1 text-muted-foreground transition-all hover:text-primary"
            >
              <ShoppingCart class="h-4 w-4" />
              Orders
              <Badge class="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                6
              </Badge>
            </a>
            <a
              href="#"
              class="flex items-center gap-3 rounded-lg px-3 py-2 mt-1 mb-1  text-muted-foreground transition-all hover:text-primary"
            >
              <Package class="h-4 w-4" />
              Products
            </a>

            <a
              href="#"
              class="flex items-center gap-3 rounded-lg px-3 py-2 mt-1 mb-1  text-muted-foreground transition-all hover:text-primary"
            >
              <LineChart class="h-4 w-4" />
              Analytics
            </a>
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
              <a
                href="#"
                class="flex items-center gap-2 text-lg font-semibold"
              >
                <Package2 class="h-6 w-6" />
                <span class="sr-only">Acme Inc</span>
              </a>
              <a
                href="#"
                class="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
              >
                <Home class="h-5 w-5" />
                Dashboard
              </a>
              <a
                href="#"
                class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <Users class="h-5 w-5" />
                Leads
              </a>
              <a
                href="#"
                class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <ShoppingCart class="h-5 w-5" />
                Orders
                <Badge class="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  6
                </Badge>
              </a>
              <a
                href="#"
                class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <Package class="h-5 w-5" />
                Products
              </a>
              <a
                href="#"
                class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <LineChart class="h-5 w-5" />
                Analytics
              </a>
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
        <DropdownMenu>
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
        </DropdownMenu>

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
      </header>

      <main class="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 w-full">
        <div class="grid auto-rows-max items-start gap-4 md:gap-8 w-full mt-4">
          <Tabs default-value="new">
            <div class="flex items-center">
              <TabsList>
                <TabsTrigger value="new">
                  New
                </TabsTrigger>
                <TabsTrigger value="qualified">
                  Qualified
                </TabsTrigger>
                <TabsTrigger value="follow-up">
                  Follow-up
                </TabsTrigger>
                <TabsTrigger value="sold">
                  Sold
                </TabsTrigger>
              </TabsList>
              <div class="ml-auto flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger as-child>
                    <Button variant="outline" size="sm" class="h-7 gap-1 rounded-md px-3">
                      <ListFilter class="h-3.5 w-3.5" />
                      <span class="sr-only sm:not-sr-only">Filter</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <div class="items-top flex space-x-2">
                        <Checkbox id="terms1" />
                        <label
                          for="terms2"
                          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Fulfilled
                        </label>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <div class="items-top flex space-x-2">
                        <Checkbox id="terms1" />
                        <label
                          for="terms2"
                          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Declined
                        </label>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <div class="items-top flex space-x-2">
                        <Checkbox id="terms1" />
                        <label
                          for="terms2"
                          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Refunded
                        </label>
                      </div>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button variant="outline" size="sm" class="h-7 gap-1 rounded-md px-3">
                  <File class="h-3.5 w-3.5" />
                  <span class="sr-only sm:not-sr-only">Export</span>
                </Button>
              </div>
            </div>
            <TabsContent value="new">
              <Card>
                <CardHeader class="px-7">
                  <CardTitle>Leads</CardTitle>
                  <CardDescription>
                    Recent orders from your store.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead class="hidden sm:table-cell">
                          Company
                        </TableHead>
                        <TableHead class="hidden sm:table-cell">
                          Phone Number
                        </TableHead>
                        <TableHead class="hidden md:table-cell">
                          Status
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <template v-if="pending">
                        <TableRow>
                          <TableCell colspan="5">
                            Loading..
                          </TableCell>
                        </TableRow>
                      </template>
                      <template v-else>
                        <TableRow v-for="lead in leads?.results" :key="lead.id">
                          <TableCell>
                            <div class="font-medium">
                              {{ lead.first_name }} {{ lead.last_name }}
                            </div>
                            <div class="hidden text-sm text-muted-foreground md:inline">
                              {{ lead.email }}
                            </div>
                          </TableCell>
                          <TableCell class="hidden sm:table-cell">
                            {{ lead.company.company_name }}
                          </TableCell>
                          <TableCell class="hidden sm:table-cell">
                            {{ lead.phone_number }}
                          </TableCell>
                          <TableCell class="hidden md:table-cell">
                            {{ lead.status.status }}
                          </TableCell>
                        </TableRow>
                      </template>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>


    </div>
  </div>
</template>


