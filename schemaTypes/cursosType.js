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
      name: 'duracao',
      title: 'Duração (em horas)',
      type: 'number',
    }),
    defineField({
      name: 'nivel',
      title: 'Nível',
      type: 'string',
    }),
    defineField({
      name: 'imagem',
      title: 'Imagem',
      type: 'image',
    }),
  ],
})