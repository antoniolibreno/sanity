import { defineField, defineType } from 'sanity'

export const metodologiaType = defineType({
  name: 'metodologia',
  title: 'Metedologia',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      type: 'string',
    }),
    defineField({
        name: 'descricao',
        type: 'string',
    })
  ],
})