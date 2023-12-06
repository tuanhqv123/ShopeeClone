import Product from './Product'
import AsideFilter from './AsideFilter'
import SortProductList from './SortProductList'
import productApi from '~/apis/product.api'
import useQueryParams from '~/hooks/useQueryParams'
import { useQuery } from '@tanstack/react-query'
import Pagination from '~/components/Paginate'
import { useState } from 'react'

export default function ProductList() {
  const [page, setPage] = useState(1)
  const queryParams = useQueryParams()
  const { data } = useQuery({
    queryKey: ['products', queryParams],
    queryFn: () => {
      return productApi.getProducts(queryParams)
    }
  })
  console.log(data)
  return (
    <div className=' bg-gray-200 py-6 '>
      <div className='container'>
        <div className='grid grid-cols-12 gap-6'>
          <div className='col-span-3'>
            <AsideFilter />
          </div>
          <div className='col-span-9'>
            <SortProductList />
            <div className='mt-6 grid grid-cols-2 md:grid-cols-3 lg_grid-cols-4 xl:grid-cols-5 gap-3'>
              {data &&
                data.data.data.products.map((product) => (
                  <div className='col-span-1' key={product._id}>
                    <Product product={product} />
                  </div>
                ))}
            </div>
            <Pagination page={page} setPage={setPage} pageSize={20} />
          </div>
        </div>
      </div>
    </div>
  )
}
