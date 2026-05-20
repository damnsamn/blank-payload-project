import type { CollectionConfig } from 'payload'

export const ImageUploads: CollectionConfig = {
  slug: 'images',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
}
