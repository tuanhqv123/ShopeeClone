interface Props {
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  pageSize: number
}
const RANGE = 2
export default function Pagination({ page, setPage, pageSize }: Props) {
  const renderPagination = () => {
    let dotAfter = false
    return Array(pageSize)
      .fill(0)
      .map((_, index) => {
        const pageNumber = index + 1
        if (page <= RANGE * 2 + 1 && pageNumber > page + RANGE && pageNumber < pageSize - RANGE + 1){
          if (!dotAfter){
            dotAfter = true
            return()
          }
        }
          return <button className=' bg-white rounded px-3 py-2 shadow-sm mx-2 cursor-pointer'>{pageNumber}</button>
      })
  }
  return (
    <div className='flex flex-wrap mt-6 justify-center'>
      <button className=' bg-white rounded px-3 py-2 shadow-sm mx-2 cursor-pointer'>Prev</button>
      <button className=' bg-white rounded px-3 py-2 shadow-sm mx-2 cursor-pointer'>Next</button>
    </div>
  )
}
