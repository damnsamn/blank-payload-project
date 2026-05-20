import type { CollectionConfig } from 'payload'

export const Repro: CollectionConfig = {
  slug: 'repro',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'uploads',
      type: 'upload',
      hasMany: true,
      relationTo: ['images', 'videos'],
    },
  ],
}
