import { CollectionConfig, UploadField } from 'payload'

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
  ],
}

function baseImagePickerField(name: string): UploadField {
  return {
    name,
    type: 'upload',
    relationTo: 'media',
    admin: {
      description: 'This may only select from values in Upload A',
    },
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
