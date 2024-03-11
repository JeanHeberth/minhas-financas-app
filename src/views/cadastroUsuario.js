import React from "react";
import Card from "./components/card";
import FormGroup from "./components/form-group";
import {withRouter} from "react-router-dom";

class CadastroUsuario extends React.Component {

    state = {
        nome: '',
        email: '',
        senha: '',
        senhaRepeticao: ''
    }
    cadastrar = () => {
        console.log(this.state)

    }

    cancelar = () => {
        this.props.history.push('/Login')
    }

    render() {
        return (
            <Card title={'Cadastro de usuário'}>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bs-component">
                            <FormGroup label={'Nome: *'} htmlFor={'inputNome'}>
                                <input type={'text'}
                                       id={'inputNome'}
                                       className={'form-control'}
                                       name={'nome'}
                                       onChange={event => this.setState({nome: event.target.value})}/>
                            </FormGroup>
                            <FormGroup label={'Email: *'} htmlFor={'inputEmail'}>
                                <input type={'text'}
                                       id={'inputEmail'}
                                       className={'form-control'}
                                       name={'email'}
                                       onChange={event => this.setState({email: event.target.value})}/>
                            </FormGroup>
                            <FormGroup label={'Senha: *'} htmlFor={'inputSenha'}>
                                <input type={'password'}
                                       id={'inputSenha'}
                                       className={'form-control'}
                                       name={'senha'}
                                       onChange={event => this.setState({senha: event.target.value})}/>
                            </FormGroup>
                            <FormGroup label={'Repita a senha: *'} htmlFor={'inputRepitaSenha'}>
                                <input type={'password'}
                                       id={'inputRepitaSenha'}
                                       className={'form-control'}
                                       name={'repitaSenha'}
                                       onChange={event => this.setState({senhaRepeticao: event.target.value})}/>
                            </FormGroup>
                            <br/>
                            <button onClick={this.cadastrar} className="btn btn-success">Salvar</button>
                            <button onClick={this.cancelar} type="button" className="btn btn-danger">Cancelar
                            </button>

                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}

export default withRouter(CadastroUsuario)