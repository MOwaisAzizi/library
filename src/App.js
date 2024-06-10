import React, { useContext, useState } from 'react'
import Products from './components/Products/Products'
import Auth from './components/Auth'
import { AuthContext } from './components/Auth-Context/Auth-context'
import UseDarkMode  from './hooks/Dark-mode'

const App = (props) => {
 
const[theme,toggleTheme] = UseDarkMode()

  const authcontext = useContext(AuthContext)
let content = <Auth/>
if(authcontext.isAuth){
  content =(
  <div className='app'
   style={{ background : theme=='dark'  ?'black': 'white',
   color: theme=='dark'  ?'white': 'black'
   }}>
 <Products/>
 <button onClick={toggleTheme} className='buttontam'>تعغیر تم</button>
  </div>
  )
}

  return content


}

export default App
