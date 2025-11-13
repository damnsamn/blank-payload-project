import { getPayload, Payload } from 'payload'
import config from '@/payload.config'

import { describe, it, beforeAll, expect } from 'vitest'

let payload: Payload

describe('API', () => {
  beforeAll(async () => {
    const payloadConfig = await config
    payload = await getPayload({ config: payloadConfig })
  })

  it('fetches users', async () => {
    const users = await payload.find({
      collection: 'users',
    })
    expect(users).toBeDefined()
  })

  describe('findByID() should return the same data as find(), given equivalent query options', async () => {
    const payloadConfig = await config
    payload = await getPayload({ config: payloadConfig })

    // Clear pages
    await payload.delete({
      collection: 'pages',
      where: {
        id: {
          exists: true,
        },
      },
    })

    // Create ref doc 1 as published
    const refDoc1 = await payload.create({
      collection: 'pages',
      data: {
        title: 'Ref Doc 1 (OLD)',
        _status: 'published',
      },
    })

    // New draft for ref doc 1
    await payload.update({
      collection: 'pages',
      id: refDoc1.id,
      draft: true,
      data: {
        title: 'Ref Doc 1 (New Draft)',
      },
    })

    // Create ref doc 2 as draft
    const refDoc2 = await payload.create({
      collection: 'pages',
      data: {
        title: 'Ref Doc 2 (OLD)',
        _status: 'draft',
      },
    })

    // New publish for ref doc 2
    await payload.update({
      collection: 'pages',
      id: refDoc2.id,
      data: {
        title: 'Ref Doc 2 (New Publish)',
        _status: 'published',
      },
    })

    // Create main doc as draft
    const mainDoc = await payload.create({
      collection: 'pages',
      data: {
        title: 'Main Doc (OLD)',
        relationship: refDoc1.id,
        _status: 'draft',
      },
    })

    // New publish for main doc
    await payload.update({
      collection: 'pages',
      id: mainDoc.id,
      data: {
        title: 'Main Doc (New Publish)',
        relationship: refDoc2.id,
        _status: 'published',
      },
    })

    const commonQueryOptions = {
      collection: 'pages',
      depth: 1,
      draft: true,
      select: { title: true, relationship: true },
      populate: {
        pages: {
          title: true,
        },
      },
    } as const

    const {
      docs: [docViaFind],
    } = await payload.find({
      ...commonQueryOptions,
      where: {
        id: {
          equals: mainDoc.id,
        },
      },
      limit: 1,
    })
    const docViaFindByID = await payload.findByID({
      ...commonQueryOptions,
      id: mainDoc.id,
    })

    console.log({ docViaFind, docViaFindByID })

    it('should have the same title values', () => {
      expect(docViaFindByID.title).toStrictEqual(docViaFind.title)
    })

    it('should have the same relationship values', () => {
      if (
        typeof docViaFind.relationship !== 'string' &&
        typeof docViaFindByID.relationship !== 'string'
      ) {
        expect(docViaFindByID.relationship?.title).toStrictEqual(docViaFind.relationship?.title)
      }
    })
  })
})
