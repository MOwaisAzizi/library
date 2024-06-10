import React, {useCallback,useReducer } from 'react'
import ProductList from './ProductList'
import ProductForm from './ProductForm'
import Search from './Search'

const productraducer =(state,action)=>{
  switch(action.type){
    case 'SET':
    return action.products
    case 'ADD' :
      return[...state,action.product] 
      default : throw new Error('ERorrrr')
  }
}
const Products = ()=> {
// const [products,setproducts] = useState([])
 const [products,dispath] = useReducer(productraducer,[])

//callback prevent from repeating
const seacrhproductHandler = useCallback( (items)=>{
// setproducts(items)
   dispath({type : 'SET' , products : items})
},[])
// useEffect(()=>{
//   fetch('https://react-redux-main-c91c4-default-rtdb.firebaseio.com/products.json').then((response)=>{
//     return response.json()
//   })
//   .then((responsedata)=>{
//     let LoadProducts = []
//     for(const item in responsedata){
//       LoadProducts.push({
//         title : responsedata[item].title,
//         id : responsedata[item].id
//       })
//     }
//     setproducts(LoadProducts)
//   })
  
// },[])


const Addproducthandler = (item) => {
  fetch('https://react-redux-main-c91c4-default-rtdb.firebaseio.com/products.json',{
    method : 'POST',
    body : JSON.stringify(item),
    headers :{'Content-Type': 'application/json'},
  }).then((response) => {
    response.json().then((responsedata) => {
      // setproducts((prevstate) => {
      //   return[
      //     ...prevstate,
      //     {
      //       id: responsedata.name,
      //       ...item
      //     }
      //   ]
      //   })
     dispath({
      type:'ADD',
      product:{id:responsedata.name,...item}
     })
    })
  })


}
  return (
    <div className="App">
      <ProductForm onaddproduct = {Addproducthandler} />

      <section>
        <Search onLoadproduct={seacrhproductHandler}/>
        <ProductList products = {products}  onRemoveItem = {()=>{}}/>
      </section>
    </div>
  )
}

export default Products
