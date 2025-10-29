import { defineField, defineType } from 'sanity'

export const feedbackType = defineType({
  name: 'feedback',
  title: 'Feedback',
  type: 'document',
  fields: [
    defineField({
      name: 'depoimento',
      title: 'Depoimento 1',
      type: 'string',
    }),
    defineField({
      name: 'depoimento2',
      title: 'Depoimento 2',
      type: 'string',
    }),
    defineField({
      name: 'depoimento3',
      title: 'Depoimento 3',
      type: 'string',
    }),
  ],
})
