import { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  // versions: {
  //   drafts: {
  //     validate: true,
  //   },
  // },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'General',
          fields: [
            {
              label: 'Collapsible A',
              type: 'collapsible',
              fields: [
                {
                  type: 'text',
                  name: 'contentA',
                  required: true,
                },
                {
                  label: 'Collapsible B',
                  type: 'collapsible',
                  fields: [
                    {
                      type: 'text',
                      name: 'contentB',
                      required: true,
                    },
                  ],
                },
                {
                  type: 'group',
                  name: 'groupA',
                  fields: [
                    {
                      type: 'text',
                      name: 'contentC',
                      required: true,
                    },
                  ],
                },
              ],
            },
            {
              label: 'Collapsible C',
              type: 'collapsible',
              required: true,
              fields: [
                {
                  type: 'group',
                  name: 'groupB',
                  fields: [
                    {
                      type: 'text',
                      name: 'contentD',
                      required: true,
                    },
                    {
                      type: 'text',
                      name: 'contentE',
                      required: true,
                    },
                    {
                      type: 'text',
                      name: 'contentF',
                      required: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
