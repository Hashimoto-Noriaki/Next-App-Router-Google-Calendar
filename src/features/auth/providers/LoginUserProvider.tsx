'use client'

import { ReactNode,useState } from 'react'
import { LoginUserContext } from '@/features/auth/providers/LoginUserContext'

export const LoginUserProvider = ({ children }: { children: ReactNode })=>{
    const [loginUser,setLoginUser] = useState<LoginUserType>({
        id:0,
        name:""
    })

    return (
        <LoginUserContext.Provider value={{ loginUser,setLoginUser }}>
            {children}
        </LoginUserContext.Provider>
    )
}
