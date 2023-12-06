import { InputHTMLAttributes } from 'react'
import type { UseFormRegister, RegisterOptions } from 'react-hook-form'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  classNameInput?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: UseFormRegister<any>
  rules?: RegisterOptions
  classNameError?: string
}

export default function Input({
  type,
  errorMessage,
  placeholder,
  className,
  name,
  register,
  rules,
  classNameInput = 'p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm',
  autoComplete,
  classNameError = 'mt-1 text-red-600 min-h-[1.5rem] text-sm'
}: Props) {
  const registerResult = register && name ? register(name, rules) : {}
  return (
    <div className={className}>
      <input
        type={type}
        className={classNameInput}
        placeholder={placeholder}
        autoComplete={autoComplete}
        {...registerResult}
      />
      <div className={classNameError}>{errorMessage}</div>
    </div>
  )
}
