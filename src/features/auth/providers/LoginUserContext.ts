'use client'

import { createContext } from 'react'

export type LoginUserContext = {
    loginUser: LoginUserType
    setLoginUser: (user: LoginUserType)=> void
}

export const LoginUserContext = createContext<LoginUserType | undefined>(
    undefined
)
