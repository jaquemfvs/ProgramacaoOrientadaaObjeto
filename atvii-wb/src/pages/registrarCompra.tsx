import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

class RegistrarCompra extends Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            let elems = document.querySelectorAll('select');
            M.FormSelect.init(elems);
        });
    }

    render() {
        return (
            <>
                <div className="row">
                    <form className="col s12">
                        <div className="col s6">
                            <h6>Selecione o cliente</h6>
                            <select defaultValue="-1">
                                <option value="-1" disabled>Clientes</option>
                                <option value="1">Victor</option>
                                <option value="2">Ana</option>
                            </select>
                        </div>
                        <div className="col s6">
                            <h6>Selecione o produto</h6>
                            <select multiple>
                                <option value="">Shampoo</option>
                                <option value="">Condicionador</option>
                            </select>
                        </div>
                        <div className="col s6">
                            <h6>Selecione o serviço</h6>
                            <select multiple>
                                <option value="">Corte de cabelo</option>
                                <option value="">Manicure</option>
                            </select>
                        </div>
                        
                        <div className="row">
                            <div className="col s12">
                                <button className="btn waves-effect #f06292 pink lighten-2" type="submit" name="action">Submit
                                    <i className="material-icons right">send</i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}

export default RegistrarCompra;