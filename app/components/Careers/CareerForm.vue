<script setup lang="ts">
import { useForm } from '@tanstack/vue-form'
import { z } from 'zod/v4'

const form = useForm({
    defaultValues: {
        fullName: '',
        email: '',
        phone: ''
    },
    onSubmit: async ({ value }) => {
        // Do something with form data
        console.log(value)
    },
})
</script>

<template>
    <div>
        <form @submit.prevent.stop="form.handleSubmit">
            <div>
                <form.Field
name="fullName" :validators="{
                    onChange: z.string().min(2)
                }">
                    <template 
            #default="{ field}">
                        <input
:name="field.name" :value="field.state.value" @blur="field.handleBlur"
                            @input="(e) => field.handleChange((e.target as HTMLInputElement).value)" >
                        <template v-if="field.state.meta?.errors.length > 0">
                            <span
v-for="error in field.state.meta.errors"
                                :key="error.message">{{ error.message }}</span>
                        </template>
                    </template>
                </form.Field>
                <form.Field name="email">
                    <template #default="{ field }">
                        <input
:name="field.name" :value="field.state.value" @blur="field.handleBlur"
                            @input="(e) => field.handleChange((e.target as HTMLInputElement).value)" >
                    </template>
                </form.Field>
                <form.Field
name="phone" :validators="{
                    onChange: z.string().regex(/^(\+1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/, 'Invalid US phone number')
                }">
                    <template #default="{ field }">
                        <input
:name="field.name" :value="field.state.value" @blur="field.handleBlur"
                            @input="(e) => field.handleChange((e.target as HTMLInputElement).value)" >
                        <template v-if="field.state.meta?.errors.length > 0">
                            <span
v-for="error in field.state.meta.errors"
                                :key="error?.message">{{ error?.message }}</span>
                        </template>
                    </template>
                </form.Field>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>
