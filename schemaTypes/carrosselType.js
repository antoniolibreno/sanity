import {defineField, defineType} from 'sanity'

export const carrosselType = defineType({
  name: 'carrossel',
  title: 'Carrossel',
  type: 'document',
  fields: [
    defineField({
      name: 'imagem1',
      type: 'image',
    }),
    defineField({
      name: 'imagem2',
      type: 'image',
    }),
defineField({
      name: 'imagem3',
      type: 'image',
    }),
  ],
})