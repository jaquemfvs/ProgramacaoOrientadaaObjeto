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
            <ul className="collapsible">
                <li>
                    <div className="collapsible-header"><i className="material-icons">person</i>Victor</div>
                    <div className="collapsible-body row">
                        <div className="col s4">
                            <h6 id="nome_cliente">Victor</h6>
                            <label htmlFor="nome_cliente">Nome</label>
                        </div>
                        <div className="col s4">
                            <h6 id="social">Vitu</h6>
                            <label htmlFor="social">Nome social</label>
                        </div>
                        <div className="col s4">
                            <h6 id="genero">M</h6>
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
                <li>
                    <div className="collapsible-header"><i className="material-icons">person</i>Ana</div>
                    <div className="collapsible-body row">
                        <div className="col s4">
                            <h6 id="nome_cliente">Ana</h6>
                            <label htmlFor="nome_cliente">Nome</label>
                        </div>
                        <div className="col s4">
                            <h6 id="social">Aninha</h6>
                            <label htmlFor="social">Nome social</label>
                        </div>
                        <div className="col s4">
                            <h6 id="genero">F</h6>
                            <label htmlFor="genero">Gênero</label>
                        </div>
                        <div className="col s4">
                            <h6 id="cpf">789554778-44</h6>
                            <label htmlFor="cpf">CPF</label>
                        </div>
                        <div className="col s4">
                            <h6 id="rg">11919082-7</h6>
                            <label htmlFor="rg">RG</label>
                        </div>
                        <div className="col s4">
                            <h6 id="nome_cliente">11931504758</h6>
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
                <li>
                    <div className="collapsible-header"><i className="material-icons">person</i>Luiz</div>
                    <div className="collapsible-body row">
                        <div className="col s4">
                            <h6 id="nome_cliente">Luiz</h6>
                            <label htmlFor="nome_cliente">Nome</label>
                        </div>
                        <div className="col s4">
                            <h6 id="social">Lulu</h6>
                            <label htmlFor="social">Nome social</label>
                        </div>
                        <div className="col s4">
                            <h6 id="genero">M</h6>
                            <label htmlFor="genero">Gênero</label>
                        </div>
                        <div className="col s4">
                            <h6 id="cpf">487584778-53</h6>
                            <label htmlFor="cpf">CPF</label>
                        </div>
                        <div className="col s4">
                            <h6 id="rg">48919082-3</h6>
                            <label htmlFor="rg">RG</label>
                        </div>
                        <div className="col s4">
                            <h6 id="nome_cliente">12981504758</h6>
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
            </ul>
        </>
    )
}
export default ListaCliente