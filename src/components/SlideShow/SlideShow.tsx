import { useEffect, useState } from 'react'

export default function SlideShow() {
  const images = [
    'https://cf.shopee.vn/file/vn-50009109-a86eb4d54f9a11cfec9e1aa06eadcf34_xxhdpi',
    'https://cf.shopee.vn/file/vn-50009109-b88fbe297a9638fe4e35af549567735d_xxhdpi',
    'https://cf.shopee.vn/file/vn-50009109-ea72bc668767760b68fb60bab6dd0b2b_xxhdpi',
    'https://cf.shopee.vn/file/vn-50009109-3257f9c861176a64d716352c39a84ff2_xxhdpi',
    'https://cf.shopee.vn/file/vn-50009109-0c08f425e825b9ecbdbb5b5ece7d393e_xxhdpi'
    // Thêm đường dẫn hình ảnh khác nếu cần
  ]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    // Thiết lập interval để chuyển đổi hình ảnh mỗi 3 giây
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)

    // Hủy interval khi component unmount
    return () => clearInterval(intervalId)
  }, [currentImageIndex, images.length])
  const PreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const NextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }
  return (
    <div className='container'>
      <div className='mb-5 grid max-h-[235px] min-h-[235px] w-[1200px] grid-cols-3 gap-1'>
        <div className='flex-grow-2 group relative col-span-2 flex flex-shrink overflow-hidden rounded-sm'>
          <button
            className='absolute left-0 top-1/2 z-10 hidden h-14 w-6 -translate-y-1/2 bg-black/20 text-white group-hover:block'
            onClick={PreviousImage}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
            </svg>
          </button>
          <img className=' relative h-full w-full overflow-clip' src={images[currentImageIndex]} />
          <button
            className='absolute right-0 top-1/2 z-10 hidden h-14 w-6 -translate-y-1/2 bg-black/20 text-white group-hover:block'
            onClick={NextImage}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
            </svg>
          </button>
        </div>

        <div className='col-span-1 flex flex-col gap-1 rounded-sm'>
          <div className='block h-full w-full overflow-hidden'>
            <img
              className='h-full w-full object-cover'
              src='https://cf.shopee.vn/file/vn-50009109-d979aafb0cad5cd74676526e33c1b6ac_xhdpi'
            />
          </div>
          <div className='block h-full w-full overflow-hidden rounded-sm'>
            <img
              className='h-full w-full object-cover'
              src='https://cf.shopee.vn/file/vn-50009109-d6608530d8bcfe263125fcc1503281fb_xhdpi'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
