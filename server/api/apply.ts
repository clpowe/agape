import { z } from 'zod'
import { defineEventHandler, readBody } from 'h3'
import { $fetch } from 'ofetch'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  position: z.enum([
    "Learning and Writing Strategist",
    "Tutor",
    "Essay Grader"
  ]),
  resume: z.array(
    z.object({
      url: z.string().url()
    })
  )
});

const config = useRuntimeConfig()

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const parsed = schema.safeParse(body)

  if (!parsed.success) {
    return { status: 400, errors: parsed.error.flatten() }
  }

  console.log(parsed.data)

  const airtablePayload = {
    records: [
      {
        fields: {
          Name: parsed.data.name,
          email: parsed.data.email,
          phone: parsed.data.phone,
          position: parsed.data.position,
          resume:  parsed.data.resume
        },
      },
    ],
  }

  const AIRTABLE_BASE_ID = 'app0BSVBkNUX1iNjn'
  const AIRTABLE_TABLE_NAME = 'apps'
  const AIRTABLE_API_KEY = config.airtableApiKey

  const res = await $fetch(
    `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: airtablePayload,
    }
  )

  console.log(res)

  return res
})
