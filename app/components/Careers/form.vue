<script setup lang="ts">
import * as z from 'zod';
import type { FormSubmitEvent } from '@nuxt/ui';


const MAX_FILE_SIZE = 2 * 1024 * 1024 // 2MB
const ACCEPTED_IMAGE_TYPES = [
  'application/pdf',
  'application/msword',           // .doc
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // .docx
  'application/rtf',
  'text/plain'
];


const schema = z.object({
    name: z.string().min(2, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    phone: z.string().min(7, { message: "Invalid phone number" }),
    position: z.enum([
      "Learning and Writing Strategist",
      "Tutor",
      "Essay Grader",
    ]),
    resume: z.instanceof(File,{
    message: "Please upload a file",
  }).refine((file) => file.size <= MAX_FILE_SIZE,{
    message: 'The file is to large. Please choose a file smaller than 2mb'
  }).refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type),{
    message: 'Please choose a file of type pdf, doc, docx, rtf, or txt'
  })
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
  name: undefined,
  email: undefined,
  phone: undefined,
  position: undefined,
  resume: undefined,
})

const upload = useUpload('/api/blob',{method:'PUT'})


function createObjectUrl(file: File): string {
  return URL.createObjectURL(file)
}

async function onSubmit(event: FormSubmitEvent<Schema>){
console.log(event.data)
}

watch(() => state.resume, async (file) => {
  if (file instanceof File) {
    const dt = new DataTransfer();
    dt.items.add(file);

    const input = document.createElement('input');
    input.type = 'file';
    input.files = dt.files;

    try {
      const result = await upload(input);
      console.log('Uploaded:', result);
    } catch (err) {
      console.error('Upload failed:', err);
    }
  }
});
</script>

<template>
  <UForm :schema="schema" :state="state" @submit="onSubmit">
    <UFormField label="Name" name="name">
      <UInput v-model="state.name" />
    </UFormField>

    <UFormField label="Email" name="email">
      <UInput v-model="state.email" />
    </UFormField>


    <UFormField label="Phone" name="phone">
      <UInput v-model="state.phone" />
    </UFormField>

    <UFormField name="resume" label="Resume" description="DOC, DOCX, PDF or TXT 1MB Max.">
      <UFileUpload 
        v-slot="{ open, removeFile }" 
        v-model="state.resume" 
      >
        <div class="flex flex-wrap items-center gap-3">
          <UAvatar
            size="lg"
            :src="state.resume ? createObjectUrl(state.resume) : undefined"
            icon="i-lucide-image"
          />

          <UButton
            :label="state.resume ? 'Change image' : 'Upload image'"
            color="neutral"
            variant="outline"
            @click="open()"
          />
        </div>

        <p v-if="state.resume" class="text-xs text-muted mt-1.5">
          {{ state.resume.name }}

          <UButton
            label="Remove"
            color="error"
            variant="link"
            size="xs"
            class="p-0"
            @click="removeFile()"
          />
        </p>
      </UFileUpload>
    </UFormField>
  <UButton type="submit" label="Submit" color="neutral" />
  </UForm>
</template>
