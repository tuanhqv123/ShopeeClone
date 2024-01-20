import Button from "~/components/Button";
import Input from "~/components/Input";

export default function ChangePassword() {
  return <div className='rounded-sm bg-white px-2 pb-10 shadow md:px-7 md:pb-20'>
    <div className='border-b border-b-gray-200 py-6'>
        <h1 className='text-lg font-medium capitalize text-gray-900'>Đổi mật khẩu
</h1>
        <div className='mt-1 text-sm text-gray-700'>Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác</div>
      </div>
  <form className='mt-8 flex flex-col-reverse md:flex-row md:items-start'>
    <div className='mt-6 flex-grow md:mt-0 md:pr-12'>
      <div className='mt-6 flex flex-col flex-wrap sm:flex-row'>
        <div className='truncate pt-3 capitalize sm:w-[20%] sm:text-right'>Mật khẩu cũ</div>
        <div className='sm:w-[80%] sm:pl-5'>
          <Input
            classNameInput='w-1/2 rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:shadow-sm'
            
            name='password'
            placeholder='Mật khẩu'
          />
        </div>
      </div>
      <div className='mt-2 flex flex-col flex-wrap sm:flex-row'>
        <div className='truncate pt-3 capitalize sm:w-[20%] sm:text-right'>Mật khẩu mới</div>
        <div className='sm:w-[80%] sm:pl-5'>
          <Input
            classNameInput='w-1/2 rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:shadow-sm'
            name='new_password'
            placeholder='Nhập lại mật khẩu'
          />
        </div>
      </div>
      <div className='mt-2 flex flex-col flex-wrap sm:flex-row'>
        <div className='truncate pt-3 capitalize sm:w-[20%] sm:text-right'>Nhập lại mật khẩu mới</div>
        <div className='sm:w-[80%] sm:pl-5'>
          <Input
            classNameInput='w-1/2 rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:shadow-sm'
            name='new_password'
            placeholder='Nhập lại mật khẩu mới'
          />
        </div>
      </div>
      <div className='mt-2 flex flex-col flex-wrap sm:flex-row'>
        <div className='truncate pt-3 capitalize sm:w-[20%] sm:text-right' />
        <div className='sm:w-[80%] sm:pl-5'>
          <Button
            className='flex h-9 items-center bg-orange px-5 text-center text-sm text-white hover:bg-orange/80'
            type='submit'
          >
            Xác Nhận
          </Button>
        </div>
      </div>
    </div>
    
    
  </form>
</div>
}
