<script setup lang="ts">
import { formatDistanceToNow } from 'date-fns'
import { File, ListFilter} from 'lucide-vue-next'

/* Interfaces */

interface Company {
  id: number;
  company_name: string;
  address: string;
  phone_number: string;
  company_size: number;
  industry: string;
}

interface Status {
  id: number;
  status: string;
}

interface Lead {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  company: Company;
  status: Status;
  last_message_at: string;
} 

interface LeadsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Lead[];
}

/* Manual handling of loading using v-if="pending" */
// const { pending, data: leads, error } = useFetch<LeadsResponse>("http://localhost:8000/agent/leads", {
//   lazy: true
// })

/* Loading effect before navigating to this Page 
    pending: it is not necessary i just added it so that 
    i don't have to add/remove it when changing from manual handling vs this
*/
const { pending, data: leads } = await useFetch<LeadsResponse>("http://localhost:8000/agent/leads")

/* Sample Response:
{
    "id": 1,
    "first_name": "David",
    "last_name": "Williams",
    "email": "ariel62@example.com",
    "phone_number": "(508)816-2220",
    "company": {
        "id": 1,
        "company_name": "Tappy Inc.",
        "address": "BGC, Taguig",
        "phone_number": "+639062131607",
        "company_size": 100,
        "industry": "Software Development"
    },
    "status": {
        "id": 1,
        "status": "New"
    }
},
/* End of Sample Response

/* Custom Layout */

definePageMeta({
  layout: 'authenticated'
})

</script>

<template>
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
                    <TableHead class="hidden md:table-cell">
                        Last Message
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
                    <TableCell class="hidden md:table-cell">
                        {{ formatDistanceToNow(new Date(lead.last_message_at), { addSuffix: true }) }}
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
</template>


