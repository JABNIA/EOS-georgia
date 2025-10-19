import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../../../../store/store'
import { fetchProductsRequest } from '../../../../../store/reducers/products/products';

function ManageProducts() {
    const products = useSelector((state: RootState) => state.Products.products);
    const dispatch = useDispatch()


    useEffect(() => {
      dispatch(fetchProductsRequest())



      console.log(products)
    }, [dispatch])

    console.log(products)
  return (
    <div>
      <ul>
        {products?.map((e) => {
          return <p>{e.id} {e.name}</p>
        })} 
      </ul>
    </div>
  )
}

export default ManageProducts
