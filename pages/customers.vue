<script setup lang="ts">
import {
  Activity,
  ArrowUpRight,
  Bell,
  ChevronLeft,
  ChevronRight,
  CircleUser,
  Copy,
  CreditCard,
  DollarSign,
  Menu,
  File,
  Home,
  LineChart,
  ListFilter,
  MoreVertical,
  Package,
  Package2,
  PanelLeft,
  Search,
  Settings,
  ShoppingCart,
  Truck,
  Users,
  Users2,
} from 'lucide-vue-next'

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
              Customers
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
                Customers
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

      <main class="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
        <div class="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2 mt-4">
          <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            <Card class="sm:col-span-2">
              <CardHeader class="pb-3">
                <CardTitle>Your Orders</CardTitle>
                <CardDescription class="max-w-lg text-balance leading-relaxed">
                  Introducing Our Dynamic Orders Dashboard for Seamless
                  Management and Insightful Analysis.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button>Create New Order</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader class="pb-2">
                <CardDescription>This Week</CardDescription>
                <CardTitle class="text-4xl">
                  $1329
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div class="text-xs text-muted-foreground">
                  +25% from last week
                </div>
              </CardContent>
              <CardFooter>
                <Progress :model-value="25" aria-label="25% increase" />
              </CardFooter>
            </Card>
            <Card>
              <CardHeader class="pb-2">
                <CardDescription>This Month</CardDescription>
                <CardTitle class="text-3xl">
                  $5,329
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div class="text-xs text-muted-foreground">
                  +10% from last month
                </div>
              </CardContent>
              <CardFooter>
                <Progress :model-value="12" aria-label="12% increase" />
              </CardFooter>
            </Card>
          </div>
          <Tabs default-value="week">
            <div class="flex items-center">
              <TabsList>
                <TabsTrigger value="week">
                  Week
                </TabsTrigger>
                <TabsTrigger value="month">
                  Month
                </TabsTrigger>
                <TabsTrigger value="year">
                  Year
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
            <TabsContent value="week">
              <Card>
                <CardHeader class="px-7">
                  <CardTitle>Orders</CardTitle>
                  <CardDescription>
                    Recent orders from your store.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Customer</TableHead>
                        <TableHead class="hidden sm:table-cell">
                          Type
                        </TableHead>
                        <TableHead class="hidden sm:table-cell">
                          Status
                        </TableHead>
                        <TableHead class="hidden md:table-cell">
                          Date
                        </TableHead>
                        <TableHead class="text-right">
                          Amount
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow class="bg-accent">
                        <TableCell>
                          <div class="font-medium">
                            Liam Johnson
                          </div>
                          <div class="hidden text-sm text-muted-foreground md:inline">
                            liam@example.com
                          </div>
                        </TableCell>
                        <TableCell class="hidden sm:table-cell">
                          Sale
                        </TableCell>
                        <TableCell class="hidden sm:table-cell">
                          <Badge class="text-xs" variant="secondary">
                            Fulfilled
                          </Badge>
                        </TableCell>
                        <TableCell class="hidden md:table-cell">
                          2023-06-23
                        </TableCell>
                        <TableCell class="text-right">
                          $250.00
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div class="font-medium">
                            Olivia Smith
                          </div>
                          <div class="hidden text-sm text-muted-foreground md:inline">
                            olivia@example.com
                          </div>
                        </TableCell>
                        <TableCell class="hidden sm:table-cell">
                          Refund
                        </TableCell>
                        <TableCell class="hidden sm:table-cell">
                          <Badge class="text-xs" variant="outline">
                            Declined
                          </Badge>
                        </TableCell>
                        <TableCell class="hidden md:table-cell">
                          2023-06-24
                        </TableCell>
                        <TableCell class="text-right">
                          $150.00
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div class="font-medium">
                            Noah Williams
                          </div>
                          <div class="hidden text-sm text-muted-foreground md:inline">
                            noah@example.com
                          </div>
                        </TableCell>
                        <TableCell class="hidden sm:table-cell">
                          Subscription
                        </TableCell>
                        <TableCell class="hidden sm:table-cell">
                          <Badge class="text-xs" variant="secondary">
                            Fulfilled
                          </Badge>
                        </TableCell>
                        <TableCell class="hidden md:table-cell">
                          2023-06-25
                        </TableCell>
                        <TableCell class="text-right">
                          $350.00
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div class="font-medium">
                            Emma Brown
                          </div>
                          <div class="hidden text-sm text-muted-foreground md:inline">
                            emma@example.com
                          </div>
                        </TableCell>
                        <TableCell class="hidden sm:table-cell">
                          Sale
                        </TableCell>
                        <TableCell class="hidden sm:table-cell">
                          <Badge class="text-xs" variant="secondary">
                            Fulfilled
                          </Badge>
                        </TableCell>
                        <TableCell class="hidden md:table-cell">
                          2023-06-26
                        </TableCell>
                        <TableCell class="text-right">
                          $450.00
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div class="font-medium">
                            Liam Johnson
                          </div>
                          <div class="hidden text-sm text-muted-foreground md:inline">
                            liam@example.com
                          </div>
                        </TableCell>
                        <TableCell class="hidden sm:table-cell">
                          Sale
                        </TableCell>
                        <TableCell class="hidden sm:table-cell">
                          <Badge class="text-xs" variant="secondary">
                            Fulfilled
                          </Badge>
                        </TableCell>
                        <TableCell class="hidden md:table-cell">
                          2023-06-23
                        </TableCell>
                        <TableCell class="text-right">
                          $250.00
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div class="font-medium">
                            Liam Johnson
                          </div>
                          <div class="hidden text-sm text-muted-foreground md:inline">
                            liam@example.com
                          </div>
                        </TableCell>
                        <TableCell class="hidden sm:table-cell">
                          Sale
                        </TableCell>
                        <TableCell class="hidden sm:table-cell">
                          <Badge class="text-xs" variant="secondary">
                            Fulfilled
                          </Badge>
                        </TableCell>
                        <TableCell class="hidden md:table-cell">
                          2023-06-23
                        </TableCell>
                        <TableCell class="text-right">
                          $250.00
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div class="font-medium">
                            Olivia Smith
                          </div>
                          <div class="hidden text-sm text-muted-foreground md:inline">
                            olivia@example.com
                          </div>
                        </TableCell>
                        <TableCell class="hidden sm:table-cell">
                          Refund
                        </TableCell>
                        <TableCell class="hidden sm:table-cell">
                          <Badge class="text-xs" variant="outline">
                            Declined
                          </Badge>
                        </TableCell>
                        <TableCell class="hidden md:table-cell">
                          2023-06-24
                        </TableCell>
                        <TableCell class="text-right">
                          $150.00
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div class="font-medium">
                            Emma Brown
                          </div>
                          <div class="hidden text-sm text-muted-foreground md:inline">
                            emma@example.com
                          </div>
                        </TableCell>
                        <TableCell class="hidden sm:table-cell">
                          Sale
                        </TableCell>
                        <TableCell class="hidden sm:table-cell">
                          <Badge class="text-xs" variant="secondary">
                            Fulfilled
                          </Badge>
                        </TableCell>
                        <TableCell class="hidden md:table-cell">
                          2023-06-26
                        </TableCell>
                        <TableCell class="text-right">
                          $450.00
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        <div>
          <Card class="overflow-hidden">
            <CardHeader class="flex flex-row items-start bg-muted/50">
              <div class="grid gap-0.5">
                <CardTitle class="group flex items-center gap-2 text-lg">
                  Order ID: Oe31b70H
                  <Button
                    size="icon"
                    variant="outline"
                    class="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    <Copy class="h-3 w-3" />
                    <span class="sr-only">Copy Order ID</span>
                  </Button>
                </CardTitle>
                <CardDescription>Date: November 23, 2023</CardDescription>
              </div>
              <div class="ml-auto flex items-center gap-1">
                <Button size="sm" variant="outline" class="h-8 gap-1">
                  <Truck class="h-3.5 w-3.5" />
                  <span class="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                    Track Order
                  </span>
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger as-child>
                    <Button size="icon" variant="outline" class="h-8 w-8">
                      <MoreVertical class="h-3.5 w-3.5" />
                      <span class="sr-only">More</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Export</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Trash</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent class="p-6 text-sm">
              <div class="grid gap-3">
                <div class="font-semibold">
                  Order Details
                </div>
                <ul class="grid gap-3">
                  <li class="flex items-center justify-between">
                    <span class="text-muted-foreground">
                      Glimmer Lamps x <span>2</span>
                    </span>
                    <span>$250.00</span>
                  </li>
                  <li class="flex items-center justify-between">
                    <span class="text-muted-foreground">
                      Aqua Filters x <span>1</span>
                    </span>
                    <span>$49.00</span>
                  </li>
                </ul>
                <Separator class="my-2" />
                <ul class="grid gap-3">
                  <li class="flex items-center justify-between">
                    <span class="text-muted-foreground">Subtotal</span>
                    <span>$299.00</span>
                  </li>
                  <li class="flex items-center justify-between">
                    <span class="text-muted-foreground">Shipping</span>
                    <span>$5.00</span>
                  </li>
                  <li class="flex items-center justify-between">
                    <span class="text-muted-foreground">Tax</span>
                    <span>$25.00</span>
                  </li>
                  <li class="flex items-center justify-between font-semibold">
                    <span class="text-muted-foreground">Total</span>
                    <span>$329.00</span>
                  </li>
                </ul>
              </div>
              <Separator class="my-4" />
              <div class="grid grid-cols-2 gap-4">
                <div class="grid gap-3">
                  <div class="font-semibold">
                    Shipping Information
                  </div>
                  <address class="grid gap-0.5 not-italic text-muted-foreground">
                    <span>Liam Johnson</span>
                    <span>1234 Main St.</span>
                    <span>Anytown, CA 12345</span>
                  </address>
                </div>
                <div class="grid auto-rows-max gap-3">
                  <div class="font-semibold">
                    Billing Information
                  </div>
                  <div class="text-muted-foreground">
                    Same as shipping address
                  </div>
                </div>
              </div>
              <Separator class="my-4" />
              <div class="grid gap-3">
                <div class="font-semibold">
                  Customer Information
                </div>
                <dl class="grid gap-3">
                  <div class="flex items-center justify-between">
                    <dt class="text-muted-foreground">
                      Customer
                    </dt>
                    <dd>Liam Johnson</dd>
                  </div>
                  <div class="flex items-center justify-between">
                    <dt class="text-muted-foreground">
                      Email
                    </dt>
                    <dd>
                      <a href="mailto:">liam@acme.com</a>
                    </dd>
                  </div>
                  <div class="flex items-center justify-between">
                    <dt class="text-muted-foreground">
                      Phone
                    </dt>
                    <dd>
                      <a href="tel:">+1 234 567 890</a>
                    </dd>
                  </div>
                </dl>
              </div>
              <Separator class="my-4" />
              <div class="grid gap-3">
                <div class="font-semibold">
                  Payment Information
                </div>
                <dl class="grid gap-3">
                  <div class="flex items-center justify-between">
                    <dt class="flex items-center gap-1 text-muted-foreground">
                      <CreditCard class="h-4 w-4" />
                      Visa
                    </dt>
                    <dd>**** **** **** 4532</dd>
                  </div>
                </dl>
              </div>
            </CardContent>
            <CardFooter class="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
              <div class="text-xs text-muted-foreground">
                Updated <time dateTime="2023-11-23">November 23, 2023</time>
              </div>
              <Pagination class="ml-auto mr-0 w-auto">
                <PaginationList class="gap-1">
                  <PaginationPrev variant="outline" class="h-6 w-6" />
                  <PaginationNext variant="outline" class="h-6 w-6" />
                </PaginationList>
              </Pagination>
            </CardFooter>
          </Card>
        </div>
      </main>


    </div>
  </div>
</template>

