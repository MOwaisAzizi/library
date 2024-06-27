import React, { useState,useEffect,useRef } from 'react'
import Card from '../UI/Card'
import './Search.css'

const Search = React.memo((props) => {
  const { onLoadproduct } = props
  const [searchitem,setsearchitem] = useState('')

  const inputref = useRef()
  useEffect(()=>{
   const timer =  setTimeout(()=>{
      if(searchitem === inputref.current.value){
        const query = searchitem.length=== 0 ? '' :
        `?orderBy="title"&equalTo="${searchitem}"`
    
        fetch('https://react-redux-main-c91c4-default-rtdb.firebaseio.com/products.json'+query).then((response)=>{
          return response.json()
        })
        .then((responsedata)=>{
          let LoadProducts = []
          for(const item in responsedata){
            LoadProducts.push({
              title : responsedata[item].title,
              id : responsedata[item].id
            })
          }
          onLoadproduct(LoadProducts)
        })
      }
      },500)
   return ()=>{
    clearTimeout(timer)
   }
      
   
  },[searchitem,onLoadproduct])

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Search</label>
          <input type="text" value={searchitem} onChange = {(event) => setsearchitem(event.target.value)} ref={inputref}/>
        </div>
      </Card>
    </section>
  )
})

export default Search
