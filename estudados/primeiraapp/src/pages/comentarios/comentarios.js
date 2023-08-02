import React from 'react'
import './styles.css'
import Header from '../../components/header/header';
import Logo from '../../assets/logo.png'

function Comentarios (){

    return (
        <>
            <Header />
           
            <div className='caixa-para-comentarios'>
                <div className='foto-comentario-1'></div>
                <div className='comentario-1'>"Após anos de espera pela sequência da magnífica da obra de James Cameron, finalmente chegou. O único defeito do filme foi o fato de algumas coisas não serem totalmente explicadas. Mas o resto em geral está simplesmente fantástico."</div>

                <div className='foto-comentario-2'></div>
                <div className='comentario-2'>"James Cameron justicando mais uma vez porque é um dos maiores cineastas de todos os tempos e dando seu nome. O filme é impecável tecnicamente, lindíssimo, atmosfera e universo completamente originais e envolventes, te prende do início ao fim, nem parece que você passou 3h assistindo."</div>

                <div className='foto-comentario-3'></div>
                <div className='comentario-3'>"O filme é magistral e a imersão dentro do mundo de Pandora é surreal. Que experiência! Chega a ser emocionante assistir um filme com uma qualidade de imagem igual a esse."</div>

                <div className='foto-comentario-4'></div>
                <div className='comentario-4'>"Eu particularmente fiquei bem decepcionado, imagem e som realmente são excelentes mas não achei nada muito superior ao primeiro filme nesse quesito."</div>

                <div className='foto-comentario-5'></div>
                <div className='comentario-5'>"Se as pessoas soubesse a mensagem esotérica profunda e a reflexão que este filme traz, entenderiam que esta já é a maior franquia da história."</div>

                <div className='foto-comentario-6'></div>
                <div className='comentario-6'>"Que filme lindo! Assisti com minha família e vou guardar esse dia com carinho. O visual é simplesmente surreal, diversas vezes me arrepiei em alguma cena que mostrava algo totalmente mágico, principalmente na água."</div>
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

export default Comentarios;