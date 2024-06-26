import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import '../estilo/estilo.css'

export default class Listagem extends Component<any>{
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.tabs');
            M.Tabs.init(elems);
        });
    }
    render() {
        return (
            <>
                <div className="row">
                    <div className="col s12">
                        <ul className="tabs">
                            <li className="tab col s3"><a className='active purple-text' href='#clientesMaisConsumiram'>Clientes que mais consumiram</a></li>
                            <li className="tab col s3"><a className='purple-text' href="#generoClientes">Gênero clientes</a></li>
                            <li className="tab col s3"><a className='purple-text' href="#produtosServicosMaisConsumidos">Produtos e serviços mais consumidos</a></li>
                            <li className="tab col s3"><a className='purple-text' href="#clientesMenosConsumiram">Clientes que menos consumiram</a></li>
                        </ul>
                    </div>
    
                    {/* Clientes que mais consumiram */}
                    <div id="clientesMaisConsumiram" className="col s12">
                        <div className="row">
                        <h6 className="text-align: center">Clientes que mais consumiram produtos e serviços, em quantidade</h6>
                            <div className="col s12" >
                                <table className="centered responsive-table ">
                                    <thead>
                                        <tr>
                                            <th>N°</th>
                                            <th>Nome</th>
                                            <th>Produtos consumidos</th>
                                            <th>Serviços utilizados</th>
                                        </tr>
                                    </thead>
    
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Solange</td>
                                            <td>16</td>
                                            <td>12</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Ana</td>
                                            <td>12</td>
                                            <td>10</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>João</td>
                                            <td>8</td>
                                            <td>8</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="row">
                        <h6 className="text-align: center">Clientes que mais consumiram produtos e serviços, em valor</h6>
                            <div className="col s12" >
                                <table className="centered responsive-table ">
                                    <thead>
                                        <tr>
                                            <th>N°</th>
                                            <th>Nome</th>
                                            <th>Valor total de produtos</th>
                                            <th>Valor total de serviços</th>
                                        </tr>
                                    </thead>
    
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Solange</td>
                                            <td>R$160</td>
                                            <td>R$120</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Ana</td>
                                            <td>R$120</td>
                                            <td>R$100</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>João</td>
                                            <td>R$80</td>
                                            <td>R$80</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/* Gênero clientes */}
                    <div id="generoClientes" className="col s12">
                        <div className="row">
                        <h6 className="text-align: center">Clientes por gênero</h6>
                            <div className="col s12" >
                                <table className="centered responsive-table ">
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th>Gênero</th>
                                        </tr>
                                    </thead>
    
                                    <tbody>
                                        <tr>
                                            <td>Solange</td>
                                            <td>F</td>
                                        </tr>
                                        <tr>
                                            <td>Ana</td>
                                            <td>F</td>
                                        </tr>
                                        <tr>
                                            <td>João</td>
                                            <td>M</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <hr></hr>
                        <h6 className="text-align: center">Produtos e serviços mais consumidos por gênero</h6>
                        <div className="row">
                            <div className="col s6" >
                                <table className="centered responsive-table ">
                                    <thead>
                                        <tr>
                                            <th>Produto</th>
                                            <th>Gênero</th>
                                        </tr>
                                    </thead>
    
                                    <tbody>
                                        <tr>
                                            <td>Shampoo</td>
                                            <td>F</td>
                                        </tr>
                                        <tr>
                                            <td>Shampoo</td>
                                            <td>M</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
    
                            <div className="col s6" >
                                <table className="centered responsive-table ">
                                    <thead>
                                        <tr>
                                            <th>Serviço</th>
                                            <th>Gênero</th>
                                        </tr>
                                    </thead>
    
                                    <tbody>
                                        <tr>
                                            <td>Manicure</td>
                                            <td>F</td>
                                        </tr>
                                        <tr>
                                            <td>Corte de cabelo</td>
                                            <td>M</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
    
                    {/* Serviços e produtos mais consumidos */}
                    <div id="produtosServicosMaisConsumidos" className="col s12">
                        <div className="row" >
                        <h6 className="text-align: center">Produtos mais consumidos</h6>
                            <div className="col s12">
                                <table className="centered responsive-table ">
                                    <thead>
                                        <tr>
                                            <th>Produto</th>
                                            <th>Pedidos</th>
                                        </tr>
                                    </thead>
    
                                    <tbody>
                                        <tr>
                                            <td>Shampoo</td>
                                            <td>30</td>
                                        </tr>
                                        <tr>
                                            <td>Creme Corporal</td>
                                            <td>25</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            </div>
                            <hr></hr>
                            <div className="row">
                            <h6 className="text-align: center">Serviços mais consumidos</h6>
                            <div className="col s12">
                                <table className="centered responsive-table ">
                                    <thead>
                                        <tr>
                                            <th>Serviço</th>
                                            <th>Pedidos</th>
                                        </tr>
                                    </thead>
    
                                    <tbody>
                                        <tr>
                                            <td>Manicure</td>
                                            <td>7</td>
                                        </tr>
                                        <tr>
                                            <td>Corte de cabelo</td>
                                            <td>6</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
    
                    {/* Clientes que menos consumiram */}
                    <div id="clientesMenosConsumiram" className="col s12">
                    <div className="row">
                    <h6 className="text-align: center">Clientes que menos consumiram</h6>
                                <div className="col s12">
                                    <table className="centered responsive-table ">
                                        <thead>
                                            <tr>
                                                <th>N°</th>
                                                <th>Nome</th>
                                                <th>Produtos consumidos</th>
                                                <th>Serviços utilizados</th>
                                            </tr>
                                        </thead>
    
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>João</td>
                                                <td>5</td>
                                                <td>4</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Solange</td>
                                                <td>7</td>
                                                <td>6</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Ana</td>
                                                <td>8</td>
                                                <td>9</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                    </div>
                </div>
            </>
        )
    }
}