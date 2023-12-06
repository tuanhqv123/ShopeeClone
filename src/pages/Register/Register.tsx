import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { schema, Schema } from '~/utils/rules'
import Input from '~/components/Input'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import authApi from '~/apis/auth.api'
import { omit } from 'lodash'
import { isAxiosErrorUnprocessableEntityError } from '~/utils/utils'
import { ErrorResponse } from '~/types/utils.type'
import { AppContext } from '~/contexts/app.context'
import { useContext } from 'react'
import Button from '~/components/Button'

type FormData = Schema

export default function Register() {
  const { setAuthenticated, setProfile } = useContext(AppContext)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })
  const registerAccountMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => authApi.registerAccount(body)
  })

  const onSubmit = handleSubmit((data) => {
    const body = omit(data, ['confirm_password'])
    registerAccountMutation.mutate(body, {
      onSuccess: (data) => {
        setAuthenticated(true)
        setProfile(data.data.data.user)
        navigate('/')
      },
      onError: (error) => {
        if (isAxiosErrorUnprocessableEntityError<ErrorResponse<Omit<FormData, 'confirm_password'>>>(error)) {
          const formError = error.response?.data.data
          if (formError) {
            Object.keys(formError).forEach((key) => {
              setError(key as keyof Omit<FormData, 'confirm_password'>, {
                message: formError[key as keyof Omit<FormData, 'confirm_password'>],
                type: 'Server'
              })
            })
          }
        }
      }
    })
  })
  return (
    <div className='bg-orange'>
      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-5 py-10 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10 rounded bg-white shadow-sm ' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'>Đăng kí</div>
              <Input
                name='email'
                type='email'
                register={register}
                className='mt-8'
                errorMessage={errors.email?.message}
                placeholder='Email'
              />
              <Input
                name='password'
                type='password'
                register={register}
                className='mt-1'
                errorMessage={errors.password?.message}
                placeholder='Password'
                autoComplete='on'
              />
              <Input
                name='confirm_password'
                type='password'
                register={register}
                className='mt-1'
                errorMessage={errors.confirm_password?.message}
                placeholder='Confirm Password'
                autoComplete='on'
              />

              <div className='mt-1'>
                <Button
                  className='w-full text-center py-4 px-2 uppercase bg-red-500 text-white text-sm hover:bg-red-600 flex justify-center items-center'
                  isLoading={registerAccountMutation.isPending}
                  disabled={registerAccountMutation.isPending}
                >
                  Đăng kí
                </Button>
              </div>
              <div>
                <div className='flex items-center justify-center mt-8'>
                  <span className='text-gray-380'>Bạn đã có tài khoản?</span>
                  <Link className='text-red-400 ml-2' to='/login'>
                    Đăng nhập
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
