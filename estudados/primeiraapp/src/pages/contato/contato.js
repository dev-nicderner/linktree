import React from 'react'
import Header from '../../components/header/header'
import './styles.css';
import Logo from '../../assets/logo.png'

function Contato(){
    return (
        <>
            <Header />
            <div id='area'>
                <form id='formulario' autoComplete='off'>
                    <fieldset>
                        <label>Nome:</label><input className='campo_nome' type='text' />
                        <label>E-mail:</label><input className='campo_email' type='password' />
                        <label>Mensagem:</label><textarea className='msg' cols="35" rows="8"></textarea>
                        <input className='btn_submit' type='submit' value="Enviar" />
                    </fieldset>
                </form>
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

export default Contato;