import { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  versions: {
    drafts: {
      validate: true,
    },
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      type: 'text',
      name: 'title',
      required: true,
      unique: true,
    },
    {
      type: 'relationship',
      name: 'relationship',
      relationTo: 'pages',
    },
  ],
}
