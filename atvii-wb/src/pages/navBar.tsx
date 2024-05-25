import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

class NavBar extends Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            let elems = document.querySelectorAll('.sidenav');
            M.Sidenav.init(elems);
        });
    }

    render() {
        const botoes = [
            <li key="listaCliente"><a className="waves-effect" href="/listaCliente">Clientes</a></li>,
            <li key="formularioCadastroCliente"><a className="waves-effect" href="/formularioCadastroCliente">Cadastrar clientes</a></li>,
            <li key="listaProduto"><a className="waves-effect" href="/listaProduto">Produtos</a></li>,
            <li key="formularioCadastroProduto"><a className="waves-effect" href="/formularioCadastroProduto">Cadastrar produto</a></li>,
            <li key="listaServico"><a className="waves-effect" href="/listaServico">Serviços</a></li>,
            <li key="formularioCadastroServico"><a className="waves-effect" href="/formularioCadastroServico">Cadastrar serviço</a></li>,
            <li key="registrarCompra"><a className="waves-effect" href="/registrarCompra">Registrar compra</a></li>,
            <li key="listagem"><a className="waves-effect" href="/listagem">Listagem</a></li>
        ];

        return (
            <>
                <nav className="purple lighten-3">
                    <div className="nav-wrapper">
                        <a className="brand-logo" href='/listaCliente'>WB</a>
                        <a href="/" data-target="mobile-menu" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            {botoes}
                        </ul>
                    </div>
                </nav>
                <ul className="sidenav" id="mobile-menu">
                    {botoes}
                </ul>
            </>
        );
    }
}

export default NavBar;