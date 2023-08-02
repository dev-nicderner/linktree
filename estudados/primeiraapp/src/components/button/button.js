import React from 'react'
import './styles.css'

function Button ({name, active, onClick}) {
    return (
        <div className='container-button'>
        <button onClick={() => onClick(20)} className={active ? 'button' : 'disabled-button'}>{name}</button>
        <span>Seus dados estão a salvo conosco!</span>
        </div>
    )
}

export default Button