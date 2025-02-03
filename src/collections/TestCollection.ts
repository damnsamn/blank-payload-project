import { BlocksFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { CollectionConfig, UploadField, Where } from 'payload'

export const TestCollection: CollectionConfig = {
  slug: 'test-collection',
  fields: [
    {
      name: 'uploadA',
      type: 'upload',
      hasMany: true,
      relationTo: 'media',
      admin: {
        description: 'This may select from the entire Media Collection',
      },
    },
    baseImagePickerField('uploadB'),
    {
      type: 'array',
      name: 'uploadsArray',
      fields: [baseImagePickerField('uploadC')],
    },
    {
      type: 'blocks',
      name: 'uploadsBlocks',
      blocks: [
        {
          slug: 'uploadDBlock',
          fields: [baseImagePickerField('uploadD')],
        },
      ],
    },
    {
      type: 'richText',
      name: 'uploadsRichText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          BlocksFeature({
            blocks: [
              {
                slug: 'dynamicImageBlockWithinRichText',
                fields: [baseImagePickerField('uploadE')],
              },
            ],
          }),
        ],
      }),
    },
  ],
}

function baseImagePickerField(name: string): UploadField {
  return {
    name,
    type: 'upload',
    relationTo: 'media',
    filterOptions: ({ data }) => {
      const selectedValues = data.uploadA || []
      const selectableValues = selectedValues.concat(selectedValues.length > 0 ? [] : [null])

      return {
        id: {
          in: selectableValues,
        },
      }
    },
  }
}
