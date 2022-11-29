import React from 'react';
import './pedido.css'

const Pedido = () => {
    return(
    <div>
        <div>
            <div className="barrapesquisa">
                <input type="text" placeholder='Procurar...' className='search'/>
                <div className="add">
                    <button className="adicionar">Adicionar</button>
                </div>
            </div>
        </div>
        <div className='tabata'>
            <thead>
                <tr className='tr1'>
                    <th>Numero:</th>
                    <th>Prato:</th>
                    <th>Preço:</th>
                </tr>
            </thead>
            <tbody className='tbody'>
                <tr className='tr2'>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </div>
    </div>
    );
};

export default Pedido;
