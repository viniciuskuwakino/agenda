import React, { Component } from 'react'
import { Avatar, Icon } from 'antd';
import { act } from 'react-dom/test-utils';
import './calendar.css'

class Calendar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: 'Agenda De Contatos',
      act: 0,
      index: '',
      datas: []
    }
  }

  componentDidMount() {
    this.refs.nome.focus()
  }

  fSubmit = (e) => {
    e.preventDefault()
    console.log('try')

    let datas = this.state.datas
    let nome = this.refs.nome.value
    let email = this.refs.email.value
    let numero = this.refs.numero.value

    if(this.state.act === 0) {
      let data = {
        nome, 
        email,
        numero
      }
      datas.push(data)

    } else {
      let index = this.state.index
      datas[index].nome = nome
      datas[index].email = email 
      datas[index].numero = numero 
    }

    this.setState({
      datas: datas,
      act: 0
    })
  }

  fRemove = (i) => {

    let datas = this.state.datas
    datas.splice(i, 1)
    this.setState({
      datas: datas
    })

  }

  fEdit = (i) => {

    let data = this.state.datas[i]
    this.refs.nome.value = data.nome
    this.refs.email.value = data.email
    this.refs.numero.value = data.numero

    this.setState({
      act: 1,
      index: i
    })

  }

  render() {

    let datas = this.state.datas

    return(
      <div className="calendarApp">
        <h2> {this.state.title} </h2>
        <form ref="myForm" className="myForm">
          <input type="text" ref="nome" placeholder="Nome" className="formField" />
          <input type="text" ref="email" placeholder="E-mail" className="formField" />
          <input type="text" ref="numero" placeholder="Número de telefone" className="formField" />
          <button onClick={this.fSubmit} className="myButton">Cadastrar</button>
        </form>
        {datas.map((data, i) =>
          <li key={i} className="myList">
            <Avatar size={50} style={{ color: '#fff', backgroundColor: '#00cca3' }}>{data.nome[0]}</Avatar>
            <b>Nome: {data.nome}, </b>
            <b>E-mail: {data.email}, </b> 
            <b>Telefone: {data.numero} </b> 
            <button onClick={()=>this.fRemove(i)} className="myButtonRemove">Remover</button>
            <button onClick={()=>this.fEdit(i)} className="myButtonEdit">Editar</button>
          </li>
        )}
      </div>
    );
  }
}

export default Calendar;
