import React from 'react'
import Header from '../../components/header/header';
import './styles.css';
import Video from '../../assets/trailer.mp4';
import Cards from '../../components/cards';
import Logo from '../../assets/logo.png'

function Home(){

    return (
        <>
            <Header />
            <div id='banner'></div>
            <div id='trailer-container'>
                <div className='content'>
                    <video controls className='trailer'>
                        <source src={Video} />
                        Seu navegador não possui suporte para vídeos
                    </video>
                    <div id='sinopse'>
                        <p className='description'>
                        Após formar uma família, Jake Sully e Ney'tiri fazem de tudo para ficarem juntos. No entanto, eles devem sair de casa e explorar as regiões de Pandora quando uma antiga ameaça ressurge, e Jake deve travar uma guerra difícil contra os humanos.
                        </p>
                    <button className='button'>Comprar ingressos</button>
                    </div>
                </div>
            </div>
            <Cards />
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

export default Home;