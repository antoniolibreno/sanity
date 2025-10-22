import {defineField, defineType} from 'sanity'

export const clientesType = defineType({
  name: 'cliente',
  title: 'Clientes',
  type: 'document',
  fields: [
    defineField({
      name: 'Nome',
      type: 'string',
    }),
    defineField({
      name: 'Telefone',
      type: 'number',
    }),
    defineField({
        name: 'Email',
        type: 'string',
      }),
      defineField({
        name: 'Nivel',
        type: 'number',
      }),
defineField({
      name: 'Idade',
      type: 'number',
    }),
  ],
})