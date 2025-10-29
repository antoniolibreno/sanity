import {defineField, defineType} from 'sanity'

export const clientesType = defineType({
  name: 'cliente',
  title: 'Clientes',
  type: 'document',
  fields: [
    defineField({
      name: 'Nome',
      title: 'Nome',
      type: 'string',
    }),
    defineField({
      name: 'Telefone',
      title: 'Telefone',
      type: 'number',
    }),
    defineField({
        name: 'Email',
        title: 'Email',
        type: 'string',
      }),
      defineField({
        name: 'Nivel',
        title: 'Nível',
        type: 'string',
      }),
defineField({
      name: 'Idade',
      title: 'Idade',
      type: 'number',
    }),
  ],
})