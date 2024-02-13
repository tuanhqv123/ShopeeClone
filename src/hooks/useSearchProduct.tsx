import { createSearchParams, useNavigate } from 'react-router-dom'
import useQueryConfig from './useQueryConfig'
import { ObjectSchema } from 'yup'
import { useForm } from 'react-hook-form'
import { Schema, schema } from '~/utils/rules'
import { yupResolver } from '@hookform/resolvers/yup'
import omit from 'lodash/omit'

import path from '~/constants/path'
type FormData = Pick<Schema, 'name'>
const nameSchema = schema.pick(['name'])

export default function useSearchProduct() {
  const queryConfig = useQueryConfig()
  const { register, handleSubmit } = useForm<FormData>({
    defaultValues: {
      name: ''
    },
    resolver: yupResolver<FormData>(nameSchema as ObjectSchema<FormData>)
  })
  const onSubmitSearch = handleSubmit((data) => {
    const config = queryConfig.order
      ? omit(
          {
            ...queryConfig,
            name: data.name
          },
          ['order', 'sort_by']
        )
      : {
          ...queryConfig,
          name: data.name
        }
    navigate({
      pathname: path.home,
      search: createSearchParams(config).toString()
    })
  })
  const navigate = useNavigate()

  return { register, onSubmitSearch }
}
