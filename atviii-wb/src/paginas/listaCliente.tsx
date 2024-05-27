import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

function componentDidMount() {
    document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elems);
    });
}

const ListaCliente = () => {
    componentDidMount()
    return (

        <>
            <table className="highlight responsive-table centered">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Produtos comprados</th>
                        <th>Serviços utilizados</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>
                            <details className="collapse">
                                <summary>Solange</summary>
                                <div className="row">
                                    <form className="col">
                                        <div className="input-field col s2">
                                            <input id="nome_cliente" type="text" className="validate" />
                                            <label htmlFor="nome_cliente">Nome</label>
                                        </div>
                                        <div className="input-field col s2">
                                            <input id="nome_social" type="text" className="validate" />
                                            <label htmlFor="nome_social">Nome social</label>
                                        </div>
                                        <div className="input-field col s2">
                                            <input id="cpf" type="text" className="validate" />
                                            <label htmlFor="CPF">CPF</label>
                                        </div>
                                        <div className="input-field col s2">
                                            <input id="rg" type="text" className="validate" />
                                            <label htmlFor="RG">RG</label>
                                        </div>
                                        <div className="input-field col s2">
                                            <input id="info" type="text" className="validate" />
                                            <label htmlFor="info">Info</label>
                                        </div>
                                        <div className="input-field col s2">
                                            <input id="" type="text" className="validate" />
                                            <label htmlFor="info">Info</label>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <button className="btn waves-effect #f06292 pink lighten-2" type="submit" name="action">Atualizar
                                                    <i className="small material-icons right">border_color</i>
                                                </button>
                                            </div>
                                            <div className="col">
                                                <button className="btn waves-effect #f06292 pink lighten-2" type="submit" name="action">Excluir
                                                    <i className="small material-icons right">delete</i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </details>
                        </td>
                        <td>15</td>
                        <td>4</td>
                        <td>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <details className="collapse">
                                <summary>Ana</summary>
                                <div className="row">
                                    <form className="col">
                                        <div className="input-field col s2">
                                            <input id="nome_cliente" type="text" className="validate" />
                                            <label htmlFor="nome_cliente">Nome</label>
                                        </div>
                                        <div className="input-field col s2">
                                            <input id="nome_social" type="text" className="validate" />
                                            <label htmlFor="nome_social">Nome social</label>
                                        </div>
                                        <div className="input-field col s2">
                                            <input id="cpf" type="text" className="validate" />
                                            <label htmlFor="CPF">CPF</label>
                                        </div>
                                        <div className="input-field col s2">
                                            <input id="rg" type="text" className="validate" />
                                            <label htmlFor="RG">RG</label>
                                        </div>
                                        <div className="input-field col s2">
                                            <input id="info" type="text" className="validate" />
                                            <label htmlFor="info">Info</label>
                                        </div>
                                        <div className="input-field col s2">
                                            <input id="" type="text" className="validate" />
                                            <label htmlFor="info">Info</label>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <button className="btn waves-effect #f06292 pink lighten-2" type="submit" name="action">Atualizar
                                                    <i className="small material-icons right">border_color</i>
                                                </button>
                                            </div>
                                            <div className="col">
                                                <button className="btn waves-effect #f06292 pink lighten-2" type="submit" name="action">Excluir
                                                    <i className="small material-icons right">delete</i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </details>
                        </td>
                        <td>10</td>
                        <td>3</td>
                    </tr>

                    <tr>
                        <td>
                            <details className="collapse">
                                <summary>João</summary>
                                <div className="row">
                                    <form className="col">
                                        <div className="input-field col s2">
                                            <input id="nome_cliente" type="text" className="validate" />
                                            <label htmlFor="nome_cliente">Nome</label>
                                        </div>
                                        <div className="input-field col s2">
                                            <input id="nome_social" type="text" className="validate" />
                                            <label htmlFor="nome_social">Nome social</label>
                                        </div>
                                        <div className="input-field col s2">
                                            <input id="cpf" type="text" className="validate" />
                                            <label htmlFor="CPF">CPF</label>
                                        </div>
                                        <div className="input-field col s2">
                                            <input id="rg" type="text" className="validate" />
                                            <label htmlFor="RG">RG</label>
                                        </div>
                                        <div className="input-field col s2">
                                            <input id="info" type="text" className="validate" />
                                            <label htmlFor="info">Info</label>
                                        </div>
                                        <div className="input-field col s2">
                                            <input id="" type="text" className="validate" />
                                            <label htmlFor="info">Info</label>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <button className="btn waves-effect waves-light" type="submit" name="action">Atualizar
                                                    <i className="small material-icons right">border_color</i>
                                                </button>
                                            </div>
                                            <div className="col">
                                                <button className="btn waves-effect waves-light" type="submit" name="action">Excluir
                                                    <i className="small material-icons right">delete</i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </details>
                        </td>
                        <td>5</td>
                        <td>2</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default ListaCliente