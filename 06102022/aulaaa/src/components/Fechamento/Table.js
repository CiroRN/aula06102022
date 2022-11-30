import React from 'react';
import './Filtro.css';

const Table = ({ data }) => {

    return (
        <table className='tabela'>
            <thead>
                <tr className='tr1'>
                    <th>Numero</th>
                    <th>Prato</th>
                    <th>Preço</th>
                </tr>
            </thead>
            <tbody className='tbody'>
                {data.map((item) => (
                <tr key={item.id} className='tr2'>
                    <td>{item.id}</td>
                    <td>{item.nome}</td>
                    <td>{item.preco}</td>
                </tr>
                ))}

            </tbody>
        </table>
    )

}

export default Table