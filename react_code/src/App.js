import React, {Component} from 'react';
import './App.css';
import Comentario from './components/Comentario';

class App extends Component {

  //Comentarios existent
   state = {
    comentarios: [
      {
        nome:'João',
        email:'joaomm@gmail.com',
        data:new Date(2021, 9, 27),
        mensagem:'Olá Galera'
      },
      {
        nome:'Pedro',
        email:'pedrolol@gmail.com',
        data:new Date(2021, 9, 25),
        mensagem:'Top top top'
      }
    ],
    novoComentario:{ //Recebe valor de iputs a passar para comentarios ao clicar no botao
      nome:'',
      email:'',
      mensagem:''
    }
  }

  //Função acionada ao clicar botao "Adicionar Comentário"
  adicionarComentario = evento =>{
    evento.preventDefault();

    //Variavel Recebe objeto "novoComentario" + data atual
    const novocomentario = {...this.state.novoComentario, data:new Date()}
    
    //Altera o estado do objeto "comentarios" e adicionar tudo de "novoComentario" dentro dele
    this.setState({
      comentarios:[...this.state.comentarios, novocomentario],
      
      //Limpa o objeto "novoComentario"
      novoComentario:{nome:'', email:'', mensagem:''}
    });
  }

  //Função acionada ao clicar no "X"
  removerComentario = comentario =>{

    //Variavel recebe tudo de objeto "comentarios"
    let lista = this.state.comentarios;

    //varre todo o objeto e retorna somente o que for diferente o que for diferente do comentario selecionado para apagar
    lista = lista.filter(c => c !== comentario)

    //Atualiza o estado do objeto
    this.setState({comentarios: lista})
  }

  //Captura os valores do imput e faz a ligação com o objeto "novoComentario"
  digita = evento =>{
    const { name, value } = evento.target;
      this.setState({novoComentario: {...this.state.novoComentario, [name]: value}})
  }

  render(){

    return (

      //Corpo da página
      <div className="App">

        {/*Titulo*/}
        <h1>Projeto Comentários</h1>

        {/*Varre o objeto "comentarios e mostra na tela"*/}
        {this.state.comentarios.map((comentario, indice) =>(
          <Comentario 
          key={indice}
          nome={comentario.nome}
          email={comentario.email}
          data={comentario.data}

          //Elemento "X"
          onRemove={this.removerComentario.bind(this, comentario)}
          >
            {comentario.mensagem}
          </Comentario>
        ))}

        {/*Formulário*/}
        <form className="form" method="post" onSubmit={this.adicionarComentario}>
          <h2>Adicionar Comentário</h2>
          <div>
            <input 
            type="text" 
            name="nome" 
            value={this.state.novoComentario.nome}
            onChange={this.digita}
            required
            placeholder="Digite seu nome"/>
          </div>
          <div>
            <input 
            type="text" 
            name="email" 
            value={this.state.novoComentario.email}
            onChange={this.digita}
            required
            placeholder="Digite seu email"/>
          </div>
          <div>
            <textarea 
            name="mensagem" 
            value={this.state.novoComentario.mensagem}
            onChange={this.digita}
            required
            col="3" 
            rows="4"/>
          </div>
            <button type="submit">Adicionar Comentário</button>
        </form>
      </div>
    );
  }
  
}

export default App;
