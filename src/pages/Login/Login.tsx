import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { schema, Schema } from '~/utils/rules'
import Input from '~/components/Input'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import authApi from '~/apis/auth.api'
import { isAxiosErrorUnprocessableEntityError } from '~/utils/utils'
import { SuccessResponse } from '~/types/utils.type'
import { useContext } from 'react'
import { AppContext } from '~/contexts/app.context'
import Button from '~/components/Button'

type FormData = Omit<Schema, 'confirm_password'>
const loginSchema = schema.omit(['confirm_password'])
export default function Login() {
  const { setAuthenticated, setProfile } = useContext(AppContext)
  const navigate = useNavigate()
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema)
  })

  const loginMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => authApi.login(body)
  })

  const onSubmit = handleSubmit((data) => {
    loginMutation.mutate(data, {
      onSuccess: (data) => {
        setAuthenticated(true)
        setProfile(data.data.data.user)
        navigate('/')
      },
      onError: (error) => {
        if (isAxiosErrorUnprocessableEntityError<SuccessResponse<FormData>>(error)) {
          const formError = error.response?.data.data
          if (formError) {
            Object.keys(formError).forEach((key) => {
              setError(key as keyof FormData, {
                message: formError[key as keyof FormData],
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
            <form className='p-10 rounded bg-white shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'>Đăng nhập</div>
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
              <div className='mt-1'>
                <Button
                  type='submit'
                  className='w-full py-4 px-2 uppercase bg-red-500 text-white text-sm hover:bg-red-600 flex justify-center items-center'
                  isLoading={loginMutation.isPending}
                  disabled={loginMutation.isPending}
                >
                  Đăng nhập
                </Button>
              </div>
              <div>
                <div className='flex items-center justify-center mt-8'>
                  <span className='text-gray-380'>Bạn mới biết đến Shopee?</span>
                  <Link className='text-red-400 ml-2' to='/register'>
                    Đăng kí
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