export const schemaTypes = []

import {defineField, defineType} from 'sanity'

export const perguntaType = defineType({
  name: 'Perguntas',
  title: 'Perguntas',
  type: 'document',
  fields: [
    defineField({
      name: 'Perguntas',
      type: 'string',
    }),
  ],
})

 export const respostaType = defineType({
  name: 'Respostas',
  title: 'Respostas',
  type: 'document',
  fields: [
    defineField({
      name: 'Respostas',
      type: 'string',
    }),
  ],
})
