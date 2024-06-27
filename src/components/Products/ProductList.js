import React from 'react'

import './ProductList.css'

const ProductList = (props) => {
  return (
    <section className="product-list">
      <h2>Products</h2>
      <ul>
        {props.products.map((item) => (
          <li key={item.id} onClick={props.onRemoveItem.bind(this, item.id)}>
            <span>{item.title}</span>
            <span>{item.amount}x</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ProductList
