import React,{useState} from 'react'

import Card from '../UI/Card'

import './ProductForm.css'

const ProductForm = React.memo((props) => {
  const [title,settitle] = useState('')
  const [amount,setamount] = useState('')

  const submitHandler = (event) => {
    event.preventDefault()
    props.onaddproduct({ title: title , amount: amount })
  }

  return (
    <section className="product-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Title</label>
            
            <input type="text" id="title" value={title} 
            onChange={(event) => settitle(event.target.value) } />

          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" value={amount} 
            onChange={(event) => setamount(event.target.value) } /> 

          </div>
          <div className="product-form__actions">
            <button type="submit" >Add</button>
          </div>
        </form>
      </Card>
    </section>
  )
})

export default ProductForm
