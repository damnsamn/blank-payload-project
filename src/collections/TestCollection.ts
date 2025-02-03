import { BlocksFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { CollectionConfig } from 'payload'

export const TestCollection: CollectionConfig = {
  slug: 'test-collection',
  fields: [
    {
      type: 'ui',
      name: 'listFields',
      admin: {
        components: {
          Field: '@/components/ListFields.tsx#ListFields',
        },
      },
    },
    {
      name: 'fieldA',
      type: 'text',
    },
    {
      type: 'array',
      name: 'arrayField',
      fields: [
        {
          name: 'fieldB',
          type: 'text',
        },
      ],
    },
    {
      type: 'blocks',
      name: 'blocksField',
      blocks: [
        {
          slug: 'fieldCBlock',
          fields: [
            {
              name: 'fieldC',
              type: 'text',
            },
          ],
        },
      ],
    },
    {
      type: 'richText',
      name: 'richTextField',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          BlocksFeature({
            blocks: [
              {
                slug: 'blockWithinRichText',
                fields: [
                  {
                    name: 'fieldD',
                    type: 'text',
                  },
                ],
              },
            ],
          }),
        ],
      }),
    },
  ],
}
