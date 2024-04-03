<script setup lang="ts">
const loading = ref(false)
const defaultValue = 'item-1'
const accordionItems = [
  { value: 'item-1', title: 'Is it accessible?', content: 'Yes. It adheres to the WAI-ARIA design pattern.' },
  { value: 'item-2', title: 'Is it unstyled?', content: 'Yes. It\'s unstyled by default, giving you freedom over the look and feel.' },
  { value: 'item-3', title: 'Can it be animated?', content: 'Yes! You can use the transition prop to configure the animation.' },
]
</script>

<template>
    <div class="container py-8">
        <section class="my-8">
            <Button class="m-1">Default</Button>
            <Button variant="destructive" class="m-1">Destructive</Button>
            <Button variant="outline" class="m-1">Outline</Button>
            <Button variant="secondary" class="m-1">Secondary</Button>
        </section>
    </div>
    
    <section class="my-8">
        <Accordion type="single" class="w-full" collapsible :default-value="defaultValue">
            <AccordionItem v-for="item in accordionItems" :key="item.value" :value="item.value">
            <AccordionTrigger>{{ item.title }}</AccordionTrigger>
            <AccordionContent>
                {{ item.content }}
            </AccordionContent>
            </AccordionItem>
        </Accordion>
    </section>
</template>