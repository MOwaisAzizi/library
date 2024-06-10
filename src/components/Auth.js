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
        <p>لطفا برای ادامه وارد شوید.</p>
        <button onClick={loginHandler}>ورورد</button>
      </Card>
    </div>
  )
}

export default Auth
