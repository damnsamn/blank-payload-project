import { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  versions: {
    drafts: {
      autosave: true,
      validate: true,
    },
  },
  fields: [
    {
      type: 'text',
      name: 'requiredField',
      required: true,
    },
  ],
}
