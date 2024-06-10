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
            <label htmlFor="title">عنوان</label>
            
            <input type="text" id="title" value={title} 
            onChange={(event) => settitle(event.target.value) } />

            {/* <input type="text" id="title" value={inputstate.title} 
            onChange={(event) => setinputstate({title : event.target.value , amount : inputstate.amount}) } /> */}
          </div>
          <div className="form-control">
            <label htmlFor="amount">تعداد</label>
            <input type="number" id="amount" value={amount} 
            onChange={(event) => setamount(event.target.value) } /> 

            {/* <input type="number" id="amount" value={inputstate.amount} 
            onChange={(event) => setinputstate({amount:event.target.value , title:inputstate.title}) } /> */}
          
          </div>
          <div className="product-form__actions">
            <button type="submit" >افزودن</button>
          </div>
        </form>
      </Card>
    </section>
  )
})

export default ProductForm
