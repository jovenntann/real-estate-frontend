<script setup lang="ts">
import {
  Upload,
} from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

// Company
import { useCompanyStore } from '~/store/company';
const companyStore = useCompanyStore()
const { company } = storeToRefs(companyStore)

// Lead 
import type { Company, Status, NextAction, LastMessage, Lead } from '~/store/leads'
import { useLeadsStore } from '~/store/leads'
const leadStore = useLeadsStore()
const { lead } = storeToRefs(leadStore)
const { addLead, getLead, setLead } = leadStore

import type { ToastMessage } from '~/store/layout';
import { useLayoutStore } from '~/store/layout';
const layoutStore = useLayoutStore()
const { setToastMessage } = layoutStore;

const alertChange = async (statusId) => {
  const { public: { apiEndpoint } } = useRuntimeConfig();
  const leadRecord = await $fetch(`${apiEndpoint}/agent/leads/${lead.value.id}`, {
    method: 'PUT',
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "status": statusId
    })
  });
  if (leadRecord) {
    setLead(leadRecord)
    setToastMessage({
      title: `${leadRecord.first_name} ${leadRecord.last_name} updated`,
      description: `Lead status has been updated to ${leadRecord.status.status}`
    });
  }
} 

const selectedLeadStatus = computed(() => {
  if (lead.value && lead.value.status) {
    return lead.value.status.status;
  }
  return null;
});


</script>

<template>
  <div class="flex min-h-screen w-full flex-col bg-muted/40 mt-0.5">

    <div class="flex flex-col">

      <main class="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <div class="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">

          <div class="grid gap-2">

            <div class="grid auto-rows-max items-start gap-2 lg:gap-4">
              <Card>
                <CardHeader>
                  <CardTitle v-if="lead"> {{ lead.first_name }} {{ lead.last_name}}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div class="grid gap-6">
                    <div class="grid gap-3">
                      <Label for="status">Lead Status</Label>
                      <Select v-if="lead && lead.status && lead.status.status" @update:modelValue="alertChange($event)" v-model="selectedLeadStatus">
                        <SelectTrigger aria-label="Select status">
                          <SelectValue placeholder="Selec value">
                            <div class="flex items-center gap-3">
                              {{ selectedLeadStatus }}
                            </div>
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem 
                            v-for="status in company.lead_statuses" 
                            :key="status.id.toString()" 
                            :value="status.id.toString()">
                            {{ status.status }}
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
                <CardContent>
                  <div class="grid gap-6">
                    <div class="grid gap-3">
                      <Label for="status">Next Action</Label>
                      <Select v-if="lead && lead.next_action">
                        <SelectTrigger :id="lead.next_action.id" aria-label="Select status">
                          <SelectValue :placeholder="lead.next_action.action" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem 
                            v-for="status in company.lead_next_actions" 
                            :key="status.id.toString()" 
                            :value="status.id.toString()">
                            {{ status.action }}
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card class="overflow-hidden">
                <CardHeader>
                  <CardTitle>Shared images</CardTitle>
                  <CardDescription>
                    Lipsum dolor sit amet, consectetur adipiscing elit
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div class="grid gap-2">
                    <img
                      alt="Product image"
                      class="aspect-square w-full rounded-md object-cover"
                      height="300"
                      src="https://images.pexels.com/photos/2705756/pexels-photo-2705756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      width="300"
                    >
                    <div class="grid grid-cols-3 gap-2">
                      <button>
                        <img
                          alt="Product image"
                          class="aspect-square w-full rounded-md object-cover"
                          height="84"
                          src="https://images.pexels.com/photos/4946727/pexels-photo-4946727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                          width="84"
                        >
                      </button>
                      <button>
                        <img
                          alt="Product image"
                          class="aspect-square w-full rounded-md object-cover"
                          height="84"
                          src="https://images.pexels.com/photos/6243685/pexels-photo-6243685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                          width="84"
                        >
                      </button>
                      <button class="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
                        <Upload class="h-4 w-4 text-muted-foreground" />
                        <span class="sr-only">Upload</span>
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Product Details</CardTitle>
                  <CardDescription>
                    Lipsum dolor sit amet, consectetur adipiscing elit
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div class="grid gap-6">
                    <!-- <div class="grid gap-3">
                      <Label for="name">Name</Label>
                      <Input
                        id="name"
                        type="text"
                        class="w-full"
                        default-value="Gamer Gear Pro Controller"
                      />
                    </div> -->
                    <div class="grid gap-3">
                      <Label for="description">Description</Label>
                      <Textarea
                        id="description"
                        default-value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc."
                        class="min-h-32"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Archive Product</CardTitle>
                  <CardDescription>
                    Lipsum dolor sit amet, consectetur adipiscing elit.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div />
                  <Button size="sm" variant="secondary">
                    Archive Product
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
          <div class="flex items-center justify-center gap-2 md:hidden">
            <Button variant="outline" size="sm">
              Discard
            </Button>
            <Button size="sm">
              Save Product
            </Button>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>