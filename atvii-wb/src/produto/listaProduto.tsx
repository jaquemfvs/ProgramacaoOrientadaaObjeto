import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

class ListaProduto extends Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            let elems = document.querySelectorAll('.collapsible');
            M.Collapsible.init(elems);
        });
    }

    render() {
        return (
            <>
                <ul className="collapsible">
                    <li>
                        <div className="collapsible-header"><i className="material-icons">arrow_drop_down</i>Shampoo</div>
                        <div className="collapsible-body row centered">
                            <div className="col">
                                <div className="col s4">
                                    <h6 id="nome_produto">Shampoo</h6>
                                    <label htmlFor="nome_produto">Nome</label>
                                </div>
                                <div className="col s4">
                                    <h6 id="codigo_produto">YJHDS</h6>
                                    <label htmlFor="codigo_produto">Código</label>
                                </div>
                                <div className="col s4">
                                    <h6 id="preco_produto">R$15</h6>
                                    <label htmlFor="preco_produto">Preço</label>
                                </div>
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
                    <li>
                        <div className="collapsible-header"><i className="material-icons">arrow_drop_down</i>Pente</div>
                        <div className="collapsible-body row centered">
                            <div className="col">
                                <div className="col s4">
                                    <h6 id="nome_produto">Pente</h6>
                                    <label htmlFor="nome_produto">Nome</label>
                                </div>
                                <div className="col s4">
                                    <h6 id="codigo_produto">DFJGI</h6>
                                    <label htmlFor="codigo_produto">Código</label>
                                </div>
                                <div className="col s4">
                                    <h6 id="preco_produto">R$10</h6>
                                    <label htmlFor="preco_produto">Preço</label>
                                </div>
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
                </ul>
            </>
        );
    }
}

export default ListaProduto;