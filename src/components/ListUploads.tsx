'use client'

import { useAllFormFields } from '@payloadcms/ui'

export const ListUploads = () => {
  const [allFields] = useAllFormFields()

  const currentFieldValues = Object.fromEntries(
    Object.entries(allFields).map(([key, field]) => [key, field.value]),
  )

  console.log(currentFieldValues)

  return (
    <div className="field-type">
      <p>
        Check console for all current field values. Notice that, after filling out this form, you
        will find schema paths for each of the following:
      </p>
      <ul>
        <li>uploadA</li>
        <li>uploadB</li>
        <li>uploadsArray.[index].uploadC</li>
        <li>uploadsBlocks.[index].uploadD</li>
      </ul>
      <p>
        Note that there will be no direct schema path listed for "uploadE". Its value is instead
        deeply nested within the `uploadsRichText` value.
      </p>
    </div>
  )
}
