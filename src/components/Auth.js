import React, { useContext } from 'react'
import Card from './UI/Card'
import './Auth.css'
import { AuthContext } from './Auth-Context/Auth-context'

const Auth = (props) => {

  const authcontext = useContext(AuthContext)
  const loginHandler = () => {
    authcontext.login()
  }

  return (
    <div className="auth">
      <Card>
        <p>Please click to enter</p>
        <button onClick={loginHandler}>Enter</button>
      </Card>
    </div>
  )
}

export default Auth
