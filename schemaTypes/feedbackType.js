import { defineField, defineType } from 'sanity'

export const feedbackType = defineType({
  name: 'feedback',
  title: 'Feedback',
  type: 'document',
  fields: [
    defineField({
      name: 'depoimento',
      type: 'string',
    }),
    defineField({
      name: 'depoimento2',
      type: 'string',
    }),
    defineField({
      name: 'depoimento3',
      type: 'string',
    }),
  ],
})
