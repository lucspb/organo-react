import './Formulario.css';
import CampoTexto from '../CampoTexto/CampoTexto';

const Formulario = () => {
    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome"/>
                <CampoTexto label="Função" placeholder="Digite sua função"/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
            </form>
        </section>
    )
}

export default Formulario;