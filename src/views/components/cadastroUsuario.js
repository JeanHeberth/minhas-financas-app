import React from "react";
import Card from "./card";
import FormGroup from "./form-group";

class CadastroUsuario extends React.Component {
    state = {
        nome: '',
        email: '',
        senha: '',
        repitaSenha: ''
    }
    cadastrar = () => {
        console.log(this.state)
    }
    render() {
        return (
            <div className={"container"}>
                <Card title={'Cadastro de Usuário'}>
                    <div className={'row'}>
                        <div className={'col-lg-12'}>
                            <div className={'bs-component'}>
                                <FormGroup label={'Nome: *'} htmlFor={'inputNome'}>
                                    <input type={'text'}
                                           className="form-control"
                                           id="inputNome"
                                           aria-describedby="nome"
                                           placeholder="Digite o Nome"
                                           onChange={event => this.setState({nome: event.target.value})}/>
                                </FormGroup>
                                <FormGroup label={'Email: *'} htmlFor={'inputEmail'}>
                                    <input type={'text'}
                                           className="form-control"
                                           id="inputEmail"
                                           aria-describedby="email"
                                           placeholder="Digite o Email"
                                           onChange={event => this.setState({email: event.target.value})}/>
                                </FormGroup>
                                <FormGroup label={'Senha: *'} htmlFor={'inputSenha'}>
                                    <input type={'password'}
                                           className="form-control"
                                           id="inputSenha"
                                           aria-describedby="senha"
                                           placeholder="Digite a Senha"
                                           onChange={event => this.setState({senha: event.target.value})}/>
                                </FormGroup>
                                <FormGroup label={'Repita a senha: *'} htmlFor={'inputRepitaSenha'}>
                                    <input type={'password'}
                                           className="form-control"
                                           id="inputRepitaSenha"
                                           aria-describedby="repitaSenha"
                                           placeholder="Digite a senha novamente"
                                           onChange={event => this.setState({repitaSenha: event.target.value})}/>
                                </FormGroup>
                                <br/>
                                <button onClick={this.cadastrar}  className="btn btn-success">Cadastrar</button>
                                <button  className="btn btn-danger">Cancelar</button>
                            </div>
                        </div>
                    </div>

                </Card>
            </div>
        )
    }
}

export default CadastroUsuario