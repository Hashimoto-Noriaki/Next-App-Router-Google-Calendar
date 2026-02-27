'use client'

import { useContext } from 'react'
import { LoginUserContext } from '../providers/LoginUserContext'

export function useLoginUser(){
    const context = useContext(LoginUserContext)
    if(context === undefined){
        throw new Error("useLoginUser must be used within a LoginUserContext")
    }
    return context
}
