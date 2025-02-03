'use client'

import { useAllFormFields } from '@payloadcms/ui'

export const ListFields = () => {
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
        <li>fieldA</li>
        <li>arrayField.[index].fieldB</li>
        <li>blocksField.[index].fieldC</li>
      </ul>
      <p>
        Note that there will be no direct schema path listed for "fieldD". Its value is instead
        deeply nested within the `richTextField` value.
      </p>
    </div>
  )
}
