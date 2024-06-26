import React from "react";
import Card from "./components/card"
import FormGroup from "./components/form-group";
import {withRouter} from "react-router-dom";
import axios from "axios";


class Login extends React.Component {

    state = {
        email: '',
        senha: '',
        mensagemDeErro: null
    }
    entrar = () => {
        axios
            .post('http://localhost:8088/api/usuarios/autenticar',{
                email: this.state.email,
                senha: this.state.senha
            }).then(response =>{
            this.props.history.push('/home')
        }).catch(erro => {
           this.setState({mensagemDeErro: erro.response.data})
        })

    }

    prepareCadastrar = () => {
        this.props.history.push('/cadastro-usuarios')
    }

    render() {
        return (
            <div className={"row"}>
                <div className={"col-md-6"} style={{position: 'relative', left: '300px'}}>
                    <div className={'bs-docs-section'}>
                        <Card title={'Login'}>
                            <div className={'row'}>
                                <span>{this.state.mensagemDeErro}</span>
                            </div>
                            <div className={'row'}>
                                <div className={'col-lg-12'}>
                                    <div className={'bs-component'}>
                                        <fieldset>
                                            <FormGroup label={'Email: *'} htmlFor={'exampleInputEmail1'}>
                                                <input type={'email'}
                                                       value={this.state.email}
                                                       onChange={event => this.setState({email: event.target.value})}
                                                       className={'form-control'}
                                                       id={'exampleInputEmail1'}
                                                       aria-describedby={'emamilHelp'}
                                                       placeholder={'Digite o email'}/>

                                            </FormGroup>
                                            <FormGroup label={'Senha: *'} htmlFor={'exampleInputPassword1'}>
                                                <input type="password"
                                                       value={this.state.senha}
                                                       onChange={event => this.setState({senha: event.target.value})}
                                                       className="form-control"
                                                       id="exampleInputPassword1"
                                                       placeholder="Password"/>

                                            </FormGroup>
                                            <br/>
                                            <button onClick={this.entrar} className="btn btn-success">Entrar
                                            </button>
                                            <button onClick={this.prepareCadastrar} className="btn btn-danger">Cadastrar</button>
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>

                </div>
            </div>
        )
    }
}

export default withRouter(Login)