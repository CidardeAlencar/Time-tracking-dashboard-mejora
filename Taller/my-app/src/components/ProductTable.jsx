import React from 'react'
import { CategoryProductRow } from './CategoryProductRow'
import '../style/productTable.css'

function ProductTable() {
  return (
    <div>
        <div className='product-table_header'>
            <span>Name</span><span>Price</span>
        </div>
        <div className='product-table_categories'>
                <CategoryProductRow/>
                <CategoryProductRow/>
        </div>
    </div>
  )
}

export { ProductTable}