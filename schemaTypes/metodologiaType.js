import { defineField, defineType } from 'sanity'

export const metodologiaType = defineType({
  name: 'metodologia',
  title: 'Metedologia',
  type: 'document',
  fields: [
    defineField({
      name: 'metodologiaImagem1',
      title: 'Imagem 1',
      type: 'image',
    }),
    defineField({
      name: 'metodologiaImagem2',
      title: 'Imagem 2',
      type: 'image',
    }),
  ],
})