import React from 'react'

const Button = ({children,onClick,type,style,className}) =>{
    return(
        <button 
        className={className} 
        onClick={onClick}
        style ={style}
        children={children}
        type = {type}
        >
        
        </button>
    )
}
export default Button

