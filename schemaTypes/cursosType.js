import { defineField, defineType } from 'sanity'

export const cursosType = defineType({
  name: 'curso',
  title: 'Cursos',
  type: 'document',
  fields: [
    defineField({
      name: 'nome',
      title: 'Nome do Curso',
      type: 'string',
    }),
    defineField({
      name: 'descricao',
      title: 'Descrição',
      type: 'text',
    }),
    defineField({
      name: 'duracao',
      title: 'Duração (em horas)',
      type: 'number',
    }),
    defineField({
      name: 'nivel',
      title: 'Nível',
      type: 'string',
      options: {
        list: [
          { title: 'Básico', value: 'basico' },
          { title: 'Intermediário', value: 'intermediario' },
          { title: 'Avançado', value: 'avancado' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'preco',
      title: 'Preço (R$)',
      type: 'number',
    }),
    defineField({
      name: 'ativo',
      title: 'Curso Ativo?',
      type: 'boolean',
      initialValue: true,
    }),
  ],
})