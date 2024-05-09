import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import React, { Component } from 'react';

export default class NavBar extends Component<any>{
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            let elems = document.querySelectorAll('.sidenav');
            M.Sidenav.init(elems)
        });
    }

    render() {
        return (
            <>
                <nav className="#f06292 pink lighten-2">
                    <div className="nav-wrapper">
                        <a className="brand-logo" href='/home'>WB</a>
                        <a href="/" data-target="mobile-menu" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><a className="waves-effect" href="/home">Home</a></li>
                            <li><a className="waves-effect" href="/listaCliente">Clientes</a></li>
                            <li><a className="waves-effect" href="/formularioCadastroCliente">Cadastrar clientes</a></li>
                            <li><a className="waves-effect" href="/listaProduto">Produtos</a></li>
                            <li><a className="waves-effect" href="/formularioCadastroProduto">Cadastrar produto</a></li>
                            <li><a className="waves-effect" href="/listaServico">Serviços</a></li>
                            <li><a className="waves-effect" href="/formularioCadastroServico">Cadastrar serviço</a></li>
                            <li><a className="waves-effect" href="/registrarCompra">Registrar compra</a></li>
                            <li><a className="waves-effect" href="/Listagem">Listagem</a></li>
                        </ul>
                    </div>
                </nav>
                <ul className="sidenav" id="mobile-menu">
                <li><a className="waves-effect" href="/home">Home</a></li>
                    <li><a className="waves-effect" href="/listaCliente">Clientes</a></li>
                    <li><a className="waves-effect" href="/formularioCadastroCliente">Cadastrar clientes</a></li>
                    <li><a className="waves-effect" href="/listaProduto">Produtos</a></li>
                    <li><a className="waves-effect" href="/formularioCadastroProduto">Cadastrar produto</a></li>
                    <li><a className="waves-effect" href="/listaServico">Serviços</a></li>
                    <li><a className="waves-effect" href="/formularioCadastroServico">Cadastrar serviço</a></li>
                    <li><a className="waves-effect" href="/registrarCompra">Registrar compra</a></li>
                    <li><a className="waves-effect" href="/Listagem">Listagem</a></li>
                </ul>
            </>
        )
    }


}