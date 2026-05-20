import type { CollectionConfig } from 'payload'

export const VideoUploads: CollectionConfig = {
  slug: 'videos',
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
