<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const { $csrfFetch } = useNuxtApp()

const MAX_FILE_SIZE = 2 * 1024 * 1024
const ACCEPTED_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/rtf',
  'text/plain',
]

const schema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(7, { message: "Invalid phone number" }),
  position: z.enum(["Learning and Writing Strategist", "Tutor", "Essay Grader"]),
  resume: z
    .instanceof(File)
    .refine(file => file.size <= MAX_FILE_SIZE, { message: 'Max size is 2MB' })
    .refine(file => ACCEPTED_TYPES.includes(file.type), { message: 'Invalid file type' }),
})

type Schema = z.output<typeof schema>
const state = reactive<Partial<Schema>>({})
const upload = useUpload('/api/blob',{method:'PUT'})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  try {
    const file = event.data.resume;

    const dt = new DataTransfer();
    dt.items.add(file);

    const input = document.createElement('input');
    input.type = 'file';
    input.files = dt.files;

    const uploaded = await upload(input);

    const { error } = await $csrfFetch('/api/apply', {
      method: 'POST',
      body: {
        name: event.data.name,
        email: event.data.email,
        phone: event.data.phone,
        position: event.data.position,
        resumeUrl: `https://pub-01f70a312027428c988ee19dfbe84fef.r2.dev/${uploaded[0]?.pathname}`
      },
      headers: { 'Content-Type': 'application/json' }
    });

    if (error.value) {
      console.error('API Error:', error.value);
    } else {
      console.log('Submitted successfully, Good Job');
    }
  } catch (err) {
    console.error('Submit error:', err);
  }
}


</script>

<template>
  <UForm :schema="schema" :state="state" @submit="onSubmit">
    <UFormField name="name" label="Name">
      <UInput v-model="state.name" />
    </UFormField>
    <UFormField name="email" label="Email">
      <UInput v-model="state.email" />
    </UFormField>
    <UFormField name="phone" label="Phone">
      <UInput v-model="state.phone" />
    </UFormField>
    <UFormField name="position" label="Position">
      <USelect
        v-model="state.position"
        :items="['Learning and Writing Strategist', 'Tutor', 'Essay Grader']"
      />
    </UFormField>
    <UFormField name="resume" label="Resume">
      <UFileUpload v-model="state.resume" />
    </UFormField>
    <UButton type="submit" label="Submit" />
  </UForm>
</template>

