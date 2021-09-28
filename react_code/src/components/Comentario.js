import React from 'react';

//Importação do formatador de data
import { formatRelative } from 'date-fns';

//Importação do idioma escolhido
import { ptBR } from 'date-fns/locale';

import './Comentario.css'
import imgUsuario from '../img/user.png';

const Comentario = (props)  =>  {

return <div className="Comentario">
    <img class="avatar" src={imgUsuario} alt={props.nome} />
    <div className="conteudo">
        <h2 class="nome">{props.nome}</h2> 
        <p class="email">{props.email}</p>
        <p class="mensagem">{props.children}</p>
        <p class="data">{formatRelative(props.data, new Date(), {locale:ptBR})}</p>
        
        {/*Botao "X"*/}
        <button onClick={props.onRemove}>&times;</button>
    </div>
</div>
}
export default Comentario;