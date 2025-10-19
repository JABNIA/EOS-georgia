import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../../../../store/store'
import type { Product } from '../../../../../types/products-type';
import { supabase } from '../../../../../supabase';
import { fetchProductsRequest } from '../../../../../store/reducers/products/products';

function ManageProducts() {
  // const [products, setProducts] = useState<Product[] | null>(null);
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
