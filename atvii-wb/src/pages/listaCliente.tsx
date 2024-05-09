import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

class ListaCliente extends Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            let elems = document.querySelectorAll('.collapsible');
            M.Collapsible.init(elems);
        });
    }

    render() {
        return (
            <>
                <table className="highlight responsive-table centered">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Qtd produtos comprados</th>
                            <th>Qtd serviços utilizados</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <details className="collapse">
                                    <summary>Victor</summary>
                                    <div className="row">
                                        <form className="col">
                                            <div className="input-field col s2">
                                                <input id="nome_cliente" type="text" className="validate" />
                                                <label htmlFor="nome_cliente">Nome</label>
                                            </div>
                                            {/* Outros campos de formulário aqui */}
                                        </form>
                                    </div>
                                </details>
                            </td>
                            <td>15</td>
                            <td>4</td>
                        </tr>
                        {/* Outras linhas da tabela aqui */}
                    </tbody>
                </table>
            </>
        );
    }
}

export default ListaCliente;