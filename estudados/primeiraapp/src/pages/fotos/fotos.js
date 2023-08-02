import React from 'react'
import './styles.css'
import Header from '../../components/header/header';
import Logo from '../../assets/logo.png'

function Fotos(){
    return (
        <>
        <Header />
        <div id='fotos-filme'>
            <div className='fotos-avatar'>
                <div className='foto-1-filme'></div>
                <div className='foto-2-filme'></div>
                <div className='foto-3-filme'></div>
                <div className='foto-4-filme'></div>
                <div className='foto-5-filme'></div>
                <div className='foto-6-filme'></div>
                <div className='foto-7-filme'></div>
                <div className='foto-8-filme'></div>
            </div>
            </div>
        <footer>
            <div className='footer-end'>
                <img id='img-top' src={Logo} />
                <p id='p-top'>
                    Todos os direitos reservados &copy; | Desenvolvido por P-Niccolle Derner
                </p>
                </div>
        </footer>    
        </>
    )
}

export default Fotos;