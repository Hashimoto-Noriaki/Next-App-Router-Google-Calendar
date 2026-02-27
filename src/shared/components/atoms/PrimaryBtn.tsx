import { ComponentProps,ReactNode } from 'react'

type PropsType = {
    children:ReactNode;
} & ComponentProps<'button'>

export const PrimaryBtn = ({ children, props}: PropsType) => {
    return (
        <button className="bg-lime-800 text-white p-4 text-lg rounded-lg"{...props}>
            {children}
        </button>
    )
}
