import {defineField, defineType} from 'sanity'

export const carrosselType = defineType({
  name: 'carrossel',
  title: 'Carrossel',
  type: 'document',
  fields: [
    defineField({
      name: 'imagem1',
      title: 'Imagem 1',
      type: 'image',
    }),
    defineField({
      name: 'imagem2',
      title: 'Imagem 2',
      type: 'image',
    }),
defineField({
      name: 'imagem3',
      title: 'Imagem 3',
      type: 'image',
    }),
  ],
})