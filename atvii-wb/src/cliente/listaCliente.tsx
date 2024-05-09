import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

class ListaCliente extends Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.collapsible');
            M.Collapsible.init(elems);
        });
    }

    render() {
        return (
            <>
                <ul className="collapsible">
                    <li>
                        <div className="collapsible-header"><i className="material-icons">person</i>Solange Viana</div>
                        <div className="collapsible-body row">
                            <div className="col s4">
                                <h6 id="nome_cliente">Solange Viana</h6>
                                <label htmlFor="nome_cliente">Nome</label>
                            </div>
                            <div className="col s4">
                                <h6 id="social">Sol Viana</h6>
                                <label htmlFor="social">Nome social</label>
                            </div>
                            <div className="col s4">
                                <h6 id="genero">F</h6>
                                <label htmlFor="genero">Gênero</label>
                            </div>
                            <div className="col s4">
                                <h6 id="cpf">98744778-53</h6>
                                <label htmlFor="cpf">CPF</label>
                            </div>
                            <div className="col s4">
                                <h6 id="rg">124419082-5</h6>
                                <label htmlFor="rg">RG</label>
                            </div>
                            <div className="col s4">
                                <h6 id="nome_cliente">12785404758</h6>
                                <label htmlFor="nome_cliente">Telefone</label>
                            </div>
                        </div>
                        <div className="collapsible-body row">
                            <div className="col">
                                <a className="btn waves-effect #f06292 pink lighten-2" href='/edicaoCliente'>Atualizar
                                    <i className="small material-icons right">border_color</i>
                                </a>
                            </div>
                            <div className="col">
                                <button className="btn waves-effect #f06292 pink lighten-2" type="submit" name="action">Excluir
                                    <i className="small material-icons right">delete</i>
                                </button>
                            </div>
                        </div>
                    </li>
                    {/* Outros itens da lista aqui */}
                </ul>
            </>
        );
    }
}

export default ListaCliente;