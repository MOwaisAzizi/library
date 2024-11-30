import React, { useState } from "react";

export const AuthContext = React.createContext({
    isAuth: false,
    login: () => { }
})

const ContextProvider = (props) => {
    const [isLogin, setisLogin] = useState(false)
    const loginHandler1 = () => {
        setisLogin(true)
    }

    return (
        <AuthContext.Provider
            value={{
                isAuth: isLogin,
                login: loginHandler1
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}
export default ContextProvider